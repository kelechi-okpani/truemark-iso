"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { 
  ArrowLeft, 
  GraduationCap, 
  ChevronRight, 
  Activity, 
  FileCheck2,
  Lock
} from "lucide-react";

// ✅ Using your newly injected RTK Query hook
import { useGetEnrolledModulesQuery } from "@/lib/redux/features/courses/courseApi";
// ✅ Using Redux selector for the active course
import { selectActiveCourse } from "@/lib/redux/features/courses/courseSlice";

import CenteredLoader from "@/components/utility/Loader";
import EmptyContainer from "@/components/utility/EmptyContainer";
import EnrolledAccordion from "@/components/dashboard/EnrolledCourse/Enrolled-Accordion";
import Link from "next/link";
import { cn } from "@/lib/utils";

const EnrolledCourseModules = () => {
  const router = useRouter();
  const course = useSelector(selectActiveCourse);

  // ✅ RTK Query: Handles variables, skip logic, and caching automatically
  const { 
    data: modules, 
    isLoading, 
    isError 
  } = useGetEnrolledModulesQuery(course?.id as string, {
    skip: !course?.id,
  });

  return (
    <div className="max-w-7xl mx-auto pb-20 px-4 sm:px-6">
      {/* --- ISO Minimal Navigation --- */}
      <nav className="flex items-center justify-between py-6">
        <button
          onClick={() => router.back()}
          className="group flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-[#387467] transition-all"
        >
          <div className="p-2 bg-white border border-gray-100 rounded-lg group-hover:border-[#387467]/30 transition-all">
            <ArrowLeft size={14} />
          </div>
          Dashboard / {course?.name?.slice(0, 15)}...
        </button>

        <div className="hidden md:flex items-center gap-2 text-[9px] font-black text-gray-300 uppercase tracking-[0.4em]">
          <Lock size={10} /> Secure Learning Session
        </div>
      </nav>

      {/* --- Coursera-Style Professional Header --- */}
      <div className="relative bg-white border border-gray-100 rounded-[2rem] overflow-hidden mb-10 transition-all">
        {/* Brand Accent Bar */}
        <div className="absolute top-0 left-0 w-2 h-full bg-[#387467]" />
        
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10 p-8 md:p-14">
          <div className="space-y-6 max-w-3xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="bg-[#387467]/5 text-[#387467] text-[9px] font-black px-3 py-1.5 rounded-md uppercase tracking-[0.2em] border border-[#387467]/10">
                Authorized Curriculum
              </span>
              <div className="h-1 w-1 rounded-full bg-gray-200" />
              <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">
                Resource ID: {course?.id?.split('-')[0] || 'N/A'}
              </span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tighter uppercase leading-[0.9]">
              {course?.name || "Curriculum Overview"}
            </h1>
            
            <p className="text-sm text-gray-500 font-medium leading-relaxed max-w-xl">
              This certification track is aligned with ISO compliance standards. Complete all modular units and the final supervised assessment to generate your credential.
            </p>
          </div>

          <div className="flex flex-col gap-3 shrink-0">
            <Link href="/overview/enrolled-course/course/quiz-instruction" className="w-full">
              <button className="w-full flex items-center justify-center gap-4 bg-[#387467] text-white px-10 py-5 rounded-2xl font-black text-[11px] uppercase tracking-widest hover:bg-[#2d5d52] transition-all active:scale-[0.98] shadow-sm">
                <FileCheck2 size={18} strokeWidth={2.5} />
                Final Examination
                <ChevronRight size={14} />
              </button>
            </Link>
            <p className="text-[9px] text-center font-bold text-gray-300 uppercase tracking-widest">
              Prerequisite: 100% Completion
            </p>
          </div>
        </div>
      </div>


    <div className="flex justify-end mb-6">
      <Link href="/overview/enrolled-course/course/certification">
        <button className="flex items-center gap-4 bg-[#387467] text-white px-10 py-5 rounded-2xl font-black text-[11px] uppercase tracking-widest hover:bg-[#2d5d52] transition-all active:scale-[0.98] shadow-sm">
          <FileCheck2 size={18} strokeWidth={2.5} />
          Certification
          <ChevronRight size={14} />
        </button>
      </Link>
    </div>
 

      {/* --- Main Syllabus Container --- */}
      <div className="bg-white border border-gray-100 rounded-[2rem] p-4 md:p-10 shadow-sm shadow-gray-50">
        <div className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-50 pb-8">
            <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#387467]/5 flex items-center justify-center rounded-2xl text-[#387467]">
                  <GraduationCap size={24} />
                </div>
                <div>
                    <h2 className="text-sm font-black text-gray-900 uppercase tracking-tight">Technical Syllabus</h2>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Mastery-based learning path</p>
                </div>
            </div>
            
            <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-xl">
              <Activity size={14} className="text-[#387467]" />
              <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">
                {modules?.length || 0} Modules Total
              </span>
            </div>
        </div>

        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-32 space-y-6">
            <CenteredLoader />
            <p className="text-[9px] font-black text-gray-400 uppercase tracking-[0.5em] animate-pulse">
              Initializing Learning Assets
            </p>
          </div>
        ) : !modules || modules.length === 0 ? (
          <div className="py-20 border-2 border-dashed border-gray-50 rounded-[2rem]">
            <EmptyContainer
              title="Curriculum Pending"
              description="This specific learning path is currently being updated by the registrar."
            />
          </div>
        ) : (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <EnrolledAccordion course={course} modules={modules} />
          </div>
        )}
      </div>

      {/* --- ISO Audit Footer --- */}
      <footer className="mt-16 flex flex-col md:flex-row items-center justify-between border-t border-gray-100 pt-10 gap-6">
         <div className="flex items-center gap-4">
            <div className="h-2 w-2 rounded-full bg-[#387467]" />
            <span className="text-[9px] font-black text-gray-400 uppercase tracking-[0.4em]">
              ISO-27001 Certified Learning Environment
            </span>
         </div>
         <div className="flex gap-8">
            {["Standard Operating Procedures", "Honor Code", "Help Desk"].map((item) => (
              <span key={item} className="text-[9px] font-bold text-gray-400 uppercase tracking-widest cursor-pointer hover:text-[#387467] transition-colors">
                {item}
              </span>
            ))}
         </div>
      </footer>
    </div>
  );
};

export default EnrolledCourseModules;