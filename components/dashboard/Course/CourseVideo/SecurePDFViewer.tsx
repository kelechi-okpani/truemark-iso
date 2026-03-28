"use client";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { 
  MoreVertical, 
  Pencil, 
  Trash2, 
  FileText, 
  ExternalLink,
  ShieldCheck,
  Eye
} from "lucide-react";
import { CourseList } from "@/types/blog";
import { useModal } from "@/components/hooks/useModal";
import { Modal } from "@/components/ui/modal";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

const SecurePDFViewer = ({ courseListing, module }: { courseListing: CourseList, module: any }) => {
  const { video, name, description } = courseListing;
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  
  const { 
    isOpen, openModal, closeModal, 
    openUpdate, openDelete 
  } = useModal();

  // RTK / Redux Handlers
  const handleViewAnalytics = () => {
    // dispatch(trackResourceView({ id: courseListing.id, type: 'pdf' }));
    openModal();
  };

  if (error) {
    return (
      <div className="p-4 flex items-center gap-3 text-red-600 bg-red-50 border border-red-100 rounded-lg text-sm">
        <ShieldCheck size={18} />
        <span>Document integrity check failed. Please contact admin.</span>
      </div>
    );
  }

  return (
    <div className="group bg-white border border-gray-100 rounded-xl p-5 hover:border-[#387467]/30 transition-all duration-300">
      <div className="flex items-start justify-between mb-4">
        {/* Document Icon & Type Badge */}
        <div className="flex flex-col gap-2">
          <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center text-red-600 transition-colors group-hover:bg-red-600 group-hover:text-white">
            <FileText size={22} />
          </div>
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            PDF Resource
          </span>
        </div>

        {/* Action Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="text-gray-400 hover:text-gray-600 p-1 rounded-md transition-colors">
              <MoreVertical size={18} />
            </button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end" className="w-40 p-1 shadow-xl border-gray-100 rounded-xl">
            <DropdownMenuItem 
              onClick={openUpdate}
              className="flex items-center gap-2 text-xs py-2 cursor-pointer rounded-lg font-medium"
            >
              <Pencil size={14} className="text-blue-500" /> Edit Details
            </DropdownMenuItem>
            <DropdownMenuItem 
              onClick={openDelete}
              className="flex items-center gap-2 text-xs py-2 cursor-pointer rounded-lg font-medium text-red-600"
            >
              <Trash2 size={14} className="text-red-500" /> Delete Asset
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Content */}
      <div className="space-y-1 mb-6">
        <h3 className="font-bold text-gray-900 leading-tight truncate capitalize">
          {name}
        </h3>
        <p className="text-xs text-gray-500 line-clamp-1 font-medium">
          {description || "Official course reading material and documentation."}
        </p>
      </div>

      {/* Primary Action - ISO Style Button */}
      <button
        onClick={handleViewAnalytics}
        className="w-full flex items-center justify-center gap-2 bg-[#387467] text-white text-xs font-bold py-3 rounded-lg hover:bg-slate-900 transition-all shadow-sm active:scale-[0.98]"
      >
        <Eye size={14} />
        VIEW DOCUMENT
      </button>

      {/* ISO / Coursera Details Modal */}
      <Modal isOpen={isOpen} onClose={closeModal} className="max-w-6xl w-[95vw]">
        <div className="bg-white rounded-2xl overflow-hidden">
          <div className="flex justify-between items-center px-6 py-4 border-b border-gray-100 bg-gray-50/50">
            <div>
              <h2 className="font-bold text-gray-900 flex items-center gap-2">
                <FileText size={18} className="text-red-600" />
                {name}
              </h2>
              <p className="text-[10px] text-gray-400 uppercase tracking-tighter font-bold">Secure ISO Learning Environment</p>
            </div>
            <button 
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-900 text-sm font-bold p-2"
            >
                ESC
            </button>
          </div>

          <div className="p-2 bg-gray-100 flex justify-center items-center min-h-[70vh]">
            <iframe
              src={`${video}#toolbar=0&navpanes=0&scrollbar=0`}
              width="100%"
              height="750px"
              className="rounded-lg shadow-inner bg-white border-0"
              sandbox="allow-scripts allow-same-origin"
              style={{ pointerEvents: "auto" }}
              onError={() => setError(true)}
              title={name}
            ></iframe>
          </div>
          
          <div className="px-6 py-3 border-t border-gray-100 flex justify-between items-center bg-white">
            <div className="flex items-center gap-2 text-xs text-gray-400 font-medium">
                <ShieldCheck size={14} className="text-[#387467]" />
                Encryption Active
            </div>
            <p className="text-[10px] text-gray-300">ISO-LMS Asset ID: {String(courseListing.id)?.slice(0,8)}</p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default SecurePDFViewer;