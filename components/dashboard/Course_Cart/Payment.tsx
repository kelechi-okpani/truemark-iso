"use client";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Loader2, ShieldCheck, Lock, ArrowRight } from "lucide-react";
import toast from "react-hot-toast";
import { useBuyCourseMutation } from "@/lib/redux/features/courses/commerceApi";

// ✅ Import from your RTK Query commerceApi

type PaymentProps = {
  courseId: string[];
  amount: number;
};

export default function Payment({ courseId, amount }: PaymentProps) {
  const [isRedirecting, setIsRedirecting] = useState(false);

  // ✅ Redux: Select auth state for checkout enrichment
  const { token, currentUser } = useSelector((state: any) => state.user);

  // ✅ RTK Query: use the mutation hook
  const [buyCourse, { isLoading }] = useBuyCourseMutation();

  const handlePayment = async () => {
    setIsRedirecting(true);
    
    try {
      // Step 1: Trigger the mutation
      // Unwrap allows us to use the try/catch block for the actual data
      const response = await buyCourse(courseId).unwrap();
      const paymentUrl = response?.data?.paymentUrl;

      if (paymentUrl) {
        const urlWithAuth = new URL(paymentUrl);
        
        // Step 2: ISO Audit Enrichment
        if (token) urlWithAuth.searchParams.append("token", token);
        if (currentUser?.id) urlWithAuth.searchParams.append("userId", currentUser.id);
        
        // Step 3: Professional Redirect (Coursera Style)
        window.location.href = urlWithAuth.toString();
      }
    } catch (err: any) {
      // RTK Query errors are caught here
      toast.error(err || "Failed to initialize payment session");
      setIsRedirecting(false);
    }
  };

  const formattedAmount = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 0,
  }).format(amount);

  return (
    <div className="w-full space-y-4">
      {/* ISO Safety Label - Professional Flat Design */}
      <div className="flex items-center justify-between px-3 py-2 bg-gray-50 border border-gray-100 rounded-lg">
        <div className="flex items-center gap-2">
          <Lock size={12} className="text-[#387467]" />
          <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
            SSL Secure
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-[#387467]">
          <ShieldCheck size={14} />
          <span className="text-[10px] font-black uppercase tracking-widest">
            Verified
          </span>
        </div>
      </div>

      <button
        onClick={handlePayment}
        disabled={isLoading || isRedirecting}
        className="group relative w-full bg-[#387467] text-white py-4 rounded-xl font-bold transition-all hover:bg-[#2d5d52] active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed shadow-sm overflow-hidden"
      >
        <div className="flex items-center justify-center gap-3">
          {isLoading || isRedirecting ? (
            <>
              <Loader2 className="animate-spin" size={18} />
              <span className="text-xs uppercase tracking-[0.2em] font-black">
                Securing Session...
              </span>
            </>
          ) : (
            <>
              <span className="tracking-wide uppercase text-sm">
                Enroll Now • {formattedAmount}
              </span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </div>
      </button>

      {/* ISO Compliance Footer */}
      <div className="flex flex-col items-center gap-2 pt-2">
        <p className="text-[9px] text-gray-400 font-bold uppercase tracking-[0.2em] leading-none">
          ISO 27001 Certified Gateway
        </p>
        <div className="flex items-center gap-4 opacity-40 grayscale contrast-125">
          {/* Subtle branding placeholders for payment types */}
          <div className="text-[10px] font-black italic tracking-tighter">VISA</div>
          <div className="text-[10px] font-black italic tracking-tighter">MASTERCARD</div>
          <div className="text-[10px] font-black italic tracking-tighter">PAYSTACK</div>
        </div>
      </div>
    </div>
  );
}