'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const AccreditationSection = () => {
  return (
    <section className="py-16 px-4 md:px-10 lg:px-20 bg-white dark:bg-black text-[#1A1A1A] dark:text-white ">
      {/* Image */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-10 max-w-4xl mx-auto"
      >
        <div className="relative w-full h-auto rounded-md overflow-hidden">
          {/* Gradient overlay */}
          <div className="absolute inset-0 z-10 bg-gradient-to-l from-[#38546a]/80 to-transparent" />

          {/* Image */}
          <Image
            src="/images/policy/Accreditation.jpg" // Ensure this path is correct
            alt="Accreditation Visual"
            width={1000}
            height={500}
            className="w-full h-auto object-cover"
          />
        </div>

      </motion.div>

      {/* Accreditation Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto space-y-6"
      >
        <h2 className="text-2xl md:text-4xl font-extrabold text-[#387467] uppercase">
          Accreditation
        </h2>
        <p className="text-base md:text-lg leading-relaxed">
          At Standards and Best Practice, we are driven and culturally powered by a systemic process
          of continual improvement and professional development. As a testament to our high
          standards and commitment to providing quality service to our clients, we ensure we are
          accredited by bodies to deliver the products we offer.
        </p>

        <h3 className="text-2xl md:text-3xl font-extrabold text-[#387467] uppercase">
          Accredited by NiNAS as a Personnel Certification Body
        </h3>

        <p className="text-base md:text-lg leading-relaxed">
          True-mark is an accredited Personnel Certification Body by the Nigeria National Accreditation
          Service (NiNAS) under ISO/IEC 17024 – Requirements for bodies operating certification of
          persons. To view the certificate, please{' '}

        </p>
      </motion.div>
    </section>
  );
};

export default AccreditationSection;
