"use client"
import { useCourseStore } from "@/store/useCourseStore";
import EmptyContainer from "@/components/utility/EmptyContainer";
import React from "react";
import { useRouter } from "next/navigation";
import Payment from "@/components/dashboard/Course_Cart/Payment";


const empty_details = {
  title: "Your cart is empty",
  description: "Looks like you haven’t added any courses yet.",
  callToAction: "Browse Courses",
  to:"/overview/course"
}


export default function Cart() {
  const router = useRouter();
  const { cart, removeFromCart, clearCart, markAsPaid, } = useCourseStore();
  const total = cart.reduce((sum, course) => sum + Number(course.price ?? 0), 0);


  // console.log(cart[0].id, "cart[0].id");

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-900">Course Checkout Cart</h1>
      <button
        onClick={() => router.back()}
        className="mb-6 inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200"
      >
        ← Back
      </button>
      <div className="min-h-screen bg-white p-4 md:p-10 rounded-lg ">
        {/*<div className="shadow-[0_4px_6px_rgba(0,0,0,0.1),0_-4px_6px_rgba(0,0,0,0.1),4px_0_6px_rgba(0,0,0,0.1),-4px_0_6px_rgba(0,0,0,0.1)] rounded-xl bg-white min-h-screen bg-white p-4 md:p-10  ">*/}
        {cart.length === 0 ? (
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
              <h2 className="font-semibold">{cart.length} Courses in Cart</h2>

              {cart?.map((course) => (
                <div
                  key={course.id}
                  className="flex flex-col md:flex-row gap-4 border-b pb-4 "
                >
                  <img
                    src={course.image}
                    alt={course.name}
                    className="w-full md:w-40 h-28 object-cover rounded"
                  />
                  <div className="flex-1 space-y-1">
                    <h3 className="font-semibold">{course.name}</h3>
                    <div className="flex gap-4 text-sm text-[#387467] mt-8">
                      <button
                        onClick={() => removeFromCart(course.id)}
                        className="hover:underline"
                      >
                        Remove
                      </button>
                      <button className="hover:underline">Save for Later</button>
                      <button className="hover:underline">Move to Wishlist</button>
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
              <h2 className="text-lg font-semibold mb-4">Total:</h2>
              <p className="text-2xl font-bold mb-6">
                {new Intl.NumberFormat("en-NG", {
                  style: "currency",
                  currency: "NGN",
                }).format(total)}
              </p>



              {cart.length > 0 && (
                // <Payment courseId={cart[0].id} amount={total} />
                <Payment courseId={cart.map(item => item.id)}  amount={total} />
              )}

              <p className="text-xs text-gray-500 mt-2">
                You won’t be charged yet
              </p>

              <button className="w-full border border-[#387467] text-[#387467] mt-6 py-2 rounded-lg">
                Apply Coupon
              </button>
            </div>
          </div>
        )}
      </div>
    </div>

  );
}
