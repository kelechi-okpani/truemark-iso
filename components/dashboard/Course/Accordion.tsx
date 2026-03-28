"use client";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ChevronDown, BookOpen, Layers } from "lucide-react";
import CourseVideoListing from "@/components/dashboard/Course/CourseVideo/CourseVideoListing";
import { cn } from "@/lib/utils";

interface AccordionProps {
  course: any;
  modules: any[];
}

const Accordion = ({ course, modules }: AccordionProps) => {
  const dispatch = useDispatch();
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (moduleId: string) => {
    const isOpening = openId !== moduleId;
    setOpenId(isOpening ? moduleId : null);
    
    if (isOpening) {
      // Logic for Redux persistence could go here
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
        {modules?.map((module: any, index: number) => {
          const isOpen = openId === module?.id;

          return (
            <div 
              key={module?.id} 
              className={cn(
                "border-b border-gray-50 last:border-0 transition-colors duration-300",
                isOpen ? "bg-[#FBFBFB]" : "bg-white"
              )}
            >
              {/* --- Header / Trigger --- */}
              <button
                type="button"
                onClick={() => toggle(module?.id)}
                className="w-full px-4 sm:px-6 py-5 flex items-center justify-between group transition-all outline-none focus-visible:bg-gray-50"
              >
                <div className="flex items-start gap-3 sm:gap-4 text-left">
                  {/* Module Index Badge: Hidden on very small screens to save space if needed, or kept small */}
                  <div className={cn(
                    "mt-1 flex-shrink-0 w-6 h-6 rounded-md flex items-center justify-center text-[10px] font-black border transition-all duration-300",
                    isOpen 
                      ? "bg-[#387467] border-[#387467] text-white shadow-md shadow-[#387467]/20" 
                      : "bg-white border-gray-200 text-gray-400 group-hover:border-[#387467] group-hover:text-[#387467]"
                  )}>
                    {index + 1}
                  </div>

                  <div className="flex-1">
                    <h3 className={cn(
                      "text-sm sm:text-base font-black tracking-tight transition-colors leading-tight",
                      isOpen ? "text-[#387467]" : "text-gray-900"
                    )}>
                      {module?.name}
                    </h3>
                    
                    {/* ISO Metadata Row: Flexible wrapping for mobile */}
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2">
                      <div className="flex items-center gap-1 text-[9px] sm:text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                        <Layers size={12} className="text-[#387467]/50" />
                        <span>Core Unit</span>
                      </div>
                      <div className="flex items-center gap-1 text-[9px] sm:text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                        <BookOpen size={12} className="text-[#387467]/50" />
                        <span>{module?.lessons?.length || 0} Lessons</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={cn(
                  "ml-2 transition-transform duration-500 shrink-0",
                  isOpen ? "rotate-180 text-[#387467]" : "text-gray-300"
                )}>
                  <ChevronDown size={20} strokeWidth={3} />
                </div>
              </button>

              {/* --- Expanded Content --- */}
              {isOpen && (
                <div className="animate-in fade-in slide-in-from-top-2 duration-500">
                  {/* Module Abstract: Responsive Padding */}
                  <div className="px-4 sm:pl-16 sm:pr-6 pb-6 pt-2">
                    <div className="bg-white border border-gray-100 rounded-xl p-4 sm:p-5 shadow-sm">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#387467]" />
                        <h4 className="text-[9px] sm:text-[10px] font-black text-[#387467] uppercase tracking-[0.2em]">
                          Learning Objectives
                        </h4>
                      </div>
                      <p className="text-[13px] sm:text-sm text-gray-600 leading-relaxed font-medium">
                        {module?.description || "Comprehensive overview of the technical requirements and learning outcomes for this certification unit."}
                      </p>
                    </div>
                  </div>

                  {/* Asset Listing */}
                  <div className="bg-white border-t border-gray-50">
                    <CourseVideoListing id={module?.id} module={module} />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Accordion;