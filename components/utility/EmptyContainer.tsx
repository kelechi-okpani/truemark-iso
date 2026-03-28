"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { PlusCircle, Search } from "lucide-react"; // Professional ISO icons
import { cn } from "@/lib/utils";

type Details = {
  title: string;
  description: string;
  callToAction?: string;
  to?: string;
  className?: string;
};

const EmptyContainer = ({ title, description, callToAction, to, className }: Details) => {
  const router = useRouter();

  const handleRoute = () => {
    if (to) {
      router.push(to);
    }
  };

  return (
    <div className={cn(
      "w-full flex flex-col items-center justify-center py-16 px-4 bg-white border border-dashed border-gray-200 rounded-xl",
      className
    )}>
      {/* Icon Container: Coursera uses subtle circular backgrounds */}
      <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-6">
        <Search className="text-gray-300" size={40} strokeWidth={1.5} />
      </div>

      {/* Content Section */}
      <div className="max-w-md text-center">
        <h2 className="text-xl font-bold text-gray-900 tracking-tight mb-2">
          {title}
        </h2>
        <p className="text-[14px] text-gray-500 leading-relaxed mb-8">
          {description}
        </p>

        {callToAction && (
          <button
            onClick={handleRoute}
            className="inline-flex items-center justify-center gap-2 bg-[#387467] text-white px-8 py-3 rounded-md text-sm font-bold transition-all hover:bg-[#2d5e53] hover:shadow-sm active:scale-95"
          >
            {/* Adding a context icon to the button for ISO accessibility */}
            <PlusCircle size={18} />
            {callToAction}
          </button>
        )}
      </div>
    </div>
  );
};

export default EmptyContainer;