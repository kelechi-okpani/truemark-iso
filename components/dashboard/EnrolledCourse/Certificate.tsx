"use client";
import React, { useRef } from "react";
import { ShieldCheck, Download, Award, Globe } from "lucide-react";
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

    // Use higher scale for "Retina" print quality
    const canvas = await html2canvas(element, {
      scale: 3, 
      useCORS: true,
      logging: false,
    });

    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF({
      orientation: "landscape",
      unit: "px",
      format: [canvas.width, canvas.height],
    });

    pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
    pdf.save(`Certificate-${userName.replace(/\s+/g, "-")}.pdf`);
  };

  return (
    <div className="flex flex-col items-center py-12 bg-gray-50 min-h-screen">
      {/* ISO Certificate Wrapper */}
      <div 
        ref={certificateRef}
        className="relative w-[1123px] h-[794px] bg-white p-12 overflow-hidden shadow-2xl select-none"
        style={{ border: "20px solid #387467" }}
      >
        {/* Decorative Corner Accents */}
        <div className="absolute top-0 left-0 w-32 h-32 border-t-8 border-l-8 border-[#C5A059] m-4" />
        <div className="absolute bottom-0 right-0 w-32 h-32 border-b-8 border-r-8 border-[#C5A059] m-4" />

        <div className="h-full w-full border-2 border-gray-100 p-16 flex flex-col items-center text-center relative">
          
          {/* Institution Header */}
          <div className="mb-8 flex items-center gap-3">
            <ShieldCheck size={48} className="text-[#387467]" />
            <div className="text-left">
              <h4 className="text-xl font-bold text-gray-900 leading-none">ISO GLOBAL</h4>
              <p className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold">Learning Management System</p>
            </div>
          </div>

          <h1 className="text-sm font-bold tracking-[0.5em] text-[#387467] uppercase mb-12">
            Certificate of Achievement
          </h1>

          <p className="text-gray-500 font-serif italic text-lg mb-4">This is to officially recognize that</p>
          
          <h2 className="text-6xl font-serif text-gray-900 mb-8 capitalize underline decoration-1 underline-offset-8">
            {userName || "Valued Student"}
          </h2>

          <p className="text-gray-600 max-w-2xl text-lg leading-relaxed mb-10">
            has successfully completed the rigorous assessment and fulfilled all training requirements to be certified in the domain of
          </p>

          <h3 className="text-3xl font-bold text-[#387467] mb-16 px-10 py-3 bg-gray-50 rounded-lg inline-block">
            {courseName || "Professional Certification Course"}
          </h3>

          {/* Validation Footer */}
          <div className="mt-auto grid grid-cols-3 w-full items-end pb-4">
            <div className="text-left">
              <p className="text-[10px] font-bold text-gray-400 uppercase mb-2">Issued On</p>
              <p className="text-lg font-semibold text-gray-800 border-t border-gray-200 pt-2 w-32">{date}</p>
            </div>

            <div className="flex flex-col items-center">
              <Award className="text-[#C5A059] mb-2" size={50} />
              <div className="flex items-center gap-1 text-[10px] font-bold text-[#387467] uppercase tracking-tighter">
                <Globe size={10} /> Verified International Standard
              </div>
            </div>

            <div className="text-right flex flex-col items-end">
              <p className="text-[10px] font-bold text-gray-400 uppercase mb-2">Verify Credential</p>
              <div className="w-24 h-24 bg-gray-100 flex items-center justify-center border border-gray-200 mb-2">
                <span className="text-[8px] text-gray-400 text-center px-2 italic">QR CODE FOR VERIFICATION</span>
              </div>
              <p className="text-[10px] font-mono font-bold text-gray-700 uppercase">ID: {certificateId}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons (Excluded from PDF) */}
      <div className="mt-12 flex gap-4">
        <button 
          onClick={downloadCertificate}
          className="flex items-center gap-3 bg-[#387467] text-white px-10 py-4 rounded-full font-bold shadow-lg hover:bg-[#2f5f54] transition-all active:scale-95"
        >
          <Download size={20} />
          Download Certification (PDF)
        </button>
      </div>
    </div>
  );
};

export default ISOCertificate;