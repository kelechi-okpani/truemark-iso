"use client";
import Image from "next/image";
import { useState } from "react";
import ISO from "../../public/images/Home/iso.jpg"
import ISSO from "../../../public/images/Home/hero.png"
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";


const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="overflow-hidden pt-35 md:pt-40 xl:pt-30">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">

            <div className="animate_right hidden md:w-1/2 lg:block">
              <div className="relative 2xl:-mr-8.5">
                <Image
                  src="/images/shape/shape-01.png"
                  alt="shape"
                  width={46}
                  height={246}
                  className="absolute -left-13.5 top-0"
                />
                <Image
                  src="/images/shape/shape-02.svg"
                  alt="shape"
                  width={36.9}
                  height={36.7}
                  className="absolute bottom-0 right-0 z-10"
                />
                <Image
                  src="/images/shape/shape-03.svg"
                  alt="shape"
                  width={21.64}
                  height={21.66}
                  className="absolute -right-8.5 bottom-0 z-1"
                />
                <div className="relative aspect-500/300 w-full">

                  <motion.div
                    initial={{ y: 0 }}
                    // animate={{ y: [0, -15, 0] }}
                    transition={{
                      duration: 2,
                      // repeat: Infinity,
                      // ease: "easeInOut"
                    }}
                    className="relative aspect-500/300 w-full"
                  >

                    <Image
                      className=" dark:hidden rounded-2xl"
                      // src="/images/hero/hero-light.svg"
                      src={ISSO}
                      alt="Hero"
                      width={550}
                      height={550}
                    />
                    <Image
                      className="hidden  dark:block rounded-2xl"
                      // src="/images/hero/hero-dark.svg"
                      src={ISSO}
                      alt="Hero"
                      width={550}
                      height={550}
                    />
                  </motion.div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">

              <motion.h1
                initial={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-[28px] leading-[30px] md:text-[40px] md:leading-[55px] xl:text-[40px] xl:leading-[70px] mb-6 font-bold capitalize"
              >
                We provide{" "}
                <span className="text-[#387467]">digital learning tools</span> that empower{" "}
                <span className="text-[#387467]">
                  <ReactTyped
                    strings={[
                      "Lifelong Learners",
                      "Confident Achievers",
                      "Future Innovators"
                    ]}
                    typeSpeed={100}
                    backSpeed={100}
                    backDelay={3000}
                    loop
                  />
                </span>
              </motion.h1>

              <p>
                Truemark global standards and solutions limited (TMGSS) is Nigeria most trusted conformity
                assessment and certification body, offering globally accepted certifications in the continent of Africa like
                certification,outsourcing,Inspection, Verification & Validation, Auditing.
                As a trusted partner  in certification, Inspection, outsourcing,Verification & Validation, Auditing.
                we help our partners, organizations meet international standards and thrive in global markets.
              </p>


            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
