"use client";
import Image from "next/image";
import { Receipt, Calendar, User, ShieldCheck, Download, ExternalLink } from "lucide-react";
import React from "react";
import Sub_Logo from "@/public/assets/Logo/logo1.png";

export default function DetailsCard({ selected }) {
  if (!selected) return null;

  const formattedAmount = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 0,
  }).format(Number(selected?.amount));

  return (
    <div className="bg-white overflow-hidden">
      {/* Header: Official Logo & Receipt Title */}
      <div className="flex justify-between items-start border-b border-gray-100 pb-6 mb-6">
        <div>
          <Image
            width={60}
            height={60}
            className="mb-3 grayscale contrast-125 opacity-90"
            src={Sub_Logo}
            alt="Institution Logo"
          />
          <h2 className="text-xs font-black text-gray-400 uppercase tracking-[0.2em]">
            Transaction Receipt
          </h2>
        </div>
        <div className="text-right">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            Reference ID
          </p>
          <p className="text-xs font-mono font-bold text-gray-900">
            #{selected?.paymentReference?.toUpperCase() || "N/A"}
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="space-y-6">
        {/* Course Banner Info */}
        <section>
          <h3 className="text-xl font-black text-gray-900 leading-tight">
            {selected?.course?.name}
          </h3>
          <div className="flex items-center gap-4 mt-2">
            <span className="text-[10px] bg-green-50 text-green-700 px-2 py-0.5 rounded font-black uppercase tracking-tighter border border-green-100">
              {selected?.status}
            </span>
            <div className="flex items-center gap-1 text-[10px] text-gray-400 font-bold uppercase tracking-widest">
              <Calendar size={12} />
              {/* Assuming createdAt exists, otherwise hardcode placeholder */}
              {selected?.createdAt ? new Date(selected.createdAt).toLocaleDateString() : "Processed"}
            </div>
          </div>
        </section>

        {/* Financial Breakdown */}
        <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
          <div className="flex justify-between items-center">
            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
              Total Amount Paid
            </span>
            <span className="text-2xl font-black text-[#387467]">
              {formattedAmount}
            </span>
          </div>
        </div>

        {/* User & Course Details Grid */}
        <div className="grid grid-cols-2 gap-6 py-4 border-t border-b border-gray-50">
          <div>
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">
              Enrolled Student
            </p>
            <p className="text-sm font-bold text-gray-800 truncate">{selected?.email || "User Account"}</p>
          </div>
          <div>
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">
              Payment Gateway
            </p>
            <p className="text-sm font-bold text-gray-800">Paystack Secure</p>
          </div>
        </div>

        {/* Description Section */}
        <section>
          <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3">
            Program Description
          </p>
          <p className="text-sm text-gray-600 leading-relaxed italic">
            {selected?.course?.description || "Professional development course enrollment."}
          </p>
        </section>

        {/* Actions & Verification */}
        <div className="pt-4 space-y-3">
          <button className="flex items-center justify-center gap-2 w-full bg-[#387467] text-white py-4 rounded-xl font-bold uppercase text-[10px] tracking-widest hover:bg-[#2d5d52] transition-all">
            <Download size={14} /> Download PDF Invoice
          </button>
          
          <div className="flex items-center justify-center gap-2 text-[9px] text-gray-400 font-bold uppercase tracking-[0.2em]">
            <ShieldCheck size={12} className="text-blue-500" />
            ISO 27001 Verified Enrollment Record
          </div>
        </div>
      </div>
    </div>
  );
}