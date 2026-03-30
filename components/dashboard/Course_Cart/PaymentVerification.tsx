"use client";
import React, { useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Loader2, CheckCircle2, AlertCircle, HelpCircle, ArrowRight } from "lucide-react";
import { useVerifyPaymentQuery } from "@/lib/redux/features/courses/commerceApi";

function VerificationContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const reference = searchParams.get("reference") || searchParams.get("trxref");

  const { data, isLoading, isError, error } = useVerifyPaymentQuery(reference, {
    skip: !reference,
    refetchOnMountOrArgChange: true,
  });

  // Safe error checking for strings or objects
  const errorMessage = typeof error === 'string' ? error : (error as any)?.data?.message || "";
  const isAlreadyVerified = errorMessage.toLowerCase().includes("already");

  useEffect(() => {
    if (data?.status === "success" || data?.success) {
      const timer = setTimeout(() => router.push("/overview/enrolled-course"), 3000);
      return () => clearTimeout(timer);
    }
  }, [data, router]);

  const Container = ({ children }: { children: React.ReactNode }) => (
    <div className="flex min-h-[85vh] items-center justify-center bg-white px-6">
      <div className="w-full max-w-md border border-gray-100 rounded-sm p-12 text-center bg-[#FBFBFB]">
        {children}
      </div>
    </div>
  );

  if (isLoading) {
    return (
      <Container>
        <Loader2 className="mx-auto h-10 w-10 text-[#387467] animate-spin mb-8" />
        <h2 className="text-sm font-black text-gray-400 uppercase tracking-[0.3em]">Authenticating</h2>
        <p className="mt-4 text-xs font-bold text-gray-500 uppercase tracking-widest">Verifying Gateway Response...</p>
      </Container>
    );
  }

  if (isAlreadyVerified || data?.status === "success" || data?.success) {
    return (
      <Container>
        <CheckCircle2 className="mx-auto h-16 w-16 text-[#387467] mb-8" />
        <h2 className="text-2xl font-black text-gray-900 tracking-tighter uppercase">Access Granted</h2>
        <p className="mt-4 text-sm text-gray-500 font-medium leading-relaxed">
          Your credentials have been verified. You are now being redirected to your learning dashboard.
        </p>
        <button
          onClick={() => router.push("/overview/enrolled-course")}
          className="mt-10 flex items-center justify-center gap-3 w-full bg-[#387467] text-white py-4 rounded-sm font-black uppercase text-[10px] tracking-[0.2em] hover:bg-[#2d5d52] transition-all"
        >
          Enter Classroom <ArrowRight size={14} />
        </button>
      </Container>
    );
  }

  return (
    <Container>
      <AlertCircle className="mx-auto h-16 w-16 text-red-500 mb-8" />
      <h2 className="text-2xl font-black text-gray-900 tracking-tighter uppercase">Audit Failure</h2>
      <p className="mt-4 text-sm text-gray-500 font-medium leading-relaxed">
        {errorMessage || "The transaction could not be verified by the ISO gateway."}
      </p>
      <div className="mt-10 space-y-4">
        <button
          onClick={() => router.push("/overview/cart")}
          className="w-full bg-gray-900 text-white py-4 rounded-sm font-black uppercase text-[10px] tracking-[0.2em] hover:bg-black transition-all"
        >
          Return to Checkout
        </button>
        <button
          onClick={() => router.push("/support")}
          className="flex items-center justify-center gap-2 w-full text-gray-400 py-2 font-black uppercase text-[9px] tracking-widest hover:text-gray-900"
        >
          <HelpCircle size={14} /> Request ISO Audit
        </button>
      </div>
    </Container>
  );
}

// Main component with Suspense boundary
export default function PaymentVerification() {
  return (
    <Suspense fallback={
      <div className="flex min-h-screen items-center justify-center bg-white">
        <Loader2 className="h-10 w-10 text-[#387467] animate-spin" />
      </div>
    }>
      <VerificationContent />
    </Suspense>
  );
}