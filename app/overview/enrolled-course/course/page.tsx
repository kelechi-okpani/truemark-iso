"use client";
import React, { Suspense } from "react";
import EnrolledCourseModules from "@/components/dashboard/EnrolledCourse/Enrolled-Course-Modules";

export default function MyLearningPage() {

  return (
    <div className="min-h-screen bg-white">
      <Suspense
        fallback={
          <div className="flex justify-center items-center h-screen">
            <p className="text-gray-500 text-sm animate-pulse">
              Loading course module...
            </p>
          </div>
        }
      >
      <EnrolledCourseModules />
      </Suspense>
    </div>
  );
}



