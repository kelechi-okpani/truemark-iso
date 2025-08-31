'use client';

import { motion } from 'framer-motion';

const ImpartialityPolicy = () => {
  return (
    <section className="bg-white dark:bg-black py-16 px-4 md:px-10 lg:px-20 text-[#1A1A1A] dark:text-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto space-y-10"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[#387467]">Impartiality Policy</h2>

        <section className="space-y-4">
          <h3 className="text-2xl font-semibold text-[#387467]">Purpose</h3>
          <p>
            The definition of impartiality is “not prejudiced towards or against any particular side or party.” Based on this definition, Truemark global standards and solutions limited (TMGSS) seeks to attain the highest degree of public confidence and trust in rendering unbiased services. Truemark fully acknowledges the importance of impartiality in carrying out its certification body activities that are governed by the requirements of the International Standard ISO/IEC 17024.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-semibold text-[#387467]">Policy Statement</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Truemark global standards and solutions limited (TMGSS) top management ensures that operations are conducted to safeguard objectivity and impartiality in delivering certification services in a non-discriminatory manner.</li>
            <li>Policies and procedures shall be publicly available, fair, and accurately reflect certification requirements.</li>
            <li>Certification shall not be conditional upon education or training from Truemark. However, services may be restricted when there is an unacceptable risk such as fraudulent behavior or provision of false information.</li>
            <li>All personnel, contractors, and volunteers:
              <ul className="list-disc pl-6 mt-1">
                <li>Shall act objectively and without commercial, financial, or other pressures.</li>
                <li>Are obligated to disclose any potential conflicts of interest.</li>
              </ul>
            </li>
            <li>Truemark global standards and solutions limited (TMGSS) shall not offer consultancy or suggest certification will be easier through certain individuals or services.</li>
            <li>Certification decisions shall be made independently of the assessment process.</li>
            <li>Ongoing monitoring of conformance to this policy is part of Truemark global standards and solutions limited (TMGSS) risk and quality management system.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-semibold text-[#387467]">Commitment to Impartiality</h3>
          <p>
            Truemark global standards and solutions limited (TMGSS) commits to acting impartially in relation to its applicants, candidates, and certified persons. All certification decisions shall follow clearly defined policies and procedures.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Truemark global standards and solutions limited (TMGSS) understands and actively manages threats to impartiality including self-interest, personnel relationships, financial pressure, favoritism, conflict of interest, or intimidation.</li>
            <li>Threat analyses are periodically conducted to evaluate the potential for undue influence on certification activities.</li>
            <li>Truemark global standards and solutions limited (TMGSS) ensures that its operations are compliant with ISO/IEC 17024:2012 and relevant conformity assessment guidelines.</li>
            <li>All employees are trained and jointly responsible for maintaining impartiality across all certification functions.</li>
          </ul>
        </section>

        <p className="text-sm text-gray-500 dark:text-gray-400 italic">
          This policy shall be reviewed annually or upon significant changes to Truemark global standards and solutions limited (TMGSS) certification operations.
        </p>
      </motion.div>
    </section>
  );
};

export default ImpartialityPolicy;
