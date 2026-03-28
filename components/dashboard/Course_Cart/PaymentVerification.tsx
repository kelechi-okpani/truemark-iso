"use client";
import React, { useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { Loader2, CheckCircle2, AlertCircle, HelpCircle, ArrowRight } from "lucide-react";
import { useVerifyPaymentQuery } from "@/lib/redux/features/courses/commerceApi";

// ✅ Import from your RTK Query commerceApi

export default function PaymentVerification() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const reference = searchParams.get("reference") || searchParams.get("trxref");

  // ✅ RTK Query handles the API call and the clearCart logic automatically
  // because we set it up in commerceApi.ts onQueryStarted
  const { data, isLoading, isError, error } = useVerifyPaymentQuery(reference, {
    skip: !reference, // Don't run if there's no reference
    refetchOnMountOrArgChange: true,
  });

  const isAlreadyVerified = (error as any)?.includes("already been verified");

  useEffect(() => {
    if (data?.status === "success" || data?.success) {
      // ISO Standard: Give the user 2 seconds to see the success state before redirecting
      const timer = setTimeout(() => {
        router.push("/overview/enrolled-course");
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [data, router]);

  // --- UI Components for different states ---

  const Container = ({ children }: { children: React.ReactNode }) => (
    <div className="flex min-h-[80vh] items-center justify-center bg-white px-4">
      <div className="w-full max-w-md border border-gray-100 rounded-3xl p-10 text-center">
        {children}
      </div>
    </div>
  );

  // 1. Loading State
  if (isLoading) {
    return (
      <Container>
        <Loader2 className="mx-auto h-12 w-12 text-[#387467] animate-spin mb-6" />
        <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tight">Verifying</h2>
        <p className="mt-2 text-sm font-medium text-gray-500 tracking-wide">
          Confirming your secure transaction with the bank...
        </p>
      </Container>
    );
  }

  // 2. "Already Verified" or Success State
  if (isAlreadyVerified || (data?.status === "success" || data?.success)) {
    return (
      <Container>
        <div className="flex justify-center mb-6">
          <div className="bg-[#387467]/10 p-4 rounded-full">
            <CheckCircle2 className="h-12 w-12 text-[#387467]" />
          </div>
        </div>
        <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tight">
          Enrollment Confirmed
        </h2>
        <p className="mt-3 text-sm text-gray-500 leading-relaxed font-medium">
          Your payment has been successfully verified. <br /> 
          Welcome to your professional program.
        </p>
        <button
          onClick={() => router.push("/overview/enrolled-course")}
          className="mt-8 flex items-center justify-center gap-2 w-full bg-[#387467] text-white py-4 rounded-xl font-bold uppercase text-xs tracking-[0.15em] hover:bg-[#2d5d52] transition-all"
        >
          Start Learning <ArrowRight size={16} />
        </button>
      </Container>
    );
  }

  // 3. Failure State
  return (
    <Container>
      <div className="flex justify-center mb-6 text-red-500">
        <AlertCircle size={56} strokeWidth={1.5} />
      </div>
      <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tight">Verification Failed</h2>
      <p className="mt-3 text-sm text-gray-500 font-medium">
        {typeof error === "string" ? error : "We couldn't confirm your transaction at this time."}
      </p>
      
      <div className="mt-8 space-y-3">
        <button
          onClick={() => router.push("/overview/cart")}
          className="w-full bg-gray-900 text-white py-4 rounded-xl font-bold uppercase text-xs tracking-widest hover:bg-black transition-all"
        >
          Try Again
        </button>
        <button
          onClick={() => router.push("/support")}
          className="flex items-center justify-center gap-2 w-full text-gray-500 py-2 font-bold uppercase text-[10px] tracking-widest hover:text-gray-900"
        >
          <HelpCircle size={14} /> Contact ISO Support
        </button>
      </div>
    </Container>
  );
}