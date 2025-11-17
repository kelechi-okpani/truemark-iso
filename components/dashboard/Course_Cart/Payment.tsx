// "use client";
// import React, { useRef, useState } from "react";
// import { useMutation, useLazyQuery } from "@apollo/client/react";
// import { BUY_COURSE } from "@/lib/Mutation/mutation";
// import { useRouter } from "next/navigation";
//
//
// type PaymentProps = {
//   courseId: string | any;
//   amount: number;
// };
//
//
// export default function Payment({ courseId, amount }: PaymentProps) {
//   const router = useRouter();
//   const [buyCourse, { loading }] = useMutation(BUY_COURSE);
//
//   const winRef = useRef<Window | null>(null);
//   const pollRef = useRef<any>(null);
//   const [isPaying, setIsPaying] = useState(false);
//
//
//   // const handlePayment = async () => {
//   //   try {
//   //     // Step 1: Call BuyCourse mutation
//   //     const { data } = await buyCourse({ variables: { courseIds:courseId } }) as any;
//   //
//   //     if (data?.buyCourse?.paymentUrl && data?.buyCourse?.paymentReference) {
//   //       const { paymentUrl, paymentReference } = data.buyCourse;
//   //
//   //       // Step 2: open Paystack Checkout
//   //       const win = window.open(paymentUrl, "_blank");
//   //
//   //       // Step 3: Poll for window close, then verify
//   //       const pollTimer = window.setInterval(async () => {
//   //         if (win && win.closed) {
//   //           window.clearInterval(pollTimer);
//   //         }
//   //       }, 1000);
//   //     }
//   //   } catch (err) {
//   //     console.error("Payment error:", err);
//   //   }
//   // };
//
//
//
//   const handlePayment = async () => {
//     try {
//       const { data } = await buyCourse({ variables: { courseIds: courseId } }) as any;
//
//       if (data?.buyCourse?.paymentUrl) {
//         const { paymentUrl } = data.buyCourse;
//
//         setIsPaying(true);
//
//         // Step 2: open Paystack Checkout
//         winRef.current = window.open(paymentUrl, "_blank");
//
//         // Step 3: Poll for window close
//         pollRef.current = window.setInterval(() => {
//           if (winRef.current && winRef.current.closed) {
//             window.clearInterval(pollRef.current);
//             setIsPaying(false);
//           }
//         }, 1000);
//       }
//     } catch (err) {
//       console.error("Payment error:", err);
//       setIsPaying(false);
//     }
//   };
//
//
//   const handleCancel = () => {
//     if (winRef.current && !winRef.current.closed) {
//       winRef.current.close();
//     }
//     if (pollRef.current) {
//       clearInterval(pollRef.current);
//     }
//     setIsPaying(false);
//   };
//
//   return (
//     <div className="space-y-3">
//       <button
//         onClick={handlePayment}
//         disabled={loading}
//         // className="w-full bg-[#387467] hover:bg-green-700 text-white py-3 rounded-lg"
//         className="inline-flex items-center justify-center w-full rounded-xl   text-white font-semibold px-4  shadow-md w-full  rounded-md bg-[#387467] text-white py-3 mt-4 disabled:opacity-60"
//
//       >
//         {loading ? (<>
//           <svg
//             className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             aria-hidden="true"
//           >
//             <circle
//               className="opacity-25"
//               cx="12"
//               cy="12"
//               r="10"
//               stroke="currentColor"
//               strokeWidth="4"
//             ></circle>
//             <path
//               className="opacity-75"
//               fill="currentColor"
//               d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
//             ></path>
//           </svg>
//           please wait...
//         </>) : (`Pay ₦${amount.toLocaleString()}`)}
//       </button>
//
//       {isPaying && (
//         <button
//           onClick={handleCancel}
//           className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl font-semibold shadow-md"
//         >
//           Cancel Payment
//         </button>
//       )}
//     </div>
//
//   );
// }



"use client";
import React, { useRef, useState } from "react";
import { useMutation, useLazyQuery } from "@apollo/client/react";
import { BUY_COURSE } from "@/lib/Mutation/mutation";

type PaymentProps = {
  courseId: string;
  amount: number;
};

export default function Payment({ courseId, amount }: PaymentProps) {
  const [buyCourse, { loading }] = useMutation(BUY_COURSE);

  const [isOpen, setIsOpen] = useState(false);

  const payWindow = useRef<Window | null>(null);
  const pollTimer = useRef<number | null>(null);

  const handlePayment = async () => {
    const { data } = await buyCourse({ variables: { courseIds: courseId } }) as any;

    const paymentUrl = data?.buyCourse?.paymentUrl;
    if (!paymentUrl) return;

    payWindow.current = window.open(paymentUrl, "paystackPayment", "width=480,height=780");
    setIsOpen(true);

    pollTimer.current = window.setInterval(() => {
      if (payWindow.current?.closed) {
        clearInterval(pollTimer.current!);
        setIsOpen(false);
      }
    }, 800);
  };

  const handleCancel = () => {
    if (payWindow.current && !payWindow.current.closed) {
      payWindow.current.close();
    }
    if (pollTimer.current) clearInterval(pollTimer.current);
    setIsOpen(false);
  };


  return (
    <div className="space-y-3">
      <button
        onClick={handlePayment}
        disabled={loading}
        className="w-full bg-[#387467] text-white py-3 rounded-xl font-semibold shadow disabled:opacity-60"
      >
        {loading ? "Please wait..." : `Pay ₦${amount.toLocaleString()}`}
      </button>

      {isOpen && (
        <button
          onClick={handleCancel}
          className="w-full border border-red-800 bg-transparent  text-xs py-2 rounded-xl font-semibold shadow"
        >
          Cancel Payment
        </button>
      )}
    </div>
  );
}
