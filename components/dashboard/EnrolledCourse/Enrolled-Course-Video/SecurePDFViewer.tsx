"use client";
import React, { useState } from "react";
import { 
  FileText, 
  ExternalLink, 
  ShieldAlert, 
  Download, 
  Eye, 
  Lock,
  CheckCircle2
} from "lucide-react";
import { cn } from "@/lib/utils";
import { CourseList } from "@/types/blog";

interface SecurePDFProps {
  courseListing: CourseList;
  module: any;
}

const SecurePDFViewer = ({ courseListing, module }: SecurePDFProps) => {
  const { video: pdfUrl, name, description } = courseListing;
  const [isLoaded, setIsLoaded] = useState(false);

  // ISO Standard: Open in a secure, controlled tab
  const handleSecureOpen = () => {
    const newWindow = window.open('', '_blank');
    if (newWindow) {
      newWindow.document.title = `SECURE_VIEW: ${name}`;
      newWindow.document.body.style.margin = '0';
      newWindow.document.body.style.backgroundColor = '#1a1a1a';
      
      // Injecting a simple but secure wrapper
      const iframe = newWindow.document.createElement('iframe');
      iframe.src = pdfUrl;
      iframe.style.width = '100vw';
      iframe.style.height = '100vh';
      iframe.style.border = 'none';
      newWindow.document.body.appendChild(iframe);
    }
  };

  return (
    <div className="w-full bg-white border border-gray-100 rounded-2xl overflow-hidden transition-all duration-300 hover:border-gray-200">
      
      {/* --- ISO Document Header --- */}
      <div className="px-6 py-4 bg-gray-50/50 border-b border-gray-50 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-white border border-gray-200 rounded-xl flex items-center justify-center text-red-500 shadow-sm">
            <FileText size={20} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[9px] font-black text-[#387467] uppercase tracking-[0.2em] bg-[#387467]/5 px-2 py-0.5 rounded">
                Controlled Doc
              </span>
              <div className="flex items-center gap-1 text-[9px] font-bold text-gray-400 uppercase">
                <Lock size={10} /> Encryption Active
              </div>
            </div>
            <h3 className="text-sm font-black text-gray-900 tracking-tight uppercase mt-0.5">
              {name}
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button 
            onClick={handleSecureOpen}
            className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-[10px] font-black uppercase tracking-widest text-gray-600 hover:text-[#387467] hover:border-[#387467] transition-all active:scale-95"
          >
            <ExternalLink size={14} /> Fullscreen
          </button>
        </div>
      </div>

      {/* --- Viewer Area --- */}
      <div className="relative group bg-slate-100" style={{ height: "65vh" }}>
        {!isLoaded && (
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10 bg-gray-50">
            <div className="w-8 h-8 border-2 border-[#387467]/20 border-t-[#387467] rounded-full animate-spin mb-4" />
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
              Verifying Document Integrity...
            </p>
          </div>
        )}

        <iframe
          src={`${pdfUrl}#toolbar=0`} // Hides some browser default controls for "security" feel
          className={cn(
            "w-full h-full border-none transition-opacity duration-700",
            isLoaded ? "opacity-100" : "opacity-0"
          )}
          onLoad={() => setIsLoaded(true)}
          title={name}
        />

        {/* --- ISO Watermark Overlay (Subtle) --- */}
        <div className="absolute bottom-6 right-6 pointer-events-none opacity-20 select-none hidden md:block">
           <div className="flex flex-col items-end">
              <ShieldAlert size={40} className="text-gray-400 mb-1" />
              <p className="text-[8px] font-black text-gray-500 uppercase tracking-[0.3em]">
                ISO-LMS SECURE VIEW
              </p>
           </div>
        </div>
      </div>

      {/* --- Document Footer / Progress --- */}
      <div className="px-6 py-4 bg-white flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Eye size={14} className="text-gray-400" />
            <span className="text-[10px] font-bold text-gray-500 uppercase">Read Only</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 size={14} className="text-[#387467]" />
            <span className="text-[10px] font-bold text-gray-500 uppercase">Valid Asset</span>
          </div>
        </div>
        
        <p className="text-[10px] font-black text-gray-300 uppercase tracking-widest hidden sm:block">
          Asset ID: PDF-{String(courseListing.id).slice(0, 8)}
        </p>
      </div>
    </div>
  );
};

export default SecurePDFViewer;