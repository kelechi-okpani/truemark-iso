"use client";
import React, { useMemo, useState } from "react";
import { 
  Search, 
  Video, 
  FileText, 
  ShieldCheck, 
  ArrowRight,
  Database,
  SearchX
} from "lucide-react";
// ✅ Redux Integration: Using the RTK Query hook you defined
import { useGetEnrolledLessonsQuery } from "@/lib/redux/features/courses/courseApi";

import CenteredLoader from "@/components/utility/Loader";
import EmptyContainer from "@/components/utility/EmptyContainer";
import SecurePDFViewer from "./SecurePDFViewer";
import { cn } from "@/lib/utils";
import EnrolledCourseVideoItem from "./Enrolled-Course-Video-Item";

interface ListingProps {
  id: string; // moduleId
  module: any;
}

const EnrolledCourseVideoListing = ({ id, module }: ListingProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  // ✅ Redux: Fetching lessons via RTK Query instead of Apollo
  const { 
    data: lessons = [], 
    isLoading, 
    isFetching, 
    isError 
  } = useGetEnrolledLessonsQuery(id);

  // ✅ Memoized Filtering for Performance
  const filteredLessons = useMemo(() => {
    if (!searchTerm.trim()) return lessons;
    return lessons.filter((lesson: any) =>
      lesson.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, lessons]);

  // ✅ Asset Categorization
  const videos = useMemo(() => 
    filteredLessons?.filter((item: any) =>
      item?.video?.toLowerCase().match(/\.(mp4|mov|mkv|avi|webm)$/)
    ), [filteredLessons]);

  const pdfs = useMemo(() => 
    filteredLessons?.filter((item: any) =>
      item?.video?.toLowerCase().endsWith(".pdf")
    ), [filteredLessons]);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4">
        <CenteredLoader />
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 animate-pulse">
          Decrypting Module Assets...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FDFDFD]">
      {/* --- ISO Asset Header --- */}
      <div className="bg-white border-b border-gray-100 sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-[#387467]">
                <ShieldCheck size={14} />
                <span className="text-[9px] font-black uppercase tracking-[0.3em]">Authorized Content</span>
              </div>
              <h1 className="text-xl md:text-2xl font-black text-gray-900 tracking-tighter uppercase">
                {module?.name || "Technical Documentation"}
              </h1>
            </div>

            {/* Search Refinement */}
            <div className="relative group w-full md:w-96">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2 pointer-events-none">
                <Search className={cn("transition-colors", searchTerm ? "text-[#387467]" : "text-gray-300")} size={16} />
              </div>
              <input
                type="text"
                placeholder="FILTER RESOURCES BY NAME..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-[11px] font-bold tracking-widest uppercase focus:bg-white focus:ring-1 focus:ring-[#387467] focus:border-[#387467] transition-all outline-none placeholder:text-gray-300"
              />
              {isFetching && (
                <div className="absolute right-4 top-1/2 -translate-y-1/2">
                   <div className="w-3 h-3 border-2 border-[#387467]/20 border-t-[#387467] rounded-full animate-spin" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {filteredLessons.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center">
             <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-4 text-gray-200">
                <SearchX size={32} />
             </div>
             <h3 className="text-sm font-black text-gray-900 uppercase tracking-widest">No Matches Found</h3>
             <p className="text-xs text-gray-400 mt-2 font-medium">Refine your search parameters or check the module directory.</p>
          </div>
        ) : (
          <div className="space-y-24">
            
            {/* --- 🎬 SECTION: VIDEO SESSIONS --- */}
            <section>
              <div className="flex items-center justify-between mb-10 pb-4 border-b border-gray-50">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#387467] text-white rounded-xl flex items-center justify-center shadow-lg shadow-[#387467]/20">
                    <Video size={20} />
                  </div>
                  <div>
                    <h3 className="text-xs font-black text-gray-900 uppercase tracking-[0.2em]">Video Sessions</h3>
                    <p className="text-[10px] text-gray-400 font-bold uppercase">{videos.length} Verified Records</p>
                  </div>
                </div>
              </div>

              {videos.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {videos.map((post: any, key: number) => (
                    <EnrolledCourseVideoItem
                      key={post.id || key}
                      courseListing={post}
                      module={module}
                    />
                  ))}
                </div>
              ) : (
                <div className="py-12 px-6 rounded-3xl bg-gray-50/50 border border-dashed border-gray-100 text-center">
                  <p className="text-[10px] font-black text-gray-300 uppercase tracking-widest">No Video Media in this Section</p>
                </div>
              )}
            </section>

            {/* --- 📄 SECTION: TECHNICAL DOCUMENTS --- */}
            <section>
              <div className="flex items-center justify-between mb-10 pb-4 border-b border-gray-50">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-slate-900 text-white rounded-xl flex items-center justify-center">
                    <FileText size={20} />
                  </div>
                  <div>
                    <h3 className="text-xs font-black text-gray-900 uppercase tracking-[0.2em]">Reference Documents</h3>
                    <p className="text-[10px] text-gray-400 font-bold uppercase">{pdfs.length} Technical Briefs</p>
                  </div>
                </div>
              </div>

              {pdfs.length > 0 ? (
                <div className="space-y-4">
                  {pdfs.map((post: any, key: number) => (
                    <div key={post.id || key} className="group relative">
                        <SecurePDFViewer courseListing={post} module={module} />
                        <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-2 hidden md:block">
                            <ArrowRight size={18} className="text-[#387467]" />
                        </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="py-12 px-6 rounded-3xl bg-gray-50/50 border border-dashed border-gray-100 text-center">
                  <p className="text-[10px] font-black text-gray-300 uppercase tracking-widest">No Document Assets Available</p>
                </div>
              )}
            </section>

          </div>
        )}
      </div>

      {/* --- ISO Footer Analytics --- */}
      <footer className="max-w-7xl mx-auto px-6 py-12 border-t border-gray-50">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
                <div className="p-2 bg-gray-50 rounded-lg text-gray-400">
                    <Database size={14} />
                </div>
                <div>
                    <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Audit Reference</p>
                    <p className="text-[10px] font-bold text-gray-900 uppercase tracking-tighter">REF-{id.toUpperCase().slice(0, 12)}</p>
                </div>
            </div>
            <div className="px-4 py-2 bg-[#387467]/5 rounded-full">
                <p className="text-[9px] text-[#387467] font-black uppercase tracking-[0.2em]">
                    Internal Learning Management Protocol v4.2
                </p>
            </div>
        </div>
      </footer>
    </div>
  );
}

export default EnrolledCourseVideoListing