"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useCourseStore } from "@/store/useCourseStore";


const Quiz_Already_Taken = ({error}) => {
  const course = useCourseStore((s) => s.selectedCourse);
  const router = useRouter();
  const max = 100;


  return (
    <div className="max-w-8xl mx-auto p-2">
      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="mb-6 inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200"
      >
        ← Back
      </button>


      <div className="bg-white shadow rounded-lg border border-gray-200">
        {/* Header */}
        <div className="bg-[#387467] text-white px-6 py-8 rounded-t-lg">
          <h1 className="text-2xl font-bold gap-4">️  Already Submitted</h1>
        </div>

        <div className="p-6 space-y-4 text-center gap-6">
          <div className="mt-4 p-6 bg-yellow-50 border border-yellow-300 rounded-lg">
            <h2 className="text-lg font-semibold text-yellow-700">
              This quiz has already been completed
            </h2>
            <p className="text-gray-700 mt-4">
              {error?.message} and can now view your results or return to your overview.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="mt-6 flex justify-between">
            <button
              onClick={() => router.back()}
              className="px-6 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200"
            >
              Cancel
            </button>

          </div>
        </div>
      </div>

    </div>
  );
};

export default Quiz_Already_Taken;
