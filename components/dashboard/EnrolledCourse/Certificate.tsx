"use client";
import React, { useRef, useState } from "react";
import { ShieldCheck, Download, Award, Mail, Loader2 } from "lucide-react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

type CertProps = {
  userName: string;
  userEmail: string;
  courseName: string;
  date: string;
  certificateId: string;
};

const ISOCertificate = ({ userName, userEmail, courseName, date, certificateId }: CertProps) => {
  const certificateRef = useRef<HTMLDivElement>(null);
  const [isDownloading, setIsDownloading] = useState(false);

  const downloadCertificate = async () => {
    if (!certificateRef.current || isDownloading) return;

    try {
      setIsDownloading(true);
      await document.fonts.ready;

      const canvas = await html2canvas(certificateRef.current, {
        scale: 2,
        useCORS: true,
        backgroundColor: "#ffffff",
        width: 1123,
        height: 794,
        logging: false,
        // THE FIX: Remove the style tags that contain oklch from the clone
        onclone: (clonedDoc) => {
          const styleTags = clonedDoc.getElementsByTagName("style");
          for (let i = 0; i < styleTags.length; i++) {
            const content = styleTags[i].innerHTML;
            if (content.includes("oklch") || content.includes("@tailwind")) {
              styleTags[i].innerHTML = ""; // Clear the problematic CSS
            }
          }
          
          // Force standard color variables on the cloned root
          const root = clonedDoc.documentElement;
          root.style.setProperty('--tw-bg-opacity', '1', 'important');
          root.style.setProperty('--tw-text-opacity', '1', 'important');
        },
      });

      const imgData = canvas.toDataURL("image/jpeg", 1.0);
      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "px",
        format: [1123, 794],
      });

      pdf.addImage(imgData, "JPEG", 0, 0, 1123, 794);
      pdf.save(`Certificate-${userName.replace(/\s+/g, "-")}.pdf`);
    } catch (error) {
      console.error("Capture Error:", error);
      alert("Download failed. If on mobile, please try a desktop browser.");
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div>
          <div
  ref={certificateRef}
  style={{
    width: "1123px",
    height: "794px",
    backgroundColor: "#ffffff",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    boxSizing: "border-box",
    overflow: "hidden",
    color: "#1a3a34",
    fontFamily: "'Inter', sans-serif"
  }}
>
  {/* Borders & Frame */}
  <div style={{ position: "absolute", inset: 0, border: "24px solid #1a3a34", zIndex: 10 }} />
  <div style={{ position: "absolute", inset: "24px", border: "2px solid #C5A059", zIndex: 10 }} />

  {/* NEW: Corner Guilloche Ornaments (Banknote Style) */}
  {[ 
    { top: 25, left: 25 }, 
    { top: 25, right: 25, transform: "rotate(90deg)" }, 
    { bottom: 25, left: 25, transform: "rotate(-90deg)" }, 
    { bottom: 25, right: 25, transform: "rotate(180deg)" } 
  ].map((pos, i) => (
    <div key={i} style={{ position: "absolute", width: "120px", height: "120px", opacity: 0.15, zIndex: 11, ...pos }}>
      <svg viewBox="0 0 100 100" fill="none" stroke="#C5A059">
        <path d="M0 0 Q 50 0 50 50 Q 0 50 0 0 M10 10 Q 40 10 40 40 Q 10 40 10 10" strokeWidth="0.5" />
        <circle cx="0" cy="0" r="80" strokeWidth="0.1" />
        <circle cx="0" cy="0" r="70" strokeWidth="0.1" />
      </svg>
    </div>
  ))}

  {/* Background Watermark Pattern */}
  <div style={{
    position: "absolute",
    inset: 0,
    opacity: 0.03,
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 30m-25 0a25 25 0 1 0 50 0a25 25 0 1 0 -50 0' fill='none' stroke='%231a3a34' stroke-width='0.2'/%3E%3C/svg%3E")`,
    zIndex: 1
  }} />

  {/* Large Center Crest */}
  <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", opacity: 0.04, zIndex: 0 }}>
    <ShieldCheck size={550} strokeWidth={0.3} color="#1a3a34" />
  </div>

  {/* MAIN CONTENT LAYER */}
  <div style={{ position: "relative", zIndex: 20, width: "100%", height: "100%", padding: "80px 100px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
    
    {/* Header Section */}
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ backgroundColor: "#1a3a34", color: "#ffffff", padding: "10px", borderRadius: "4px", marginRight: "15px" }}>
          <Award size={30} color="#C5A059" />
        </div>
        <div>
          <h2 style={{ fontSize: "24px", fontWeight: "900", color: "#1a3a34", margin: 0, letterSpacing: "1px" }}>TRUEMARK GLOBAL</h2>
          <p style={{ fontSize: "9px", fontWeight: "bold", color: "#C5A059", margin: 0, letterSpacing: "3px" }}>ISO CERTIFIED ACCREDITATION BODY</p>
        </div>
      </div>
      
      <div style={{ textAlign: "right" }}>
        <div style={{ border: "1px solid #1a3a34", padding: "8px 12px", borderRadius: "2px" }}>
          <p style={{ fontSize: "10px", fontWeight: "900", color: "#1a3a34", margin: 0 }}>CERTIFICATE NO.</p>
          <p style={{ fontSize: "14px", fontWeight: "bold", color: "#C5A059", margin: 0 }}>{certificateId}</p>
        </div>
      </div>
    </div>

    {/* Body Section */}
    <div style={{ textAlign: "center", flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
      <div style={{ marginBottom: "30px" }}>
        <span style={{ fontSize: "12px", fontWeight: "900", color: "#1a3a34", letterSpacing: "10px", textTransform: "uppercase", borderBottom: "2px solid #C5A059", paddingBottom: "5px" }}>
          Official Certification
        </span>
      </div>
      
      <p style={{ fontSize: "16px", color: "#64748b", fontStyle: "italic", marginBottom: "10px" }}>This document serves to confirm that</p>
      <h1 style={{ fontSize: "56px", fontWeight: "900", color: "#1a3a34", margin: "0 0 15px 0", textTransform: "uppercase" }}>{userName}</h1>
      
      <div style={{ display: "inline-flex", alignSelf: "center", alignItems: "center", background: "linear-gradient(90deg, #ffffff 0%, #f1f5f9 50%, #ffffff 100%)", padding: "8px 40px", border: "1px solid #e2e8f0", borderRadius: "4px", marginBottom: "35px" }}>
        <span style={{ fontSize: "12px", fontWeight: "bold", color: "#1a3a34" }}>{userEmail}</span>
      </div>

      <p style={{ fontSize: "16px", color: "#475569", maxWidth: "700px", margin: "0 auto 25px", lineHeight: "1.6" }}>
        has fulfilled all requirements and successfully passed the rigorous evaluation process for the international standard of:
      </p>
      
      <div style={{ position: "relative", padding: "30px 0" }}>
        <div style={{ position: "absolute", left: "20%", right: "20%", top: 0, height: "1px", background: "linear-gradient(90deg, transparent, #C5A059, transparent)" }} />
        <span style={{ fontSize: "32px", fontWeight: "900", color: "#1a3a34", letterSpacing: "1px" }}>{courseName}</span>
        <div style={{ position: "absolute", left: "20%", right: "20%", bottom: 0, height: "1px", background: "linear-gradient(90deg, transparent, #C5A059, transparent)" }} />
      </div>

      <p style={{ fontSize: "11px", color: "#94a3b8", marginTop: "20px", fontWeight: "bold" }}>
        COMPLIANCE STANDARD: <span style={{ color: "#1a3a34" }}>ISO 9001:2026 QUALITY MANAGEMENT SYSTEMS</span>
      </p>
    </div>

    {/* Footer Section */}
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", borderTop: "1px solid #f1f5f9", paddingTop: "30px" }}>
      
      {/* Signature Section */}
      <div style={{ textAlign: "left", width: "250px" }}>
        <p style={{ fontSize: "24px", fontFamily: "cursive", color: "#1a3a34", marginBottom: "0" }}>J. Sterling</p>
        <div style={{ width: "100%", height: "1px", backgroundColor: "#1a3a34", margin: "5px 0" }} />
        <p style={{ fontSize: "10px", fontWeight: "900", color: "#1a3a34", margin: 0 }}>DR. JULIAN STERLING</p>
        <p style={{ fontSize: "8px", fontWeight: "bold", color: "#C5A059", letterSpacing: "1px" }}>DIRECTOR OF ACCREDITATION</p>
      </div>

      {/* NEW: QR Code / Verification Section */}
      <div style={{ textAlign: "center", padding: "0 40px" }}>
        {/* <div style={{ width: "60px", height: "60px", border: "1px solid #e2e8f0", padding: "5px", margin: "0 auto 8px", display: "flex", alignItems: "center", justifyContent: "center" }}>
           <div style={{ width: "50px", height: "50px", backgroundColor: "#f1f5f9", display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
              {[...Array(9)].map((_, i) => <div key={i} style={{ border: "1px solid #fff", backgroundColor: i % 2 === 0 ? "#1a3a34" : "transparent" }} />)}
           </div>
        </div> */}
        {/* <p style={{ fontSize: "7px", fontWeight: "bold", color: "#94a3b8" }}>SCAN TO VERIFY AUTHENTICITY</p> */}
      </div>

      {/* Official Seals */}
      <div style={{ display: "flex", gap: "20px" }}>
        <div style={{ textAlign: "center" }}>
           <p style={{ fontSize: "8px", fontWeight: "bold", color: "#94a3b8", marginBottom: "5px" }}>DATE OF ISSUE</p>
           <p style={{ fontSize: "12px", fontWeight: "900", color: "#1a3a34" }}>{date}</p>
        </div>
        <div style={{ width: "80px", height: "80px", borderRadius: "50%", border: "2px solid #C5A059", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
           <ShieldCheck size={40} color="#C5A059" />
           <div style={{ position: "absolute", width: "100%", height: "100%", border: "1px dashed #C5A059", borderRadius: "50%", animation: "spin 20s linear infinite" }} />
        </div>
      </div>

    </div>
    
  </div>

  
</div>

 <button
      onClick={downloadCertificate}
        disabled={isDownloading}
        className="mt-10 flex items-center gap-4 bg-[#1a3a34] text-[#C5A059] px-12 py-5 rounded-xl font-bold uppercase text-xs tracking-widest shadow-2xl hover:brightness-110 active:scale-95 disabled:opacity-50"
     >
        {isDownloading ? <Loader2 className="animate-spin" /> : <Download size={20} />}
        {isDownloading ? "Generating PDF..." : "Download Official Certificate"}
       </button>
    </div>

    // <div className="flex flex-col items-center py-10 bg-[#f1f5f9] min-h-screen">
    //   <div className="max-w-full overflow-x-auto p-4">
    //     <div
    //       ref={certificateRef}
    //       style={{
    //         width: "1123px",
    //         height: "794px",
    //         backgroundColor: "#ffffff",
    //         position: "relative",
    //         display: "flex",
    //         flexDirection: "column",
    //         justifyContent: "space-between",
    //         alignItems: "center",
    //         boxSizing: "border-box",
    //         overflow: "hidden",
    //         color: "#1a3a34" // Fixed Hex
    //       }}
    //     >
    //       {/* Borders */}
    //       <div style={{ position: "absolute", inset: 0, border: "24px solid #1a3a34", pointerEvents: "none", zIndex: 10 }} />
    //       <div style={{ position: "absolute", inset: "24px", border: "2px solid #C5A059", pointerEvents: "none", zIndex: 10 }} />

    //       {/* Background Watermark */}
    //       <div style={{
    //         position: "absolute",
    //         inset: 0,
    //         opacity: 0.04,
    //         backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 40m-35 0a35 35 0 1 0 70 0a35 35 0 1 0 -70 0' fill='none' stroke='%231a3a34' stroke-width='0.5'/%3E%3C/svg%3E")`,
    //         zIndex: 1
    //       }} />

    //       <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", opacity: 0.03, zIndex: 0 }}>
    //         <ShieldCheck size={500} strokeWidth={0.5} color="#1a3a34" />
    //       </div>

    //       <div style={{ position: "relative", zIndex: 20, width: "100%", height: "100%", padding: "80px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            
    //         {/* Header */}
    //         <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
    //           <div style={{ display: "flex", alignItems: "center" }}>
    //             <span style={{ fontSize: "28px", fontWeight: "900", color: "#1a3a34", letterSpacing: "-1px" }}>TRUEMARK</span>
    //             <div style={{ width: "1px", height: "40px", backgroundColor: "#e2e8f0", margin: "0 24px" }} />
    //             <div style={{ textAlign: "left" }}>
    //               <h2 style={{ fontSize: "18px", fontWeight: "900", color: "#1a3a34", margin: 0 }}>Truemark Global</h2>
    //               <p style={{ fontSize: "8px", fontWeight: "bold", color: "#64748b", margin: 0, letterSpacing: "2px" }}>EXCELLENCE IN TRAINING & CERTIFICATION</p>
    //             </div>
    //           </div>
    //           <div style={{ backgroundColor: "#1a3a34", padding: "6px 14px", borderRadius: "4px", display: "flex", alignItems: "center" }}>
    //             <ShieldCheck size={14} color="#C5A059" style={{ marginRight: "8px" }} />
    //             <span style={{ fontSize: "10px", fontWeight: "900", color: "#ffffff" }}>ISO 9001:2026</span>
    //           </div>
    //         </div>

    //         {/* Content */}
    //         <div style={{ textAlign: "center", flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
    //           <p style={{ fontSize: "11px", fontWeight: "900", color: "#C5A059", letterSpacing: "8px", textTransform: "uppercase", marginBottom: "24px" }}>Certificate of Professional Achievement</p>
    //           <p style={{ fontSize: "14px", color: "#64748b", margin: "0 0 8px 0" }}>This is to certify that</p>
    //           <h1 style={{ fontSize: "32px",  fontWeight: "bold", color: "#1a3a34", margin: "0 0 16px 0" }}>{userName}</h1>
              
    //           <div style={{ display: "inline-flex", alignSelf: "center", alignItems: "center", backgroundColor: "#f8fafc", border: "1px solid #f1f5f9", padding: "6px 26px", borderRadius: "99px", marginBottom: "32px" }}>
    //             <Mail size={12} color="#94a3b8" style={{ marginRight: "8px" }} />
    //             <span style={{ fontSize: "11px", fontWeight: "bold", color: "#64748b" }}>{userEmail}</span>
    //           </div>

    //           <p style={{ fontSize: "16px", color: "#475569", maxWidth: "600px", margin: "0 auto 30px" }}>
    //             Has successfully demonstrated mastery of the principles and practices associated with
    //           </p>
              
    //           <div style={{ borderTop: "1px solid #f1f5f9", borderBottom: "1px solid #f1f5f9", padding: "40px 0" }}>
    //             <span style={{ fontSize: "23px", fontWeight: "bold", color: "#1a3a34", fontStyle: "italic", textTransform: "uppercase" ,  }}>{courseName}</span>
    //           </div>
    //         </div>

    //         {/* Footer */}
    //         <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
    //           <div style={{ textAlign: "left" }}>
    //             <p style={{ fontSize: "20px", fontStyle: "italic", color: "#1a3a34", margin: 0 }}>Dr. Julian Sterling</p>
    //             <div style={{ width: "140px", height: "1px", backgroundColor: "#e2e8f0", margin: "8px 0" }} />
    //             <p style={{ fontSize: "9px", fontWeight: "900", color: "#94a3b8", letterSpacing: "1px" }}>HEAD OF CERTIFICATIONS</p>
    //           </div>

    //           <div style={{ position: "relative", width: "100px", height: "100px", border: "4px double #C5A059", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#ffffff" }}>
    //             <Award size={40} color="#C5A059" />
    //             <div style={{ position: "absolute", bottom: "-10px", backgroundColor: "#C5A059", color: "#ffffff", fontSize: "8px", fontWeight: "900", padding: "2px 8px", borderRadius: "2px" }}>VERIFIED</div>
    //           </div>

    //           <div style={{ textAlign: "right" }}>
    //             <p style={{ fontSize: "9px", fontWeight: "bold", color: "#94a3b8", margin: 0 }}>CREDENTIAL ID</p>
    //             <p style={{ fontSize: "13px", fontWeight: "900", color: "#1a3a34", marginBottom: "12px" }}>{certificateId}</p>
    //             <p style={{ fontSize: "9px", fontWeight: "bold", color: "#94a3b8", margin: 0 }}>ISSUE DATE</p>
    //             <p style={{ fontSize: "13px", fontWeight: "900", color: "#1a3a34" }}>{date}</p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //   <button
    //     onClick={downloadCertificate}
    //     disabled={isDownloading}
    //     className="mt-10 flex items-center gap-4 bg-[#1a3a34] text-[#C5A059] px-12 py-5 rounded-xl font-bold uppercase text-xs tracking-widest shadow-2xl hover:brightness-110 active:scale-95 disabled:opacity-50"
    //   >
    //     {isDownloading ? <Loader2 className="animate-spin" /> : <Download size={20} />}
    //     {isDownloading ? "Generating PDF..." : "Download Official Certificate"}
    //   </button>
    // </div>
  );
};

export default ISOCertificate;