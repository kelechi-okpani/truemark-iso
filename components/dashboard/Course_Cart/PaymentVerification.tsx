"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter, useParams } from "next/navigation";
import { useLazyQuery } from "@apollo/client/react";

import { useCourseStore } from "@/store/useCourseStore";
import { VERIFY_PAYMENT } from "@/lib/Query/queries";

export default function PaymentVerification() {
  const params = useParams();
  // const searchParams = useSearchParams();
  const searchParams = useSearchParams();
  const reference = searchParams.get("reference") || searchParams.get("trxref");

  const router = useRouter();

  const { markAsPaid, clearCart } = useCourseStore();

  const [verifyPayment, { loading, error, data }] = useLazyQuery(VERIFY_PAYMENT, ) as any;
  const [status, setStatus] = useState<boolean>(false);
  // const [error, setError] = useState<boolean>("");

  console.log(error?.message, "error....");


  useEffect(() => {
    const checkPayment = async () => {
      if (!reference) return;
      try {
        const { data }: any = await verifyPayment({
          variables: { reference },
        });

        if (data?.verifyPayment) {
          setStatus(data?.verifyPayment);
          markAsPaid([reference] as any); // save paid course
          clearCart();
          router.push("/overview/cart");
        } else {
          setStatus(false);
        }
      } catch (err) {
        console.error(err, "error ");
        setStatus(false);
      }
    };

    checkPayment();
  }, [reference, verifyPayment, markAsPaid, clearCart, router]);

  const handleRoute = () => {
      clearCart();
      router.push("/overview/enrolled-course");
  };


  if(error?.message === "Payment has already been verified"){
    return (
      <div className="flex h-screen items-center justify-center bg-gray-50">
        <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md text-center">
          <div className="text-yellow-500 text-6xl">⚠️</div>
          <h2 className="mt-4 text-xl font-semibold">
            Payment already verified
          </h2>
          <p className="text-gray-600">
            This payment was previously confirmed ...
          </p>

          <button
            onClick={handleRoute}
            disabled={loading}
            className="inline-flex items-center justify-center w-full rounded-xl pt-3   text-white font-semibold px-4  shadow-md w-full  rounded-md bg-[#387467] text-white py-3 mt-4 disabled:opacity-60"
          >
            Enrolled Courses
          </button>
        </div>
      </div>
  )
  }
  return (
    <div className="flex h-screen items-center justify-center bg-gray-50">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md text-center">
        {loading || !status ? (
          <>
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-700">Verifying your payment...</p>
          </>
        ) : status === data?.verifyPayment? (
          <>
            <div className="text-green-500 text-6xl">✔</div>
            <h2 className="mt-4 text-xl font-semibold">
              Payment verified successfully!
            </h2>
            <p className="text-gray-600">Redirecting to your cart...</p>
          </>
        ) : (
          <>
            <div className="text-red-500 text-6xl">✘</div>
            <h2 className="mt-4 text-xl font-semibold">Payment failed</h2>
            <p className="text-gray-600">
              We couldn’t verify your transaction. Please try again.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
