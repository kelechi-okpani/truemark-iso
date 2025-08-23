"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Government_Policy() {
  return (
    <section className="mt-[4rem] overflow-hidden pb-20 lg:pb-25 xl:pb-30">
      <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0 space-y-24">
        {/* Section 1: Governance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
        >
          <div>
            <h2 className="text-2xl mb-[1rem] font-bold">Governance and Policy</h2>
            <p className="text-lg mb-4">
              At Truemark Global Limited (TMGL), we help organizations strengthen governance and policy frameworks
              through internationally recognized ISO standards. These certifications enhance compliance, transparency,
              and accountability, enabling businesses and public institutions to operate with integrity and resilience.
            </p>

            <h3 className="text-xl font-semibold mb-2">Key ISO Standards for Governance and Policy</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>ISO 37001:</strong> Anti-Bribery Management System – Implements effective anti-bribery
                measures and ensures compliance with laws and regulations.
              </li>
              <li><strong>ISO 19600:</strong> Compliance Management System – Provides a framework for developing,
                implementing, and maintaining compliance management.
              </li>
              <li><strong>ISO 31000:</strong> Risk Management – Offers guidelines to identify, assess, and mitigate
                risks effectively.
              </li>
              <li><strong>ISO 37301:</strong> Compliance Management System – Specifies requirements for robust
                compliance systems.
              </li>
              <li><strong>ISO 9001:</strong> Quality Management System – Ensures policies and procedures are
                well-documented, communicated, and followed.
              </li>
            </ul>
          </div>

          <div>
            <Image src="/images/sectors/gov1.jpg" alt="Governance" width={600} height={400}
                   className="rounded-xl shadow-xl" />
          </div>
        </motion.div>

        {/* Section 2: Sustainable Development */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
        >
          <div>
            <Image src="/images/sectors/gov2.jpg" alt="Governance" width={600} height={400}
                   className="rounded-xl shadow-xl" />
          </div>
          <div>
            <h3 className="text-xl font-semibold mt-6 mb-2">Benefits of ISO Certification in Governance and Policy</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Improved Compliance:</strong> Enhances adherence to laws, regulations, and industry standards.
              </li>
              <li><strong>Effective Risk Management:</strong> Strengthens risk identification, assessment, and
                mitigation.
              </li>
              <li><strong>Increased Transparency:</strong> Promotes accountability through clear policies and
                procedures.
              </li>
              <li><strong>Enhanced Reputation:</strong> Demonstrates commitment to strong governance and compliance.
              </li>
              <li><strong>Reduced Liability:</strong> Minimizes risks of non-compliance and associated penalties.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-2">Additional Services</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Gap Analysis:</strong> Identify areas where current practices diverge from ISO requirements.
              </li>
              <li><strong>Training and Awareness:</strong> Educate staff on governance, risk, and compliance best
                practices.
              </li>
              <li><strong>Auditing and Assessment:</strong> Conduct internal audits and compliance assessments.</li>
              <li><strong>Consulting:</strong> Provide expert guidance on implementing governance and compliance
                systems.
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
