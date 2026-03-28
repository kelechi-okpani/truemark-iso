"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { FileText, Download, Calendar, Search } from "lucide-react";

// ✅ Import from your RTK Query commerceApi

import CenteredLoader from "@/components/utility/Loader";
import EmptyContainer from "@/components/utility/EmptyContainer";
import Transaction_List from "@/components/dashboard/Transaction/Transaction-List";
import { useGetTransactionsQuery } from "@/lib/redux/features/courses/commerceApi";

const empty_details = {
  title: "No transactions found",
  description: "Your official payment records and receipts will appear here once you enroll in a course.",
};

const Transactions = () => {
  const router = useRouter();

  // ✅ RTK Query: Replaces Apollo useQuery
  // We pass the pagination params directly
  const { data, isLoading, error } = useGetTransactionsQuery({ 
    page: 1, 
    pageSize: 100 
  });

  // ISO Standard: Extracting the array safely
  const transactions = data?.payments || data || [];

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 min-h-screen bg-white">
      {/* --- Coursera Style Header --- */}
      <header className="mb-10 border-b border-gray-100 pb-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
              Payment History
            </h1>
            <p className="text-sm font-medium text-gray-500 flex items-center gap-2">
              <FileText size={16} className="text-[#387467]" />
              Official tax invoices and enrollment receipts
            </p>
          </div>

          {/* Search/Filter Bar (ISO Standard for finding records) */}
          <div className="relative group w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#387467] transition-colors" size={18} />
            <input 
              type="text" 
              placeholder="Search by Reference..." 
              className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#387467]/20 focus:bg-white transition-all"
            />
          </div>
        </div>
      </header>

      {/* --- Main Content Area --- */}
      <div className="mt-6">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center min-h-[400px] w-full gap-4">
            <CenteredLoader />
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest animate-pulse">
              Retrieving Secure Records...
            </p>
          </div>
        ) : transactions.length === 0 ? (
          <div className="py-20">
            <EmptyContainer
              title={empty_details.title}
              description={empty_details.description}
            />
          </div>
        ) : (
          <div className="space-y-6">
            {/* Quick Actions Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-gray-50 rounded-xl border border-gray-100">
              <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                Showing {transactions.length} Records
              </span>
              <button className="flex items-center gap-2 text-[10px] font-black text-[#387467] uppercase tracking-widest hover:underline">
                <Download size={14} /> Export CSV
              </button>
            </div>

            {/* Transaction List Component */}
            <div className="rounded-2xl overflow-hidden border border-gray-100">
              <Transaction_List data={transactions} />
            </div>
            
            {/* ISO Footer Note */}
            <footer className="mt-12 py-6 border-t border-gray-50 flex items-center gap-3">
              <div className="p-2 bg-blue-50 rounded-full">
                <Calendar size={14} className="text-blue-600" />
              </div>
              <p className="text-[10px] text-gray-400 font-medium max-w-md">
                All transactions are timestamped in UTC. For billing disputes or corporate sponsorship documentation, please contact our 
                <span className="text-[#387467] cursor-pointer hover:underline"> compliance department</span>.
              </p>
            </footer>
          </div>
        )}
      </div>
    </div>
  );
};

export default Transactions;