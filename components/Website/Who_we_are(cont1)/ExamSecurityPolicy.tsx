'use client';

import { motion } from 'framer-motion';

const ExamSecurityPolicy = () => {
  return (
    <section className="bg-white dark:bg-black py-16 px-4 md:px-10 lg:px-20 text-[#1A1A1A] dark:text-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto space-y-10"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[#002B5B]">Exam Security Policy</h2>

        <section className="space-y-4">
          <h3 className="text-2xl font-semibold text-[#387467]">Purpose</h3>
          <p>
            The purpose of this Exam Security Policy is to ensure the integrity, confidentiality, and security of courseware and exam content within Truemark. This policy outlines the guidelines and procedures for access control, management, and enforcement to protect exam materials from unauthorized access and distribution.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-semibold text-[#387467]">Scope</h3>
          <p>This policy applies to all individuals with access to Truemark’s courseware and exam systems, including students, instructors, and administrative staff.</p>
        </section>

        <section className="space-y-6">
          <h3 className="text-2xl font-semibold text-[#387467]">Access Control</h3>

          <div className="space-y-2">
            <h4 className="text-xl font-semibold">1. Learning Management System (LMS) Access</h4>
            <ul className="list-disc pl-6 space-y-1">
              <li>Access to the LMS containing course materials and exam content shall be restricted based on the user’s role and responsibility.</li>
              <li>Access levels shall be regularly reviewed and updated to ensure compliance with this policy.</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h4 className="text-xl font-semibold">2. Student Access</h4>
            <ul className="list-disc pl-6 space-y-1">
              <li>Students shall only have access to view course materials while they are actively enrolled in the respective course.</li>
              <li>Student access will be revoked once the enrollment period ends.</li>
            </ul>
          </div>
        </section>

        <section className="space-y-6">
          <h3 className="text-2xl font-semibold text-[#387467]">Exam Content Security</h3>

          <div className="space-y-2">
            <h4 className="text-xl font-semibold">1. Restricted Exam Access</h4>
            <ul className="list-disc pl-6 space-y-1">
              <li>Access to exam questions shall be limited strictly to the duration of the exam period.</li>
              <li>Exam content will not be accessible before or after the examination window.</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h4 className="text-xl font-semibold">2. Prohibition of Exam Content Copying</h4>
            <ul className="list-disc pl-6 space-y-1">
              <li>Students are strictly prohibited from copying, downloading, or distributing exam questions.</li>
              <li>Technical measures such as disabling copy/paste functions and restricting screenshots will be implemented to enforce these rules.</li>
            </ul>
          </div>
        </section>

        <p className="text-sm text-gray-500 dark:text-gray-400 italic">
          Truemark reserves the right to investigate and take disciplinary actions against any breach of this policy.
        </p>
      </motion.div>
    </section>
  );
};

export default ExamSecurityPolicy;
