"use client";
import Image from "next/image";
import { useState } from "react";
import ISSO from "../../../public/images/Home/hero.jpg";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import { ShieldCheck, Award, Users, ArrowRight, Globe } from "lucide-react";

const Hero = () => {
  return (
    <section className="overflow-hidden pt-32 md:pt-36 xl:pt-28 pb-16 lg:pb-20 ">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <div className="flex flex-col-reverse lg:flex-row lg:items-center lg:gap-10 xl:gap-24">
          
          {/* Left Content Column */}
          <div className="md:w-full lg:w-1/2 mt-10 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Refined Trust Badge */}
              <div className="inline-flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-full px-3 py-1.5 mb-5">
                <ShieldCheck size={14} className="text-[#387467]" />
                <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-gray-500">
                  Accredited Certification Body
                </span>
              </div>

              {/* Smaller, cleaner Heading */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-[1.15] mb-5">
                Providing <span className="text-[#387467]">digital tools</span> <br className="hidden lg:block"/> 
                that empower <span className="text-slate-400 font-medium">
                  <ReactTyped
                    strings={["Lifelong Learners", "Confident Achievers", "Future Innovators"]}
                    typeSpeed={60}
                    backSpeed={40}
                    backDelay={2500}
                    loop
                  />
                </span>
              </h1>

              {/* Subtext with better line height */}
              <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-8 max-w-lg">
                Truemark Global (TMGSS) is Nigeria’s leading conformity assessment body. 
                We facilitate international excellence through globally recognized certifications, 
                auditing, and technical outsourcing solutions.
              </p>

              {/* Refined Action Area */}
              <div className="flex flex-wrap gap-3 mb-10">
                <button className="flex items-center justify-center gap-2 bg-[#387467] text-white px-7 py-3.5 rounded-lg font-semibold text-sm hover:shadow-md transition-all">
                  Explore Courses <ArrowRight size={16} />
                </button>
                <button className="flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-700 px-7 py-3.5 rounded-lg font-semibold text-sm hover:bg-slate-50 transition-all">
                  Contact an Expert
                </button>
              </div>

              {/* Quick Stats - Minimalist style */}
              <div className="flex flex-wrap gap-8 pt-6 border-t border-slate-100">
                <div className="flex items-center gap-2.5">
                  <Award size={20} className="text-[#387467]" />
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">ISO Accredited</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Users size={20} className="text-[#387467]" />
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">100+ Organizations</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Image Column - Smaller Scale */}
          <div className="md:w-full lg:w-5/12">
            <div className="relative">
              {/* Subtle Shapes */}
              <Image
                src="/images/shape/shape-02.svg"
                alt="shape"
                width={30}
                height={30}
                className="absolute -bottom-4 -right-4 z-10 opacity-50"
              />
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 rounded-3xl overflow-hidden border-[8px] border-white shadow-xl"
              >
                <Image
                  src={ISSO}
                  alt="Professional Training"
                  width={500}
                  height={500}
                  className="w-full h-auto object-cover"
                  priority
                />
                
                {/* Minimalist Floating Card */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-white/50 hidden sm:flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#387467]/10 rounded-full flex items-center justify-center text-[#387467]">
                    <Globe size={20} />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-slate-800 uppercase tracking-tight">Global Network</p>
                    <p className="text-[9px] text-slate-500 font-medium leading-none">Accepted across Africa & Europe</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;