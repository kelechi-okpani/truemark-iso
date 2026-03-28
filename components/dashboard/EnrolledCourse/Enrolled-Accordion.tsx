"use client";
import React, { useState } from "react";
import { ChevronDown, BookOpen, Clock, ShieldCheck, ListChecks } from "lucide-react";
import { cn } from "@/lib/utils";
import EnrolledCourseVideoListing from "./Enrolled-Course-Video/Enrolled-Course-Video-Listing";

interface AccordionProps {
  course: any;
  modules: any[];
}

const EnrolledAccordion = ({ course, modules }: AccordionProps) => {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-1">
      {/* --- ISO Curriculum Header --- */}
      <div className="mb-6 flex items-center justify-between border-b border-gray-100 pb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-[#387467]/10 text-[#387467] rounded-lg">
            <ListChecks size={20} />
          </div>
          <div>
            <h2 className="text-[11px] font-black text-gray-400 uppercase tracking-[0.2em]">Course Syllabus</h2>
            <p className="text-sm font-bold text-gray-900 uppercase">Learning Path Progression</p>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">
            <span className="flex items-center gap-1.5"><Clock size={12}/> {modules?.length} Modules</span>
            <span className="flex items-center gap-1.5 text-[#387467]"><ShieldCheck size={12}/> ISO Certified</span>
        </div>
      </div>

      {/* --- Coursera-Style Accordion --- */}
      <div className="space-y-3">
        {modules?.map((module, index) => {
          const isOpen = openId === module?.id;

          return (
            <div 
              key={module?.id} 
              className={cn(
                "group border transition-all duration-300 rounded-xl overflow-hidden",
                isOpen 
                  ? "border-[#387467] bg-white ring-1 ring-[#387467]/10" 
                  : "border-gray-200 bg-white hover:border-gray-300"
              )}
            >
              {/* Trigger */}
              <button
                type="button"
                onClick={() => toggle(module?.id)}
                className="w-full flex items-center justify-between px-6 py-5 text-left transition-colors"
              >
                <div className="flex items-center gap-5">
                  <div className={cn(
                    "w-8 h-8 rounded-full border flex items-center justify-center text-[10px] font-black transition-all",
                    isOpen 
                      ? "bg-[#387467] border-[#387467] text-white" 
                      : "bg-gray-50 border-gray-100 text-gray-400 group-hover:border-gray-300"
                  )}>
                    {index + 1}
                  </div>
                  <div>
                    <h3 className={cn(
                      "text-sm font-black uppercase tracking-tight transition-colors",
                      isOpen ? "text-[#387467]" : "text-gray-800"
                    )}>
                      {module?.name}
                    </h3>
                    <div className="flex items-center gap-3 mt-0.5">
                       <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-1">
                         <BookOpen size={10} /> {module?.lessonsCount || 0} Lessons
                       </span>
                    </div>
                  </div>
                </div>

                <div className={cn(
                  "p-2 rounded-full transition-all duration-300",
                  isOpen ? "bg-[#387467]/10 text-[#387467] rotate-180" : "text-gray-300 group-hover:text-gray-500"
                )}>
                  <ChevronDown size={18} />
                </div>
              </button>

              {/* Collapsible Content */}
              <div className={cn(
                "grid transition-all duration-500 ease-in-out",
                isOpen ? "grid-rows-[1fr] opacity-100 border-t border-gray-50" : "grid-rows-[0fr] opacity-0 pointer-events-none"
              )}>
                <div className="overflow-hidden">
                  {/* Module Metadata Brief */}
                  <div className="bg-[#FDFDFD] px-8 py-6 border-b border-gray-50">
                    <div className="flex items-center gap-2 mb-2">
                       <div className="w-1 h-3 bg-[#387467] rounded-full" />
                       <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Module Summary</p>
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed max-w-3xl font-medium">
                      {module?.description || "Technical deep-dive into the core principles of this unit."}
                    </p>
                  </div>

                  {/* Asset Listing */}
                  <div className="bg-white">
                    <EnrolledCourseVideoListing id={module?.id} module={module} />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EnrolledAccordion;