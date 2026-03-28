"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { ChevronLeft, Inbox, Headphones, Home, ShieldQuestion } from "lucide-react";
import { selectActiveCourse } from "@/lib/redux/features/courses/courseSlice";

const NoQuestion = () => {
  const router = useRouter();
  const activeCourse = useSelector(selectActiveCourse);

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-3xl">
        
        {/* --- Minimalist Back Nav --- */}
        <button
          onClick={() => router.back()}
          className="group mb-8 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 hover:text-[#387467] transition-all"
        >
          <ChevronLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          Go Back
        </button>

        {/* --- ISO Empty State Container --- */}
        <div className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm shadow-gray-200/20">
          
          {/* Flat Technical Header */}
          <div className="bg-[#387467] p-8 text-white relative overflow-hidden">
            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2 opacity-80">
                  <ShieldQuestion size={14} />
                  <span className="text-[9px] font-black uppercase tracking-[0.2em]">System Status: Null</span>
                </div>
                <h1 className="text-xl md:text-2xl font-black tracking-tight uppercase">
                  Assessment Unavailable
                </h1>
                <p className="text-green-50/70 text-xs font-medium mt-1">
                  {activeCourse?.name || "Professional Development Module"}
                </p>
              </div>
            </div>
            {/* Subtle ISO Tech Slashes */}
            <div className="absolute inset-y-0 right-0 w-32 bg-white/5 skew-x-[-20deg] translate-x-10" />
          </div>

          <div className="p-10 md:p-16 text-center">
            {/* Professional Empty Icon */}
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gray-50 text-gray-300 border border-gray-100 mb-8">
              <Inbox size={40} strokeWidth={1.5} />
            </div>

            <div className="max-w-md mx-auto space-y-4">
              <h2 className="text-lg font-black text-gray-900 tracking-tight">
                No Questions Configured
              </h2>
              <p className="text-sm text-gray-500 leading-relaxed font-medium">
                The assessment module for this course is currently under review or has not been published by the administrator. Please check back later or proceed to the next module.
              </p>
            </div>

            {/* --- Action Grid: Responsive --- */}
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => router.push("/dashboard")}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-[#387467] text-white rounded-xl text-xs font-black uppercase tracking-widest hover:bg-slate-900 transition-all shadow-lg shadow-[#387467]/10 active:scale-95"
              >
                <Home size={16} />
                Return Dashboard
              </button>
              
              <button
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-white border border-gray-200 text-gray-600 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-gray-50 transition-all active:scale-95"
              >
                <Headphones size={16} />
                Support Desk
              </button>
            </div>
          </div>

          {/* Verification Footer */}
          <footer className="px-8 py-4 bg-gray-50/50 border-t border-gray-50 flex justify-center">
            <span className="text-[9px] font-bold text-gray-300 uppercase tracking-[0.3em]">
              ISO Management Protocol: E-404-NULL
            </span>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default NoQuestion;