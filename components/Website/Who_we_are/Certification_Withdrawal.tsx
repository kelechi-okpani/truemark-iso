'use client';
import { motion } from 'framer-motion';

const CertificationWithdrawal = () => {
  return (
    <section className=" py-16 px-4 md:px-10 lg:px-20 text-[#1A1A1A] dark:text-white ">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto space-y-8"
      >
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#387467]">
          Policy on Suspending, Withdrawing or Reducing the Scope of Certification
        </h2>

        {/* Section 1 */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-[#387467]">1. Policy Statement</h3>
          <p>
            True-mark may, at its discretion, suspend or revoke a certificate for cause. Causes for
            suspension or revocation include, but are not limited to fraud, deceit, or submission
            of inaccurate data to obtain certification.
          </p>
          <p>
            When True-mark has evidence that charges against a certificate holder are valid, it shall
            notify the certificate holder by certified mail at his or her last known address. The
            certificate holder will have the opportunity to present his or her defense to the
            certification board in writing according to the terms outlined in the policy.
          </p>
          <p>
            The suspension or revocation shall remain in effect until the board reviews the case.
            True-mark shall then uphold or deny the suspension or revocation.
          </p>
          <p>
            All actions and decisions in the context of suspension, withdrawal or reduction of scope
            of certification of a client shall be based on objective evidence.
          </p>
        </div>

        {/* Section 2 */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-[#387467]">2. Suspension / Withdrawal of Certification</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Improper use of certificates and logos</li>
            <li>Malpractices</li>
            <li>
              Providing false information or making false statements on or in connection with
              application forms, scheduling permits, or other True-mark-related documents
            </li>
            <li>Applying for an examination for which an applicant is not eligible</li>
            <li>The active Client has voluntarily requested a suspension</li>
          </ul>

          <p>Suspension or withdrawal of certification shall occur in the following circumstances:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Failure to address the reasons for suspension in a time frame as agreed</li>
            <li>Client wishes to not continue with certification</li>
          </ul>

          <p>True-mark shall ensure the following:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Each applicant agrees to the conditions stated in the Proposal and Certification
              Agreement including those associated with suspension, withdrawal or reduction of scope
              of certification
            </li>
            <li>
              An applicant is informed as to why there is an intention for True-mark to suspend,
              withdraw or reduce the scope of certification
            </li>
            <li>
              An applicant is suitably warned about an intention for True-mark to suspend, withdraw or
              reduce the scope of certification to provide time to respond
            </li>
            <li>
              All decisions are taken by top management after a review of objective evidence
            </li>
            <li>
              An applicant subject to warning, suspension, withdrawal or reduction of scope should
              have the right of appeal
            </li>
          </ul>
        </div>

        {/* Footer note */}
        {/*<div className="pt-8 border-t border-gray-300 dark:border-gray-700">*/}
        {/*  <p className="text-base italic">*/}
        {/*    This Suspension, Withdrawal or Reduction of Scope of Certification Policy is approved and issued by:*/}
        {/*  </p>*/}
        {/*</div>*/}
      </motion.div>
    </section>
  );
};

export default CertificationWithdrawal;
