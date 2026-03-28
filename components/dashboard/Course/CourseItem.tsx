"use client";
import React from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { Heart, ShoppingCart, CheckCircle2, ArrowRight } from "lucide-react";
import { CourseList } from "@/types/blog";
import { addToCart, addToWishlist, Course } from "@/lib/redux/features/cart/cartSlice";
import { cn } from "@/lib/utils";

const CourseItem = ({ courseListing, paid }: { courseListing: CourseList, paid: any }) => {
  const { image, name, description, price, id } = courseListing;
  const dispatch = useDispatch();
  
  const cart = useSelector((state: any) => state.cart?.cartItems || []);
  const wishlist = useSelector((state: any) => state.cart?.wishlistItems || []);

  const stringId = String(id);
  const existsInCart = cart.some((item: Course) => item.id === stringId);
  const existsInWishlist = wishlist.some((item: Course) => item.id === stringId);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const handleAction = (actionType: 'cart' | 'wishlist') => {
    const coursePayload: Course | any = {
      ...courseListing,
      id: String(courseListing.id),
      price: Number(courseListing.price ?? 0)
    };

    if (actionType === 'cart') {
      if (existsInCart) return toast.error("Already in cart");
      dispatch(addToCart(coursePayload));
      toast.success("Added to cart", { 
        style: { background: "#387467", color: "#fff", fontSize: '12px', fontWeight: 'bold' } 
      });
    } else {
      if (existsInWishlist) return toast.error("Already in wishlist");
      dispatch(addToWishlist(coursePayload));
      toast.success("Added to wishlist", { 
        style: { background: "#387467", color: "#fff", fontSize: '12px', fontWeight: 'bold' } 
      });
    }
  };

  return (
    <div className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-[#387467]/5 hover:border-[#387467]/20 transition-all duration-500 flex flex-col h-full relative">
      
      {/* --- Image Section: Responsive Height --- */}
      <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-gray-50">
        <Image
          src={image || "/placeholder-course.jpg"}
          alt={name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Enrolled Badge */}
        {paid && (
          <div className="absolute top-3 left-3 bg-[#387467] text-white text-[9px] font-black px-2.5 py-1.5 rounded-lg shadow-lg flex items-center gap-1.5 uppercase tracking-[0.15em] z-10 animate-in fade-in zoom-in">
            <CheckCircle2 size={12} strokeWidth={3} />
            Enrolled
          </div>
        )}

        {/* Floating Wishlist for Mobile (Quick Access) */}
        {!paid && (
          <button
            onClick={() => handleAction('wishlist')}
            className={cn(
              "absolute top-3 right-3 p-2 rounded-full backdrop-blur-md transition-all z-10 lg:hidden",
              existsInWishlist ? "bg-red-500 text-white" : "bg-white/80 text-gray-500"
            )}
          >
            <Heart size={16} fill={existsInWishlist ? "currentColor" : "none"} />
          </button>
        )}
      </div>

      {/* --- Content Section --- */}
      <div className="p-4 sm:p-5 flex flex-col flex-grow">
        <h3 className="text-sm sm:text-base font-black text-gray-900 leading-snug group-hover:text-[#387467] transition-colors line-clamp-2 mb-2 h-10 sm:h-12">
          {name}
        </h3>

        <p className="text-[11px] sm:text-xs text-gray-400 line-clamp-2 mb-4 font-medium leading-relaxed">
          {description}
        </p>

        {/* --- Footer/Actions: Responsive Flex --- */}
        <div className="pt-4 border-t border-gray-50 flex items-end justify-between mt-auto gap-2">
          <div className="shrink-0">
            <span className="text-[9px] text-gray-400 font-black uppercase tracking-[0.1em] block mb-0.5">
              Course Fee
            </span>
            <p className="text-base sm:text-lg font-black text-gray-900 tracking-tight">
              {formatCurrency(Number(price ?? 0))}
            </p>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2">
            {!paid ? (
              <>
                {/* Wishlist Button: Desktop Only (Hidden on Mobile as it's floating above) */}
                <button
                  onClick={() => handleAction('wishlist')}
                  className={cn(
                    "hidden lg:flex p-2.5 rounded-xl border transition-all duration-300",
                    existsInWishlist 
                    ? "bg-red-50 border-red-100 text-red-500" 
                    : "border-gray-100 text-gray-300 hover:text-red-500 hover:bg-red-50"
                  )}
                  title="Add to Wishlist"
                >
                  <Heart size={18} fill={existsInWishlist ? "currentColor" : "none"} />
                </button>

                {/* Main Cart Button */}
                <button
                  onClick={() => handleAction('cart')}
                  className="bg-[#387467] hover:bg-slate-900 text-white px-3 sm:px-4 py-2.5 rounded-xl transition-all shadow-md shadow-[#387467]/10 active:scale-95 flex items-center gap-2 group/btn"
                >
                  <ShoppingCart size={16} className="shrink-0" />
                  <span className="text-[11px] font-black uppercase tracking-wider">
                    {existsInCart ? "In Cart" : "Get Course"}
                  </span>
                </button>
              </>
            ) : (
              <button className="bg-gray-50 text-[#387467] border border-[#387467]/20 px-4 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-[0.15em] flex items-center gap-2 hover:bg-[#387467] hover:text-white transition-all group/access">
                <span>Start Learning</span>
                <ArrowRight size={14} className="group-hover/access:translate-x-1 transition-transform" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseItem;