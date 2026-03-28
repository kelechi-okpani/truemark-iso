"use client";
import React from "react";
import { useDispatch } from "react-redux";
import { CourseList } from "@/types/blog";
import { MoreVertical, Pencil, Trash2, PlayCircle, FileText, CheckCircle } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

interface CourseVideoItemProps {
  courseListing: CourseList;
  module: any;
}

const CourseVideoItem = ({ courseListing, module }: CourseVideoItemProps) => {
  const dispatch = useDispatch();
  const { name, video, description } = courseListing;

  const handleEdit = () => {
    console.log("Editing:", name);
  };

  const handleDelete = () => {
    console.log("Deleting:", name);
  };

  return (
    <div className="group bg-white rounded-2xl border border-gray-100 hover:border-[#387467]/30 hover:shadow-xl hover:shadow-[#387467]/5 transition-all duration-500 overflow-hidden flex flex-col h-full">
      
      {/* --- Video Section: Fixed Aspect Ratio --- */}
      <div className="relative aspect-video bg-slate-900 overflow-hidden">
        <video
          poster={module?.image}
          src={video}
          autoPlay={false}
          controls={true}
          className="w-full h-full object-contain"
        >
          Your browser does not support the video tag.
        </video>

        {/* Overlay Actions: Always visible on mobile, hover-only on desktop */}
        <div className="absolute top-3 right-3 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 z-10">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="bg-white/95 backdrop-blur-md p-2 rounded-xl shadow-lg border border-gray-100 text-gray-700 hover:text-[#387467] active:scale-95 transition-all">
                <MoreVertical size={18} />
              </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="w-48 p-1.5 rounded-2xl shadow-2xl border-gray-100 z-[50]">
              <DropdownMenuItem 
                onClick={handleEdit}
                className="flex items-center gap-3 px-4 py-3 text-xs font-bold cursor-pointer rounded-xl hover:bg-gray-50 transition-colors"
              >
                <Pencil size={14} className="text-gray-400" /> Edit Metadata
              </DropdownMenuItem>
              
              <DropdownMenuItem 
                onClick={handleDelete}
                className="flex items-center gap-3 px-4 py-3 text-xs font-bold cursor-pointer rounded-xl text-red-600 hover:bg-red-50 transition-colors"
              >
                <Trash2 size={14} className="text-red-400" /> Delete Asset
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Status Indicator */}
        <div className="absolute bottom-3 left-3 pointer-events-none">
            <span className="bg-[#387467]/90 backdrop-blur-sm text-white text-[9px] font-black px-2.5 py-1.5 rounded-lg uppercase tracking-[0.15em] flex items-center gap-1.5 shadow-xl border border-white/10">
                <PlayCircle size={12} strokeWidth={3} /> 
                Video Unit
            </span>
        </div>
      </div>

      {/* --- Content Section --- */}
      <div className="p-4 sm:p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start gap-4 mb-3">
          <h3 className="text-sm sm:text-base font-black text-gray-900 leading-tight tracking-tight capitalize group-hover:text-[#387467] transition-colors line-clamp-2">
            {name}
          </h3>
        </div>
        
        <p className="text-[12px] sm:text-sm text-gray-500 line-clamp-2 leading-relaxed font-medium mb-6">
          {description || "No description provided for this professional training module."}
        </p>

        {/* --- Footer Metadata: Responsive Layout --- */}
        <div className="mt-auto pt-4 border-t border-gray-50 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-1.5 text-[9px] font-black text-gray-400 uppercase tracking-widest bg-gray-50 px-2 py-1 rounded-md">
                <FileText size={12} className="text-[#387467]/40" /> 
                Resource Included
            </div>
            <div className="flex items-center gap-1 text-[9px] font-black text-[#387467] uppercase tracking-widest bg-[#387467]/5 px-2 py-1 rounded-md">
                <CheckCircle size={10} />
                Verified
            </div>
        </div>
      </div>
    </div>
  );
};

export default CourseVideoItem;