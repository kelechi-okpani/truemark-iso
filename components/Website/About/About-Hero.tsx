"use client";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";

const AboutHero = () => {
  return (
    <section className="relative overflow-hidden  py-20 lg:py-32">
      {/* Subtle Background Element */}
      <div className="absolute top-0 left-1/2 -z-10 h-full w-full -translate-x-1/2 " />

      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          
          {/* Section Label */}
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 text-[11px] font-black uppercase tracking-[0.3em] text-[#387467]"
          >
            About TrueMark Global
          </motion.span>

          {/* Main Display Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-8 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
          >
            Delivering world-class <br className="hidden md:block" />
            <span className="text-[#387467]">certification solutions</span> for <br />
            <span className="text-slate-400">
              <ReactTyped
                strings={["Global Standards", "Trusted Compliance", "Sustainable Growth"]}
                typeSpeed={80}
                backSpeed={50}
                backDelay={3000}
                loop
              />
            </span>
          </motion.h1>

          {/* Narrative Content - Broken into digestible parts */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-3xl"
          >
            <p className="text-lg leading-relaxed text-slate-600 mb-6">
              TrueMark Global Standards & Solutions Limited was founded on a simple but powerful belief: 
              <span className="font-semibold text-slate-900"> African businesses deserve to compete fairly, confidently, and successfully on the world stage.</span>
            </p>

            <div className="grid md:grid-cols-2 gap-8 text-left border-t border-slate-100 pt-10 mt-10">
              <div>
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-3">Our Mission</h3>
                <p className="text-[15px] leading-relaxed text-slate-500">
                  In today’s regulated marketplace, trust and compliance are essential. We help Nigerian organizations 
                  prove they meet international quality and safety standards through rigorous auditing and inspection.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-3">The Impact</h3>
                <p className="text-[15px] leading-relaxed text-slate-500">
                  When organizations meet global standards, they boost trade, attract investment, and strengthen the national economy. 
                  We empower companies to operate with integrity.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutHero;