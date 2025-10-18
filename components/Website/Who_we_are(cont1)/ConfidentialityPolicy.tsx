'use client';

import { motion } from 'framer-motion';

const ConfidentialityPolicy = () => {
  return (
    <section className="py-16 px-4 md:px-10 lg:px-20 text-[#1A1A1A] dark:text-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto space-y-10"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[#387467]">Confidentiality Policy</h2>

        <section className="space-y-5">
          <h3 className="text-2xl font-semibold text-[#387467]">Purpose</h3>
          <p>
            The purpose of the confidentiality policy is to ensure that all staff, management, applicants, and subcontractors understand Truemark global standards and solutions limited (TMGSS) requirements regarding the handling and disclosure of personal data and confidential information.
          </p>
        </section>

        <section className="space-y-5">
          <h3 className="text-2xl font-semibold text-[#387467]">Policy Statement</h3>
          <p>
            All personnel associated with the certification program must keep confidential any information obtained during the execution of TTruemark global standards and solutions limited (TMGSS) certification program objectives.
          </p>
          <p>
            Confidential information includes details about applicants, candidates, certified persons, and the intellectual property involved in the certification process. It also covers vendor-provided data that supports the program.
          </p>
          <p>
            Every certification-related personnel must sign a non-disclosure agreement (NDA) as a prerequisite for service, ensuring full compliance with confidentiality expectations.
          </p>
        </section>

        <p className="text-sm text-gray-500 dark:text-gray-400 italic">
          Truemark global standards and solutions limited (TMGSS) is committed to protecting sensitive information and upholding privacy at every level of certification operations.
        </p>
      </motion.div>
    </section>
  );
};

export default ConfidentialityPolicy;
