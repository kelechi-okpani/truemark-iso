'use client';
import { motion } from 'framer-motion';

const CodeOfEthics = () => {
  return (
    <section className="py-16 px-4 md:px-10 lg:px-20 text-[#1A1A1A] dark:text-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto space-y-10"
      >
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#387467]">
          True-mark Code of Ethics
        </h2>

        {/* Purpose */}
        <div className="space-y-3">
          <h3 className="text-2xl font-semibold text-[#387467]">Purpose</h3>
          <p>
            The purpose of this section is to establish a Code of Ethics for True-mark Personnel and True-mark Certified Professionals.
            The True-mark Code of Conduct applies to all True-mark Professionals including certified individuals, clients, partners,
            trainers, auditors, employees, and other relevant stakeholders.
          </p>
        </div>

        {/* Code of Ethics List */}
        <div className="space-y-3">
          <h3 className="text-2xl font-semibold text-[#387467]">Code of Ethics</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Conduct themselves professionally, with honesty, accuracy, fairness, responsibility, and independence.</li>
            <li>
              Act solely in the best interest of their employer, clients, the public, and the profession, adhering to
              professional standards and applicable techniques.
            </li>
            <li>
              Offer only services they are qualified to perform and inform clients about the nature, risks, or concerns of services.
            </li>
            <li>
              Treat information obtained during professional operations with confidentiality and privacy without prior approval.
            </li>
            <li>Respect the intellectual property and contributions of others.</li>
            <li>
              Do not intentionally communicate false or misleading information that could compromise candidate evaluation integrity.
            </li>
            <li>Do not act in any manner that could compromise the reputation of True-mark or its certification programs.</li>
            <li>Fully cooperate in any inquiry following a reported infringement of this Code of Ethics.</li>
          </ul>
        </div>

        {/* Sanctions Section */}
        <div className="space-y-3">
          <h3 className="text-2xl font-semibold text-[#387467]">Sanctions for Violation of the Code of Ethics</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Temporary or permanent removal from the certification program.</li>
            <li>Temporary or permanent revocation of certification.</li>
          </ul>
        </div>

        {/* Evaluation Section */}
        <div className="space-y-3">
          <h3 className="text-2xl font-semibold text-[#387467]">Code of Ethics Evaluation</h3>
          <p>
            Compliance with the True-mark Code of Ethics is essential for all True-mark professionals including employees,
            certified individuals, trainers, and partners. This compliance is monitored continuously and is part of each stakeholder’s performance evaluation.
          </p>
          <p>
            Any professional who fails to comply may face disciplinary actions including contract termination or legal measures,
            depending on the severity of the violation. In all cases, individuals have the right to be heard and defend themselves
            before any measure is imposed.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default CodeOfEthics;
