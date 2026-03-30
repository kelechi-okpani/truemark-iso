"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { Trash2, Heart, ArrowLeft, ShieldCheck, Lock } from "lucide-react";
import toast from "react-hot-toast";

import EmptyContainer from "@/components/utility/EmptyContainer";
import Payment from "@/components/dashboard/Course_Cart/Payment";
import { addToWishlist, removeFromCart, Course } from "@/lib/redux/features/cart/cartSlice";

export default function Cart() {
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  const { cartItems = [], wishlistItems = [] } = useSelector((state: any) => state.cart || {});

  useEffect(() => {
    setMounted(true);
  }, []);

  const subTotal = cartItems.reduce((sum, item: Course) => sum + (Number(item.price) || 0), 0);
  const vat = subTotal * 0.075;
  const totalAmount = subTotal + vat;

  const formatCurrency = (amount: number) =>
    new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
    }).format(amount);

  const handleWishlistAdd = (course: Course) => {
    const exists = wishlistItems.some((item) => item.id === course.id);
    if (exists) {
      toast("Already in your wishlist", { icon: "✨" });
    } else {
      dispatch(addToWishlist(course));
      toast.success("Saved for later");
    }
  };

  if (!mounted) return null;

  if (cartItems.length === 0) {
    return (
      <EmptyContainer 
        title="Your cart is empty" 
        description="Explore our high-performance engineering tracks to start learning." 
        callToAction="Browse Courses" 
        to="/overview/course" 
      />
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* ISO Standard Progress Header */}
      <div className="border-b border-gray-100 py-4 bg-gray-50/30">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          <button 
            onClick={() => router.back()} 
            className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 hover:text-[#387467] transition-all"
          >
            <ArrowLeft size={14} /> Back to Catalog
          </button>
          <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            <Lock size={12} /> Secure Checkout
          </div>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-4 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* List Section */}
          <div className="lg:col-span-7">
            <h1 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tighter mb-2">
              Shopping Cart
            </h1>
            <p className="text-sm text-gray-500 mb-10 font-medium">{cartItems.length} Course(s) in Cart</p>

            <div className="divide-y divide-gray-100 border-t border-gray-100">
              {cartItems.map((course: Course) => (
                <div key={course.id} className="py-8 flex flex-col sm:flex-row gap-6 group">
                  {/* Image with subtle border, no shadow */}
                  <div className="w-full sm:w-40 h-24 bg-gray-50 border border-gray-100 rounded-sm overflow-hidden flex-shrink-0">
                    <img src={course.image} alt={course.name} className="w-full h-full object-cover" />
                  </div>

                  <div className="flex-1 flex flex-col justify-between">
                    <div className="flex justify-between items-start gap-4">
                      <h3 className="text-lg font-bold text-gray-900 leading-tight hover:text-[#387467] cursor-pointer transition-colors">
                        {course.name}
                      </h3>
                      <p className="text-lg font-black text-gray-900">{formatCurrency(course.price)}</p>
                    </div>

                    <div className="flex items-center gap-6 mt-6">
                      <button 
                        onClick={() => dispatch(removeFromCart(course.id))}
                        className="flex items-center gap-1.5 text-[10px] font-black text-red-500 uppercase tracking-widest hover:underline"
                      >
                        <Trash2 size={13} /> Remove
                      </button>
                      <button 
                        onClick={() => handleWishlistAdd(course)}
                        className="flex items-center gap-1.5 text-[10px] font-black text-[#387467] uppercase tracking-widest hover:underline"
                      >
                        <Heart size={13} /> Save for later
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar Summary Section */}
          <aside className="lg:col-span-5">
            <div className="border border-gray-200 rounded-sm p-8 bg-[#FBFBFB]">
              <h2 className="text-xs font-black text-gray-400 uppercase tracking-[0.2em] mb-8">Order Summary</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Original Price</span>
                  <span className="text-gray-900 font-bold">{formatCurrency(subTotal)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Tax (VAT 7.5%)</span>
                  <span className="text-gray-900 font-bold">{formatCurrency(vat)}</span>
                </div>
                
                <div className="pt-6 mt-6 border-t border-gray-200">
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Total Amount</p>
                      <p className="text-3xl font-black text-gray-900 tracking-tighter">
                        {formatCurrency(totalAmount)}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-8">
                  {/* Reusing your Payment Component */}
                  <Payment courseId={cartItems.map(i => i.id)} amount={totalAmount} />
                </div>

                <div className="mt-6 flex items-start gap-3 p-4 bg-white border border-gray-100 rounded-sm">
                  <ShieldCheck size={18} className="text-[#387467] shrink-0" />
                  <p className="text-[10px] leading-relaxed text-gray-500 font-medium uppercase tracking-tight">
                    ISO Secured Payment. Your credentials are encrypted and never stored on our servers.
                  </p>
                </div>
              </div>
            </div>
          </aside>

        </div>
      </main>
    </div>
  );
}