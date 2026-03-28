'use client';
import { motion } from 'framer-motion';
import React from 'react';
import { sectorsData } from "@/components/Website/About/AboutData";

const SectorsWeServe = () => {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 xl:px-24 bg-white border-y border-slate-50">
      
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-16 text-center max-w-2xl mx-auto"
      >
        <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#387467] mb-4 block">
          Our Scope
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">What We Do</h2>
        <p className="text-[15px] leading-relaxed text-slate-500">
          At Truemark, we provide global standards and solutions tailored to various industries,
          ensuring compliance and trust. Our expertise spans multiple sectors through 
          customized audit and conformity assessments.
        </p>
      </motion.div>

      {/* Sectors Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:max-w-6xl lg:mx-auto">
        {sectorsData.map((sector, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative p-8 rounded-2xl border border-slate-100 bg-white transition-all duration-300 hover:border-[#387467]/30 hover:bg-slate-50/30"
          >
            {/* Subtle accent line that appears on hover */}
            <div className="absolute top-0 left-8 w-8 h-[2px] bg-[#387467] opacity-0 transition-all duration-300 group-hover:opacity-100" />
            
            <h3 className="text-lg font-bold mb-3 text-slate-900 group-hover:text-[#387467] transition-colors">
              {sector.title}
            </h3>
            <p className="text-[14px] leading-relaxed text-slate-500 line-clamp-4 group-hover:line-clamp-none transition-all">
              {sector.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Footer Info Sections */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="mt-24 grid md:grid-cols-2 gap-12 max-w-5xl mx-auto pt-16 border-t border-slate-100"
      >
        <div className="relative pl-8">
          <div className="absolute left-0 top-0 w-[3px] h-full bg-[#387467]/20 rounded-full" />
          <h3 className="text-xl font-bold mb-4 text-slate-900">Independence and Integrity</h3>
          <p className="text-[14px] leading-relaxed text-slate-500">
            Our training arm operates independently with a strict firewall to maintain objectivity. 
            This ensures training is unbiased and assessments are conducted with the highest 
            levels of integrity.
          </p>
        </div>

        <div className="relative pl-8">
          <div className="absolute left-0 top-0 w-[3px] h-full bg-[#387467]/20 rounded-full" />
          <h3 className="text-xl font-bold mb-4 text-slate-900">Trusted Decisions</h3>
          <p className="text-[14px] leading-relaxed text-slate-500">
            We help businesses make informed decisions about compliance, ensuring adherence to 
            relevant standards. Our tailored solutions enable organizations to build trust 
            with stakeholders.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default SectorsWeServe;