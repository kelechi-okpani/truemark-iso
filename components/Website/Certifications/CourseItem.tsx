"use client";
import React from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { Course } from "@/lib/redux/features/cart/cartSlice"; // Use the interface we defined
import { addToCart, addToWishlist } from "@/lib/redux/features/cart/cartSlice";
import { toggleSidebar } from "@/lib/redux/features/courses/courseSlice";
import { ShoppingCart, Heart, ArrowRight, ShieldCheck } from "lucide-react";

interface CourseItemProps {
  courseListing: Course;
}

const CourseItem = ({ courseListing }: CourseItemProps) => {
  const { image, name, price, id } = courseListing;
  const dispatch = useDispatch();

  // Format currency for Nigeria
  const formattedPrice = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 0,
  }).format(Number(price ?? 0));

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card click navigation
    dispatch(addToCart(courseListing));
  };

  return (
    <div className="group relative flex flex-col bg-white border border-gray-100 rounded-[2rem] overflow-hidden transition-all hover:border-[#387467]/20 hover:shadow-2xl hover:shadow-[#387467]/5">
      {/* Top Badge for ISO Feel */}
      <div className="absolute top-4 left-4 z-10">
        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/90 backdrop-blur-md border border-gray-100 rounded-full shadow-sm">
          <ShieldCheck size={12} className="text-[#387467]" />
          <span className="text-[8px] font-black text-gray-900 uppercase tracking-widest">
            Certified
          </span>
        </div>
      </div>

      {/* Image Section */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-50">
        <Image
          src={image || "/placeholder-course.jpg"}
          alt={name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Hover Overlay Actions */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
          <button 
            onClick={() => dispatch(addToWishlist(courseListing))}
            className="p-3 bg-white rounded-xl text-gray-900 hover:text-pink-600 transition-colors shadow-lg"
          >
            <Heart size={18} />
          </button>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex-grow">
          <p className="text-[9px] font-black text-[#387467] uppercase tracking-[0.2em] mb-2">
            Professional Track
          </p>
          <h3 className="text-lg font-black text-gray-900 leading-[1.1] uppercase tracking-tighter mb-4 line-clamp-2">
            {name}
          </h3>
        </div>

        {/* Pricing & CTA */}
        <div className="pt-6 border-t border-gray-50 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[8px] font-bold text-gray-400 uppercase tracking-widest">Tuition Fee</span>
            <span className="text-base font-black text-gray-900">{formattedPrice}</span>
          </div>

          <button
            onClick={handleAddToCart}
            className="flex items-center justify-center gap-2 bg-[#387467] text-white px-5 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-[#2d5e53] transition-all active:scale-95 shadow-lg shadow-[#387467]/10"
          >
            Enroll <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseItem;