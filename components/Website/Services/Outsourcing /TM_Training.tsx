"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const TM_Training = () => {
  return (
    <div className="pb-[6rem] mt-[4rem]">
      {/* <!-- ===== Training Programs Start ===== --> */}
      <section className="overflow-hidden pb-20 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
            {/* Left Image */}
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
                src="/images/about/inspect1.jpg"
                alt="Training Programs"
                className="rounded-2xl dark:hidden"
                width={600}
                height={50}
              />
              <Image
                src="/images/about/inspect2.jpg"
                alt="Training Programs"
                className="rounded-2xl hidden dark:block"
                width={600}
                height={100}
              />
            </motion.div>

            {/* Right Content */}
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
              <span className="font-bold uppercase text-black dark:text-white mb-8">
                Training Programs
              </span>

              <p className="mt-4 text-1xl text-pretty text-gray-700 dark:text-gray-300">
                At Truemark, a trusted conformity assessment body, we offer
                comprehensive training programs designed to enhance your
                organization's capabilities in Quality Infrastructure Systems.
                Our expert trainers provide professional development
                opportunities in various areas, including quality management,
                auditing, and compliance.
              </p>

              <p className="mt-4 text-1xl text-pretty text-gray-700 dark:text-gray-300">
                Our training programs are tailored to meet the needs of
                industries and organizations seeking to improve their quality
                systems, adhere to regulatory requirements, and achieve
                certification. With our training, you'll gain the knowledge and
                skills necessary to drive quality excellence and continuous
                improvement within your organization.
              </p>

              {/* Key Areas */}
              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-stroke dark:border-strokedark dark:bg-blacksection">
                    <p className="text-metatitle2 font-semibold text-black dark:text-white">
                      01
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-metatitle2 text-black dark:text-white">
                      Quality Management Systems
                    </h3>
                    <p className="mt-2 text-gray-700 dark:text-gray-300">
                      Understanding and implementing standards like ISO 9001
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-stroke dark:border-strokedark dark:bg-blacksection">
                    <p className="text-metatitle2 font-semibold text-black dark:text-white">
                      02
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-metatitle2 text-black dark:text-white">
                      Auditing Techniques
                    </h3>
                    <p className="mt-2 text-gray-700 dark:text-gray-300">
                      Developing skills for effective internal and external
                      audits
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-stroke dark:border-strokedark dark:bg-blacksection">
                    <p className="text-metatitle2 font-semibold text-black dark:text-white">
                      03
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-metatitle2 text-black dark:text-white">
                      Regulatory Compliance
                    </h3>
                    <p className="mt-2 text-gray-700 dark:text-gray-300">
                      Navigating industry-specific regulations and standards
                    </p>
                  </div>
                </div>
              </div>

              <p className="mt-6 text-1xl text-pretty text-gray-700 dark:text-gray-300">
                By partnering with us for training, you'll benefit from our
                expertise and experience in conformity assessment, ensuring your
                team is well-equipped to meet the challenges of quality
                management and certification.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== Training Programs End ===== --> */}
    </div>
  );
};

export default TM_Training;
