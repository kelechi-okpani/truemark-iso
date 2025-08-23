"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Industry_Sector() {
  return (
    <section className="mt-[4rem] overflow-hidden pb-20 lg:pb-25 xl:pb-30">
      <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0 space-y-24">
        {/* Section 1: Construction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
        >
          <div>
            <h2 className="text-2xl mb-[1rem] font-bold">Construction</h2>
            <p className="text-lg mb-4">
              Certification plays a vital role in the construction sector by ensuring that projects meet established standards for quality, safety, environmental management, and ethical practices. Their contributions are critical for various stakeholders, including construction companies, clients, regulators, and the general public.
            </p>
            <ul className="list-disc pl-5 space-y-4">
              <li><strong>Quality Assurance:</strong> ISO 9001 reduces defects and enhances reliability.</li>
              <li><strong>Safety and Health:</strong> ISO 45001 protects workers and increases productivity.</li>
              <li><strong>Environmental Protection:</strong> ISO 14001 promotes sustainability and resource efficiency.</li>
              <li><strong>Green Building Standards:</strong> LEED and BREEAM encourage eco-friendly design.</li>
              <li><strong>Energy Efficiency:</strong> Energy Star standards lower energy use and costs.</li>
              <li><strong>Building Confidence:</strong> Enhances trust with stakeholders.</li>
              <li><strong>Market Differentiation:</strong> Certified companies stand out and win contracts.</li>
              <li><strong>Regulatory Compliance:</strong> Meets local and global laws and requirements.</li>
              <li><strong>Process Improvement:</strong> Encourages streamlined, waste-reduced workflows.</li>
              <li><strong>Ethical Practices:</strong> Promotes transparency, fair labor, and community engagement.</li>
            </ul>
          </div>
          <div>
            <Image src="/images/sectors/industry1.jpg" alt="Construction" width={600} height={400} className="rounded-xl shadow-xl" />
          </div>
        </motion.div>

        {/* Section 2: Manufacturing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
        >
          <div>
            <Image src="/images/sectors/industry2.jpg" alt="Construction" width={600} height={400} className="rounded-xl shadow-xl" />
          </div>
          <div>
            <h2 className="text-2xl mb-[1rem] font-bold">Manufacturing</h2>
            <p className="text-lg mb-4">
              Certification plays a significant role in the manufacturing sector by ensuring that products and processes meet established standards for quality, safety, efficiency, and environmental management.
            </p>
            <ul className="list-disc pl-5 space-y-4">
              <li><strong>ISO 9001:</strong> Ensures consistent product quality and customer satisfaction.</li>
              <li><strong>ISO 45001:</strong> Creates safer work environments.</li>
              <li><strong>ISO 14001:</strong> Minimizes environmental impact and manages waste.</li>
              <li><strong>ISO 50001:</strong> Improves energy efficiency and reduces cost.</li>
              <li><strong>Compliance and Market Access:</strong> Helps expand to new markets.</li>
              <li><strong>Operational Efficiency:</strong> Encourages leaner processes and risk management.</li>
              <li><strong>Trust and Credibility:</strong> Builds confidence with clients and regulators.</li>
              <li><strong>Continuous Improvement:</strong> Encourages innovation in production systems.</li>
            </ul>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
