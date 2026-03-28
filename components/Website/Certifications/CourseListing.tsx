"use client";
import React, { useMemo } from "react";
import { Search, BookOpen, GraduationCap, Filter } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";

// ✅ Using your RTK Query hook and Redux slice for search
import { useGetCoursesQuery } from "@/lib/redux/features/courses/courseApi";
import { setSearchQuery, selectSearchQuery } from "@/lib/redux/features/courses/courseSlice";

import CenteredLoader from "@/components/utility/Loader";
import CourseItem from "@/components/Website/Certifications/CourseItem";
import { cn } from "@/lib/utils";

export default function CourseListing() {
  const dispatch = useDispatch();
  const searchTerm = useSelector(selectSearchQuery);

  // ✅ RTK Query: Handles the data fetching, caching, and loading state
  const { data: courses, isLoading } = useGetCoursesQuery(undefined);

  const filteredCourses = useMemo(() => {
    const list = courses || [];
    if (!searchTerm.trim()) return list;
    
    return list.filter((c: any) =>
      c.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, courses]);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
        <CenteredLoader />
        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">
          Loading Academic Catalog
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FDFDFD] pb-24">
      {/* --- ISO Industrial Header --- */}
      <div className="bg-[#387467] text-white overflow-hidden relative">
        {/* Subtle geometric pattern overlay for a premium feel */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />
        
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 relative z-10">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <GraduationCap size={18} strokeWidth={2.5} />
              <span className="text-[10px] font-black uppercase tracking-[0.3em]">
                Verified Technical Curriculum
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-[0.85]">
              Professional <br />
              <span className="text-white/80">Certifications</span>
            </h1>
            <p className="max-w-xl text-sm md:text-base font-medium text-white/70 leading-relaxed mt-2">
              Advance your career with industry-recognized paths designed to meet global ISO training standards.
            </p>
          </div>
        </div>
      </div>

      {/* --- Catalog Controls --- */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center -mt-8 gap-4 mb-12">
          {/* Professional Search Input */}
          <div className="relative w-full md:w-full max-w-xl group shadow-xl shadow-black/5">
            <Search 
              className={cn(
                "absolute left-4 top-1/2 -translate-y-1/2 transition-colors",
                searchTerm ? "text-[#387467]" : "text-gray-400"
              )} 
              size={20} 
            />
            <input
              type="text"
              placeholder="SEARCH THE CATALOG..."
              className="w-full bg-white border-none rounded-2xl pl-12 pr-4 py-5 text-[11px] font-black tracking-widest uppercase outline-none focus:ring-2 focus:ring-[#387467]/20 transition-all placeholder:text-gray-300"
              value={searchTerm}
              onChange={(e) => dispatch(setSearchQuery(e.target.value))}
            />
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
             <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-4 bg-white border border-gray-100 rounded-2xl text-[10px] font-black uppercase tracking-widest text-gray-500 hover:text-[#387467] transition-all">
                <Filter size={14} /> Refine
             </button>
          </div>
        </div>

        {/* --- Content Area --- */}
        {filteredCourses.length === 0 ? (
          <div className="text-center py-20 bg-white border border-dashed border-gray-200 rounded-[2rem]">
             <BookOpen size={40} className="mx-auto text-gray-200 mb-4" />
             <h3 className="text-xs font-black uppercase tracking-widest text-gray-400">
                No matching curricula found
             </h3>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10">
            {filteredCourses.map((course: any, index: number) => (
              <div 
                key={course.id || index}
                className="animate-in fade-in slide-in-from-bottom-4 duration-500"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CourseItem courseListing={course} />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ISO Footer Section */}
      <div className="max-w-7xl mx-auto px-6 mt-20 opacity-30 text-center">
         <p className="text-[9px] font-black uppercase tracking-[0.5em] text-gray-400">
            Global Certification Directory • Registered Training Entity
         </p>
      </div>
    </div>
  );
}