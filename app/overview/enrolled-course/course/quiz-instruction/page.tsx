"use client";
import React, { useState } from "react";
import Quiz_Intro from "@/components/dashboard/EnrolledCourse/Course-Quiz/Intro-Quiz";
import Quiz_End from "@/components/dashboard/EnrolledCourse/Course-Quiz/End-Quiz";
import { useParams, useRouter } from "next/navigation";
import { useQuery } from "@apollo/client/react";
import { GET_USER_COURSE_SUBMISSION, GET_USER_COURSE_SUBMISSION_ASSESSMENT } from "@/lib/Query/queries";
import CenteredLoader from "@/components/utility/Loader";
import { useCourseStore } from "@/store/useCourseStore";


export default function MyLearningPage() {

  const params = useParams();
  const course = useCourseStore((s) => s.selectedCourse);
  const { data, loading, error, } = useQuery(GET_USER_COURSE_SUBMISSION_ASSESSMENT, {
    variables: {courseId: course?.id },
    // variables: { assignmentId: data?.getAssignmentByCourseId?.id},
  }) as any;

  const quizScore = Number(data?.getUserSubmissionsForCourse?.score);

  // 4️⃣ Handle loading and errors
  if (loading)
    return (
      <div className="flex justify-center items-center min-h-[300px]">
        <CenteredLoader />
      </div>
    );

  if (!data?.getUserSubmissionsForCourse || !quizScore)
    return (
      <Quiz_Intro />
    );

  return (

    <div className="min-h-screen bg-white">
      {/*<Quiz_Intro />*/}
      <Quiz_End userScore={quizScore} />

    </div>
  );
}



