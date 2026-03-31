"use client";
import React, { useMemo } from "react";
import { 
  Search, 
  SlidersHorizontal, 
  BookOpen, 
  LayoutGrid, 
  ArrowUpRight,
  Filter
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";

// ✅ Redux Actions & Selectors
import { setSearchQuery, selectSearchQuery } from "@/lib/redux/features/courses/courseSlice";
import { useGetEnrolledCoursesQuery } from "@/lib/redux/features/courses/courseApi";

import EmptyContainer from "@/components/utility/EmptyContainer";
import CenteredLoader from "@/components/utility/Loader";
import EnrolledCourseItem from "@/components/dashboard/EnrolledCourse/Enrolled-Course-Item";
import { cn } from "@/lib/utils";

export default function EnrolledCourseListing() {
  const dispatch = useDispatch();
  const searchTerm = useSelector(selectSearchQuery); // Using global search state

  // ✅ RTK Query with cached data
  const { data, isLoading, isFetching } = useGetEnrolledCoursesQuery(undefined);

  // const filteredCourses = useMemo(() => {
  //   const courses = data || []; // Adjust based on your actual API return structure
  //   if (!searchTerm.trim()) return courses;
    
  //   return courses.filter((course: any) =>
  //     course.name.toLowerCase().includes(searchTerm.toLowerCase())
  //   );
  // }, [searchTerm, data]);


  const filteredCourses = useMemo(() => {
    // 1. Get raw data or empty array
    const rawCourses = data || []; 
    
    // 2. Filter by search term first (Performance optimization)
    const matchedCourses = !searchTerm.trim() 
      ? rawCourses 
      : rawCourses.filter((course: any) =>
          course.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

    // 3. Deduplicate: Show the first occurrence, ignore subsequent duplicates
    // Using a Map ensures we only keep one entry per unique ID
    const uniqueMap = new Map();
    
    matchedCourses.forEach((course: any) => {
      if (!uniqueMap.has(course.id)) {
        uniqueMap.set(course.id, course);
      }
    });

    return Array.from(uniqueMap.values());
  }, [searchTerm, data]);



  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-4">
        <CenteredLoader />
        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">
          Syncing Academic Records...
        </span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FDFDFD] pb-24">
      {/* --- ISO Master Header --- */}
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[#387467]">
                <div className="p-1.5 bg-[#387467]/5 rounded-md">
                  <BookOpen size={16} />
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.25em]">
                  Student Dashboard
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tighter uppercase">
                My Enrolled <span className="text-[#387467]">Certifications</span>
              </h1>
              <p className="text-xs font-medium text-gray-500 max-w-md">
                Access your active learning paths and verified technical curriculum.
              </p>
            </div>

            <div className="flex items-center gap-4 text-[10px] font-black text-gray-400 uppercase tracking-widest bg-gray-50 px-4 py-2 rounded-lg border border-gray-100">
               <LayoutGrid size={14} /> {filteredCourses.length} ACTIVE PATHS
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-10">
        {/* --- Coursera-Style Utility Bar --- */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          <div className="relative w-full md:w-full max-w-lg group">
            <Search 
              className={cn(
                "absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-300",
                searchTerm ? "text-[#387467]" : "text-gray-300"
              )} 
              size={18} 
            />
            <input
              type="text"
              placeholder="SEARCH BY COURSE NAME OR ID..."
              className="w-full bg-white border border-gray-200 rounded-xl pl-12 pr-4 py-4 text-[11px] font-bold tracking-widest uppercase outline-none focus:ring-1 focus:ring-[#387467] focus:border-[#387467] transition-all placeholder:text-gray-300 shadow-sm shadow-gray-100/50"
              value={searchTerm}
              onChange={(e) => dispatch(setSearchQuery(e.target.value))}
            />
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-4 bg-white border border-gray-200 rounded-xl text-[10px] font-black uppercase tracking-widest text-gray-600 hover:bg-gray-50 transition-all">
              <Filter size={14} /> Filter
            </button>
            <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-4 bg-white border border-gray-200 rounded-xl text-[10px] font-black uppercase tracking-widest text-gray-600 hover:bg-gray-50 transition-all">
              <SlidersHorizontal size={14} /> Sort
            </button>
          </div>
        </div>

        {/* --- Grid Layout --- */}
        {filteredCourses.length === 0 ? (
          <div className="py-20 border-2 border-dashed border-gray-100 rounded-3xl">
            <EmptyContainer
              title="NO CURRICULUM MATCHES"
              description={searchTerm ? `The record "${searchTerm}" does not match our current database.` : "Your enrollment list is currently empty."}
              callToAction="Explore Catalog"
              to="/overview/course"
            />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredCourses.map((course: any) => (
              <div 
                key={course.id} 
                className="relative"
              >
                <EnrolledCourseItem 
                  courseListing={course} 
                  paid={true} 
                />
                {/* Decorative ISO Corner (Optional) */}
                <div className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity">
                   <ArrowUpRight size={20} className="text-[#387467]" />
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* --- Page Footer --- */}
      <footer className="max-w-7xl mx-auto px-6 py-10 opacity-50">
          <p className="text-[9px] font-black text-center text-gray-400 uppercase tracking-[0.4em]">
            Authorized Learning Management Environment • Internal Use Only
          </p>
      </footer>
    </div>
  );
}