"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { PlayCircle, FileText, CheckCircle2, ShieldCheck, Info } from "lucide-react";
import { cn } from "@/lib/utils";
import { 
  setActiveLesson, 
  selectCurrentLesson 
} from "@/lib/redux/features/courses/courseSlice";

// Types based on your provided props
interface VideoItemProps {
  courseListing: {
    id: string;
    name: string;
    video: string;
    description?: string;
    image?: string;
  };
  module: {
    id: string;
    name: string;
    image?: string;
  };
}

const EnrolledCourseVideoItem = ({ courseListing, module }: VideoItemProps) => {
  const dispatch = useDispatch();
  const { video, name, id, description } = courseListing;
  
  // ✅ Redux: Track if THIS specific video is the one currently playing
  const activeLesson = useSelector(selectCurrentLesson);
  const isActive = activeLesson.lessonId === id;

  const handlePlay = () => {
    dispatch(setActiveLesson({ 
      moduleId: module.id, 
      lessonId: id 
    }));
  };

  return (
    <div 
      className={cn(
        "group relative bg-white border rounded-2xl overflow-hidden transition-all duration-300",
        isActive 
          ? "border-[#387467] ring-1 ring-[#387467] shadow-lg shadow-[#387467]/5" 
          : "border-gray-100 hover:border-gray-300"
      )}
    >
      {/* --- Coursera-Style Video Preview Overlay --- */}
      <div 
        onClick={handlePlay}
        className="relative w-full aspect-video bg-slate-900 cursor-pointer overflow-hidden"
      >
        <video
          poster={module?.image}
          src={video}
          className={cn(
            "w-full h-full object-cover transition-transform duration-700 group-hover:scale-105",
            isActive ? "opacity-100" : "opacity-70 group-hover:opacity-90"
          )}
          preload="metadata"
        />
        
        {/* Professional Play Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
          <div className={cn(
            "w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300",
            isActive 
              ? "bg-[#387467] scale-110 shadow-xl shadow-[#387467]/40" 
              : "bg-white/90 group-hover:bg-white text-slate-900"
          )}>
            {isActive ? (
              <div className="flex gap-1 items-end h-4">
                <div className="w-1 bg-white animate-[bounce_1s_infinite]" />
                <div className="w-1 bg-white animate-[bounce_1.2s_infinite]" />
                <div className="w-1 bg-white animate-[bounce_0.8s_infinite]" />
              </div>
            ) : (
              <PlayCircle size={32} fill="currentColor" className="text-inherit ml-1" />
            )}
          </div>
        </div>

        {/* ISO Status Badge */}
        {isActive && (
          <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-[#387467] text-white px-3 py-1 rounded-full shadow-lg">
            <div className="w-1.5 h-1.5 rounded-full bg-green-300 animate-pulse" />
            <span className="text-[9px] font-black uppercase tracking-widest">Currently Viewing</span>
          </div>
        )}
      </div>

      {/* --- Content Metadata --- */}
      <div className="p-5 space-y-3">
        <div className="flex justify-between items-start gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-[10px] font-black text-gray-400 uppercase tracking-widest">
              <FileText size={12} className="text-[#387467]" />
              {module.name}
            </div>
            <h3 className={cn(
              "text-base font-black leading-tight tracking-tight transition-colors",
              isActive ? "text-[#387467]" : "text-gray-900"
            )}>
              {name}
            </h3>
          </div>
          
          {/* ISO Compliance Icon */}
          <div className="text-gray-200 group-hover:text-green-500 transition-colors">
            <CheckCircle2 size={20} />
          </div>
        </div>

        <p className="text-xs text-gray-500 font-medium leading-relaxed line-clamp-2">
          {description || "This technical module covers the foundational principles required for certification in this sector."}
        </p>

        {/* Action Footer */}
        <div className="pt-4 mt-2 border-t border-gray-50 flex items-center justify-between">
           <div className="flex items-center gap-1 text-[9px] font-bold text-gray-400 uppercase tracking-widest">
              <ShieldCheck size={12} strokeWidth={2.5} />
              Verified Resource
           </div>
           <button 
             onClick={handlePlay}
             className={cn(
                "text-[10px] font-black uppercase tracking-[0.15em] transition-all underline underline-offset-4",
                isActive ? "text-[#387467]" : "text-gray-400 hover:text-slate-900"
             )}
           >
             {isActive ? "Replay Session" : "Launch Lesson"}
           </button>
        </div>
      </div>
    </div>
  );
};

export default EnrolledCourseVideoItem;