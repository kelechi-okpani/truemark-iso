"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function EnergyAndMining() {
  return (
    <section className="mt-[4rem] overflow-hidden pb-20 lg:pb-25 xl:pb-30">
      <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0 space-y-24">
        {/* Section 1: Mining */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
        >
          <div>
            <h2 className="text-2xl mb-[1rem] font-bold">Key ISO Standards for Energy Sector</h2>
            <ul className="list-disc pl-5 space-y-4">
              <li>
                <strong>ISO 50001: Energy Management System:</strong> Provides a framework for organizations to manage
                their energy performance, reduce energy consumption, and improve energy efficiency. Helps establish
                policies, objectives, and processes to achieve energy efficiency and sustainability goals.
              </li>
              <li>
                <strong>ISO 9001: Quality Management System:</strong> Ensures consistent quality in products and
                services, improving customer satisfaction and operational efficiency in areas like equipment
                manufacturing or energy distribution.
              </li>
              <li>
                <strong>ISO 14001: Environmental Management System:</strong> Vital for reducing environmental impact,
                this standard helps energy companies manage emissions, waste, and resource use, aligning with global
                green initiatives.
              </li>
              <li>
                <strong>ISO 45001: Occupational Health and Safety Management:</strong> Ensures safer workplaces and
                compliance, particularly in high-risk environments like offshore rigs or wind turbine maintenance.
              </li>

            </ul>
          </div>

            <div>
              <Image src="/images/sectors/mining1.jpg" alt="Mining" width={600} height={400}
                     className="rounded-xl shadow-xl" />
            </div>
        </motion.div>
        {/* Section 2: Greenhouse Energy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
        >
          <div>
            <Image src="/images/sectors/mining2.jpg" alt="Mining" width={600} height={400}
                   className="rounded-xl shadow-xl" />
          </div>
          <div className="mt-[4rem]">
            <p className="text-lg mb-4">
              Effective energy management in greenhouses is essential for productivity and environmental sustainability.
              Certification ensures efficiency, compliance, and continuous improvement.
            </p>
            <ul className="list-disc pl-5 space-y-4">
              <li>
                <strong>ISO 27001: Information Security Management:</strong> Safeguards sensitive data, such as grid
                operations or customer information, from cyber threats.
              </li>
              <li>
                <strong>ISO 55001: Asset Management:</strong> Enhances asset performance and reduces maintenance costs
                for companies managing infrastructure like pipelines or solar panels.
              </li>
              <li>
                <strong>ISO 22301: Business Continuity Management:</strong> Ensures resilience during disruptions,
                maintaining energy supply reliability.
              </li>
              <li>
                <strong>ISO 14064: Greenhouse Gas Accounting:</strong> Provides a framework for organizations to
                quantify, monitor, and report their greenhouse gas emissions, facilitating transparent and credible
                emissions accounting.
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Section 3: Oil and Gas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-[3rem]"
        >
          <div className="mt-[4rem]">
            <h2 className="text-2xl mb-[1rem] font-bold">Benefits of ISO Certification in Energy Sector</h2>
            <p className="text-lg mb-4">
              ISO certification in the energy sector enhances efficiency, safety, and sustainability while ensuring
              compliance
              with global standards. It supports organizations in achieving operational excellence and building trust
              with stakeholders.
            </p>
            <ul className="list-disc pl-5 space-y-4">
              <li><strong>Improved Energy Efficiency:</strong> Reduced energy consumption and costs.</li>
              <li><strong>Enhanced Safety Protocols:</strong> Safer workplaces and regulatory compliance.</li>
              <li><strong>Environmental Responsibility:</strong> Minimized ecological footprint and alignment with
                global sustainability goals.
              </li>
              <li><strong>Global Market Access:</strong> Increased attractiveness to clients and partners worldwide.
              </li>
              <li><strong>Operational Efficiency:</strong> Streamlined processes and reduced waste.</li>
            </ul>

          </div>
          <div>
            <Image src="/images/sectors/mining3.jpg" alt="Mining" width={600} height={400}
                   className="rounded-xl shadow-xl" />
          </div>
        </motion.div>

        {/* Section 4: Power */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-[3rem]"
        >
          <div>
            <Image src="/images/sectors/mining4.jpg" alt="Mining" width={600} height={400}
                   className="rounded-xl shadow-xl" />
          </div>
          <div className="mt-[4rem]">
            <p className="text-lg mb-4">
              Training programs are also available for all these standards, including energy storage solutions.
            </p>
            <ul className="list-disc pl-5 space-y-4">
              <li>Energy storage</li>
              <li>Energy management</li>
              <li>Inspection service</li>
              <li>Markets and risks</li>
              <li>Offshore infrastructure verification</li>
              <li>Offshore technology</li>
              <li>Software and digital solutions</li>
              <li>Solar</li>
              <li>Certification</li>
              <li>Monitoring</li>
              <li>Verification</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
