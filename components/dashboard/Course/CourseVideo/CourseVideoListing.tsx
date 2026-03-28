"use client";
import React, { useMemo, useState } from "react";
import { Search, PlayCircle, FileText, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

import EmptyContainer from "@/components/utility/EmptyContainer";
import CenteredLoader from "@/components/utility/Loader";
import CourseVideoItem from "@/components/dashboard/Course/CourseVideo/CourseVideoItem";
import SecurePDFViewer from "@/components/dashboard/Course/CourseVideo/SecurePDFViewer";
import { useGetEnrolledLessonsQuery } from "@/lib/redux/features/courses/courseApi";

const empty_details = {
  title: "No Lessons Available",
  description: "It looks like there are no resources assigned to this module yet.",
};

export default function CourseVideoListing({ id, module }: { id: string, module: any }) {
  const [searchTerm, setSearchTerm] = useState("");

  const { 
    data: lessons = [], // Default to empty array to prevent map errors
    isLoading, 
    isFetching 
  } = useGetEnrolledLessonsQuery(id);

  // Memoized Filter Logic
  const filteredLessons = useMemo(() => {
    if (!searchTerm.trim()) return lessons;
    return lessons.filter((lesson: any) =>
      lesson.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, lessons]);

  // Media Splitting Logic
  const videos = useMemo(() => 
    filteredLessons.filter((item: any) =>
      item?.video?.toLowerCase().match(/\.(mp4|mov|mkv|avi|webm)$/)
    ), [filteredLessons]);

  const pdfs = useMemo(() => 
    filteredLessons.filter((item: any) =>
      item?.video?.toLowerCase().endsWith(".pdf")
    ), [filteredLessons]);

  return (
    <div className="min-h-screen bg-[#FDFDFD] pb-20">
      {/* --- Responsive Sticky Header --- */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 md:py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-[#387467] mb-0.5">
              <CheckCircle2 size={14} className="shrink-0" />
              <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em]">Verified Content</span>
            </div>
            <h1 className="text-xl md:text-2xl font-black text-gray-900 tracking-tight">
              Curriculum Assets
            </h1>
          </div>

          <div className="relative group w-full sm:w-72 md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-[#387467] transition-colors" size={16} />
            <input
              type="text"
              placeholder="Search assets..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-100 rounded-xl text-sm outline-none focus:bg-white focus:border-[#387467] focus:ring-4 focus:ring-[#387467]/5 transition-all"
            />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-12">
        {(isLoading || isFetching) && lessons.length === 0 ? (
          <div className="flex flex-col items-center justify-center min-h-[50vh]">
            <CenteredLoader />
            <p className="text-[10px] font-black text-gray-300 uppercase tracking-[0.2em] mt-6">Decrypting Secure Assets</p>
          </div>
        ) : filteredLessons.length === 0 ? (
          <div className="py-12">
            <EmptyContainer title={empty_details.title} description={empty_details.description} />
          </div>
        ) : (
          <div className="space-y-12 md:space-y-20">
            
            {/* 🎬 VIDEO SECTION */}
            <section className="animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-6 md:mb-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#387467]/10 flex items-center justify-center text-[#387467]">
                    <PlayCircle size={20} />
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-black text-gray-900 uppercase tracking-tight">Video Tutorials</h3>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-0.5">Guided technical walk-throughs</p>
                  </div>
                </div>
                <div className="hidden xs:block bg-gray-50 px-3 py-1 rounded-full border border-gray-100">
                  <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">
                    {videos.length} Units
                  </span>
                </div>
              </div>

              {videos.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
                  {videos.map((lesson: any) => (
                    <CourseVideoItem 
                      key={lesson.id} 
                      courseListing={lesson} 
                      module={module} 
                    />
                  ))}
                </div>
              ) : (
                <div className="h-32 flex items-center justify-center rounded-2xl bg-gray-50/50 border border-dashed border-gray-200">
                  <p className="text-xs text-gray-400 font-medium">No video tutorials found for this search.</p>
                </div>
              )}
            </section>

            {/* 📄 DOCUMENT SECTION */}
            <section className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
              <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-6 md:mb-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                    <FileText size={20} />
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-black text-gray-900 uppercase tracking-tight">Technical Docs</h3>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-0.5">Standard operating procedures</p>
                  </div>
                </div>
                <div className="hidden xs:block bg-blue-50/50 px-3 py-1 rounded-full border border-blue-100">
                  <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">
                    {pdfs.length} Resources
                  </span>
                </div>
              </div>

              {pdfs.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {pdfs.map((lesson: any) => (
                    <SecurePDFViewer 
                      key={lesson.id} 
                      courseListing={lesson} 
                      module={module} 
                    />
                  ))}
                </div>
              ) : (
                <div className="h-32 flex items-center justify-center rounded-2xl bg-gray-50/50 border border-dashed border-gray-200">
                  <p className="text-xs text-gray-400 font-medium">No documentation assigned to this module.</p>
                </div>
              )}
            </section>

          </div>
        )}
      </main>
    </div>
  );
}