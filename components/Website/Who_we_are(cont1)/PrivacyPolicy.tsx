'use client';

import { motion } from 'framer-motion';
import React from 'react';

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <motion.section
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="mb-10"
  >
    <h2 className="text-2xl font-semibold mb-4 text-[#387467]">{title}</h2>
    <div className="text-base leading-7 text-muted-foreground dark:text-gray-300 whitespace-pre-line">{children}</div>
  </motion.section>
);

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#387467]"
      >
        PRIVACY POLICY
      </motion.h1>

      <Section title="Introduction">
        This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
        We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.
      </Section>

      <Section title="Interpretation and Definitions">
        <strong>INTERPRETATION</strong>
        The words of which the initial letter is capitalized have meanings defined under the following conditions.
        The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.

        <strong>DEFINITIONS</strong>
        For the purposes of this Privacy Policy:
        - Account means a unique account created for You to access our Service or parts of our Service.
        - Company refers to Standards and Best Practice (SandBP).
        - Cookies are small files that are placed on Your device.
        - Country refers to: Nigeria
        - Device means any device that can access the Service.
        - Personal Data is any information that relates to an identified or identifiable individual.
        - Service refers to the Website.
        - Service Provider means any third-party that processes data on behalf of the Company.
        - Usage Data refers to data collected automatically.
        - Website refers to Standards and Best Practice, accessible from http://www.sandbp.net
        - You means the individual or entity using the Service.
      </Section>

      <Section title="Collecting and Using Your Personal Data">
        <strong>Types of Data Collected</strong>
        - Personal Data: Email Address, First name and last name, Phone number
        - Usage Data: IP address, browser type/version, pages visited, time/date of visit, device identifiers, etc.
      </Section>

      <Section title="Tracking Technologies and Cookies">
        We use Cookies and similar tracking technologies to monitor activity on Our Service.
        Cookies may be “Persistent” or “Session”:
        - Necessary / Essential Cookies
        - Cookies Policy / Notice Acceptance Cookies
        - Functionality Cookies
        These help in providing and improving the Service.
      </Section>

      <Section title="Use of Your Personal Data">
        The Company may use Personal Data for:
        - Providing and maintaining the Service
        - Managing Your Account
        - Performing contracts
        - Contacting You via various channels
        - Providing promotional offers
        - Business transfers
        - Analysis and improvement purposes
        Sharing may occur with:
        - Service Providers
        - Business partners
        - Affiliates
        - Other users (in public areas)
        - With Your consent
      </Section>

      <Section title="Retention of Your Personal Data">
        We retain Your data only as long as necessary to fulfill the purposes in this Privacy Policy, comply with legal obligations, resolve disputes, and enforce policies.
      </Section>

      <Section title="Transfer of Your Personal Data">
        Your information may be transferred to locations with different data protection laws.
        Your submission of data represents consent to that transfer. We ensure your data is securely handled.
      </Section>

      <Section title="Delete Your Personal Data">
        You have the right to delete or request deletion of your personal data.
        - You may do this via account settings or by contacting us.
        - We may retain certain data if legally required.
      </Section>

      <Section title="Disclosure of Your Personal Data">
        <strong>Business Transactions</strong>
        If the Company is involved in a merger or sale, your data may be transferred.
        <strong>Law Enforcement</strong>
        We may disclose data if legally required.
        <strong>Other Legal Requirements</strong>
        We may disclose Your data to:
        - Comply with legal obligations
        - Defend Company rights
        - Prevent wrongdoing
        - Protect public safety
        - Avoid liability
      </Section>

      <Section title="Security of Your Personal Data">
        We strive to protect Your data but cannot guarantee 100% security.
      </Section>

      <Section title="Links to Other Websites">
        Our Service may contain links to other websites not operated by Us. Please review their privacy policies.
        We are not responsible for external content or practices.
      </Section>

      <Section title="Changes to This Privacy Policy">
        We may update this policy from time to time.
        - We will notify You by email or a notice on Our Service.
        - Please review this policy periodically.
      </Section>
    </div>
  );
};

export default PrivacyPolicy;
