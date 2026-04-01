"use client";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { selectActiveCourseId } from "@/lib/redux/features/courses/courseSlice";
import { GlobalLoader } from "@/components/utility/Loader";

export default function CourseGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const activeCourseId = useSelector(selectActiveCourseId);
  const [isVerifying, setIsVerifying] = useState(true);

  useEffect(() => {
    // 1. Initiate a professional "Security Check" delay
    // This prevents UI flickering and ensures Redux state is hydrated
    const timer = setTimeout(() => {
      if (!activeCourseId) {
        // 2. Redirect if the "Secret ID" (activeCourse.id) is missing
        console.warn("Access Denied: No active course context found.");
        router.replace("/overview"); 
      } else {
        setIsVerifying(false);
      }
    }, 800); // 800ms for a "scanning" feel

    return () => clearTimeout(timer);
  }, [activeCourseId, router]);

  if (isVerifying) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
        <GlobalLoader />
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest animate-pulse">
          Verifying Course Access...
        </p>
      </div>
    );
  }

  return <>{children}</>;
}