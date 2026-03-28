"use client";
import React from "react";
import { useParams, useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { ChevronLeft, BookOpen, Clock, Award, ShieldCheck, Info } from "lucide-react";
import Accordion from "@/components/dashboard/Course/Accordion";
import CenteredLoader from "@/components/utility/Loader";
import EmptyContainer from "@/components/utility/EmptyContainer";
import { useGetCourseModulesQuery } from "@/lib/redux/features/courses/courseApi";
import { RootState } from "@/lib/redux/store";
import { cn } from "@/lib/utils";

const CourseModules = () => {
  const params = useParams();
  const router = useRouter();
  
  // ✅ Redux Selector
  const selectedCourse = useSelector((state: RootState) => state.courses.activeCourse); 

  const { data, isLoading, error } = useGetCourseModulesQuery(params?.id, {
    skip: !params?.id,
  });

  if (isLoading) return <div className="min-h-[80vh] flex items-center justify-center"><CenteredLoader /></div>;

  const modules = data?.getCourseModules || [];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
      
      {/* --- Responsive Breadcrumb --- */}
      <nav className="py-6 md:py-10">
        <button
          onClick={() => router.back()}
          className="group flex items-center gap-2 text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-black text-gray-400 hover:text-[#387467] transition-all"
        >
          <ChevronLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          Return to Catalog
        </button>
      </nav>

      {/* --- Coursera-Style Hero Section --- */}
      <header className="mb-10 md:mb-16 border-b border-gray-100 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 items-start">
          
          {/* Main Title Area */}
          <div className="lg:col-span-2 order-2 lg:order-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-[#387467]/10 text-[#387467] p-1.5 rounded-md">
                <ShieldCheck size={16} />
              </div>
              <span className="text-[9px] md:text-[10px] font-black text-[#387467] uppercase tracking-[0.2em]">
                ISO 9001:2015 Certified Curriculum
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-4 md:mb-6 leading-[1.1]">
              {modules[0]?.courseName || "Advanced Professional Certification"}
            </h1>
            
            <p className="text-gray-500 text-base md:text-lg leading-relaxed font-medium max-w-2xl">
              Master the technical requirements and compliance standards required for international recognition. This syllabus covers all mandatory modules.
            </p>
          </div>

          {/* Progress / Status Card - Stacks on top in mobile for immediate visibility */}
          <div className="order-1 lg:order-2 bg-white border border-gray-100 rounded-2xl p-5 md:p-6 shadow-sm flex flex-col gap-5">
            <div className="flex justify-between items-center pb-4 border-b border-gray-50">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Enrolment Status</span>
              <span className="bg-[#387467] text-white text-[9px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider">Active</span>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 shrink-0 rounded-full bg-gray-50 flex items-center justify-center text-[#387467]">
                  <BookOpen size={16} />
                </div>
                <div>
                  <p className="text-[13px] font-black text-gray-900 leading-none">{modules.length} Modules</p>
                  <p className="text-[9px] text-gray-400 uppercase font-bold mt-1">Syllabus Length</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 shrink-0 rounded-full bg-gray-50 flex items-center justify-center text-[#387467]">
                  <Award size={16} />
                </div>
                <div>
                  <p className="text-[13px] font-black text-gray-900 leading-none">Cert Path</p>
                  <p className="text-[9px] text-gray-400 uppercase font-bold mt-1">Professional Credit</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* --- Main Syllabus Section --- */}
      <section className="relative">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight">Syllabus Overview</h2>
            <p className="text-sm text-gray-400 font-medium mt-1">Follow the linear path to complete your certification.</p>
          </div>
          
          <div className="inline-flex items-center gap-2 text-gray-400 bg-gray-50 px-3 py-2 rounded-xl border border-gray-100 w-fit">
             <Info size={14} className="shrink-0" />
             <span className="text-[10px] font-black uppercase tracking-widest">Locked Content Policy</span>
          </div>
        </div>

        {modules.length === 0 ? (
          <EmptyContainer
            title="Syllabus is being prepared"
            description="Our instructors are currently finalizing the learning materials for this section."
            callToAction="Refresh Catalog"
          />
        ) : (
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
             <Accordion course={selectedCourse} modules={modules} />
          </div>
        )}
      </section>

      {/* --- ISO Footer --- */}
      <footer className="mt-24 pt-10 border-t border-gray-100 grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6">
        <div className="flex flex-col gap-3">
          <Clock size={20} className="text-[#387467]/40" />
          <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] leading-tight">
            Self-Paced<br />Learning
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <ShieldCheck size={20} className="text-[#387467]/40" />
          <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] leading-tight">
            Verified<br />Assessment
          </p>
        </div>
      </footer>
    </div>
  );
};

export default CourseModules;