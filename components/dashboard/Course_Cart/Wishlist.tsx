"use client"
import { useCourseStore } from "@/store/useCourseStore";
import EmptyContainer from "@/components/utility/EmptyContainer";
import React from "react";
import { useRouter } from "next/navigation";
import Payment from "@/components/dashboard/Course_Cart/Payment";
import toast from "react-hot-toast";


const empty_details = {
  title: "Your wishlist is empty",
  description: "Looks like you haven’t added any courses yet.",
  callToAction: "Browse Cart",
  to:"/overview/cart"
}

export default function Wishlist() {
  const router = useRouter();
  const {addToCart, removeFromWishlist, wishlist } = useCourseStore();
  const total = wishlist.reduce((sum, course) => sum + Number(course.price ?? 0), 0);

  const vatRate = 0.075;
  const chargeRate = 0.02;

  // Calculate values
  const vat = total * vatRate;
  const charge = total * chargeRate;
  const grandTotal = total + vat + charge;

  // Now remove VAT and charge from grandTotal
  const afterVat = grandTotal - vat;
  const afterCharge = grandTotal - charge;
  const afterBoth = grandTotal - vat - charge;

  const formatCurrency = (amount: number) =>
    new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
    }).format(amount);



  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-900">Course Wishlist</h1>
      <button
        onClick={() => router.back()}
        className="mb-6 inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200"
      >
        ← Back
      </button>

      <div className="min-h-screen bg-white p-4 md:p-10 rounded-lg ">
        {/*<div className="shadow-[0_4px_6px_rgba(0,0,0,0.1),0_-4px_6px_rgba(0,0,0,0.1),4px_0_6px_rgba(0,0,0,0.1),-4px_0_6px_rgba(0,0,0,0.1)] rounded-xl bg-white min-h-screen bg-white p-4 md:p-10  ">*/}
        {wishlist.length === 0 ? (
          <EmptyContainer
            title={empty_details.title}
            description={empty_details.description}
            callToAction={empty_details.callToAction}
            to={empty_details.to}
          />
        ) : (
          // ----------------- CART ITEMS -----------------
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8  ">
            {/* Left - Scrollable Cart Items */}
            <div className="lg:col-span-2 overflow-y-auto  space-y-8">
              <h2 className="font-semibold">{wishlist.length} Courses in wishlist</h2>

              {wishlist?.map((course) => (
                <div
                  key={course.id}
                  className="flex flex-col md:flex-row gap-4 border-b pb-4 "
                >
                  <img
                    src={course.image}
                    alt={course.name}
                    className="w-full text-xs md:w-40 h-28 object-cover rounded"
                  />
                  <div className="flex-1 space-y-1">
                    <h3 className="font-semibold">{course.name}</h3>
                    <div className="flex gap-4 text-sm text-[#387467] mt-8">
                      <button
                        onClick={() => removeFromWishlist(course.id)}
                        className="hover:underline"
                      >
                        remove
                      </button>

                    </div>
                  </div>
                  <div className="font-semibold text-[#387467] md:self-start">
                    <p className="text-sm text-gray-600 px-5">
                      {new Intl.NumberFormat("en-NG", {
                        style: "currency",
                        currency: "NGN"
                      }).format(Number(course.price ?? 0))}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right - Sticky Summary */}


            <div
              className="bg-white  rounded-lg p-6 h-fit lg:sticky lg:top-10 shadow-[0_4px_6px_rgba(0,0,0,0.1),0_-4px_6px_rgba(0,0,0,0.1),4px_0_6px_rgba(0,0,0,0.1),-4px_0_6px_rgba(0,0,0,0.1)]">
              {/*<h2 className="text-lg font-semibold mb-4">Total:</h2>*/}
              {/*<p className="text-2xl font-bold mb-6">*/}
              {/*  {new Intl.NumberFormat("en-NG", {*/}
              {/*    style: "currency",*/}
              {/*    currency: "NGN"*/}
              {/*  }).format(total)}*/}
              {/*</p>*/}

              <div className="space-y-3 text-gray-700">

                <div className="flex justify-between">
                  <span className='font-bold'>Subtotal:</span>
                  <span className="font-bold text-[#387467]"> {formatCurrency(total)}</span>
                </div>

                <div className="flex justify-between">
                  <span className='text-sm font-bold'>VAT (7.5%):</span>
                  <span className="font-medium text-xs text-[#387467]">+ {formatCurrency(vat)}</span>
                </div>

                <div className="flex justify-between">
                  <span className='text-sm font-bold'> Service Charge (2%):</span>
                  <span className="font-medium text-xs text-[#387467]">+ {formatCurrency(charge)}</span>
                </div>

                <hr className="my-3" />

                <div className="flex justify-between font-semibold text-gray-900">
                  <div>
                    <p> Total:</p>
                    <span className='font-normal text-xs'>(incl. VAT & Charge)</span>
                  </div>
                  <span>{formatCurrency(grandTotal)}</span>
                </div>

              </div>

              <button className="w-full border border-[#387467] text-[#387467] mt-6 py-2 rounded-lg">

              </button>
            </div>

          </div>
        )}
      </div>
    </div>

  );
}
