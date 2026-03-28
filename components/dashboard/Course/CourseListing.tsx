"use client";
import React, { useMemo, useState } from "react";
import CourseItem from "@/components/dashboard/Course/CourseItem";
import { Search, SlidersHorizontal, Filter } from "lucide-react";
import EmptyContainer from "@/components/utility/EmptyContainer";
import CenteredLoader from "@/components/utility/Loader";
import { cn } from "@/lib/utils"; 
import { 
  useGetCoursesQuery, 
  useGetEnrolledCoursesQuery 
} from "@/lib/redux/features/courses/courseApi";

type TabType = "all" | "in-progress" | "completed";

export default function CourseListing() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState<TabType>("all");

  const { data: allCourses, isLoading: loadingCourses } = useGetCoursesQuery(undefined);
  const { data: enrolledData, isLoading: loadingEnrolled } = useGetEnrolledCoursesQuery(undefined);

  const paidCourseIds = useMemo(() => {
    return enrolledData?.getUserEnrolledCourses?.map((c: any) => c.id) || [];
  }, [enrolledData]);

  const filteredCourses = useMemo(() => {
    let list = allCourses?.getCourses || [];

    if (searchTerm.trim()) {
      list = list.filter((c: any) =>
        c.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (activeTab === "in-progress") {
      list = list.filter((c: any) => {
        const enrollment = enrolledData?.getUserEnrolledCourses?.find((e: any) => e.id === c.id);
        return enrollment && enrollment.progress > 0 && enrollment.progress < 100;
      });
    } else if (activeTab === "completed") {
      list = list.filter((c: any) => {
        const enrollment = enrolledData?.getUserEnrolledCourses?.find((e: any) => e.id === c.id);
        return enrollment && enrollment.progress === 100;
      });
    }

    return list;
  }, [searchTerm, activeTab, allCourses, enrolledData]);

  if (loadingCourses || loadingEnrolled) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <CenteredLoader />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* --- Coursera Header Section --- */}
      <div className="border-b border-gray-100 mb-6 md:mb-10">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 pt-6 md:pt-10">
          <h1 className="text-2xl md:text-4xl font-black text-gray-900 tracking-tight">
            My Learning
          </h1>
          
          {/* Sub-navigation Tabs: Added Horizontal Scroll for Mobile */}
          <div className="flex gap-6 md:gap-10 mt-6 overflow-x-auto no-scrollbar scroll-smooth">
            {[
              { id: "all", label: "All Courses" },
              { id: "in-progress", label: "In Progress" },
              { id: "completed", label: "Completed" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as TabType)}
                className={cn(
                  "text-[13px] md:text-sm font-bold pb-4 px-1 transition-all border-b-2 whitespace-nowrap uppercase tracking-widest",
                  activeTab === tab.id 
                    ? "text-[#387467] border-[#387467]" 
                    : "text-gray-400 border-transparent hover:text-gray-800"
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        {/* --- Search & Filter Bar: Responsive Flex/Grid --- */}
        <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-4 mb-8 md:mb-12">
          <div className="relative w-full sm:max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            <input
              type="text"
              placeholder="Search your library..."
              className="w-full bg-gray-50/50 border border-gray-100 rounded-xl pl-10 pr-4 py-3 text-sm focus:ring-2 focus:ring-[#387467]/20 focus:border-[#387467] focus:bg-white outline-none transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <button className="flex items-center justify-center gap-2.5 px-5 py-3 border border-gray-100 rounded-xl text-xs font-black uppercase tracking-widest text-gray-600 hover:bg-gray-50 hover:border-gray-200 transition-all">
            <Filter size={14} className="text-[#387467]" />
            Sort & Filter
          </button>
        </div>

        {/* --- Course Grid: Optimized Column Spans --- */}
        {filteredCourses.length === 0 ? (
          <div className="py-20">
            <EmptyContainer
              title={activeTab === "all" ? "No courses found" : `No ${activeTab.replace("-", " ")} courses`}
              description="Explore our catalog to find new courses and start learning today."
            />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
            {filteredCourses.map((course: any) => (
              <div key={course.id} className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <CourseItem 
                  courseListing={course} 
                  paid={paidCourseIds.includes(course.id)} 
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}