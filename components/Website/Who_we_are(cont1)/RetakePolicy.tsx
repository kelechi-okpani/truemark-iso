'use client';

import { motion } from 'framer-motion';

const RetakePolicy = () => {
  return (
    <section className="bg-white dark:bg-black py-16 px-4 md:px-10 lg:px-20 text-[#1A1A1A] dark:text-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto space-y-10"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[#387467]">Exam Retake Policy</h2>

        <section className="space-y-5">
          <h3 className="text-2xl font-semibold text-[#387467]">Purpose</h3>
          <p>
            Truemark publishes this retake policy to uphold the integrity of its certification assessments and to provide clarity on retake procedures and eligibility.
          </p>
        </section>

        <section className="space-y-5">
          <h3 className="text-2xl font-semibold text-[#387467]">Retake Policy Details</h3>
          <ul className="list-disc pl-6 space-y-3">
            <li>
              If a candidate does not meet the 70% pass mark on the first attempt, they are eligible for two retakes. The first retake is free.
            </li>
            <li>
              If the candidate still does not meet the 70% mark on the second attempt, a retake fee applies for the next (third) attempt. The fee is 50% of the initial exam cost.
            </li>
            <li>
              For candidates who do not pass on the third attempt, a 14-day waiting period is required before the fourth attempt. The 50% retake fee still applies.
            </li>
            <li>
              The same rule applies for the fifth retake attempt: a 14-day wait and a 50% fee.
            </li>
            <li>
              Candidates who pass the exam are not permitted to retake the same version of the exam.
            </li>
            <li>
              Candidates may retake a newer version of the course exam when released, and standard fees will apply.
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h3 className="text-xl font-semibold text-[#387467]">Contact for Retake Arrangements</h3>
          {/*<p>*/}
          {/*  To arrange exam retakes, please email <a href="mailto:certification@sandbp.net" className="text-blue-600 underline">certification@sandbp.net</a>.*/}
          {/*</p>*/}
        </section>

        <p className="text-sm text-gray-500 dark:text-gray-400 italic">
          Please ensure you are well-prepared for each attempt to avoid additional costs and delays.
        </p>
      </motion.div>
    </section>
  );
};

export default RetakePolicy;
