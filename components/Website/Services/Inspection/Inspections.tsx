"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeader from "@/components/Website/Common/SectionHeader";

const TM_Inspection = () => {
  return (
    <div className='pb-[6rem]'>

      {/* <!-- ===== About Start ===== --> */}
      <section className="overflow-hidden pb-20 lg:pb-25 xl:pb-30 ">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2"
            >
              <Image
                // src="/images/about/about-light-01.png"
                src="/images/about/inspect1.jpg"
                alt="About"
                className="rounded-2xl dark:hidden "
                width={600} height={100}
              />
              <Image
                // src="/images/about/about-dark-01.png"
                src="/images/about/inspect1.jpg"
                alt="About"
                className="rounded-2xl hidden dark:block "
                width={600} height={100}
              />
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right md:w-1/2"
            >
              <span className="font-bold uppercase text-black dark:text-white mb-8">
                 Where We Focus
              </span>

              <div className="mt-7.5 flex items-center gap-5">
                <div
                  className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                  <p className="text-metatitle2 font-semibold text-black dark:text-white">
                    01
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 className="font-bold mb-0.5 text-metatitle2 text-black dark:text-white">
                    Quality Inspections
                  </h3>

                  <p className="mt-4 text-1xl text-pretty text-gray-700 dark:text-gray-300 ">
                    We conduct in-depth inspections to detect any defects,
                    irregularities, or deviations from approved standards.
                    Our approach ensures that your products are
                    of the highest quality, consistently meeting both
                    customer and industry expectations.
                  </p>
                </div>
              </div>
              <div className="mt-7.5 flex items-center gap-5">
                <div
                  className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                  <p className="text-metatitle2 font-semibold text-black dark:text-white">
                    02
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 className="font-bold mb-0.5 text-metatitle2 text-black dark:text-white">
                    Compliance Inspections
                  </h3>
                  <p className="mt-4 text-1xl text-pretty text-gray-700 dark:text-gray-300 ">
                    We help ensure that your operations, processes, and
                    final outputs comply with relevant local and
                    international regulatory requirements.
                    Whether it's ISO standards or sector-specific regulations,
                    we safeguard your reputation and legal standing.
                  </p>

                </div>
              </div>

              <div className="mt-7.5 flex items-center gap-5">
                <div
                  className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                  <p className="text-metatitle2 font-semibold text-black dark:text-white">
                    03
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 className="font-bold mb-0.5 text-metatitle2 text-black dark:text-white">
                    Safety Inspections
                  </h3>
                  <p className="mt-4 text-1xl text-pretty text-gray-700 dark:text-gray-300 ">
                    Our safety inspections are designed to assess the operational
                    safety of your facilities, equipment, and products.
                    We identify potential hazards
                    early and help implement preventive measures to protect
                    workers, end users, and stakeholders.
                  </p>


                </div>
              </div>
              <div className="mt-7.5 flex items-center gap-5">
                <div
                  className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                  <p className="text-metatitle2 font-semibold text-black dark:text-white">
                    04
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 className="font-bold mb-0.5 text-metatitle2 text-black dark:text-white">
                    Pre-shipment Inspections
                  </h3>

                  <p className="mt-4 text-1xl text-pretty text-gray-700 dark:text-gray-300 ">
                    Before your goods are dispatched, we perform final
                    inspections to confirm that they meet agreed-upon quality,
                    quantity, labeling, and packaging
                    specifications. This helps prevent returns,
                    disputes, or rejections at the point of delivery.
                  </p>

                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== About End ===== --> */}


      <section>
        <div className="mx-auto max-w-c-1235 px-4 py-10 md:px-8 2xl:px-0 pb-[6rem]">
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: 20,
              },
              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_top "
          >

            <SectionHeader
              headerInfo={{
                title: `Why Inspection Services Matter`,
                subtitle: `The Importance of Professional Inspection`,
              }}
            />

            <ul className="text-center space-y-6 gap-8 text-1xl text-gray-700 dark:text-gray-300 mt-[3rem]">
              <li>
                <strong>Quality Assurance:</strong> Ensure consistent, reliable output that meets set standards.
              </li>
              <li>
                <strong>Customer Satisfaction:</strong> Deliver products that customers can trust.
              </li>
              <li>
                <strong>Compliance & Certification:</strong> Avoid penalties and meet industry requirements.
              </li>
              <li>
                <strong>Operational Efficiency:</strong> Detect and fix problems before they escalate.
              </li>
              <li>
                <strong>Risk Reduction:</strong> Identify and eliminate potential safety or quality failures.
              </li>
            </ul>

          </motion.div>
        </div>
      </section>


      {/* <!-- ===== About Two Start ===== --> */}
      <section>
        <div className="mx-auto max-w-c-1235 overflow-hidden px-4 md:px-8 2xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },
                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left md:w-1/2"
            >
              <h4 className="font-medium uppercase text-black dark:text-white">
                Inspection Process
              </h4>
              <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
                A Step-by-Step Breakdown of Our Inspection Workflow:
              </h2>
              <ul className="space-y-4 text-1xl text-gray-700 dark:text-gray-300">
                <li>
                  <strong>1. Enquiry Stage:</strong> Initial contact where we receive and evaluate your inspection
                  request and gather basic project details.
                </li>
                <li>
                  <strong>2. Proposal and Negotiation Stage:</strong> We provide a tailored service proposal, including
                  scope, methodology, and cost, followed by discussions to align with your expectations.
                </li>
                <li>
                  <strong>3. Application Stage:</strong> Once terms are agreed upon, we formalize the process by
                  documenting your request and registering the inspection activity.
                </li>
                <li>
                  <strong>4. Factory Selection:</strong> We identify and approve the manufacturing or operational
                  site(s) where inspections will be conducted.
                </li>
                <li>
                  <strong>5. Functional Sample Review:</strong> Review and test functional samples to ensure they meet
                  predefined performance and design expectations.
                </li>
                <li>
                  <strong>6. Product Specification Verification:</strong> Cross-check technical documents, drawings, and
                  standards to ensure the product matches your specifications.
                </li>
                <li>
                  <strong>7. In-process Inspection:</strong> Monitor the production process to ensure quality is
                  maintained at every critical stage.
                </li>
                <li>
                  <strong>8. Before-shipment Inspection:</strong> Conduct final quality and compliance checks before the
                  goods are packed and shipped.
                </li>
                <li>
                  <strong>9. Issuance of Inspection Certificate:</strong> Provide a comprehensive inspection certificate
                  that confirms conformity and gives you confidence in your product delivery.
                </li>
              </ul>
            </motion.div>

            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },
                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
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

      {/* <!-- ===== About Two End ===== --> */}
    </div>
  );
};

export default TM_Inspection;
