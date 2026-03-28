"use client";

import { HashLoader } from "react-spinners";
import React from "react";
import { Loader2, ShieldCheck } from "lucide-react";
import { useSelector } from "react-redux";
import { apiSlice } from "@/lib/redux/api/apiSlice";
// This is a trick to see if any RTK Query mutation is currently "pending" globally


export default function CenteredLoader() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <HashLoader size={60} color="#387467" />
    </div>
  );
}






export function GlobalLoader () {
  // Check if any mutation is in flight across the entire app
  const isAnyMutationLoading = useSelector((state: any) => 
    Object.values(state[apiSlice.reducerPath].mutations).some(
      (mutation: any) => mutation.status === "pending"
    )
  );

  if (!isAnyMutationLoading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white/60 backdrop-blur-md animate-in fade-in duration-300">
      <div className="relative flex flex-col items-center">
        {/* Outer Ring */}
        <div className="absolute inset-0 rounded-full border-4 border-[#387467]/10 border-t-[#387467] animate-spin w-20 h-20 -m-2" />
        
        {/* Inner Branding */}
        <div className="bg-white p-4 rounded-full shadow-xl border border-gray-100 flex items-center justify-center">
          <ShieldCheck className="text-[#387467]" size={32} />
        </div>

        {/* Status Text */}
        <div className="mt-8 text-center">
          <h3 className="text-lg font-bold text-gray-900 tracking-tight">
            Securing Connection
          </h3>
          <p className="text-sm text-gray-500 font-medium animate-pulse mt-1">
            Validating ISO security protocols...
          </p>
        </div>
      </div>
      
      {/* Footer Branding for the LMS */}
      <div className="absolute bottom-10 flex items-center gap-2 opacity-40">
        <div className="w-2 h-2 rounded-full bg-[#387467] animate-bounce" />
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-600">
          Truemark Digital Standards
        </span>
      </div>
    </div>
  );
};

