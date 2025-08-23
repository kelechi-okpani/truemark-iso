"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HealthCare_Sector() {
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
            <h2 className="text-2xl mb-[1rem] font-bold">Healthcare</h2>
            <p className="text-lg mb-4">
              At TRUE-MARK, we support the healthcare sector with specialized certification and training
              services, ensuring medical organizations, devices, and personnel meet the highest international
              standards for safety, quality, and compliance. Our expertise spans from medical device and
              pharmaceutical certification to healthcare management systems and personnel qualifications.
            </p>
            <ul className="list-disc pl-5 space-y-4">
              <li><strong>Training for Healthcare:</strong> Equip healthcare professionals with the skills and knowledge
                to meet regulatory and operational excellence.
              </li>
              <li><strong>Medical Device Certification:</strong> Ensure medical devices meet safety, performance, and
                regulatory requirements.
              </li>
              <li><strong>Pharmaceutical Device Certification:</strong> Verify compliance and quality in
                pharmaceutical-related equipment.
              </li>
              <li><strong>Management System Certification for Healthcare:</strong> Implement ISO-based frameworks for
                quality and patient safety.
              </li>
              <li><strong>Personnel Certification:</strong> Certify healthcare workers to recognized international
                standards.
              </li>
              <li><strong>Regulatory Compliance:</strong> Maintain adherence to national and international healthcare
                regulations.
              </li>
              <li><strong>Quality Assurance:</strong> Improve patient outcomes through consistent quality control and
                monitoring.
              </li>
              <li><strong>Trust & Reputation:</strong> Strengthen public confidence in healthcare services and products.
              </li>
            </ul>
          </div>
          <div>
            <Image src="/images/sectors/healthcare.jpg" alt="Construction" width={800} height={800}
                   className="rounded-xl shadow-xl" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
