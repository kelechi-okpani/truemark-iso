'use client';
import { motion } from 'framer-motion';
import React from 'react';
import { sectorsData } from "@/components/Website/About/AboutData";


const SectorsWeServe = () => {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 xl:px-24 text-[#1A1A1A]  mb-[3rem]">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-12 text-center max-w-3xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Do</h2>
        <p className="text-lg leading-relaxed">
          At Truemark, we provide global standards and solutions tailored to various industries,
          ensuring compliance and trust in products and services. Our expertise spans multiple
          sectors, where we offer customized audit and conformity assessment services.
        </p>
      </motion.div>

      <div className="grid gap-10 md:grid-cols-2">
        {sectorsData.map((sector, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="p-6 rounded-md shadow-md  bg-white py-6"
          >
            <h3 className="text-xl font-semibold mb-2">{sector.title}</h3>
            <p className="whitespace-pre-line text-base leading-relaxed">{sector.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-16 space-y-10 max-w-4xl mx-auto"
      >
        <div>
          <h3 className="text-2xl font-bold mb-2">Independence and Integrity</h3>
          <p className="text-base leading-relaxed">
            Our training arm operates independently of our conformity assessment departments, with a
            strict firewall in place to maintain objectivity and impartiality. This ensures that our
            training programs are unbiased and our conformity assessments are conducted with the
            highest level of integrity.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-2">Trusted Decisions</h3>
          <p className="text-base leading-relaxed">
            We help businesses make informed decisions about product and service compliance,
            ensuring adherence to relevant standards and regulations. Our tailored solutions and
            global expertise enable organizations to build trust with stakeholders and achieve their
            goals.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default SectorsWeServe;
