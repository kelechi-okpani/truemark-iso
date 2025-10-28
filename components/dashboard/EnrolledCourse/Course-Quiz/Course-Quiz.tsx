"use client";
import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useQuery } from "@apollo/client/react";
import { GET_ASSESSMENT } from "@/lib/Query/queries";
import CenteredLoader from "@/components/utility/Loader";
import Quiz_Question from "@/components/dashboard/EnrolledCourse/Course-Quiz/Question";
import { useCourseStore } from "@/store/useCourseStore";
import No_Question from "@/components/dashboard/EnrolledCourse/Course-Quiz/No-Question";

const QuizStepper = () => {
  const course = useCourseStore((s) => s.selectedCourse);
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const params = useParams();
  const router = useRouter();

  const { data, loading, error } = useQuery(GET_ASSESSMENT, {
    fetchPolicy: "cache-and-network",
    variables: { courseId: course?.id },
  }) as any;


  // const assignments = data?.getAssignmentByCourseId?.questions || [];
  // const allQuestions = assignments.flatMap((assignment: any) => assignment.questions) || [];


  // ✅ Fix — handle single assignment object instead of array
  const assignment = data?.getAssignmentByCourseId;
  const allQuestions = assignment?.questions || [];

  const handleOptionSelect = (option: string) => {
    setAnswers({ ...answers, [currentStep]: option });
  };

  const handleNext = () => {
    if (currentStep < allQuestions.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[300px] w-full">
        <CenteredLoader />
      </div>
    );
  }

  if (error) {
    return <p className="text-red-500">Error loading questions</p>;
  }

  if (!allQuestions.length) {
    return <No_Question/>;
  }

  const currentQuestion = allQuestions[currentStep];


  return (

    <div>
      <div className="items-center border justify-center py-8 bg-gray-50 rounded-md px-4">


        <Quiz_Question currentQuestion={currentQuestion}
                       currentStep={currentStep} id={assignment?.id}
                       answers={answers}  assignments={[assignment]}
                       handleOptionSelect={handleOptionSelect}
                       allQuestions={allQuestions}
                       handlePrev={handlePrev}
                       handleNext={handleNext}
        />
      </div>
    </div>
  );
};

export default QuizStepper;
