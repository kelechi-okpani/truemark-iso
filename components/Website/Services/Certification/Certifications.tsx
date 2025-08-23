"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeader from "@/components/Website/Common/SectionHeader";

const TM_Certifications = () => {
  return (
    <div className='pb-[6rem]'>

      {/* ===== About Start ===== */}
      <section className="overflow-hidden pb-20 lg:pb-25 xl:pb-30 ">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2"
            >
              <Image
                src="/images/about/cert1.jpg"
                alt="About"
                className="rounded-2xl dark:hidden "
                width={600} height={100}
              />
              <Image
                src="/images/about/cert1.jpg"
                alt="About"
                className="rounded-2xl hidden dark:block "
                width={600} height={100}
              />
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, x: 20 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right md:w-1/2"
            >
              <span className="font-bold uppercase text-black dark:text-white mb-8 block">
                Where We Focus
              </span>
              <div className="space-y-10">
                <div>
                  <h3 className="font-bold text-metatitle2 text-black dark:text-white">
                     Product Certification
                  </h3>
                  <p className="mt-4 text-1xl text-gray-700 dark:text-gray-300">
                    We evaluate and confirm that your products align with both national and international quality and safety standards.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-metatitle2 text-black dark:text-white">
                     System Certification
                  </h3>
                  <p className="mt-4 text-1xl text-gray-700 dark:text-gray-300">
                    Our system certification services validate that your management systems comply with globally accepted standards such as ISO 9001, ISO 14001, and ISO 45001.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-metatitle2 text-black dark:text-white">
                     Safety Certification
                  </h3>
                  <p className="mt-4 text-1xl text-gray-700 dark:text-gray-300">
                    TRUE-MARK GLOBAL ensures your processes, machinery, and products meet stringent health and safety standards.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-metatitle2 text-black dark:text-white">
                     Environmental Certification
                  </h3>
                  <p className="mt-4 text-1xl text-gray-700 dark:text-gray-300">
                    We help organizations validate their environmental responsibility through standards like ISO 14001 and sustainability criteria.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-metatitle2 text-black dark:text-white">
                     Standards Certification
                  </h3>
                  <ul className="list-disc pl-5 mt-4 text-1xl text-gray-700 dark:text-gray-300 space-y-2">
                    <li>ISO/IEC 17021 – Certification of management systems</li>
                    <li>ISO/IEC 17024 – Certification of persons</li>
                    <li>ISO/IEC 17065 – Product, process, and service certification</li>
                    <li>ISO 9001 – Quality Management Systems</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-metatitle2 text-black dark:text-white">
                     Ancillary Services
                  </h3>
                  <ul className="list-disc pl-5 mt-4 text-1xl text-gray-700 dark:text-gray-300 space-y-2">
                    <li>Consulting</li>
                    <li>Training</li>
                    <li>Auditing</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== About Two Start ===== */}
      <section>
        <div className="mt-[6rem] mx-auto max-w-c-1235 overflow-hidden px-4 md:px-8 2xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
            <motion.div
              variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left md:w-1/2"
            >
              <SectionHeader
                headerInfo={{
                  title: `Certification Process`,
                  subtitle: `Step-by-Step Certification Journey with TRUE-MARK GLOBAL`,
                }}
              />
              <ul className="space-y-4 gap-8 text-1xl text-gray-700 dark:text-gray-300 mt-[3rem]">
                <li><strong>1. Enquiry Stage:</strong> Initial consultation to understand your needs, scope, and applicable standards.</li>
                <li><strong>2. Proposal and Negotiation Stage:</strong> Customized proposal shared with timelines, deliverables, and costs; contract finalization follows.</li>
                <li><strong>3. Application and Scheduling Stage:</strong> Submission of formal application and scheduling of audit phases.</li>
                <li><strong>4. Stage One Audit:</strong> Preliminary audit to review documentation, readiness, and initial compliance.</li>
                <li><strong>5. Stage Two Audit:</strong> Detailed assessment of the implementation and effectiveness of your systems or products.</li>
                <li><strong>6. Findings:</strong> A report of observations, non-conformities (if any), and recommendations for improvement.</li>
                <li><strong>7. Decision Stage:</strong> Evaluation of findings by our certification committee to determine eligibility for certification.</li>
                <li><strong>8. Certificate Award and Database Update:</strong> If successful, a certificate is issued and your compliance status is added to our verified public database.</li>
                <li><strong>9. Surveillance Audits:</strong> Periodic audits post-certification to ensure continued conformity and effectiveness.</li>
              </ul>
            </motion.div>
            <motion.div
              variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0 } }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2"
            >
              <Image
                src="/images/about/inspect2.jpg"
                alt="Inspection process"
                className="rounded-2xl dark:hidden"
                width={600}
                height={100}
              />
              <Image
                src="/images/about/inspect2.jpg"
                alt="Inspection process"
                className="rounded-2xl hidden dark:block"
                width={600}
                height={100}
              />
            </motion.div>
          </div>
        </div>
      </section>
      {/* ===== About Two End ===== */}
    </div>
  );
};

export default TM_Certifications;

