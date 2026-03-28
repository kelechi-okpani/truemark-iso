"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { BookOpen, Award, BarChart3, ChevronRight } from "lucide-react";
// ✅ Import your slice action to replace the old Zustand/Local store
// import { setSelectedCourse } from "@/lib/redux/features/courses/courseSlice";
import { setSelectedCourse } from "@/lib/redux/features/courses/courseSlice";
import { CourseList } from "@/types/blog";
import { cn } from "@/lib/utils";

interface Props {
  courseListing: CourseList;
  paid: boolean;
}

const EnrolledCourseItem = ({ courseListing, paid }: Props) => {
  const dispatch = useDispatch();
  const { image, name, price, id } = courseListing;

  const handleSelect = () => {
    dispatch(setSelectedCourse({ ...courseListing, id: String(courseListing.id) }));
  };

  return (
    <div className="group bg-white border border-gray-100 rounded-xl overflow-hidden transition-all duration-300 hover:border-gray-300 hover:bg-[#FDFDFD]">
      <Link 
        href={`/overview/enrolled-course/course`} 
        onClick={handleSelect}
        className="block"
      >
        {/* --- Image Container --- */}
        <div className="relative aspect-video w-full overflow-hidden bg-gray-100">
          <Image
            src={image || "/placeholder-course.jpg"}
            alt={name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* ISO Status Badge */}
          {paid && (
            <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-white/95 backdrop-blur-sm text-[#387467] px-2 py-1 rounded-md shadow-sm border border-gray-100">
              <Award size={12} strokeWidth={3} />
              <span className="text-[9px] font-black uppercase tracking-widest">Enrolled</span>
            </div>
          )}
        </div>

        {/* --- Content Area --- */}
        <div className="p-5 space-y-4">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-[10px] font-black text-gray-400 uppercase tracking-[0.15em]">
              <BookOpen size={12} className="text-[#387467]" />
              Professional Certification
            </div>
            <h3 className="text-base font-black text-gray-900 leading-tight tracking-tight min-h-[40px] line-clamp-2">
              {name}
            </h3>
          </div>

          {/* Metadata Row */}
          <div className="flex items-center justify-between border-t border-gray-50 pt-4">
            <div className="flex flex-col">
              <span className="text-[9px] font-bold text-gray-400 uppercase tracking-tighter">Investment</span>
              <p className="text-sm font-black text-gray-700">
                {new Intl.NumberFormat("en-NG", {
                  style: "currency",
                  currency: "NGN",
                  maximumFractionDigits: 0,
                }).format(Number(price ?? 0))}
              </p>
            </div>
            
            <div className="flex flex-col items-end text-right">
              <span className="text-[9px] font-bold text-gray-400 uppercase tracking-tighter">Status</span>
              <div className="flex items-center gap-1 text-[#387467] text-[11px] font-bold uppercase">
                <BarChart3 size={12} />
                In Progress
              </div>
            </div>
          </div>

          {/* Coursera-style CTA */}
          <div className="pt-2">
            <div className="flex items-center justify-center w-full gap-2 px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-[11px] font-black uppercase tracking-widest text-[#387467] group-hover:bg-[#387467] group-hover:text-white group-hover:border-[#387467] transition-all duration-300">
              Continue Learning
              <ChevronRight size={14} className="transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default EnrolledCourseItem;