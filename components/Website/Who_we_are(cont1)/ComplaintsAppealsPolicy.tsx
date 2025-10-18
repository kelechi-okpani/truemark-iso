'use client';
import { motion } from 'framer-motion';

const ComplaintsAppealsPolicy = () => {
  return (
    <section className=" py-16 px-4 md:px-10 lg:px-20 text-[#1A1A1A] dark:text-white mt-[1rem]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto space-y-10"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[#387467]">Complaints and Appeals Policy</h2>

        <section className="space-y-4">
          <h3 className="text-2xl font-semibold text-[#387467]">Complaints</h3>
          <p>
            A complaint is an expression of dissatisfaction sent to Truemark Global Limited (TMGL), usually related to how we manage and deliver our services or to the performance of a TMGL certificate holder.
            Complaints can be raised by any stakeholder in the certification process – including existing customers, scheme owners, regulatory bodies, and third parties (e.g. a customer of our certified customer).
          </p>
          <p>
            A complaint can be recorded by completing the designated form. The handling process is as follows:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>The received complaint will be registered by the relevant local unit within TMGL.</li>
            <li>A person responsible for handling the complaint will be appointed and relevant management will be notified.</li>
            <li>An initial response will be sent to the complainant to acknowledge receipt.</li>
            <li>Once validated, the complaint will be analysed and any corrections or corrective actions will be implemented.</li>
            <li>
              A written response will be sent to the complainant with the outcome of the process and TMGL’s decision, made or reviewed by an individual not previously involved in the subject of the complaint.
            </li>
          </ul>
          <p>
            If the complaint relates directly to the organisation holding a TMGL certificate, it should first be raised with the organisation and they should be given a chance to respond before contacting TMGL.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-semibold text-[#387467]">Confidentiality</h3>
          <p>
            Complaints about the performance of one of our customers will normally be forwarded to the customer for their consideration and response. All other complaints will be kept confidential unless otherwise agreed with the complainant.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-semibold text-[#387467]">Appeals</h3>
          <p>
            An appeal can be raised when a stakeholder does not accept a decision made by Truemark Global Limited (TMGL) related to a certification.
          </p>
          <p>
            An appeal can be recorded by completing the designated form. The handling process is as follows:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>The received appeal will be registered by the relevant local unit within TMGL.</li>
            <li>A person responsible for handling the appeal will be appointed and relevant management will be notified.</li>
            <li>An initial response will be sent to the appellant to acknowledge receipt.</li>
            <li>Once validated, the appeal will be analysed and any corrections or corrective actions will be implemented.</li>
            <li>
              A written response will be sent to the appellant with the outcome of the process and TMGL’s decision, made or reviewed by an individual not previously involved in the subject of the appeal.
            </li>
          </ul>
        </section>

        <p className="text-sm text-gray-600 dark:text-gray-400 italic">
          For more details or to submit a complaint or appeal, please use the official TMGL form provided on our website.
        </p>
      </motion.div>
    </section>
  );
};

export default ComplaintsAppealsPolicy;
