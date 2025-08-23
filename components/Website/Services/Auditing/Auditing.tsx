"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeader from "@/components/Website/Common/SectionHeader";

const TM_Auditing = () => {
  return (
    <div className="pb-[6rem]">
      {/* <!-- ===== Auditing Section Start ===== --> */}
      <section className="overflow-hidden pb-20 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
            <motion.div
              variants={{
                hidden: { opacity: 0, x: 20 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right w-full"
            >
              <span className="font-bold uppercase text-black dark:text-white mb-8">
                Key Benefits of Our Auditing Services
              </span>

              {/* Compliance */}
              <div className="mt-7.5 flex items-start gap-5">
                <div className="flex h-15 w-15 items-center justify-center rounded-full border border-stroke dark:border-strokedark dark:bg-blacksection">
                  <p className="text-metatitle2 font-semibold text-black dark:text-white">01</p>
                </div>
                <div className="w-11/12">
                  <h3 className="font-bold text-metatitle2 text-black dark:text-white"> Compliance</h3>
                  <p className="mt-4 text-1xl text-pretty text-gray-700 dark:text-gray-300">
                    Our audits verify that your organization adheres to local, national, and international regulations,
                    industry-specific standards, and internal policies. This helps reduce legal exposure, avoid penalties,
                    and maintain your operating license with confidence.
                  </p>
                </div>
              </div>

              {/* Risk Management */}
              <div className="mt-7.5 flex items-start gap-5">
                <div className="flex h-15 w-15 items-center justify-center rounded-full border border-stroke dark:border-strokedark dark:bg-blacksection">
                  <p className="text-metatitle2 font-semibold text-black dark:text-white">02</p>
                </div>
                <div className="w-11/12">
                  <h3 className="font-bold text-metatitle2 text-black dark:text-white"> Risk Management</h3>
                  <p className="mt-4 text-1xl text-pretty text-gray-700 dark:text-gray-300">
                    We identify potential risks, control weaknesses, and fraud vulnerabilities across your operations.
                    Our risk-based audit approach enables your leadership to take proactive measures, strengthen internal
                    controls, and protect the organization from both financial and reputational harm.
                  </p>
                </div>
              </div>

              {/* Operational Efficiency */}
              <div className="mt-7.5 flex items-start gap-5">
                <div className="flex h-15 w-15 items-center justify-center rounded-full border border-stroke dark:border-strokedark dark:bg-blacksection">
                  <p className="text-metatitle2 font-semibold text-black dark:text-white">03</p>
                </div>
                <div className="w-11/12">
                  <h3 className="font-bold text-metatitle2 text-black dark:text-white"> Operational Efficiency</h3>
                  <p className="mt-4 text-1xl text-pretty text-gray-700 dark:text-gray-300">
                    Audits are not just about compliance—they are tools for improvement. We analyze processes,
                    resource utilization, and workflow structures to highlight inefficiencies, redundancies, and
                    bottlenecks, providing practical recommendations to enhance productivity and reduce waste.
                  </p>
                </div>
              </div>

              {/* Credibility and Trust */}
              <div className="mt-7.5 flex items-start gap-5">
                <div className="flex h-15 w-15 items-center justify-center rounded-full border border-stroke dark:border-strokedark dark:bg-blacksection">
                  <p className="text-metatitle2 font-semibold text-black dark:text-white">04</p>
                </div>
                <div className="w-11/12">
                  <h3 className="font-bold text-metatitle2 text-black dark:text-white"> Credibility and Trust</h3>
                  <p className="mt-4 text-1xl text-pretty text-gray-700 dark:text-gray-300">
                    An independent audit increases your organization’s credibility with investors, customers, regulators,
                    and partners. Verified financial statements and process reviews build confidence in your governance
                    and reliability, boosting stakeholder loyalty and market reputation.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== Auditing Section End ===== --> */}
    </div>
  );
};

export default TM_Auditing;

