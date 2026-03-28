"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { 
  ChevronLeft, 
  ShieldAlert, 
  Clock, 
  Wifi, 
  FileCheck, 
  AlertCircle,
  Play
} from "lucide-react";
import { selectActiveCourse } from "@/lib/redux/features/courses/courseSlice";
import CenteredLoader from "@/components/utility/Loader";

const QuizIntro = () => {
  const router = useRouter();
  const activeCourse = useSelector(selectActiveCourse);

  // ISO Standardized Instructions
  const examInstructions = [
    {
      icon: <Clock size={16} />,
      text: "Continuous Sitting: The assessment must be completed in one session. The timer remains active once initialized.",
    },
    {
      icon: <Wifi size={16} />,
      text: "Connectivity: Ensure a stable internet connection. Network interruptions may invalidate your submission.",
    },
    {
      icon: <FileCheck size={16} />,
      text: "Submission: Responses are automatically logged and finalized when the allocated time expires.",
    },
    {
      icon: <ShieldAlert size={16} />,
      text: "Integrity: Use of external resources or browser refreshing is strictly prohibited under ISO compliance.",
    },
  ];

  if (!activeCourse) {
    return (
      <div className="min-h-[400px] flex items-center justify-center">
        <CenteredLoader />
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 md:py-20">
      
      {/* --- Minimalist Back Nav --- */}
      <button
        onClick={() => router.back()}
        className="group mb-8 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 hover:text-[#387467] transition-all"
      >
        <ChevronLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
        Return to Module
      </button>

      {/* --- Coursera-Style Intro Card --- */}
      <div className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm shadow-gray-200/20">
        
        {/* Professional Header */}
        <div className="bg-[#387467] p-8 md:p-12 text-white">
          <div className="flex items-center gap-2 mb-4 opacity-80">
            <AlertCircle size={16} />
            <span className="text-[10px] font-black uppercase tracking-[0.2em]">Pre-Assessment Briefing</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black tracking-tight mb-3">
            {activeCourse?.name}
          </h1>
          <p className="text-green-50/70 text-sm font-medium">
            Technical Evaluation & Certification Requirements
          </p>
        </div>

        {/* Content Body */}
        <div className="p-8 md:p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            
            {/* Left: Detailed Instructions */}
            <div className="lg:col-span-3 space-y-8">
              <section>
                <h2 className="text-xs font-black text-gray-400 uppercase tracking-[0.2em] mb-6">
                  Standard Operating Procedures
                </h2>
                <div className="space-y-6">
                  {examInstructions.map((item, idx) => (
                    <div key={idx} className="flex gap-4 group">
                      <div className="mt-1 w-8 h-8 shrink-0 rounded-lg bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-[#387467]/10 group-hover:text-[#387467] transition-colors">
                        {item.icon}
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed font-medium">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Right: System Check / CTA */}
            <div className="lg:col-span-2">
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 sticky top-24">
                <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4">
                  Assessment Overview
                </h3>
                <ul className="space-y-3 mb-8">
                  <li className="flex justify-between text-sm py-2 border-b border-gray-200/50">
                    <span className="text-gray-500">Passing Score</span>
                    <span className="font-black text-gray-900">80%</span>
                  </li>
                  <li className="flex justify-between text-sm py-2 border-b border-gray-200/50">
                    <span className="text-gray-500">Attempts</span>
                    <span className="font-black text-gray-900">1 Allowed</span>
                  </li>
                  <li className="flex justify-between text-sm py-2">
                    <span className="text-gray-500">Status</span>
                    <span className="font-black text-[#387467]">Verified</span>
                  </li>
                </ul>

                <button
                  onClick={() => router.push(`/overview/enrolled-course/course/quiz-instruction/quiz`)}
                  className="w-full flex items-center justify-center gap-3 py-4 bg-[#387467] text-white rounded-xl text-xs font-black uppercase tracking-[0.2em] hover:bg-slate-900 transition-all shadow-lg shadow-[#387467]/10 active:scale-[0.98]"
                >
                  <Play size={14} fill="currentColor" />
                  Initialize Exam
                </button>
                
                <p className="mt-4 text-[9px] text-center text-gray-400 leading-normal font-bold uppercase tracking-widest">
                  By clicking, you confirm adherence to the <br /> 
                  Professional Integrity Policy.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Flat ISO Footer */}
        <footer className="px-8 py-5 bg-[#FBFBFB] border-t border-gray-50 flex justify-between items-center">
            <span className="text-[9px] font-bold text-gray-300 uppercase tracking-widest">
              Security Protocol: V.2.06
            </span>
            <div className="flex gap-4">
               <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
               <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">System Ready</span>
            </div>
        </footer>
      </div>
    </div>
  );
};

export default QuizIntro;