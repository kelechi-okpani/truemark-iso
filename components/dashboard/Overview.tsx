"use client";
import React, { useMemo } from "react";
import { 
  BookOpen, 
  Heart, 
  Wallet, 
  ChevronRight 
} from "lucide-react";
import { useCourseStore } from "@/store/useCourseStore";
import { useGetEnrolledCoursesQuery } from "@/lib/redux/features/courses/courseApi";

export default function Analytics() {
  const { wishlist } = useCourseStore();
  const { data: enrolledCourses, isLoading } = useGetEnrolledCoursesQuery(undefined);

  const { formattedAmount } = useMemo(() => {
    const total = enrolledCourses?.reduce(
      (sum: number, course: any) => sum + (Number(course?.price) || 0),
      0
    ) || 0;

    const formatted = new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
    }).format(total);

    return { formattedAmount: formatted };
  }, [enrolledCourses]);

  if (isLoading) return <AnalyticsSkeleton />;

  return (
    <div className="bg-white py-6">
      {/* Header Section: Coursera style title */}
      <div className="mb-6 px-1">
        <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Learning Activity</h2>
        <p className="text-sm text-gray-600">Track your progress and financial investment.</p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        
        {/* Metric: Enrolled */}
        <CourseraMetricCard
          title="Enrolled Courses"
          value={enrolledCourses?.length || 0}
          icon={<BookOpen className="text-[#387467]" size={20} />}
          footer="View my courses"
          color="#387467"
        />

        {/* Metric: Wishlist */}
        <CourseraMetricCard
          title="Wishlist"
          value={wishlist?.length || 0}
          icon={<Heart className="text-pink-600" size={20} />}
          footer="Continue Purchase"
          color="#db2777"
        />

        {/* Metric: Investment */}
        <CourseraMetricCard
          title="Total Amount"
          value={formattedAmount}
          icon={<Wallet className="text-blue-600" size={20} />}
          footer="Download receipts"
          color="#2563eb"
        />

      </div>
    </div>
  );
}

// --- Coursera-Inspired Metric Card ---
function CourseraMetricCard({ title, value, icon, footer, color }: any) {
  return (
    <div className="group relative flex flex-col bg-white border border-gray-200 rounded-lg transition-all hover:border-gray-300 hover:bg-gray-50/50">
      <div className="p-6 flex-grow">
        <div className="flex items-center gap-3 mb-4">
          <div 
            className="flex items-center justify-center w-10 h-10 rounded-md bg-gray-50 border border-gray-100"
          >
            {icon}
          </div>
          <span className="text-[13px] font-semibold text-gray-500 uppercase tracking-wider">
            {title}
          </span>
        </div>

        <div className="flex items-baseline gap-2">
          <h4 className="text-3xl font-bold text-gray-900 tracking-tighter">
            {value}
          </h4>
        </div>
      </div>

      {/* Coursera Style Footer Action */}
      <div className="px-6 py-3 border-t border-gray-100 flex items-center justify-between group-hover:bg-gray-50 transition-colors cursor-pointer">
        <span className="text-xs font-bold text-[#387467] uppercase tracking-tighter">
          {footer}
        </span>
        <ChevronRight size={14} className="text-[#387467] transform group-hover:translate-x-1 transition-transform" />
      </div>
      
      {/* Accent strip on top - Coursera aesthetic */}
      <div 
        className="absolute top-0 left-0 right-0 h-[3px] rounded-t-lg" 
        style={{ backgroundColor: color }}
      />
    </div>
  );
}

function AnalyticsSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 py-6">
      {[1, 2, 3].map((i) => (
        <div key={i} className="h-44 w-full bg-gray-50 animate-pulse rounded-lg border border-gray-100" />
      ))}
    </div>
  );
}