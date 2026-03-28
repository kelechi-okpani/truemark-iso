"use client";
import React from "react";
import Link from "next/link";
import { useSelector } from "react-redux"; // Switched to Redux for consistency
import { ShoppingCart, Bell, Search } from "lucide-react";
import UserProfileComponent from "@/components/molecules/user-profile-component";

function Header({ data }: any) {
  // ✅ Redux Integration: Assuming your cart is now in Redux cartSlice
  const cartItems = useSelector((state: any) => state.cart?.cartItems || []);

  return (
    <header className="h-full flex items-center px-4 md:px-8 lg:px-10 justify-between w-full bg-white transition-all duration-300">
      
      {/* Left side: Contextual Info */}
      <div className="flex items-center gap-4">
        <div className="hidden sm:block">
          <h1 className="text-lg md:text-xl font-black text-gray-900 tracking-tight leading-none">
            Learning Portal
          </h1>
          <p className="text-[11px] md:text-[12px] text-gray-400 font-bold uppercase tracking-widest mt-1">
            Student: <span className="text-[#387467]">{data?.getUserInfo?.fullname?.split(' ')[0]}</span>
          </p>
        </div>
      </div>

      {/* Right side: Global Actions */}
      <div className="flex items-center gap-1 sm:gap-4 ml-auto">
        
        {/* Mobile Search - Example of responsive utility */}
        <button className="p-2 rounded-full hover:bg-gray-50 text-gray-400 md:hidden">
          <Search size={20} />
        </button>

        {/* Cart Icon */}
        <Link 
          href="/overview/cart" 
          className="relative p-2.5 rounded-xl hover:bg-[#387467]/5 transition-all group"
        >
          <ShoppingCart size={20} className="text-gray-500 group-hover:text-[#387467]" />
          {cartItems.length > 0 && (
            <span className="absolute top-1.5 right-1.5 bg-red-500 text-white text-[9px] font-black h-4 w-4 flex items-center justify-center rounded-full ring-2 ring-white animate-bounce">
              {cartItems.length}
            </span>
          )}
        </Link>

        {/* Notification Icon */}
        <button 
          className="p-2.5 rounded-xl hover:bg-gray-50 transition-all group relative"
        >
          <Bell size={20} className="text-gray-500 group-hover:text-gray-900" />
          <span className="absolute top-3 right-3 w-2 h-2 bg-[#387467] rounded-full ring-2 ring-white" />
        </button>

        <div className="h-6 w-[1px] bg-gray-100 mx-2 hidden md:block" />

        {/* User Profile */}
        <div className="flex items-center">
          <UserProfileComponent data={data} />
        </div>
      </div>
    </header>
  );
}

export default Header;