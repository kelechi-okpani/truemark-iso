"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { aboutContent } from "@/components/Website/About/AboutData";

const AboutTM = () => {
  const { section1, section2 } = aboutContent;

  return (
    <div className="space-y-20 lg:space-y-32 py-16">
      
      {/* ===== Section 1: Pillars/Mission ===== */}
      <section className="overflow-hidden">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
            
            {/* Image Side with Decorative Element */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative md:w-1/2"
            >
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#387467]/5 rounded-full -z-10" />
              <div className="overflow-hidden rounded-2xl border border-slate-100 dark:border-slate-800">
                <Image
                  src={section1.image}
                  alt="Professional Certification"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  width={700}
                  height={500}
                />
              </div>
            </motion.div>

            {/* Content Side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="md:w-1/2"
            >
              <span className="inline-block px-3 py-1 mb-4 text-[11px] font-bold uppercase tracking-widest text-[#387467] bg-[#387467]/5 rounded-full">
                {section1.title}
              </span>
              <p className="text-lg font-medium text-slate-900 dark:text-white mb-8 leading-relaxed">
                {section1.intro}
              </p>

              <div className="grid gap-8">
                {section1.pillars.map((item) => (
                  <div key={item.num} className="group flex items-start gap-6">
                    <div className="flex-shrink-0 mt-1">
                      <span className="text-xs font-black text-slate-300 group-hover:text-[#387467] transition-colors">
                        {item.num}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-md font-bold text-slate-900 dark:text-white mb-1.5">
                        {item.title}
                      </h3>
                      <p className="text-[14px] leading-relaxed text-slate-500 dark:text-slate-400">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== Section 2: Vision/Benefits ===== */}
      <section className="overflow-hidden">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <div className="flex flex-col-reverse md:flex-row items-center gap-12 lg:gap-24">
            
            {/* Content Side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="md:w-1/2"
            >
              <span className="inline-block px-3 py-1 mb-4 text-[11px] font-bold uppercase tracking-widest text-[#387467] bg-[#387467]/5 rounded-full">
                {section2.visionHeading}
              </span>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
                {section2.visionSub}
              </h2>

              <div className="space-y-6">
                {section2.benefits.map((item) => (
                  <div key={item.num} className="flex gap-4 p-4 rounded-xl border border-transparent hover:border-slate-100 hover:bg-slate-50/50 dark:hover:border-slate-800 dark:hover:bg-slate-900/50 transition-all">
                    <div className="h-2 w-2 mt-2.5 rounded-full bg-[#387467]" />
                    <div>
                      <h3 className="text-[15px] font-bold text-slate-900 dark:text-white">{item.title}</h3>
                      <p className="text-[13.5px] text-slate-500 mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="md:w-1/2 relative"
            >
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#387467]/5 rounded-xl -z-10" />
              <div className="overflow-hidden rounded-2xl border border-slate-100 dark:border-slate-800">
                <Image
                  src={section2.image}
                  alt="Our Vision"
                  className="object-cover"
                  width={600}
                  height={500}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutTM;