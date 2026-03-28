"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeader from "@/components/Website/Common/SectionHeader";

const TM_Outsourcing = () => {
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
                src="/images/about/inspect3.jpg"
                alt="About"
                className="rounded-2xl dark:hidden "
                width={600} height={100}
              />
              <Image
                // src="/images/about/about-dark-01.png"
                src="/images/about/inspect3.jpg"
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
                Why Choose TRUE-MARK GLOBAL?
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
                     Cost Efficiency
                  </h3>

                  <p className="mt-4 text-1xl text-pretty text-gray-700 dark:text-gray-300 ">
                    Cut down on overhead and operational expenses by delegating non-core business tasks to us. We help you
                    achieve more with less by optimizing resource allocation and reducing infrastructure investments.
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
                     Access to Expertise
                  </h3>
                  <p className="mt-4 text-1xl text-pretty text-gray-700 dark:text-gray-300 ">
                    Tap into our deep pool of experienced professionals and subject-matter experts. We bring specialized skills,
                    industry knowledge, and proven processes to deliver high-value outcomes in less time.
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
                     Focus on Core Activities
                  </h3>
                  <p className="mt-4 text-1xl text-pretty text-gray-700 dark:text-gray-300 ">
                    Outsource the complexity—focus on strategy. Our services free up your internal teams so they can concentrate on
                    innovation, client engagement, and other critical activities that drive your business forward.
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
                     Scalability
                  </h3>

                  <p className="mt-4 text-1xl text-pretty text-gray-700 dark:text-gray-300 ">
                    Easily scale operations in response to demand fluctuations. Whether you need to ramp up during peak seasons or streamline during downtimes,
                    our solutions adapt seamlessly to your needs without the complexities of hiring or downsizing staff.
                  </p>

                </div>
              </div>
              <div className="mt-7.5 flex items-center gap-5">
                <div
                  className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                  <p className="text-metatitle2 font-semibold text-black dark:text-white">
                    05
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 className="font-bold mb-0.5 text-metatitle2 text-black dark:text-white">
                     Quality Improvement
                  </h3>

                  <p className="mt-4 text-1xl text-pretty text-gray-700 dark:text-gray-300 ">
                    Our team is committed to delivering excellence through consistent performance, continuous improvement practices, and adherence to global quality
                    standards. You can trust us to deliver measurable results that enhance your brand reputation.
                  </p>

                </div>
              </div>

              <div className="mt-7.5 flex items-center gap-5">
                <div
                  className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                  <p className="text-metatitle2 font-semibold text-black dark:text-white">
                    06
                  </p>
                </div>

                <div className="w-3/4">
                  <h3 className="font-bold mb-0.5 text-metatitle2 text-black dark:text-white">
                     Ongoing Support
                  </h3>

                  <p className="mt-4 text-1xl text-pretty text-gray-700 dark:text-gray-300 ">
                    We don’t just deliver services—we build long-term partnerships. Enjoy dedicated after-service support,
                    proactive issue resolution, and ongoing guidance that align with your evolving business goals.
                  </p>

                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== About End ===== --> */}

    </div>
  );
};

export default TM_Outsourcing;
