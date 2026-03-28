"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { Trash2, ShoppingCart, ArrowLeft, Info } from "lucide-react";
import toast from "react-hot-toast";

// ✅ Assuming these exist in your Redux slices
import { addToCart, removeFromWishlist } from "@/lib/redux/features/cart/cartSlice";

import EmptyContainer from "@/components/utility/EmptyContainer";
import Payment from "@/components/dashboard/Course_Cart/Payment";

const empty_details = {
  title: "Your wishlist is empty",
  description: "Explore our professional programs and save them here to review later.",
  callToAction: "Browse Courses",
  to: "/overview/courses"
};

export default function Wishlist() {
  const router = useRouter();
  const dispatch = useDispatch();
  
  // ✅ Redux: Select wishlist items
  const wishlist = useSelector((state: any) => state.wishlist?.items || []);

  // --- ISO Standard Financial Calculations ---
  const subTotal = wishlist.reduce((sum: number, course: any) => sum + Number(course.price ?? 0), 0);
  const vatRate = 0.075; // 7.5%
  const chargeRate = 0.02; // 2%
  
  const vat = subTotal * vatRate;
  const charge = subTotal * chargeRate;
  const grandTotal = subTotal + vat + charge;

  const formatCurrency = (amount: number) =>
    new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
    }).format(amount);

  const handleMoveToCart = (course: any) => {
    dispatch(addToCart(course));
    dispatch(removeFromWishlist(course.id));
    toast.success("Moved to cart for checkout");
  };

  return (
    <div className=" pb-20">
      {/* --- Breadcrumb/Header --- */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <button
            onClick={() => router.back()}
            className="group flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-[#387467] transition-colors mb-2"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            Back to Dashboard
          </button>
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">Saved Programs</h1>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-lg">
          <Info size={14} className="text-blue-600" />
          <p className="text-[10px] font-bold text-blue-700 uppercase tracking-tight">
            Prices inclusive of statutory VAT
          </p>
        </div>
      </div>


      <div className="min-h-[60vh] rounded-2xl">
        {wishlist.length === 0 ? (
          <EmptyContainer {...empty_details} />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* --- Left: Wishlist Items (Flat Design) --- */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                <h2 className="text-xs font-black text-gray-400 uppercase tracking-[0.2em]">
                  {wishlist.length} Items Saved
                </h2>
              </div>

              {wishlist.map((course: any) => (
                <div
                  key={course.id}
                  className="group flex flex-col md:flex-row gap-6 p-4 rounded-2xl border border-gray-50 hover:border-gray-200 transition-all bg-white"
                >
                  <div className="relative w-full md:w-48 h-32 flex-shrink-0">
                    <img
                      src={course.image}
                      alt={course.name}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                  
                  <div className="flex-1 flex flex-col justify-between py-1">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 leading-snug group-hover:text-[#387467] transition-colors">
                        {course.name}
                      </h3>
                      <p className="text-xs text-gray-400 mt-1 uppercase font-bold tracking-widest">
                        Professional Certification
                      </p>
                    </div>

                    <div className="flex items-center gap-6 mt-4">
                      <button
                        onClick={() => handleMoveToCart(course)}
                        className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#387467] hover:underline"
                      >
                        <ShoppingCart size={14} /> Add to Cart
                      </button>
                      <button
                        onClick={() => dispatch(removeFromWishlist(course.id))}
                        className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-red-400 hover:text-red-600 transition-colors"
                      >
                        <Trash2 size={14} /> Remove
                      </button>
                    </div>
                  </div>

                  <div className="md:text-right">
                    <p className="text-lg font-black text-gray-900">
                      {formatCurrency(Number(course.price ?? 0))}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* --- Right: Checkout Summary (ISO Standard) --- */}
            <div className="lg:sticky lg:top-8 h-fit">
              <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8 space-y-6">
                <h3 className="text-xs font-black text-gray-400 uppercase tracking-[0.2em]">
                  Order Summary
                </h3>

                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium text-gray-500">Course Subtotal</span>
                    <span className="font-bold text-gray-900">{formatCurrency(subTotal)}</span>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span className="font-medium text-gray-500">VAT (7.5%)</span>
                    <span className="font-bold text-gray-900">+{formatCurrency(vat)}</span>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span className="font-medium text-gray-500">Service Fee (2%)</span>
                    <span className="font-bold text-gray-900">+{formatCurrency(charge)}</span>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex justify-between items-end">
                      <div>
                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none mb-1">
                          Total Investment
                        </p>
                        <p className="text-2xl font-black text-[#387467] leading-none">
                          {formatCurrency(grandTotal)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ISO Integrated Payment Component */}
                <div className="pt-2">
                  <Payment courseId={wishlist.map(c => c.id)} amount={grandTotal} />
                </div>
                
                <p className="text-[9px] text-center text-gray-400 font-bold uppercase tracking-widest leading-relaxed">
                  Secure Enrollment via SSL Encryption <br /> Instant Access upon verification
                </p>
              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}