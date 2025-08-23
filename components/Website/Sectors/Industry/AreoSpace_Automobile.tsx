"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Automotive_Sector() {
  return (
    <section className="mt-[4rem] overflow-hidden pb-20 lg:pb-25 xl:pb-30">
      <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0 space-y-24">

        {/* Section 3: Automobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
        >
          <div>
            <h2 className="text-2xl mb-[1rem] font-bold">Automotive & Aerospace</h2>
            <p className="text-lg mb-4">
              At TRUE-MARK, we provide comprehensive certification schemes, training, and assurance services
              for the automotive and aerospace industries — including support for electric vehicle ventures,
              battery degradation assessment, sustainability strategy, and product assurance — ensuring
              compliance with global standards, boosting efficiency, and enhancing market access.
            </p>
            <ul className="list-disc pl-5 space-y-4">
              <li><strong>Improved Quality & Safety:</strong> Implement rigorous management systems to ensure superior
                product quality and safety.
              </li>
              <li><strong>Increased Efficiency:</strong> Streamline processes, reduce waste, and boost productivity.
              </li>
              <li><strong>Regulatory Compliance:</strong> Meet and maintain industry-specific regulations and standards.
              </li>
              <li><strong>Global Market Access:</strong> Increase attractiveness to clients and partners worldwide.</li>
              <li><strong>Competitive Advantage:</strong> Stand out from competitors through certified excellence in
                quality and safety.
              </li>
              <li><strong>Management System Training & Certification:</strong> Build internal capabilities and achieve
                recognized certifications.
              </li>
              <li><strong>Product & Report Assurance:</strong> Independent verification to maintain trust and
                credibility.
              </li>
              <li><strong>Auditor Training:</strong> Develop skilled auditors to maintain ongoing compliance and
                improvement.
              </li>
            </ul>
          </div>

          <div>
            <Image src="/images/sectors/industry3.jpg" alt="Construction" width={800} height={800}
                   className="rounded-xl shadow-xl" />
            <Image src="/images/sectors/Air.webp" alt="Construction" width={800} height={800}
                   className="rounded-xl shadow-xl mt-[2rem]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
