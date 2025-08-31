"use client";
import { motion } from "framer-motion";
import Image from "next/image";


export default function VerificationAndValidation() {
  return (
    <section className="mt-[4rem] overflow-hidden pb-20 lg:pb-25 xl:pb-30">
      <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0 space-y-24">
        {/* Section 1: Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
        >
          <div>
            <h2 className="text-2xl mb-[1rem] font-bold">
              Verification & Validation Services
            </h2>
            <p className="text-lg mb-4">
              At <strong>Truemark</strong>, a leading conformity assessment body,
              we specialize in providing comprehensive verification and validation
              services tailored to meet the unique needs of various industries.
              Our expert team ensures that your products, processes, and systems
              meet the required standards, regulations, and specifications,
              giving you confidence in their quality, safety, and performance.
            </p>
          </div>
          <div>
            <Image
              src="/images/sectors/mining1.jpg"
              alt="Verification and Validation"
              width={600}
              height={400}
              className="rounded-xl shadow-xl"
            />
          </div>
        </motion.div>

        {/* Section 2: Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
        >
          <div>
            <Image
              src="/images/sectors/mining2.jpg"
              alt="Verification services"
              width={600}
              height={400}
              className="rounded-xl shadow-xl"
            />
          </div>
          <div className="mt-[4rem]">
            <p className="text-lg mb-4">
              Whether you're in need of verification, validation, or certification
              services, we have the expertise and resources to support your
              business goals. Our services include:
            </p>
            <ul className="list-disc pl-5 space-y-4">
              <li>
                <strong>Verification:</strong> Confirming the accuracy and
                compliance of products, processes, or systems against specified
                requirements.
              </li>
              <li>
                <strong>Validation:</strong> Ensuring that products, processes, or
                systems meet their intended purpose and user needs.
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Section 3: Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-[3rem]"
        >
          <div className="mt-[4rem]">
            <h2 className="text-2xl mb-[1rem] font-bold">
              Why Choose Truemark?
            </h2>
            <p className="text-lg mb-4">
              With our rigorous approach and industry expertise, we help
              organizations like yours build trust with stakeholders, improve
              product quality, and enhance market competitiveness. Partner with us
              to experience the benefits of our verification and validation
              services.
            </p>
          </div>
          <div>
            <Image
              src="/images/sectors/mining3.jpg"
              alt="Validation services"
              width={600}
              height={400}
              className="rounded-xl shadow-xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
