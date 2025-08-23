// "use client";
// import { motion } from "framer-motion";
// import Image from "next/image";
//


// const AboutTM = () => {
//   return (
//     <>
//       {/* <!-- ===== About Start ===== --> */}
//       <section className="overflow-hidden pb-20 lg:pb-25 xl:pb-30">
//         <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
//           <div className="flex items-center gap-8 lg:gap-32.5">
//             <motion.div
//               variants={{
//                 hidden: {
//                   opacity: 0,
//                   x: -20,
//                 },
//
//                 visible: {
//                   opacity: 1,
//                   x: 0,
//                 },
//               }}
//               initial="hidden"
//               whileInView="visible"
//               transition={{ duration: 0.5, delay: 0.1 }}
//               viewport={{ once: true }}
//               className="animate_left relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2"
//             >
//               <Image
//                 // src="/images/about/about-light-01.png"
//                  src="/images/about/photo1.jpg"
//                 alt="About"
//                 className="rounded-2xl dark:hidden "
//                  width={600} height={100}
//               />
//               <Image
//                 // src="/images/about/about-dark-01.png"
//                 src="/images/about/photo1.jpg"
//                 alt="About"
//                 className="rounded-2xl hidden dark:block "
//                width={600} height={100}
//               />
//             </motion.div>
//             <motion.div
//               variants={{
//                 hidden: {
//                   opacity: 0,
//                   x: 20,
//                 },
//
//                 visible: {
//                   opacity: 1,
//                   x: 0,
//                 },
//               }}
//               initial="hidden"
//               whileInView="visible"
//               transition={{ duration: 0.5, delay: 0.1 }}
//               viewport={{ once: true }}
//               className="animate_right md:w-1/2"
//             >
//               <span className="font-medium uppercase text-black dark:text-white mb-8">
//                 Our Mission
//               </span>
//               <p>
//                 Our mission is to:
//               </p>
//
//               <div className="mt-7.5 flex items-center gap-5">
//                 <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
//                   <p className="text-metatitle2 font-semibold text-black dark:text-white">
//                     01
//                   </p>
//                 </div>
//                 <div className="w-3/4">
//                   <h3 className="mb-0.5 text-metatitle2 text-black dark:text-white">
//                     -. Integrity
//                     We operate with unwavering integrity, meaning what we say and saying what we mean. Our words and actions are aligned, ensuring transparency and honesty in all our interactions.
//                   </h3>
//                 </div>
//               </div>
//               <div className="mt-7.5 flex items-center gap-5">
//                 <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
//                   <p className="text-metatitle2 font-semibold text-black dark:text-white">
//                     02
//                   </p>
//                 </div>
//                 <div className="w-3/4">
//                   <h3 className="mb-0.5 text-metatitle2 text-black dark:text-white">
//                     Confidentiality
//                     We protect your vital information with utmost confidentiality, using it only for its intended purpose. You can trust us to safeguard your sensitive data.
//                   </h3>
//
//                 </div>
//               </div>
//
//               <div className="mt-7.5 flex items-center gap-5">
//                 <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
//                   <p className="text-metatitle2 font-semibold text-black dark:text-white">
//                     03
//                   </p>
//                 </div>
//                 <div className="w-3/4">
//                   <h3 className="mb-0.5 text-metatitle2 text-black dark:text-white">
//                     Trust
//                     We earn and maintain trust by being reliable, dependable, and committed to our clients' success. Your business is in safe hands with us.
//                   </h3>
//
//                 </div>
//               </div>
//               <div className="mt-7.5 flex items-center gap-5">
//                 <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
//                   <p className="text-metatitle2 font-semibold text-black dark:text-white">
//                     04
//                   </p>
//                 </div>
//                 <div className="w-3/4">
//                   <h3 className="mb-0.5 text-metatitle2 text-black dark:text-white">
//                     Excellence
//                     Excellence is our standard. Every service we deliver is characterized by a relentless pursuit of perfection, ensuring exceptional quality and value.
//                   </h3>
//
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>
//       {/* <!-- ===== About End ===== --> */}
//
//       {/* <!-- ===== About Two Start ===== --> */}
//       <section>
//         <div className=" pb-[3rem] mx-auto max-w-c-1235 overflow-hidden px-4 md:px-8 2xl:px-0">
//           <div className="flex items-center gap-8 lg:gap-32.5">
//             <motion.div
//               variants={{
//                 hidden: {
//                   opacity: 0,
//                   x: -20,
//                 },
//
//                 visible: {
//                   opacity: 1,
//                   x: 0,
//                 },
//               }}
//               initial="hidden"
//               whileInView="visible"
//               transition={{ duration: 1, delay: 0.1 }}
//               viewport={{ once: true }}
//               className="animate_left md:w-1/2"
//             >
//               <h4 className="font-medium uppercase text-black dark:text-white">
//                 Our Vision
//               </h4>
//               <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
//                 True-mark Service Limited was established with a clear vision:
//               </h2>
//               <p>
//                 To be a leading certification body, empowering Nigerian businesses to achieve excellence, innovate, and compete
//                 globally, while contributing to the country's economic growth and development.
//               </p>
//               <div>
//               </div>
//             </motion.div>
//             <motion.div
//               variants={{
//                 hidden: {
//                   opacity: 0,
//                   x: 20,
//                 },
//
//                 visible: {
//                   opacity: 1,
//                   x: 0,
//                 },
//               }}
//               initial="hidden"
//               whileInView="visible"
//               transition={{ duration: 1, delay: 0.1 }}
//               viewport={{ once: true }}
//               className="animate_right relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2"
//             >
//               <Image
//                 // src="./images/about/about-light-02.svg"
//                 src="/images/about/photo2.jpg"
//                 alt="About"
//                 className=" rounded-2xl dark:hidden"
//                 width={600} height={100}
//               />
//               <Image
//                 // src="./images/about/about-dark-02.svg"
//                 src="/images/about/photo2.jpg"
//                 alt="About"
//                 className=" rounded-2xl hidden dark:block"
//                 width={600} height={100}
//               />
//             </motion.div>
//           </div>
//         </div>
//       </section>
//       {/* <!-- ===== About Two End ===== --> */}
//     </>
//   );
// };
//
// export default AboutTM;



"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { aboutContent } from "@/components/Website/About/AboutData";
import SectorsWeServe from "@/components/Website/About/Services";

const AboutTM = () => {
  const { section1, section2 } = aboutContent;

  return (
    <>
      {/* ===== Section 1 ===== */}
      <section className="overflow-hidden pb-20 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-32.5">
            <motion.div
              variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="md:w-1/2"
            >
              <Image
                src={section1.image}
                alt="Section 1"
                className="rounded-2xl dark:hidden"
                width={700}
                height={500}
              />
              <Image
                src={section1.image}
                alt="Section 1"
                className="rounded-2xl hidden dark:block"
                width={700}
                height={500}
              />
            </motion.div>

            <motion.div
              variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0 } }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="md:w-1/2"
            >
              <h4 className="uppercase text-black dark:text-white font-medium mb-2">
                {section1.title}
              </h4>
              <p className="text-black dark:text-white mb-4">{section1.intro}</p>

              {section1.pillars.map((item) => (
                <div key={item.num} className="mt-6 flex items-start gap-5">
                  <div className="h-12 w-12 flex items-center justify-center rounded-full border border-stroke dark:border-strokedark dark:bg-blacksection">
                    <p className="font-semibold text-black dark:text-white">{item.num}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-black dark:text-white">{item.title}</h3>
                    <p className="text-sm text-black dark:text-white">{item.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>


      {/* SECTORS WE SERVE */}


      {/* ===== Section 2 ===== */}
      <section className="pb-20 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-32.5">
            {/* Text */}
            <motion.div
              variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="md:w-1/2"
            >
              <h4 className="uppercase text-black dark:text-white font-medium mb-2">
                {section2.visionHeading}
              </h4>
              <h2 className="text-2xl font-bold text-black dark:text-white mb-4">
                {section2.visionSub}
              </h2>
              {section2.benefits.map((item) => (
                <div key={item.num} className="mt-6 flex items-start gap-5">
                  <div className="h-12 w-12 flex items-center justify-center rounded-full border border-stroke dark:border-strokedark dark:bg-blacksection">
                    <p className="font-semibold text-black dark:text-white">{item.num}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-black dark:text-white">{item.title}</h3>
                    <p className="text-sm text-black dark:text-white">{item.desc}</p>
                  </div>
                </div>
              ))}


            </motion.div>

            {/* Image */}
            <motion.div
              variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0 } }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="md:w-1/2"
            >
              <Image
                src={section2.image}
                alt="Section 2"
                className="rounded-2xl dark:hidden"
                width={600}
                height={100}
              />
              <Image
                src={section2.image}
                alt="Section 2"
                className="rounded-2xl hidden dark:block"
                width={600}
                height={100}
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutTM;
