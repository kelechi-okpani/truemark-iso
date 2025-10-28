'use client'
import { useMutation  } from "@apollo/client/react";
import { useParams, useRouter } from "next/navigation";
import { SUBMIT_QUIZ } from "@/lib/Mutation/mutation";
import { useFormik } from "formik";
import React, { useEffect, useRef, useState } from "react";
import * as Yup from "yup";
import WarningPrompt from "@/components/utility/WarningPrompt";
import Quiz_Already_Taken from "@/components/dashboard/EnrolledCourse/Course-Quiz/Already-Taken-Quiz";



const Quiz_Question = ({currentQuestion, currentStep, id, answers, allQuestions,
                         handlePrev, handleOptionSelect, assignments,
                         handleNext}) => {
  const params = useParams();
  const router = useRouter();
  const [SubmitAssignment, { loading, error }] = useMutation(SUBMIT_QUIZ, {
    onCompleted: async (data: any) => {
      const payload = data?.submitAssignment;
      if (payload) {
        console.log("Submission successful ✅", payload);
        router.push('overview/enrolled-course/course/quiz-instruction');
        // router.push(`overview/enrolled-course/course/quiz-instruction`);
      }
    },
    onError: (err: any) => {
      if (err?.graphQLErrors?.length) {
        err.graphQLErrors.forEach((graphError: any) => {
          console.error("GraphQL Error:", graphError.message);
        });
      }
    },
  });

  const [timeLeft, setTimeLeft] = useState(3600);

  const timerRef = useRef<NodeJS.Timeout | null>(null); // ⬅️ FIX
  const warningCount = useRef(0);

  const [showWarning, setShowWarning] = useState(false);
  const [warningMessage, setWarningMessage] = useState("");

  const videoRef = useRef<HTMLVideoElement>(null);
  const [cameraAllowed, setCameraAllowed] = useState(false);

  const formik = useFormik({
    initialValues: {
      assignmentId: id,
      answers: allQuestions.map((q: any, index: number) => ({
        questionId: q.id,
        selectedOptionId: "",
      })),
    },
    validationSchema: Yup.object({
      answers: Yup.array().of(
        Yup.object().shape({
          questionId: Yup.string().required("Question ID is required"),
          selectedOptionId: Yup.string().nullable(), // can start null, required later if you want
        })
      ),
    }),
    onSubmit: async (values) => {
      try {
        await SubmitAssignment({
          variables: { input: {
              assignmentId: id,
              answers: values?.answers?.map((q: any) => ({
                questionId: q.questionId,
                selectedOptionId: q.selectedOptionId,
              })),
            }
            },
        });
        console.log("Submitted payload:", values);
      } catch (error: any) {
        console.error("Submit error:", error);
      }
    },
  });


  // Ask for camera before exam starts
  useEffect(() => {
    (async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: false,
        });
        if (videoRef.current) videoRef.current.srcObject = stream;
        setCameraAllowed(true); // ✅ camera works
      } catch (err) {
        setCameraAllowed(false); // ❌ camera blocked
      }
    })();
  }, []);

  // ⏳ Timer countdown
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          formik.handleSubmit(); // auto-submit when time runs out
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!cameraAllowed) return;
    const handleVisibility = () => {
      if (document.hidden) {
        if (warningCount.current < 3) {
          warningCount.current += 1;
          if (warningCount.current === 3) {
            // Final warning -> auto submit & redirect
            setWarningMessage("❌ Too many violations. Submitting exam...");
            setShowWarning(true);

            if (timerRef.current) {
              clearInterval(timerRef.current);
            }
            setTimeLeft(0);

            setTimeout(async () => {
              await formik.handleSubmit();
              router.push(
                `/overview/enrolled-course/${params?.id}/quiz-instruction`
              );
            }, 2000);
          } else {
            // Intermediate warnings
            setWarningMessage(
              `⚠️ Do not leave the exam tab! (Warning ${warningCount.current}/3)`
            );
            setShowWarning(true);
          }
        }
      }
    };

    document.addEventListener("visibilitychange", handleVisibility);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [cameraAllowed, params?.id, formik, router]);

  // Format timer as mm:ss
  const formatTime = (t: number) => {
    const m = Math.floor(t / 60);
    const s = t % 60;
    return `${m.toString().padStart(2, "0")}:${s
      .toString()
      .padStart(2, "0")}`;
  };


// 🎯 UI
  if (!cameraAllowed) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-center space-y-4">
        <h1 className="text-2xl font-bold text-red-600">
          🚫 Camera Access Required
        </h1>
        <p className="text-gray-600 max-w-md">
          To take this exam, you must enable your PC/laptop camera.
          Please allow camera access in your browser settings and reload.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="px-6 py-2 bg-[#387467] text-white rounded-lg hover:bg-[#2f5f54]"
        >
          Retry
        </button>
      </div>
    );
  }

  if (cameraAllowed === null) {
    return <p className="text-center mt-20">🎥 Checking camera permissions...</p>;
  }

  return (
    <div>
      {error ? (<Quiz_Already_Taken error={error}/>) : (
        <div>

          {/* Timer */}
          <div className="flex justify-end  mb-4">
            <p className="font-bold text-lg text-red-600">
              ⏳ Time Left: {formatTime(timeLeft)}
            </p>
          </div>

          {/* Camera Preview */}
          <div className="flex justify-end  mb-4">
            <video
              ref={videoRef}
              autoPlay
              muted
              className="w-40  border rounded mb-4"
            />
          </div>

          {showWarning && (
            <WarningPrompt
              count={warningCount.current}
              max={3}
              onClose={() => setShowWarning(false)}
            />
          )}


          <h2 className="text-xl font-semibold text-gray-800 mb-6 mt-4 px-6">
            Question {currentStep + 1}
          </h2>

          <p className="text-md text-gray-800 mb-6 px-6">
            {currentQuestion.questionText}
          </p>

          <div className="bg-white w-full max-w-1xl rounded-md shadow p-8">
            <div className="space-y-6">
              {currentQuestion.options.map((opt: any, idx: number) => {
                // const isSelected = answers[currentStep] === opt.optionText;
                // const isSelected = formik.values.answers[idx]?.selectedOptionId === opt.id;
                // const label = String.fromCharCode(65 + idx);
                // Look up selected optionId for the current question
                const currentAnswer = formik.values.answers[currentStep]?.selectedOptionId;
                const isSelected = currentAnswer === opt.id;

                const label = String.fromCharCode(65 + idx);

                return (
                  <div
                    key={opt.id}
                    onClick={() => {
                      // handleOptionSelect(opt.optionText)
                      formik.setFieldValue(
                        `answers[${currentStep}].selectedOptionId`,
                        opt.id
                      );
                    }}
                    className={`p-4 border rounded-lg cursor-pointer ${
                      isSelected ? "bg-green-100 border-green-500" : "hover:bg-gray-100"
                    }`}
                  >
                    <span className="font-bold mr-2">{label}.</span> {opt.optionText}
                  </div>
                );
              })}
            </div>
          </div>
          {/* Navigation */}
          <div className="flex justify-between mt-6">
            <button
              onClick={handlePrev}
              disabled={currentStep === 0}
              className={
                currentStep === 0
                  ? "px-4 py-2 bg-gray-100 rounded opacity-50 cursor-not-allowed"
                  : "px-4 py-2 bg-gray-300 rounded"
              }          // className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              disabled={currentStep === allQuestions.length - 1}
              className="px-4 py-2 bg-[#04BA99] text-white rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>

          {currentStep === allQuestions.length - 1 &&
            <button
              onClick={() => formik.handleSubmit()}
              disabled={loading}
              className="inline-flex items-center justify-center  mt-8 rounded-xl   text-white font-semibold px-6  shadow-md  rounded-md bg-[#387467] text-white py-3 disabled:opacity-60"
            >
              {loading ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    ></path>
                  </svg>
                  please wait...
                </>
              ) : (
                "Submit Quiz"
              )}
            </button>
          }

        </div>
      )}

    </div>

  )
}


export default Quiz_Question