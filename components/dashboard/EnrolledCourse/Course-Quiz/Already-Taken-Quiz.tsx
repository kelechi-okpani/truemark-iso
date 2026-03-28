"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { ChevronLeft, AlertCircle, BarChart3, Home, ShieldCheck } from "lucide-react";
import { RootState } from "@/lib/redux/store"; // Adjust path to your store
import { cn } from "@/lib/utils";

interface QuizAlreadyTakenProps {
  error?: {
    message?: string;
  };
}

const QuizAlreadyTaken = ({ error }: QuizAlreadyTakenProps) => {
  const router = useRouter();
  
  // ✅ Switched from Zustand to Redux
  const selectedCourse = useSelector((state: RootState) => state.courses.activeCourse);

  return (
    <div className="min-h-[80vh] w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-20">
      
      {/* --- Minimalist Back Navigation --- */}
      <nav className="mb-8">
        <button
          onClick={() => router.back()}
          className="group flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-gray-400 hover:text-[#387467] transition-all"
        >
          <ChevronLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          Return to Course
        </button>
      </nav>

      {/* --- ISO-Standard Container (Low Shadow, Defined Borders) --- */}
      <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
        
        {/* Technical Header */}
        <div className="bg-[#387467] p-6 md:p-10 text-white relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-3 opacity-80">
              <ShieldCheck size={16} />
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">Verified Submission System</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-black tracking-tight">
              Assessment already submitted
            </h1>
            <p className="mt-2 text-[#F0FDF4]/80 text-sm font-medium max-w-xl">
              {selectedCourse?.name || "Professional Certification Program"}
            </p>
          </div>
          
          {/* Subtle Background Pattern for "ISO" feel */}
          <div className="absolute right-0 top-0 h-full w-1/3 bg-white/5 skew-x-[-20deg] translate-x-10" />
        </div>

        {/* Content Section */}
        <div className="p-6 md:p-12">
          <div className="flex flex-col items-center text-center max-w-lg mx-auto">
            
            {/* Status Icon */}
            <div className="w-16 h-16 rounded-full bg-yellow-50 flex items-center justify-center text-yellow-600 mb-6 border border-yellow-100">
              <AlertCircle size={32} />
            </div>

            <h2 className="text-xl font-black text-gray-900 tracking-tight mb-4">
              Duplicate Attempt Restricted
            </h2>
            
            <p className="text-gray-500 text-sm leading-relaxed mb-10">
              {error?.message || "Our records show that you have already completed this assessment."} You have met the requirements for this module and can now proceed to review your performance metrics.
            </p>

            {/* --- Action Grid: Responsive Buttons --- */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              <button
                onClick={() => router.push("/dashboard/results")} // Adjust path
                className="flex items-center justify-center gap-2 px-6 py-3.5 bg-[#387467] text-white rounded-xl text-xs font-black uppercase tracking-widest hover:bg-slate-900 transition-all shadow-md shadow-[#387467]/10 active:scale-[0.98]"
              >
                <BarChart3 size={16} />
                View Results
              </button>
              
              <button
                onClick={() => router.push("/dashboard/courses")} // Adjust path
                className="flex items-center justify-center gap-2 px-6 py-3.5 bg-white border border-gray-200 text-gray-600 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-gray-50 transition-all active:scale-[0.98]"
              >
                <Home size={16} />
                Back to Dashboard
              </button>
            </div>
          </div>
        </div>

        {/* Technical Footer Details */}
        <div className="bg-gray-50/50 border-t border-gray-50 px-8 py-4 flex flex-col md:flex-row justify-between items-center gap-3">
          <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">
            ISO Ref: AC-0992-B
          </span>
          <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">
            Digital Signature: SECURED
          </span>
        </div>
      </div>
    </div>
  );
};

export default QuizAlreadyTaken;