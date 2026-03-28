"use client";
import React, { useState, useMemo } from "react";
import { useSelector } from "react-redux";
import { ChevronLeft, ChevronRight, CheckCircle2, Info, ShieldCheck, Flag } from "lucide-react";
import CenteredLoader from "@/components/utility/Loader";
import No_Question from "@/components/dashboard/EnrolledCourse/Course-Quiz/No-Question";
import Quiz_Question from "@/components/dashboard/EnrolledCourse/Course-Quiz/Question";
import { cn } from "@/lib/utils";
import { selectActiveCourse } from "@/lib/redux/features/courses/courseSlice";
import { useGetAssessmentQuery } from "@/lib/redux/features/courses/assessmentApi";

const QuizStepper = () => {
  // ✅ Using your updated Redux Selector
  const activeCourse = useSelector(selectActiveCourse);
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});

  // ✅ Fetching using Course ID from Redux
  const { data: assignment, isLoading, error } = useGetAssessmentQuery(activeCourse?.id, {
    skip: !activeCourse?.id,
  });

  const allQuestions = useMemo(() => assignment?.questions || [], [assignment]);

  const handleOptionSelect = (option: string) => {
    setAnswers((prev) => ({ ...prev, [currentStep]: option }));
  };

  const handleNext = () => {
    if (currentStep < allQuestions.length - 1) {
      setCurrentStep((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  if (isLoading) return <div className="min-h-[60vh] flex items-center justify-center"><CenteredLoader /></div>;
  if (error) return (
    <div className="max-w-2xl mx-auto my-20 p-8 text-center bg-red-50 rounded-2xl border border-red-100">
      <Info className="mx-auto text-red-500 mb-4" size={32} />
      <h3 className="text-red-900 font-black uppercase tracking-widest text-xs mb-2">System Error</h3>
      <p className="text-red-700 text-sm font-medium">Unable to synchronize assessment data. Please check your connection.</p>
    </div>
  );
  if (!allQuestions.length) return <No_Question />;

  const currentQuestion = allQuestions[currentStep];
  const progressPercentage = ((currentStep + 1) / allQuestions.length) * 100;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 md:py-12">
      
      {/* --- Coursera-Style Header: Flat & Informative --- */}
      <header className="mb-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-[#387467]">
              <ShieldCheck size={14} strokeWidth={3} />
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">ISO Certified Assessment</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight">
              {assignment?.title || "Module Examination"}
            </h1>
            <p className="text-gray-500 text-xs font-medium uppercase tracking-wider">
              {activeCourse?.name}
            </p>
          </div>
          
          <div className="flex items-center gap-4 text-[11px] font-black text-gray-400 uppercase tracking-widest">
             <div className="flex items-center gap-1.5 bg-gray-50 px-3 py-2 rounded-lg border border-gray-100">
               <Flag size={12} className="text-[#387467]" />
               Question {currentStep + 1} / {allQuestions.length}
             </div>
          </div>
        </div>

        {/* Professional Thin Progress Bar */}
        <div className="relative w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
          <div 
            className="absolute h-full bg-[#387467] transition-all duration-700 ease-in-out"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </header>

      {/* --- Main Content Area: Low Shadow, High Contrast --- */}
      <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm shadow-gray-200/20">
        
        {/* Navigation Dot Bar: Mobile Scrollable */}
        <div className="px-4 py-3 border-b border-gray-50 bg-[#FBFBFB] flex items-center justify-between">
          <button
            onClick={handlePrev}
            disabled={currentStep === 0}
            className={cn(
              "p-2 rounded-lg transition-all",
              currentStep === 0 ? "text-gray-200" : "text-gray-500 hover:bg-white hover:text-[#387467] border border-transparent hover:border-gray-200 shadow-sm"
            )}
          >
            <ChevronLeft size={20} />
          </button>
          
          <div className="flex gap-1.5 overflow-x-auto no-scrollbar px-4">
            {allQuestions.map((_: any, index: number) => (
              <div 
                key={index}
                className={cn(
                  "flex-shrink-0 w-1.5 h-1.5 rounded-full transition-all duration-500",
                  index === currentStep ? "bg-[#387467] scale-150" : 
                  answers[index] ? "bg-[#387467]/30" : "bg-gray-200"
                )}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            disabled={currentStep === allQuestions.length - 1}
            className={cn(
              "p-2 rounded-lg transition-all",
              currentStep === allQuestions.length - 1 ? "text-gray-200" : "text-gray-500 hover:bg-white hover:text-[#387467] border border-transparent hover:border-gray-200 shadow-sm"
            )}
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Question Area */}
        <div className="p-6 md:p-12 min-h-[350px]">
          <Quiz_Question 
            currentQuestion={currentQuestion}
            currentStep={currentStep} 
            id={assignment?.id}
            answers={answers} 
            assignments={[assignment]}
            handleOptionSelect={handleOptionSelect}
            allQuestions={allQuestions}
            handlePrev={handlePrev}
            handleNext={handleNext}
          />
        </div>

        {/* Action Footer */}
        <div className="px-6 py-6 bg-gray-50/50 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-[10px] font-black text-gray-400 uppercase tracking-widest">
            <CheckCircle2 size={14} className={cn(answers[currentStep] ? "text-green-500" : "text-gray-300")} />
            {answers[currentStep] ? "Response Recorded" : "Awaiting Selection"}
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
             {currentStep === allQuestions.length - 1 ? (
               <button className="w-full sm:w-auto px-8 py-3 bg-[#387467] text-white text-xs font-black uppercase tracking-widest rounded-xl hover:bg-slate-900 transition-all shadow-lg shadow-[#387467]/10 active:scale-95">
                 Submit Examination
               </button>
             ) : (
               <button 
                onClick={handleNext}
                disabled={!answers[currentStep]}
                className={cn(
                  "w-full sm:w-auto px-8 py-3 text-xs font-black uppercase tracking-widest rounded-xl transition-all active:scale-95",
                  answers[currentStep] 
                    ? "bg-white border border-gray-200 text-gray-700 hover:bg-[#387467] hover:text-white" 
                    : "bg-gray-100 text-gray-300 cursor-not-allowed"
                )}
               >
                 Save & Continue
               </button>
             )}
          </div>
        </div>
      </div>

      <footer className="mt-10 flex flex-col items-center gap-4">
        <div className="flex items-center gap-6">
            <span className="text-[9px] font-bold text-gray-300 uppercase tracking-[0.2em]">Confidential</span>
            <span className="text-[9px] font-bold text-gray-300 uppercase tracking-[0.2em]">Verified Attempt</span>
            <span className="text-[9px] font-bold text-gray-300 uppercase tracking-[0.2em]">Secured Data</span>
        </div>
      </footer>
    </div>
  );
};

export default QuizStepper;