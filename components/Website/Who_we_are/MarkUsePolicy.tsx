'use client';
import { motion } from 'framer-motion';
import Image from "next/image";

const MarkUsePolicy = () => {
  return (
    <section className="bg-white dark:bg-black py-16 px-4 md:px-10 lg:px-20 text-[#1A1A1A] dark:text-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto space-y-8"
      >
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#387467]">
          True-mark Certification Mark Use Policy
        </h2>

        {/* Purpose */}
        <div className="space-y-3">
          <h3 className="text-2xl font-semibold text-[#387467]">Purpose</h3>
          <p>
            The purpose of this policy is to establish the rules and requirements for use of all
            True-mark Trademarks and Certification Marks.
          </p>
        </div>

        {/* Ownership */}
        <div className="space-y-3">
          <h3 className="text-2xl font-semibold text-[#387467]">
            True-mark Certification Mark Ownership
          </h3>
          <p>
            The following organizational trademark is owned and controlled by True-mark:
          </p>



          <div className="relative w-full h-auto rounded-md overflow-hidden">
            {/* Gradient overlay */}
            <Image
              src="/images/Green-Logo.png" // Ensure this path is correct
              alt="Accreditation Visual"
              width={700}
              height={500}
              className=" h-auto object-cover"
            />
          </div>

        </div>

        {/* Authorized Use */}
        <div className="space-y-3 mt-6">
          <h3 className="text-2xl font-semibold text-[#387467]">
            Authorized Use of True-mark Certification Mark
          </h3>
          <p>
            True-mark grants permission to use the True-mark Certification Marks to True-mark certified
            professionals that have satisfied all applicable S&BP credentialing and certification
            requirements.
          </p>
          <p>
            Each certified professional is authorized to use only the Certification Mark which
            represents the appropriate certification and credential.
          </p>
          <p>
            Certification Marks may be used in professional and business materials such as business
            cards and email signatures.
          </p>
        </div>

        {/* Non-Transferability */}
        <div className="space-y-3">
          <h3 className="text-2xl font-semibold text-[#387467]">
            Non-Assignability and Non-Transferability
          </h3>
          <p>
            Permission to use the Certification Mark is limited to the certified person and shall
            not be transferred to, assigned to, or otherwise used by any other individual,
            organization, or entity.
          </p>
        </div>

        {/* Policy Violation */}
        <div className="space-y-3">
          <h3 className="text-2xl font-semibold text-[#387467]">
            True-mark Certification Mark Use Policy Violation
          </h3>
          <p>
            Upon receiving information about inappropriate or unauthorized use of the Certification
            Mark, True-mark will take the following steps:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>The alleged misuse will be reviewed.</li>
            <li>
              If a policy violation is suspected, True-mark will contact the involved parties,
              requesting cessation of unauthorized use.
            </li>
            <li>
              If the violation continues, legal actions or sanctions will be pursued, including
              possible suspension or revocation of certification.
            </li>
            <li>
              Information obtained during professional activities must be treated confidentially and
              privately, with or without prior employer or client consent.
            </li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default MarkUsePolicy;
