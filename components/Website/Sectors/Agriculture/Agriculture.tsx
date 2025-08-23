"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AgricultureFoodBeverage() {
  return (
    // <section className="lg:grid lg:h-screen   lg:place-content-center  transition-colors duration-300">
    //   <div className="mx-auto w-screen max-w-screen-xl  px-4 py-16 sm:px-6 sm:py-24 lg:px-10 lg:py-32">
    //
        <section className="mt-[4rem] overflow-hidden pb-20 lg:pb-25 xl:pb-30">
          <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0 space-y-24">
        {/* Section 1: Agriculture */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
        >
          <div>
            <h2 className="text-2xl mb-[1rem] font-bold">Agriculture</h2>
            <p className="text-lg mb-4">
              TRUE-MARK helps maintain high standards for quality and safety in agricultural products. By adhering to these standards, producers can ensure their products are safe for consumption, free from harmful substances, and of consistent quality.
            </p>
            <ul className="list-disc pl-5 gap-6 space-y-4">
              <li>Food safety standards, global GAP standards, food product certification.</li>
              <li>HACCP and ISO 22000 certifications help prevent foodborne illnesses.</li>
              <li>Organic, Rainforest Alliance, and sustainable agriculture certifications.</li>
              <li>Practices that reduce environmental impact like conserving water and maintaining soil health.</li>
              <li>Certification labels like organic, fair trade, and non-GMO increase competitiveness.</li>
              <li>Fair Trade certifications promote ethical and fair labor conditions.</li>
              <li>Traceable path from farm to table promotes transparency and accountability.</li>
              <li>Regular audits encourage innovation and continuous improvement.</li>
            </ul>
          </div>
          <div>
            <Image src="/images/sectors/agric1.jpg" alt="Agriculture" width={600} height={400} className="rounded-xl shadow-xl" />
          </div>
        </motion.div>

        {/* Section 2: Food & Beverages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
        >
          <div>
            <Image src="/images/sectors/agric2.jpg" alt="Agriculture" width={600} height={400} className="rounded-xl shadow-xl" />
          </div>
          <div>
            <h2 className="text-2xl mb-[1rem] font-bold">Food and Beverages</h2>
            <p className="text-lg mb-4">
              TRUE-MARK offers a range of services designed to support the food and beverage industry in delivering high-quality, safe, and enjoyable products.
            </p>
            <h3 className="text-1xl mb-3 font-semibold">Our Services Include:</h3>

            <ul className="list-disc pl-5 gap-6 space-y-4">
              <li>Quality Control and Assurance</li>
              <li>Product Development</li>
              <li>Supply Chain Management</li>
              <li>Regulatory Compliance</li>
            </ul>
            <h3 className="text-1xl mb-3 font-semibold mt-4">The Role of Certification:</h3>
            <ul className="list-disc pl-5 space-y-4">
              <li>Verifies standards for safety, quality, and sustainability</li>
              <li>Builds consumer trust</li>
              <li>Enables access to domestic and international markets</li>
              <li>Promotes best practices across the industry</li>
            </ul>
          </div>
        </motion.div>

        {/* Section 3: Industry-Wide Certification Impact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
        >
          <div>
            <h2 className="text-2xl mb-[1rem] font-bold">Industry-Wide Certification Impact</h2>
            <ul className="list-disc gap-6 pl-5 space-y-4 mt-4">
              <li>Improved operational efficiency through standardization</li>
              <li>Enhanced reputation and brand credibility</li>
              <li>Access to new markets and reduced trade barriers</li>
              <li>Compliance with local and international regulations</li>
              <li>Mitigation of business risks and liabilities</li>
            </ul>
          </div>
          <div>
            <Image src="/images/sectors/agric1.jpg" alt="Agriculture" width={600} height={400} className="rounded-xl shadow-xl" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
