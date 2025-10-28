"use client"
import { useCourseStore } from "@/store/useCourseStore";
import EmptyContainer from "@/components/utility/EmptyContainer";
import React from "react";
import { useRouter } from "next/navigation";
import Payment from "@/components/dashboard/Course_Cart/Payment";
import toast from "react-hot-toast";


const empty_details = {
  title: "Your cart is empty",
  description: "Looks like you haven’t added any courses yet.",
  callToAction: "Browse Courses",
  to:"/overview/course"
}

export default function Cart() {
  const router = useRouter();
  const { cart, removeFromCart, addToWishlist, wishlist } = useCourseStore();
  const total = cart.reduce((sum, course) => sum + Number(course.price ?? 0), 0);

  // console.log(cart[0].id, "cart[0].id");


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
                    className="w-full md:w-40 text-xs h-28 object-cover rounded"
                  />
                  <div className="flex-1 space-y-1">
                    <h3 className="font-semibold">{course.name}</h3>
                    <div className="flex gap-4 text-sm text-[#387467] mt-8">
                      <button
                        onClick={() => removeFromCart(course.id)}
                        className="hover:underline"
                      >
                        remove
                      </button>

                      <button
                        className="rounded-full"
                        onClick={() => {
                          const existsInWishlist = wishlist.some(
                            (item: any) => item.id === course.id
                          );

                          if (existsInWishlist) {
                            toast("Course already in wishlist!", {
                              style: {
                                background: "#fff",
                                color: "#000",
                                // background: "#F59E0B",
                                padding: "0.5rem 1rem",
                                borderRadius: "0.5rem",
                                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                                fontWeight: 500,
                                fontSize: "0.875rem",
                              },
                              position: "bottom-right",
                              duration: 2500,
                            });
                          } else {
                            addToWishlist(course);
                            toast.success("Course added to wishlist!", {
                              style: {
                                background: "#387467",
                                color: "#fff",
                                padding: "0.5rem 1rem",
                                borderRadius: "0.5rem",
                                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                                fontWeight: 500,
                                fontSize: "0.875rem",
                              },
                              position: "bottom-right",
                              duration: 3000,
                            });
                          }
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-5 h-5 text-gray-700 hover:text-red-500"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 8.25c0-2.485-2.014-4.5-4.5-4.5S12 5.765 12 8.25c0-2.485-2.014-4.5-4.5-4.5S3 5.765 3 8.25c0 4.556 9 11.25 9 11.25s9-6.694 9-11.25z"
                          />
                        </svg>
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
            <div className="bg-white  rounded-lg p-6 h-fit lg:sticky lg:top-10 shadow-[0_4px_6px_rgba(0,0,0,0.1),0_-4px_6px_rgba(0,0,0,0.1),4px_0_6px_rgba(0,0,0,0.1),-4px_0_6px_rgba(0,0,0,0.1)]">
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

              {cart.length > 0 && (
                <Payment courseId={cart.map(item => item.id)} amount={grandTotal} />
              )}

              <button className="w-full border border-[#387467] text-[#387467] mt-6 py-2 rounded-lg">

              </button>
            </div>


          </div>
        )}
      </div>
    </div>

  );
}
