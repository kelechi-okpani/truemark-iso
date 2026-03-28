"use client";
import React from "react";
import featuresData from "./featuresData";
import SingleFeature from "./SingleFeature";
import SectionHeader from "../../Common/SectionHeader";
import { motion } from "framer-motion";

const Feature = () => {
  return (
    <section id="features" className="py-20 lg:py-28 ">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        
        {/* Section Header with Refined Typography */}
        <div className="mb-16 md:mb-20">
          <SectionHeader
            headerInfo={{
              title: "OUR CORE PILLARS",
              subtitle: "Driving Excellence Through Global Standards",
              description: "At TrueMark Global (TMGSS), we don't just certify; we empower. Our holistic approach to conformity assessment ensures your organization doesn't just meet standards—it leads them."
            }}
          />
        </div>

        {/* Feature Grid with Entrance Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:gap-12"
        >
          {featuresData.map((feature, key) => (
            <div 
              key={key} 
              className="group transition-all duration-300 hover:-translate-y-2"
            >
              <SingleFeature feature={feature} />
            </div>
          ))}
        </motion.div>

        {/* Value Proposition Footer - NEW */}
        <div className="mt-16 text-center border-t border-gray-100 pt-10 dark:border-strokedark">
           <p className="text-sm font-medium text-gray-400 uppercase tracking-[0.2em] mb-4">
             Trusted by industry leaders across Nigeria & Africa
           </p>
           <div className="flex flex-wrap justify-center gap-6 opacity-50 grayscale hover:grayscale-0 transition-all">
             {/* You can add small ISO badges or industry icons here */}
             <span className="font-black text-xl italic text-slate-300">ISO 9001</span>
             <span className="font-black text-xl italic text-slate-300">ISO 14001</span>
             <span className="font-black text-xl italic text-slate-300">ISO 45001</span>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;