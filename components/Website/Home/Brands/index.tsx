"use client";
import React from "react";
import brandData from "./brandData";
import { motion } from "framer-motion";
import Link from "next/link";

const Brands = () => {
  // Flattening the items and doubling them for a seamless infinite loop
  const allSubmenuItems = brandData.flatMap((brand) => brand.submenu || []);
  const tickerItems = [...allSubmenuItems, ...allSubmenuItems, ...allSubmenuItems];

  return (
    <section className="border-y border-gray-100 bg-white py-6 overflow-hidden">
      <div className="mx-auto max-w-c-1390 px-4">
        
        {/* Optional: Small Label for context */}
        <div className="text-center mb-6">
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#387467] bg-[#387467]/5 px-4 py-1.5 rounded-full">
            Our ISO Standards & Compliance Modules
          </span>
        </div>

        <div className="relative flex overflow-x-hidden">
          <motion.div
            className="flex items-center whitespace-nowrap gap-8"
            animate={{ x: ["0%", "-33.33%"] }} // Adjusted for the 3x multiplier
            transition={{
              repeat: Infinity,
              duration: 35, // Slower is more professional for reading
              ease: "linear",
            }}
          >
            {tickerItems.map((item, index) => (
              <Link
                key={index}
                href={item?.path || "#"}
                className="group flex items-center gap-3 px-6 py-3 rounded-xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:border-[#387467]/30 hover:shadow-sm transition-all duration-300"
              >
                {/* Minimalist Icon/Dot */}
                <div className="w-1.5 h-1.5 rounded-full bg-[#387467] group-hover:scale-150 transition-transform" />
                
                <span className="text-sm font-bold text-slate-700 group-hover:text-[#387467] tracking-tight">
                  {item?.title}
                </span>

                {/* Optional: Subtle "Verified" badge style */}
                <span className="text-[9px] font-black text-gray-300 group-hover:text-[#387467]/50 uppercase tracking-tighter ml-2">
                  ISO
                </span>
              </Link>
            ))}
          </motion.div>
          
          {/* Gradient Fades for a "shimmer" effect at edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
        </div>
      </div>
    </section>
  );
};

export default Brands;