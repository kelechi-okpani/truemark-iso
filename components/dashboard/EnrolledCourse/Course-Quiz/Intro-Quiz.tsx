"use client";
import React from "react";
import { useParams, useRouter } from "next/navigation";
import { useCourseStore } from "@/store/useCourseStore";
import { useQuery } from "@apollo/client/react";
import {
  GET_USER_ENROLLED_COURSES_MODULES,
} from "@/lib/Query/queries";
import CenteredLoader from "@/components/utility/Loader";
import EmptyContainer from "@/components/utility/EmptyContainer";
import Link from "next/link";


const Quiz_Intro = () => {
  const course = useCourseStore((s) => s.selectedCourse);
  const params = useParams();
  const router = useRouter();

  const { data, loading } = useQuery(GET_USER_ENROLLED_COURSES_MODULES, {
    fetchPolicy: "cache-and-network",
    variables: { courseId: course?.id },
  }) as any;

  // standard instructions
  const examInstructions = [
    "You must complete the exam in one sitting. Once started, the timer will not stop.",
    "Ensure you have a stable internet connection before beginning.",
    "Each question has one correct answers.",
    "Do not refresh or close the browser during the exam.",
    "You are not allowed to use external help or resources during the exam.",
    "Your responses will be automatically saved and submitted when time is up.",
  ];

  return (
    <div className="max-w-8xl mx-auto p-2">
      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="mb-6 inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200"
      >
        ← Back
      </button>

      {loading ? (
        <div className="flex items-center justify-center min-h-[300px] w-full">
          <CenteredLoader />
        </div>
      ) : !data?.getEnrolledCourseModules ||
      data?.getEnrolledCourseModules.length === 0 ? (
        <EmptyContainer
          title="Your course module list is empty"
          description="Looks like this course does not have any modules assigned yet."
        />
      ) : (
        <div className="bg-white shadow rounded-lg border border-gray-200">
          {/* Header */}
          <div className="bg-[#387467] text-white px-6 py-8 rounded-t-lg">
            <h1 className="text-2xl font-bold">{course?.name}</h1>
            <p className="text-sm mt-2 opacity-90">
              Exam Introduction & Instructions
            </p>
          </div>

          {/* Exam Instructions */}
          <div className="p-6 space-y-4">
            <h2 className="text-lg font-semibold text-gray-800">
              Please read the instructions carefully before starting the exam:
            </h2>
            <ul className="list-decimal list-inside space-y-2 text-gray-700">
              {examInstructions.map((rule, idx) => (
                <li key={idx}>{rule}</li>
              ))}
            </ul>

            <div className="mt-6 p-4 border border-yellow-300 bg-yellow-50 rounded-lg">
              <p className="text-sm text-yellow-800">
                ⚠️ Once you click <strong>Start Exam</strong>, the timer will begin and
                you cannot pause or restart. Make sure you are ready.
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

              <Link href={`/overview/enrolled-course/course/quiz-instruction/quiz`}>
              {/*<Link href={`/overview/enrolled-course/${params?.id}/quiz-instruction/quiz`}>*/}
                <button className="px-6 py-2 bg-[#387467] text-white rounded-lg hover:bg-[#2f5f54]">
                  Start Exam
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz_Intro;
