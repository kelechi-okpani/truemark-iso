'use client';
import { motion } from 'framer-motion';
import React from 'react';
import { AlertCircle, FileText, Scale, ShieldAlert, History } from 'lucide-react';

const CertificationWithdrawal = () => {
  return (
    <section className="py-20 px-4 md:px-10 lg:px-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        {/* Header Section */}
        <div className="mb-16 border-l-4 border-[#387467] pl-6">
          <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#387467] mb-2 block">
            Compliance & Governance
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Policy on Suspending, Withdrawing or <br />
            <span className="text-[#387467]">Reducing Certification Scope</span>
          </h2>
        </div>

        {/* 1. Policy Statement Card */}
        <div className="relative p-8 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Scale className="text-[#387467]" size={24} />
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">1. Policy Statement</h3>
          </div>
          <div className="space-y-4 text-[15px] leading-relaxed text-slate-600 dark:text-slate-400">
            <p>
              True-mark may, at its discretion, suspend or revoke a certificate for cause. Causes include, but are not limited to 
              <span className="text-slate-900 dark:text-white font-medium"> fraud, deceit, or submission of inaccurate data</span> to obtain certification.
            </p>
            <p>
              Upon evidence of valid charges, certificate holders are notified via certified mail. 
              The suspension remains in effect until a formal review by the board, ensuring all 
              decisions are rooted in <span className="text-[#387467] font-semibold">objective evidence</span>.
            </p>
          </div>
        </div>

        {/* 2. Grounds for Suspension Grid */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <ShieldAlert className="text-[#387467]" size={24} />
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">2. Grounds for Action</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Improper use of certificates and logos",
              "Involvement in malpractices",
              "Providing false information in applications",
              "Applying for ineligible examinations",
              "Voluntary suspension request",
              "Failure to address previous audit issues"
            ].map((reason, i) => (
              <div key={i} className="flex items-center gap-4 p-4 rounded-xl border border-slate-100 dark:border-slate-800 hover:bg-slate-50 transition-colors">
                <div className="h-2 w-2 rounded-full bg-[#387467]" />
                <span className="text-[14px] font-medium text-slate-700 dark:text-slate-300">{reason}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Operational Guarantees */}
        <div className="border-t border-slate-100 dark:border-slate-800 pt-12">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
             <FileText className="text-[#387467]" size={24} />
             True-mark Operational Guarantees
          </h3>
          
          <div className="space-y-6">
            <div className="flex gap-6 group">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#387467]/5 flex items-center justify-center text-[#387467] font-bold text-sm">A</div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-1">Informed Notification</h4>
                <p className="text-[14px] text-slate-500">Applicants are explicitly informed of the intention and rationale behind any scope reduction or withdrawal.</p>
              </div>
            </div>

            <div className="flex gap-6 group">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#387467]/5 flex items-center justify-center text-[#387467] font-bold text-sm">B</div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-1">Right of Appeal</h4>
                <p className="text-[14px] text-slate-500">Any applicant subject to warning or suspension retains the full right of appeal to the certification board.</p>
              </div>
            </div>

            <div className="flex gap-6 group">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#387467]/5 flex items-center justify-center text-[#387467] font-bold text-sm">C</div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-1">Top Management Review</h4>
                <p className="text-[14px] text-slate-500">Final decisions are only taken by top management after a comprehensive review of objective evidence.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Support Callout */}
        <div className="mt-20 p-6 rounded-xl border border-dashed border-[#387467]/30 bg-[#387467]/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <AlertCircle className="text-[#387467]" />
            <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
              Questions regarding these policies? Contact our Compliance Board.
            </p>
          </div>
          <button className="px-5 py-2 bg-[#387467] text-white text-xs font-bold rounded-lg hover:bg-[#2d5e53] transition-all">
            Contact Support
          </button>
        </div>

      </motion.div>
    </section>
  );
};

export default CertificationWithdrawal;