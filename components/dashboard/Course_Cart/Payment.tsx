"use client";
import React from "react";
import { useMutation, useLazyQuery } from "@apollo/client/react";
import { BUY_COURSE } from "@/lib/Mutation/mutation";
import { VERIFY_PAYMENT } from "@/lib/Query/queries";
import { useRouter } from "next/navigation";
import { useCourseStore } from "@/store/useCourseStore";

type PaymentProps = {
  courseId: string | any;
  amount: number;
};

export default function Payment({ courseId, amount }: PaymentProps) {
  const router = useRouter();

  const [buyCourse, { loading }] = useMutation(BUY_COURSE);

  const handlePayment = async () => {
    try {
      // Step 1: Call BuyCourse mutation
      const { data } = await buyCourse({ variables: { courseIds:courseId } }) as any;
      console.log(data, "payment data.....");
      if (data?.buyCourse?.paymentUrl && data?.buyCourse?.paymentReference) {
        const { paymentUrl, paymentReference } = data.buyCourse;

        // Step 2: open Paystack Checkout
        const win = window.open(paymentUrl, "_blank");

        // Step 3: Poll for window close, then verify
        const pollTimer = window.setInterval(async () => {
          if (win && win.closed) {
            window.clearInterval(pollTimer);
          }
        }, 1000);
      }
    } catch (err) {
      console.error("Payment error:", err);
    }
  };

  return (
    <button
      onClick={handlePayment}
      disabled={loading}
      // className="w-full bg-[#387467] hover:bg-green-700 text-white py-3 rounded-lg"
      className="inline-flex items-center justify-center w-full rounded-xl   text-white font-semibold px-4  shadow-md w-full  rounded-md bg-[#387467] text-white py-3 mt-4 disabled:opacity-60"

    >
      {loading ?   (<>
          <svg
            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            ></path>
          </svg>
          please wait...
        </>) : (  `Pay ₦${amount.toLocaleString()}` )}
    </button>
  );
}
