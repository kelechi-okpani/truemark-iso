"use client";
import React, { useEffect, useMemo, useState } from "react";
import { SearchInput } from "@/components/utility/SearchInput";
import { useDebouncedValue } from "@/components/utility/useDebouncedSearch";
import { Pagination } from "@/components/utility/Pagination";
import { useModal } from "@/components/hooks/useModal";
import BaseTable from "@/components/utility/Base-Table";
import { Modal } from "@/components/ui/modal";
import DetailsCard from "@/components/dashboard/Transaction/details";
import { Eye, Receipt, CheckCircle, Clock, AlertCircle } from "lucide-react";

const Transaction_List = ({ data }) => {
  const [selectedRow, setSelectedRow] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const { isOpen, openModal, closeModal } = useModal();

  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebouncedValue(searchTerm, 300);

  // Filter Logic
  const filteredData = useMemo(() => {
    const list = Array.isArray(data) ? data : [];
    if (!debouncedSearchTerm.trim()) return list;
    return list.filter((item: any) =>
      item?.course?.name?.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
      item?.paymentReference?.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
    );
  }, [data, debouncedSearchTerm]);

  useEffect(() => {
    setCurrentPage(1);
  }, [debouncedSearchTerm]);

  // Pagination Constants
  const ITEMS_PER_PAGE = 15; // ISO tables usually prefer shorter pages for better focus
  const totalItems = filteredData?.length || 0;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedList = filteredData?.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const columns = [
    {
      header: "Ref ID",
      accessor: "paymentReference",
      render: (row: any) => (
        <div className="flex items-center gap-2">
          <Receipt size={14} className="text-gray-400" />
          <span className="font-mono text-[11px] font-bold text-gray-600 uppercase tracking-tight">
            {row.paymentReference ? `#${row.paymentReference.slice(0, 8)}` : "N/A"}
          </span>
        </div>
      ),
    },
    {
      header: "Course Description",
      accessor: "course",
      render: (row: any) => (
        <div className="max-w-[250px]">
          <p className="text-sm font-bold text-gray-900 truncate">
            {row?.course?.name || "Unspecified Course"}
          </p>
          <p className="text-[10px] text-gray-400 uppercase font-black tracking-widest mt-0.5">
            LMS Enrollment
          </p>
        </div>
      ),
    },
    {
      header: "Amount",
      accessor: "amount",
      render: (row: any) => (
        <span className="text-sm font-bold text-gray-900">
          {new Intl.NumberFormat("en-NG", {
            style: "currency",
            currency: "NGN",
            minimumFractionDigits: 0,
          }).format(Number(row.amount))}
        </span>
      ),
    },
    {
      header: "Status",
      accessor: "status",
      render: (row: any) => {
        const isCompleted = row.status?.toLowerCase() === "success" || row.status?.toLowerCase() === "completed";
        return (
          <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border ${
            isCompleted 
              ? "bg-green-50 border-green-100 text-green-700" 
              : "bg-amber-50 border-amber-100 text-amber-700"
          }`}>
            {isCompleted ? <CheckCircle size={10} /> : <Clock size={10} />}
            <span className="text-[10px] font-black uppercase tracking-widest">
              {row.status || "Pending"}
            </span>
          </div>
        );
      },
    },
    {
      header: "Actions",
      accessor: "action",
      render: (row: any) => (
        <button
          onClick={() => {
            setSelectedRow(row);
            openModal();
          }}
          className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#387467] hover:text-[#2d5d52] transition-colors"
        >
          <Eye size={14} />
          View Receipt
        </button>
      ),
    },
  ];

  return (
    <div className="bg-white">
      {/* Search Header */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6 px-2">
        <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">
          Internal Audit Log
        </p>
        <div className="w-full md:w-80">
          <SearchInput
            value={searchTerm}
            onChange={setSearchTerm}
            placeholder="Search by course or reference..."
          />
        </div>
      </div>

      {/* ISO Standard Table Container */}
      <div className="border border-gray-100 rounded-2xl overflow-hidden">
        <BaseTable columns={columns} data={paginatedList} />
      </div>

      {/* Pagination Footer */}
      <div className="flex flex-col sm:flex-row justify-between items-center mt-8 gap-4 px-2">
        <div className="text-[11px] font-medium text-gray-400 uppercase tracking-widest">
          Showing <span className="text-gray-900 font-bold">{startIndex + 1}</span> to{" "}
          <span className="text-gray-900 font-bold">
            {Math.min(startIndex + ITEMS_PER_PAGE, totalItems)}
          </span>{" "}
          of {totalItems} entries
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>

      {/* Details Modal */}
      <Modal isOpen={isOpen} onClose={closeModal} className="max-w-[550px]">
        {selectedRow && <DetailsCard selected={selectedRow} />}
      </Modal>
    </div>
  );
};

export default Transaction_List;