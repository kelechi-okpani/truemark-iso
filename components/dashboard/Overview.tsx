"use client";
import React, { useMemo } from "react";
import { 
  BookOpen, 
  Heart, 
  Wallet, 
  ChevronRight,
  BarChart3
} from "lucide-react";
import { useSelector } from "react-redux";
import { useGetEnrolledCoursesQuery } from "@/lib/redux/features/courses/courseApi";
import { RootState } from "@/lib/redux/store"; // ✅ Ensure this path is correct

export default function Analytics() {
  // ✅ RTK Query for Enrolled Courses
  const { data: enrolledCourses, isLoading } = useGetEnrolledCoursesQuery(undefined);

  // ✅ Redux Selector for Wishlist from your cartSlice
  const wishlist = useSelector((state: RootState) => state.cart.wishlistItems);

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
    <div className="bg-white py-8">
      {/* ISO Header: Professional & Technical */}
      <div className="mb-10 px-1 border-l-4 border-[#387467] pl-6">
        <div className="flex items-center gap-2 mb-1">
          <BarChart3 size={14} className="text-[#387467]" />
          <span className="text-[10px] font-black text-[#387467] uppercase tracking-[0.4em]">
            System Diagnostics
          </span>
        </div>
        <h2 className="text-3xl font-black text-gray-900 tracking-tighter uppercase">
          Learning Analytics
        </h2>
        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">
          Audit of professional development and resource allocation
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        
        {/* Metric: Enrolled */}
        <CourseraMetricCard
          title="Active Enrollments"
          value={enrolledCourses?.length || 0}
          icon={<BookOpen size={20} />}
          footer="Access Curriculum"
          color="#387467"
        />

        {/* Metric: Wishlist */}
        <CourseraMetricCard
          title="Planned Certifications"
          value={wishlist?.length || 0}
          icon={<Heart size={20} />}
          footer="Review Wishlist"
          color="#387467" 
        />

        {/* Metric: Investment */}
        <CourseraMetricCard
          title="Total Capital Investment"
          value={formattedAmount}
          icon={<Wallet size={20} />}
          footer="Transaction Ledger"
          color="#387467"
        />

      </div>
    </div>
  );
}

// --- ISO Refined Metric Card ---
function CourseraMetricCard({ title, value, icon, footer, color }: any) {
  return (
    <div className="group flex flex-col bg-white border border-gray-100 rounded-[2rem] transition-all hover:border-[#387467]/20 hover:bg-slate-50/30 overflow-hidden">
      <div className="p-8 flex-grow">
        <div className="flex justify-between items-start mb-6">
          <div 
            className="flex items-center justify-center w-12 h-12 rounded-2xl bg-slate-50 text-[#387467] border border-slate-100 transition-colors group-hover:bg-white"
          >
            {icon}
          </div>
          <div className="h-2 w-2 rounded-full bg-gray-200 group-hover:bg-[#387467] transition-colors" />
        </div>

        <div className="space-y-1">
          <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">
            {title}
          </span>
          <h4 className="text-4xl font-black text-gray-900 tracking-tighter">
            {value}
          </h4>
        </div>
      </div>

      {/* ISO Action Bar */}
      <div className="mx-6 mb-6 px-6 py-4 bg-slate-50 rounded-2xl flex items-center justify-between group-hover:bg-[#387467] transition-all cursor-pointer">
        <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest group-hover:text-white transition-colors">
          {footer}
        </span>
        <ChevronRight size={14} className="text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
      </div>
    </div>
  );
}

function AnalyticsSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 py-10">
      {[1, 2, 3].map((i) => (
        <div key={i} className="h-60 w-full bg-slate-50 animate-pulse rounded-[2rem] border border-slate-100" />
      ))}
    </div>
  );
}