"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter, useParams } from "next/navigation";
import { useMutation, useLazyQuery } from "@apollo/client/react";

import { useCourseStore } from "@/store/useCourseStore";
import { VERIFY_PAYMENT } from "@/lib/Query/queries";

export default function PaymentVerification() {
  const params = useParams();
  // const searchParams = useSearchParams();
  const router = useRouter();

  // const reference = searchParams.get("reference");
  // const trxref = searchParams.get("trxref");

  const reference = params.reference as string;
  const trxref = params.trxref as string;

  const { markAsPaid, clearCart } = useCourseStore();

  const [verifyPayment, { loading, error, data }] = useLazyQuery(VERIFY_PAYMENT) as any;
  const [status, setStatus] = useState<boolean>(false);


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
        console.error(err);
        setStatus(false);
      }
    };

    checkPayment();
  }, [reference, verifyPayment, markAsPaid, clearCart, router]);

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
