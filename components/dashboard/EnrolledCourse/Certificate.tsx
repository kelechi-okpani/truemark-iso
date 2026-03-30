"use client";
import React, { useRef } from "react";
import { ShieldCheck, Download, Award, Globe, CheckCircle } from "lucide-react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

type CertProps = {
  userName: string;
  courseName: string;
  date: string;
  certificateId: string;
};

const ISOCertificate = ({ userName, courseName, date, certificateId }: CertProps) => {
  const certificateRef = useRef<HTMLDivElement>(null);

  const downloadCertificate = async () => {
    const element = certificateRef.current;
    if (!element) return;

    const canvas = await html2canvas(element, { 
      scale: 3, 
      useCORS: true,
      backgroundColor: "#ffffff"
    });

    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("l", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save(`ISO-Certification-${userName.replace(/\s+/g, "-")}.pdf`);
  };

  return (
    <div className="flex flex-col items-center py-12 bg-slate-100 min-h-screen">
      <div 
        ref={certificateRef}
        className="relative w-[1123px] h-[794px] bg-white overflow-hidden shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] select-none"
        style={{ 
            fontFamily: "'Inter', sans-serif",
            background: "radial-gradient(circle, #ffffff 0%, #f9fafb 100%)" 
        }}
      >
        {/* --- 1. Security Borders --- */}
        <div className="absolute inset-0 border-[24px] border-[#1a3a34]" />
        <div className="absolute inset-[24px] border-[2px] border-[#C5A059]" />
        
        {/* Fine Guilloche Pattern */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 40m-35 0a35 35 0 1 0 70 0a35 35 0 1 0 -70 0' fill='none' stroke='%231a3a34' stroke-width='0.5'/%3E%3C/svg%3E")` }} 
        />

        {/* 🏆 Massive Central Watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03]">
            <ShieldCheck size={500} strokeWidth={0.5} className="text-[#1a3a34]" />
        </div>

        <div className="relative h-full w-full p-20 flex flex-col items-center z-10">
          
          {/* --- 2. Header Section --- */}
          <div className="w-full flex justify-between items-center mb-12 px-4">
            <div className="flex items-center gap-6">
              <div className="h-16 w-auto flex items-center">
                 <img 
                    src="/truemark-logo.png" 
                    alt="Truemark Global Limited"
                    className="h-full object-contain"
                    onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/150x60?text=TRUEMARK"; }}
                 />
              </div>
              <div className="h-10 w-[1px] bg-slate-200" />
              <div className="text-left">
                <h2 className="text-lg font-black text-[#1a3a34] tracking-tight leading-none">TRUEMARK GLOBAL</h2>
                <p className="text-[8px] font-bold text-slate-500 uppercase tracking-[0.3em]">Excellence in Training & Certification</p>
              </div>
            </div>

            <div className="flex flex-col items-end gap-1">
              <div className="flex items-center gap-2 px-3 py-1 bg-[#1a3a34] rounded-sm">
                <ShieldCheck size={14} className="text-[#C5A059]" />
                <span className="text-[9px] font-black text-white uppercase tracking-widest">ISO 9001:2026</span>
              </div>
              <p className="text-[#C5A059] font-bold text-[8px] uppercase tracking-[0.2em] pt-1 italic text-right">Certificate No: {certificateId.split('-')[1] || 'ISO-VERIFIED'}</p>
            </div>
          </div>

          {/* --- 3. Enhanced Middle Body --- */}
          <div className="flex-1 w-full flex flex-col items-center justify-center relative">
            
            {/* Decorative Pillars (Side Ornaments) */}
            <div className="absolute left-10 top-1/2 -translate-y-1/2 w-[2px] h-40 bg-gradient-to-b from-transparent via-[#C5A059]/40 to-transparent" />
            <div className="absolute right-10 top-1/2 -translate-y-1/2 w-[2px] h-40 bg-gradient-to-b from-transparent via-[#C5A059]/40 to-transparent" />

            <div className="flex items-center gap-4 mb-8">
                <div className="h-[1px] w-20 bg-gradient-to-r from-transparent to-[#C5A059]" />
                <h1 className="text-[10px] font-black text-[#C5A059] uppercase tracking-[0.8em]">
                Certificate of Professional Achievement
                </h1>
                <div className="h-[1px] w-20 bg-gradient-to-l from-transparent to-[#C5A059]" />
            </div>

            <p className="text-slate-500 font-serif italic text-lg mb-3">This is to certify that</p>
            
            <h2 className="text-6xl font-serif text-[#1a3a34] mb-4 font-medium tracking-tight">
              {userName}
            </h2>

            {/* Accent Bar Under Name */}
            <div className="flex items-center gap-2 mb-10">
                <div className="w-12 h-[3px] bg-[#1a3a34]" />
                <div className="w-3 h-3 rotate-45 border-2 border-[#C5A059]" />
                <div className="w-12 h-[3px] bg-[#1a3a34]" />
            </div>

            <p className="text-slate-600 max-w-lg text-center text-sm leading-relaxed mb-8 px-10">
              Has successfully fulfilled the requirements and demonstrated mastery of the principles and practices associated with 
            </p>

            {/* Enhanced Domain Box */}
            <div className="relative group">
                {/* Background decorative rosette */}
                <div className="absolute inset-0 flex items-center justify-center opacity-[0.05] -z-10">
                    <Award size={180} />
                </div>
                
                <div className="relative flex flex-col items-center px-16 py-8 border-y-2 border-slate-100 bg-white/50 backdrop-blur-sm shadow-sm">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white px-4">
                        <span className="text-[9px] font-black text-[#C5A059] uppercase tracking-[0.4em]">Official Certification</span>
                    </div>
                    <span className="text-3xl font-black text-[#1a3a34] uppercase tracking-tighter text-center italic">
                        {courseName}
                    </span>
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white px-4">
                        <span className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.2em]">Accredited Program</span>
                    </div>
                </div>
            </div>
            
            <div className="mt-12 flex items-center gap-6 text-emerald-800">
               <div className="flex items-center gap-2 bg-emerald-50 px-4 py-2 rounded-sm border border-emerald-100">
                  <CheckCircle size={14} className="text-emerald-700" />
                  <span className="text-[9px] font-black uppercase tracking-widest">Academic Excellence</span>
               </div>
               <div className="flex items-center gap-2 bg-emerald-50 px-4 py-2 rounded-sm border border-emerald-100">
                  <Globe size={14} className="text-emerald-700" />
                  <span className="text-[9px] font-black uppercase tracking-widest">Global Recognition</span>
               </div>
            </div>
          </div>

          {/* --- 4. Footer Section --- */}
          <div className="w-full grid grid-cols-3 items-end mt-8 border-t border-slate-100 pt-8">
            
            <div className="text-left pl-4">
              <div className="mb-1">
                <p className="font-serif italic text-2xl text-[#1a3a34] opacity-90">Dr. Julian Sterling</p>
              </div>
              <div className="border-t border-slate-300 w-44 pt-2">
                <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Head of Certifications</p>
                <p className="text-[7px] text-slate-400 mt-1 uppercase font-bold tracking-tighter">Truemark Global Limited Authority</p>
              </div>
            </div>

            <div className="flex justify-center">
               <div className="w-28 h-28 rounded-full border-4 border-double border-[#C5A059] flex items-center justify-center bg-white shadow-xl relative">
                  <div className="w-20 h-20 rounded-full border border-[#C5A059]/20 flex flex-col items-center justify-center text-[#C5A059]">
                    <Award size={32} />
                    <span className="text-[5px] font-black uppercase text-center mt-1 tracking-tighter">OFFICIAL SEAL OF<br/>AUTHENTICITY</span>
                  </div>
                  {/* Decorative ribbon behind seal */}
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#C5A059] text-white text-[6px] font-black px-2 py-0.5 rounded-sm uppercase">Verified</div>
               </div>
            </div>

            <div className="flex flex-col items-end pr-4">
              <div className="flex gap-4 items-center mb-3">
                 <div className="text-right">
                    <p className="text-[7px] font-bold text-slate-400 uppercase">Verification</p>
                    <p className="text-[8px] font-bold text-[#1a3a34]">Scan to Validate</p>
                 </div>
                 <div className="bg-slate-50 p-1 border border-slate-200">
                    <div className="w-12 h-12 bg-white flex items-center justify-center text-[5px] text-slate-300 text-center uppercase p-1">QR CODE</div>
                 </div>
              </div>
              <div className="text-right">
                <p className="text-[8px] font-bold text-slate-400 uppercase">Credential ID</p>
                <p className="text-[10px] font-mono font-black text-[#1a3a34]">{certificateId}</p>
                <p className="text-[8px] font-bold text-slate-400 uppercase mt-2">Issued Date</p>
                <p className="text-[10px] font-bold text-[#1a3a34]">{date}</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="mt-10 flex flex-col items-center gap-4">
        <p className="text-slate-400 text-[9px] font-bold uppercase tracking-[0.4em]">Official ISO Certification Document | Truemark Global Limited</p>
        <button 
          onClick={downloadCertificate}
          className="group flex items-center gap-4 bg-[#1a3a34] text-[#C5A059] px-12 py-5 rounded-xl font-black text-xs uppercase tracking-[0.2em] shadow-2xl hover:bg-slate-900 transition-all active:scale-95"
        >
          <Download size={18} className="group-hover:animate-bounce" />
          Secure Download (PDF)
        </button>
      </div>
    </div>
  );
};

export default ISOCertificate;