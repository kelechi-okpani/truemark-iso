"use client";
import React, { useState } from "react";
import CourseVideoListing from "@/components/dashboard/Course/CourseVideo/CourseVideoListing";


 const Accordion =({course, modules})=> {
   const [id, setId] = useState('')
   const [openId, setOpenId] = useState<string | null>(null);

    const toggle = (id: string) => {
      setOpenId(openId === id ? null : id);
     };

  return (
    <div>
      <div
        id="accordion-flush"
        className=" border border-gray-200 rounded-lg divide-y divide-gray-200 rounded-2xl mt-2"
      >
        {modules?.map((module: any) => (
          <div key={module?.id}
               onClick={() => setId(module?.id)}
               className="">
            <div className="flex justify-between gap-2">
              <button
                type="button"
                className="px-8  flex items-center bg-gray-300 justify-between  py-4 font-medium text-gray-700 gap-3"
                onClick={() => toggle(module?.id)}
              >
                <span className='text-sm'>{module?.name}</span>
                <div>
                  <svg
                    className={`w-3 h-3 transition-transform ${
                      openId === module?.id ? "rotate-180" : ""
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5 5 1 1 5"
                    />
                  </svg>
                </div>
              </button>
            </div>
            {openId === module?.id && (
              <div className=" text-gray-500 dark:text-gray-400">
                <div className="py-6 justify-start bg-gray-100  px-3">
                   <p className="capitalize font-bold py-4">Description:</p>
                   <span className=" capitalize">{module?.description}</span>
                </div>
                <CourseVideoListing id={id} module={module} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>

  );
 }

export default Accordion