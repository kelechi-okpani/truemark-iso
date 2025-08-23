"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Technology_Media() {
  return (
    <section className="mt-[4rem] overflow-hidden pb-20 lg:pb-25 xl:pb-30">
      <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0 space-y-24">
        {/* Section 1: Technology */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
        >
          <div>
            <h2 className="text-2xl mb-[1rem] font-bold">Certification in Technology and Media</h2>
            <p className="text-lg mb-4">
              ISO certification plays a crucial role in the Technology and Media sectors, ensuring quality, security,
              and operational efficiency. It helps companies meet global standards, protect sensitive data, and improve
              customer satisfaction.
            </p>

            <h3 className="text-xl font-semibold mb-2">Key ISO Standards for Technology</h3>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li><strong>ISO 9001:</strong> Quality Management System – Consistent quality in products and services,
                improving customer satisfaction and operational efficiency.
              </li>
              <li><strong>ISO 27001:</strong> Information Security Management – Protects sensitive information from
                cyber threats.
              </li>
              <li><strong>ISO 20000:</strong> IT Service Management – Framework for delivering high-quality IT services.
              </li>
              <li><strong>ISO 14001:</strong> Environmental Management – Reduces environmental impact and improves
                sustainability.
              </li>
            </ul>

          </div>

          <div>
            <Image src="/images/sectors/media1.jpg" alt="Governance" width={600} height={400}
                   className="rounded-xl shadow-xl" />
          </div>
        </motion.div>

        {/* Section 2: Media */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
        >
          <div>
            <Image src="/images/sectors/media2.jpg" alt="Governance" width={600} height={400}
                   className="rounded-xl shadow-xl" />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Key ISO Standards for Media</h3>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li><strong>ISO 9001:</strong> Quality Management System – Consistent quality in media products and
                services.
              </li>
              <li><strong>ISO 22301:</strong> Business Continuity Management – Ensures continuity of operations and
                minimizes disruptions.
              </li>
              <li><strong>ISO 27001:</strong> Information Security Management – Protects sensitive information and
                intellectual property.
              </li>
              <li><strong>ISO 14001:</strong> Environmental Management – Reduces environmental impact and improves
                sustainability.
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Section 3: Certification in ICT & Media */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
        >
          <div>

            <h3 className="text-xl font-semibold mb-2">Benefits of ISO Certification</h3>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>Improved Quality – Enhanced product and service quality.</li>
              <li>Increased Security – Protection of sensitive information and intellectual property.</li>
              <li>Operational Efficiency – Streamlined processes and reduced waste.</li>
              <li>Customer Satisfaction – Consistent delivery of high-quality services.</li>
              <li>Competitive Advantage – Stand out from competitors through quality and security commitment.</li>
            </ul>

            <h3 className="text-xl font-semibold mb-2">Additional Services</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Gap Analysis – Identify gaps between current practices and standard requirements.</li>
              <li>Training and Awareness – Educate staff on ISO best practices.</li>
              <li>Auditing and Assessment – Ensure compliance through regular audits.</li>
              <li>Consulting – Guidance on implementing effective systems.</li>
            </ul>
          </div>

          <div>
            <Image src="/images/sectors/media1.jpg" alt="Governance" width={600} height={400}
                   className="rounded-xl shadow-xl" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
