"use client";
import React, { useEffect, useRef, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useFormik } from "formik";
import { 
  Timer, 
  Camera, 
  CheckCircle2, 
  ChevronLeft, 
  ChevronRight, 
  Loader2, 
  ShieldCheck, 
  Eye
} from "lucide-react";
import { cn } from "@/lib/utils";
// ✅ Redux: Using your submission mutation
import { useSubmitQuizMutation } from "@/lib/redux/features/courses/assessmentApi";
import { useSelector } from "react-redux";
import { selectActiveCourseId } from "@/lib/redux/features/courses/courseSlice";

const QuizQuestion = ({ currentQuestion, currentStep, id, allQuestions, handlePrev, handleNext }: any) => {
  const params = useParams();
  const router = useRouter();
  const [submitQuiz, { isLoading: submitting }] = useSubmitQuizMutation();

  const [timeLeft, setTimeLeft] = useState(3600); // 60 Minutes
  const [cameraAllowed, setCameraAllowed] = useState<boolean | null>(null);
  
  const videoRef = useRef<HTMLVideoElement>(null);

  const activeCourseId = useSelector(selectActiveCourseId);

  console.log(activeCourseId, "activeCourseId...")
  

 const formik = useFormik({
  initialValues: {
    assignmentId: id,
    answers: allQuestions.map((q: any) => ({
      questionId: q.id,
      selectedOptionId: "",
    })),
  },
  enableReinitialize: false,
  onSubmit: async (values) => {
    try {
      // ✅ We pass one object containing courseId (for tags) and input (for GraphQL)
      await submitQuiz({
        courseId: activeCourseId,
        input: {
          assignmentId: id, // This is the ID! the error was complaining about
          answers: values.answers
            .filter((a: any) => a.selectedOptionId !== "")
            .map((a: any) => ({
              questionId: a.questionId,
              selectedOptionId: a.selectedOptionId,
            })),
        }
      }).unwrap();
      
      router.push(`/overview/enrolled-course/${params?.id}/certification`);
    } catch (err) {
      console.error("Submission Failed:", err);
      // Optional: Add a toast here to notify the user
    }
  },
});

  // ⏳ ISO Standard: Proctoring & Timer Logic
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          formik.handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    const initCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) videoRef.current.srcObject = stream;
        setCameraAllowed(true);
      } catch {
        setCameraAllowed(false);
      }
    };

    initCamera();
    return () => {
      clearInterval(timer);
      // Clean up camera stream
      if (videoRef.current?.srcObject) {
        const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
        tracks.forEach(track => track.stop());
      }
    };
  }, []);

  const formatTime = (t: number) => {
    const m = Math.floor(t / 60);
    const s = t % 60;
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  if (cameraAllowed === false) {
    return (
      <div className="flex flex-col items-center justify-center p-12 bg-white border border-red-100 rounded-3xl text-center">
        <div className="w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center mb-6">
          <Camera size={32} />
        </div>
        <h2 className="text-xl font-black text-gray-900 tracking-tight">Security Protocol Violation</h2>
        <p className="text-gray-500 text-sm mt-2 mb-8 max-w-xs">
          ISO standards require active proctoring. Your camera must be enabled to proceed with this assessment.
        </p>
        <button 
          onClick={() => window.location.reload()} 
          className="px-8 py-3 bg-[#387467] text-white text-xs font-black uppercase tracking-widest rounded-xl hover:bg-slate-900 transition-all"
        >
          Enable Camera & Retry
        </button>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* --- Coursera Proctored Toolbar --- */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6 bg-gray-50/50 p-4 rounded-2xl border border-gray-100">
        <div className="flex items-center gap-4">
          <div className="relative">
            <video 
              ref={videoRef} 
              autoPlay 
              muted 
              className="w-20 h-20 object-cover rounded-xl bg-black border border-gray-200 grayscale contrast-125" 
            />
            <div className="absolute -top-1 -right-1 flex items-center gap-1 bg-red-500 text-[8px] text-white px-1.5 py-0.5 rounded font-black uppercase tracking-tighter animate-pulse">
              <Eye size={8} /> Live
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1.5 text-[#387467] mb-0.5">
              <ShieldCheck size={14} />
              <span className="text-[10px] font-black uppercase tracking-widest">Verified Session</span>
            </div>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Proctor ID: {params?.id?.slice(0, 8)}</p>
          </div>
        </div>

        <div className={cn(
          "flex flex-col items-center md:items-end px-6 py-2 rounded-xl border transition-all duration-500",
          timeLeft < 300 ? "bg-red-50 border-red-100 animate-pulse" : "bg-white border-gray-100 shadow-sm"
        )}>
          <span className="text-[9px] font-black text-gray-400 uppercase tracking-[0.2em] mb-1">Time Remaining</span>
          <div className={cn("flex items-center gap-2 font-mono text-xl font-black", timeLeft < 300 ? "text-red-600" : "text-gray-800")}>
            <Timer size={18} strokeWidth={2.5} />
            {formatTime(timeLeft)}
          </div>
        </div>
      </div>

      {/* --- Question Content --- */}
      <div className="mb-10 space-y-4">
        <div className="flex items-center gap-3">
            <span className="text-[10px] font-black text-[#387467] uppercase tracking-[0.3em] bg-[#387467]/5 px-2 py-1 rounded">
                Section 01 / Q{currentStep + 1}
            </span>
        </div>
        <h2 className="text-xl md:text-2xl font-black text-gray-900 leading-tight tracking-tight">
          {currentQuestion.questionText}
        </h2>
      </div>

      {/* --- ISO Selection Grid --- */}
      <div className="grid gap-4 mb-12">
        {currentQuestion.options.map((opt: any, idx: number) => {
          const isSelected = formik.values.answers[currentStep]?.selectedOptionId === opt.id;
          return (
            <button
              key={opt.id}
              type="button"
              onClick={() => formik.setFieldValue(`answers[${currentStep}].selectedOptionId`, opt.id)}
              className={cn(
                "group relative flex items-center justify-between p-6 rounded-2xl border transition-all duration-300",
                isSelected 
                  ? "border-[#387467] bg-white shadow-lg shadow-[#387467]/5 ring-1 ring-[#387467]" 
                  : "border-gray-100 bg-white hover:border-gray-300 hover:bg-gray-50"
              )}
            >
              <div className="flex items-center gap-5">
                <div className={cn(
                  "w-10 h-10 rounded-xl flex items-center justify-center text-sm font-black border-2 transition-all duration-500",
                  isSelected ? "bg-[#387467] text-white border-[#387467] rotate-[360deg]" : "bg-white text-gray-400 border-gray-100 group-hover:border-gray-300"
                )}>
                  {String.fromCharCode(65 + idx)}
                </div>
                <span className={cn(
                  "text-sm font-bold transition-colors", 
                  isSelected ? "text-[#387467]" : "text-gray-600"
                )}>
                  {opt.optionText}
                </span>
              </div>
              
              <div className={cn(
                "w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all",
                isSelected ? "border-[#387467] bg-[#387467]" : "border-gray-100"
              )}>
                {isSelected && <CheckCircle2 size={14} className="text-white" />}
              </div>
            </button>
          );
        })}
      </div>

      {/* --- Professional Navigation Footer --- */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-10 border-t border-gray-50">
        <button 
          type="button"
          onClick={handlePrev} 
          disabled={currentStep === 0} 
          className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 disabled:opacity-20 hover:text-gray-900 transition-colors"
        >
          <ChevronLeft size={16} /> Previous Response
        </button>

        <div className="flex items-center gap-4 w-full sm:w-auto">
            {currentStep === allQuestions.length - 1 ? (
            <button
                type="button"
                onClick={() => formik.handleSubmit()}
                disabled={submitting}
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#387467] text-white px-10 py-4 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-slate-900 transition-all shadow-xl shadow-[#387467]/20 active:scale-95 disabled:opacity-50"
            >
                {submitting ? <Loader2 className="animate-spin" size={18} /> : (
                    <>Submit For Certification <ShieldCheck size={16} /></>
                )}
            </button>
            ) : (
            <button 
                type="button"
                onClick={handleNext} 
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white border border-gray-200 text-gray-700 px-10 py-4 rounded-2xl text-xs font-black uppercase tracking-widest hover:border-[#387467] hover:text-[#387467] transition-all active:scale-95"
            >
                Next Statement <ChevronRight size={16} />
            </button>
            )}
        </div>
      </div>
    </div>
  );
};

export default QuizQuestion;