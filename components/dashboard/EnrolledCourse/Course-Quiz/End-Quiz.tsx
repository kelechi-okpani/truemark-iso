"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { ChevronLeft, Trophy, Share2, RotateCcw, Download, ShieldCheck } from "lucide-react";
import ScoreCircle from "@/components/utility/ScoreCircle";
import { selectActiveCourse } from "@/lib/redux/features/courses/courseSlice";
import { cn } from "@/lib/utils";

interface QuizEndProps {
  userScore: number;
}

const QuizEnd = ({ userScore }: QuizEndProps) => {
  const router = useRouter();
  const activeCourse = useSelector(selectActiveCourse);
  const max = 100;
  const isPassing = userScore >= 70; // ISO Standard threshold example

  return (
    <div className="min-h-screen bg-[#FDFDFD] px-4 py-8 md:py-16">
      <div className="max-w-4xl mx-auto">
        
        {/* --- Minimalist Back Navigation --- */}
        <button
          onClick={() => router.back()}
          className="group mb-8 flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-gray-400 hover:text-[#387467] transition-all"
        >
          <ChevronLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          Back to Classroom
        </button>

        {/* --- ISO Results Container --- */}
        <div className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm shadow-gray-200/20">
          
          {/* Header Section */}
          <div className="bg-[#387467] p-8 md:p-12 text-white relative">
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <ShieldCheck size={18} className="text-green-300" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-green-100">
                  Official Record of Achievement
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-black tracking-tight mb-2">
                Assessment Complete
              </h1>
              <p className="text-green-50/70 text-sm font-medium max-w-lg">
                Your performance for <span className="text-white underline underline-offset-4 decoration-green-400">{activeCourse?.name}</span> has been calculated and logged.
              </p>
            </div>
            
            {/* Subtle ISO Tech Pattern */}
            <div className="absolute top-0 right-0 w-64 h-full bg-white/5 -skew-x-12 translate-x-20 pointer-events-none" />
          </div>

          <div className="p-8 md:p-16">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              
              {/* --- Visualization Section --- */}
              <div className="relative flex flex-col items-center">
                <div className="relative p-4 bg-gray-50 rounded-full border border-gray-100 shadow-inner">
                  <ScoreCircle 
                    score={userScore} 
                    maxScore={max} 
                    size={220} 
                    stroke={12} 
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                    <Trophy size={32} className={cn("mb-1", isPassing ? "text-[#387467]" : "text-gray-300")} />
                    <span className="text-xs font-black text-gray-400 uppercase tracking-widest">Score</span>
                  </div>
                </div>
                <div className="mt-6 text-center">
                   <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Final Grade</p>
                   <h3 className={cn("text-2xl font-black mt-1", isPassing ? "text-[#387467]" : "text-red-600")}>
                    {isPassing ? "PASSED" : "RE-ATTEMPT REQUIRED"}
                   </h3>
                </div>
              </div>

              {/* --- Details & Actions --- */}
              <div className="flex-1 space-y-8">
                <div className="space-y-4">
                  <div className="p-5 bg-green-50/50 border border-green-100 rounded-2xl">
                    <h4 className="text-xs font-black text-[#387467] uppercase tracking-widest mb-2 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#387467]" />
                      System Summary
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed font-medium">
                      You have successfully met the technical criteria for this module. This result is now a permanent part of your professional transcript.
                    </p>
                  </div>
                </div>

                {/* Grid of Action Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button className="flex items-center justify-center gap-2 px-6 py-4 bg-[#387467] text-white rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-slate-900 transition-all shadow-lg shadow-[#387467]/10 active:scale-95">
                    <Download size={16} />
                    Certificate
                  </button>
                  <button className="flex items-center justify-center gap-2 px-6 py-4 bg-white border border-gray-200 text-gray-700 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-gray-50 transition-all active:scale-95">
                    <Share2 size={16} />
                    Share Results
                  </button>
                  <button 
                    onClick={() => router.push("/dashboard")}
                    className="sm:col-span-2 flex items-center justify-center gap-2 px-6 py-4 text-gray-400 text-[10px] font-black uppercase tracking-[0.3em] hover:text-[#387467] transition-colors"
                  >
                    <RotateCcw size={14} />
                    Return to Course Overview
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* Verification Footer */}
          <footer className="px-8 py-5 bg-gray-50 border-t border-gray-100 flex flex-wrap justify-between items-center gap-4">
            <div className="flex items-center gap-4">
               <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Ref: ASSESSMENT-LOG-{new Date().getFullYear()}</span>
            </div>
            <div className="flex items-center gap-1.5 text-[9px] font-black text-[#387467] uppercase tracking-widest opacity-60">
               <ShieldCheck size={12} /> Digital Verification Secured
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default QuizEnd;