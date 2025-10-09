"use client";
import React, { useState } from "react";
import Quiz_Intro from "@/components/dashboard/EnrolledCourse/Course-Quiz/Intro-Quiz";
import Quiz_End from "@/components/dashboard/EnrolledCourse/Course-Quiz/End-Quiz";
import { useParams, useRouter } from "next/navigation";
import { useQuery } from "@apollo/client/react";
import { GET_ASSESSMENT, GET_ASSESSMENT_SUBMISSION } from "@/lib/Query/queries";
import CenteredLoader from "@/components/utility/Loader";
import { useCourseStore } from "@/store/useCourseStore";


export default function MyLearningPage() {

  const params = useParams();
  const course = useCourseStore((s) => s.selectedCourse);
  // 2️⃣ Second query — get user's submission based on assignmentId
  const { data, loading, error, } = useQuery(GET_ASSESSMENT_SUBMISSION, {
    variables: { courseId: course?.id },
  }) as any;


  // 4️⃣ Handle loading and errors
  if (loading)
    return (
      <div className="flex justify-center items-center min-h-[300px]">
        <CenteredLoader />
      </div>
    );

  console.log(data?.getUserSubmissionsForCourse, "userScore...");
  const userScore = 82; // from API
  const max = 100;


  if (data?.getUserSubmissionsForCourse === null)
    return (
      <Quiz_Intro />
    );

  return (

    <div className="min-h-screen bg-white">
      {/*<Quiz_Intro />*/}
      <Quiz_End userScore={data?.getUserSubmissionsForCourse || 0} />

    </div>
  );
}



