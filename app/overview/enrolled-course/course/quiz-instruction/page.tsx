"use client";
import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { ClipboardCheck, AlertCircle, Award } from "lucide-react";
import Quiz_Intro from "@/components/dashboard/EnrolledCourse/Course-Quiz/Intro-Quiz";
import Quiz_End from "@/components/dashboard/EnrolledCourse/Course-Quiz/End-Quiz";
import CenteredLoader from "@/components/utility/Loader";
import { cn } from "@/lib/utils";
// ✅ Import the specific hook from your assessmentApi slice
import { useGetUserSubmissionsQuery } from "@/lib/redux/features/courses/assessmentApi";

export default function QuizInstruction() {
  // ✅ Get course context from Redux Store
  const selectedCourse = useSelector((state: any) => state.courses.selectedCourse);

  // ✅ Use the RTK Query hook you defined in your assessmentApi
  const { data, isLoading } = useGetUserSubmissionsQuery(selectedCourse?.id, {
    skip: !selectedCourse?.id,
  });

  // ✅ Memoized score calculation 
  // Since transformResponse returns the data directly, we check if it exists
  const quizScore = useMemo(() => {
    // If your API returns an array, we take the first item. 
    // If it's a single object, we access .score directly.
    const submission = Array.isArray(data) ? data[0] : data;
    return submission?.score ? Number(submission.score) : null;
  }, [data]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <CenteredLoader />
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto pb-20 animate-in fade-in duration-700">
      {/* --- Coursera Style Header --- */}
      <div className="mb-8 px-4 md:px-0">
        <div className="flex items-center gap-2 text-[#387467] mb-2">
          <ClipboardCheck size={18} />
          <span className="text-[11px] font-bold uppercase tracking-[2px]">
            Graded Assessment
          </span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
          {selectedCourse?.name || "Course Assessment"}
        </h1>
      </div>

      {/* --- Professional ISO Container --- */}
      <div className={cn(
        "bg-white border rounded-2xl overflow-hidden transition-all duration-500",
        quizScore !== null ? "border-green-100 shadow-sm" : "border-gray-100"
      )}>
        {/* Top Feedback Bar */}
        <div className={cn(
          "px-6 py-4 flex items-center justify-between border-b",
          quizScore !== null ? "bg-green-50/40 border-green-100" : "bg-gray-50/50 border-gray-100"
        )}>
          <div className="flex items-center gap-2.5">
            <div className={cn(
              "p-1.5 rounded-full",
              quizScore !== null ? "bg-[#387467] text-white" : "bg-gray-200 text-gray-500"
            )}>
              {quizScore !== null ? <Award size={14} /> : <AlertCircle size={14} />}
            </div>
            <span className="text-sm font-semibold text-gray-700">
              {quizScore !== null ? "Result Available" : "Instructions"}
            </span>
          </div>
          
          {quizScore !== null && (
            <div className="text-[#387467] font-bold text-sm tracking-tight">
              Grade: {quizScore}%
            </div>
          )}
        </div>

        {/* Content Area */}
        <div className="p-8 md:p-12">
          {quizScore === null ? (
            <div className="animate-in slide-in-from-bottom-4 duration-700">
               <Quiz_Intro />
            </div>
          ) : (
            <div className="animate-in zoom-in-95 duration-700">
              <Quiz_End userScore={quizScore} />
            </div>
          )}
        </div>
      </div>

      {/* ISO Compliance Footer */}
      <div className="mt-10 pt-6 border-t border-gray-100">
        <p className="text-center text-[11px] text-gray-400 leading-loose max-w-md mx-auto uppercase tracking-wider">
          Verification Required • ISO 9001 Standard • Secure Submission
        </p>
      </div>
    </div>
  );
}