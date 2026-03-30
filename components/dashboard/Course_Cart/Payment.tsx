"use client";
import React, { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import { Loader2, ShieldCheck, Lock, ArrowRight } from "lucide-react";
import toast from "react-hot-toast";
import { useBuyCourseMutation } from "@/lib/redux/features/courses/commerceApi";

type PaymentProps = {
  courseId: string[];
  amount: number;
};

export default function Payment({ courseId, amount }: PaymentProps) {
  const [mounted, setMounted] = useState(false);
  const [isRedirecting, setIsRedirecting] = useState(false);

  useEffect(() => setMounted(true), []);

  const { token, currentUser } = useSelector((state: any) => state.user || {});
  const [buyCourse, { isLoading }] = useBuyCourseMutation();

  const handlePayment = useCallback(async () => {
    if (!courseId.length) return toast.error("No courses selected");
    
    setIsRedirecting(true);
    try {
      const response = await buyCourse(courseId).unwrap();
      const paymentUrl = response?.data?.paymentUrl;

      if (paymentUrl) {
        const urlWithAuth = new URL(paymentUrl);
        if (token) urlWithAuth.searchParams.append("token", token);
        if (currentUser?.id) urlWithAuth.searchParams.append("userId", currentUser.id);
        
        window.location.href = urlWithAuth.toString();
      } else {
        throw new Error("Payment gateway unreachable");
      }
    } catch (err: any) {
      toast.error(err?.message || err || "Initialization failed");
      setIsRedirecting(false);
    }
  }, [buyCourse, courseId, token, currentUser]);

  if (!mounted) return <div className="h-16 w-full bg-gray-50 animate-pulse rounded-xl" />;

  const formattedAmount = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 0,
  }).format(amount);

  return (
    <div className="w-full space-y-4">
      <div className="flex items-center justify-between px-4 py-2.5 bg-gray-50 border border-gray-100 rounded-lg">
        <div className="flex items-center gap-2">
          <Lock size={12} className="text-[#387467]" />
          <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">SSL Secure</span>
        </div>
        <div className="flex items-center gap-1.5 text-[#387467]">
          <ShieldCheck size={14} />
          <span className="text-[10px] font-black uppercase tracking-widest">Verified</span>
        </div>
      </div>

      <button
        onClick={handlePayment}
        disabled={isLoading || isRedirecting}
        className="group w-full bg-[#387467] text-white py-4 rounded-xl font-bold transition-all hover:bg-[#2d5d52] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed border-b-4 border-[#254d44]"
      >
        <div className="flex items-center justify-center gap-3">
          {isLoading || isRedirecting ? (
            <>
              <Loader2 className="animate-spin" size={18} />
              <span className="text-[11px] uppercase tracking-[0.2em] font-black">Securing Session...</span>
            </>
          ) : (
            <>
              <span className="tracking-wide uppercase text-sm font-black">Enroll Now • {formattedAmount}</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </div>
      </button>
    </div>
  );
}