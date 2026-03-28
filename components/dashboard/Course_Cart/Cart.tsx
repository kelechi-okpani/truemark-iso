"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { Trash2, Heart, ArrowLeft, Info, ShieldCheck, Tag } from "lucide-react";
import toast from "react-hot-toast";

import EmptyContainer from "@/components/utility/EmptyContainer";
import Payment from "@/components/dashboard/Course_Cart/Payment";
import { addToWishlist, removeFromCart, Course } from "@/lib/redux/features/cart/cartSlice";

export default function Cart() {
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  // Safeguard the selector with a fallback object
  const { cartItems = [], wishlistItems = [] } = useSelector((state: any) => state.cart || {});

  useEffect(() => {
    setMounted(true);
  }, []);

  // --- Financial Logic ---
  const subTotal = cartItems.reduce((sum, item: Course) => sum + (Number(item.price) || 0), 0);
  const vat = subTotal * 0.075;
  const processingFee = subTotal * 0.02;
  const totalAmount = subTotal + vat + processingFee;

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

  // Prevent Hydration Mismatch
  if (!mounted) return null;

  if (cartItems.length === 0) {
    return <EmptyContainer title="Your cart is empty" description="Browse our courses to start." callToAction="Explore" to="/overview/course" />;
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 min-h-screen bg-white">
      <header className="mb-10">
        <button onClick={() => router.back()} className="flex items-center gap-2 text-xs font-bold text-gray-400 hover:text-[#387467] uppercase tracking-widest transition-all mb-4">
          <ArrowLeft size={14} /> Back
        </button>
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">Checkout</h1>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-8 divide-y divide-gray-100">
          {cartItems.map((course: Course) => (
            <div key={course.id} className="py-8 group flex flex-col sm:flex-row gap-6">
              <div className="w-full sm:w-44 h-28 bg-gray-50 rounded-lg overflow-hidden border border-gray-100">
                <img src={course.image} alt={course.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold text-gray-900">{course.name}</h3>
                  <p className="text-xl font-black text-[#387467]">{formatCurrency(course.price)}</p>
                </div>
                <div className="flex gap-8 mt-6">
                  <button onClick={() => dispatch(removeFromCart(course.id))} className="flex items-center gap-1.5 text-[10px] font-black text-red-400 hover:text-red-600 uppercase tracking-widest transition-colors">
                    <Trash2 size={14} /> Remove
                  </button>
                  <button onClick={() => handleWishlistAdd(course)} className="flex items-center gap-1.5 text-[10px] font-black text-[#387467] hover:text-[#2a554c] uppercase tracking-widest transition-colors">
                    <Heart size={14} /> Wishlist
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <aside className="lg:col-span-4">
          <div className="bg-white border border-gray-100 rounded-3xl p-8 sticky top-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Summary</h2>
            <div className="space-y-5 text-sm font-medium">
              <div className="flex justify-between"><span className="text-gray-400">Subtotal</span><span className="text-gray-900">{formatCurrency(subTotal)}</span></div>
              <div className="flex justify-between"><span className="text-gray-400">VAT (7.5%)</span><span className="text-gray-900">{formatCurrency(vat)}</span></div>
              <div className="flex justify-between"><span className="text-gray-400">Processing Fee</span><span className="text-gray-900">{formatCurrency(processingFee)}</span></div>
              <div className="pt-6 mt-6 border-t border-gray-100 flex justify-between items-center">
                <span className="text-xs font-black text-gray-400 uppercase">Total</span>
                <span className="text-3xl font-black text-[#387467]">{formatCurrency(totalAmount)}</span>
              </div>
            </div>
            <div className="mt-10">
              <Payment courseId={cartItems.map(i => i.id)} amount={totalAmount} />
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

// "use client";
// import React, { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import { useSelector, useDispatch } from "react-redux";
// import { Trash2, Heart, ArrowLeft, Info, ShieldCheck, Tag } from "lucide-react";
// import toast from "react-hot-toast";

// import EmptyContainer from "@/components/utility/EmptyContainer";
// import Payment from "@/components/dashboard/Course_Cart/Payment";
// import { addToWishlist, removeFromCart, Course } from "@/lib/redux/features/cart/cartSlice";

// export default function Cart() {
//   const [mounted, setMounted] = useState(false);
//   const router = useRouter();
//   const dispatch = useDispatch();

//   // Safeguard the selector with a fallback object
//   const { cartItems = [], wishlistItems = [] } = useSelector((state: any) => state.cart || {});

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   // --- Financial Logic ---
//   const subTotal = cartItems.reduce((sum, item: Course) => sum + (Number(item.price) || 0), 0);
//   const vat = subTotal * 0.075;
//   const processingFee = subTotal * 0.02;
//   const totalAmount = subTotal + vat + processingFee;

//   const formatCurrency = (amount: number) =>
//     new Intl.NumberFormat("en-NG", {
//       style: "currency",
//       currency: "NGN",
//       minimumFractionDigits: 0,
//     }).format(amount);

//   const handleWishlistAdd = (course: Course) => {
//     const exists = wishlistItems.some((item) => item.id === course.id);
//     if (exists) {
//       toast("Already in your wishlist", { icon: "✨" });
//     } else {
//       dispatch(addToWishlist(course));
//       toast.success("Saved for later");
//     }
//   };

//   // Prevent Hydration Mismatch
//   if (!mounted) return null;

//   if (cartItems.length === 0) {
//     return <EmptyContainer title="Your cart is empty" description="Browse our courses to start." callToAction="Explore" to="/overview/course" />;
//   }

//   return (
//     <div className="max-w-7xl mx-auto px-6 py-10 min-h-screen bg-white">
//       <header className="mb-10">
//         <button onClick={() => router.back()} className="flex items-center gap-2 text-xs font-bold text-gray-400 hover:text-[#387467] uppercase tracking-widest transition-all mb-4">
//           <ArrowLeft size={14} /> Back
//         </button>
//         <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">Checkout</h1>
//       </header>

//       <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
//         <div className="lg:col-span-8 divide-y divide-gray-100">
//           {cartItems.map((course: Course) => (
//             <div key={course.id} className="py-8 group flex flex-col sm:flex-row gap-6">
//               <div className="w-full sm:w-44 h-28 bg-gray-50 rounded-lg overflow-hidden border border-gray-100">
//                 <img src={course.image} alt={course.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
//               </div>
//               <div className="flex-1 flex flex-col justify-between">
//                 <div className="flex justify-between items-start">
//                   <h3 className="text-xl font-bold text-gray-900">{course.name}</h3>
//                   <p className="text-xl font-black text-[#387467]">{formatCurrency(course.price)}</p>
//                 </div>
//                 <div className="flex gap-8 mt-6">
//                   <button onClick={() => dispatch(removeFromCart(course.id))} className="flex items-center gap-1.5 text-[10px] font-black text-red-400 hover:text-red-600 uppercase tracking-widest transition-colors">
//                     <Trash2 size={14} /> Remove
//                   </button>
//                   <button onClick={() => handleWishlistAdd(course)} className="flex items-center gap-1.5 text-[10px] font-black text-[#387467] hover:text-[#2a554c] uppercase tracking-widest transition-colors">
//                     <Heart size={14} /> Wishlist
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <aside className="lg:col-span-4">
//           <div className="bg-white border border-gray-100 rounded-3xl p-8 sticky top-10">
//             <h2 className="text-2xl font-bold text-gray-900 mb-8">Summary</h2>
//             <div className="space-y-5 text-sm font-medium">
//               <div className="flex justify-between"><span className="text-gray-400">Subtotal</span><span className="text-gray-900">{formatCurrency(subTotal)}</span></div>
//               <div className="flex justify-between"><span className="text-gray-400">VAT (7.5%)</span><span className="text-gray-900">{formatCurrency(vat)}</span></div>
//               <div className="flex justify-between"><span className="text-gray-400">Processing Fee</span><span className="text-gray-900">{formatCurrency(processingFee)}</span></div>
//               <div className="pt-6 mt-6 border-t border-gray-100 flex justify-between items-center">
//                 <span className="text-xs font-black text-gray-400 uppercase">Total</span>
//                 <span className="text-3xl font-black text-[#387467]">{formatCurrency(totalAmount)}</span>
//               </div>
//             </div>
//             <div className="mt-10">
//               <Payment courseId={cartItems.map(i => i.id)} amount={totalAmount} />
//             </div>
//           </div>
//         </aside>
//       </div>
//     </div>
//   );
// }