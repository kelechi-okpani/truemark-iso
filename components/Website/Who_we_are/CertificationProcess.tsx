'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

const CertificationProcess = () => {
  return (
    <section className="bg-white dark:bg-black py-16 px-4 md:px-10 lg:px-20 text-[#1A1A1A] dark:text-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto space-y-10"
      >
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#387467]">
          Certification Eligibility & Process
        </h2>

        {/* Certification Eligibility */}
        <div className="space-y-3">
          <h3 className="text-2xl font-semibold text-[#387467]">Certification Eligibility</h3>
          <p>All applicants for certification must meet the following criteria:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>The applicant must be at least 18 years of age prior to applying.</li>
            <li>
              The applicant must meet the prerequisites for the requested level of certification.
            </li>
            <li>
              The applicant must have attended a classroom training or done self-study using our
              course materials before attempting the certification exam.
            </li>
            <li>
              All written assessments (and any required retests) must be completed within 12 months
              of application.
            </li>
          </ul>
        </div>

        {/* Choose the Right Certification */}
        <div className="space-y-3">
          <h3 className="text-2xl font-semibold text-[#387467]">Choose the Right Certification</h3>
          <p>
            Each True-mark certification has specific education and experience requirements. Candidates
            must:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Determine the credential that best fits their professional goals.</li>
            <li>Verify eligibility requirements for the chosen certification.</li>
          </ul>

        </div>

        {/* Take the Course */}
        <div className="space-y-3">
          <h3 className="text-2xl font-semibold text-[#387467]">Take the Course</h3>
          <p>
            Candidates are responsible for their own study and exam preparation. While taking a
            course is not mandatory, completing a training program will enhance your chances of
            success.
          </p>
        </div>

        {/* Take the Exam */}
        <div className="space-y-3">
          <h3 className="text-2xl font-semibold text-[#387467]">Take the Exam</h3>
          <p>
            After completing the course, candidates must take a certification exam to demonstrate
            their knowledge and understanding of the subject matter.
          </p>
        </div>

        {/* Exam Results and Certificate */}
        <div className="space-y-3">
          <h3 className="text-2xl font-semibold text-[#387467]">Exam Result & Certificate Dissemination</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Results are communicated immediately after the exam, showing the candidate’s score and
              pass/fail status.
            </li>
            <li>
              If the candidate passes, an e-certificate is issued immediately.
            </li>
            <li>
              If the candidate fails, a free retake opportunity will be offered via email.
            </li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default CertificationProcess;
