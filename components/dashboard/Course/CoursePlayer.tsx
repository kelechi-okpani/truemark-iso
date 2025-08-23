"use client";
import React, { useState } from "react";
import HlsVideoPlayer from "@/components/utility/VideoPlayer";
import { useCourseStore } from "@/store/useCourseStore";
import { useParams } from "next/navigation";
import bg from "../../../public/images/cert/cert10.png"
import Image from "next/image";
import dynamicCourseDetails from "@/components/Website/Certifications/Details/DetailsData";


interface VideoPlayerProps {
  src: string;
  poster?: string;
  autoPlay?: boolean;
  controls?: boolean;
  width?: string | number;
  height?: string | number;
}

const TABS = [
  "Course content",
  "Overview",
  // "Q&A",
  // "Notes",
  // "Announcements",
  // "Reviews",
  // "Learning tools",
];

const lessons = [
  { title: "1. 0100aa - Welcome to the Course", duration: "3min" },
  { title: "2. 0100b - Downloading the Course Files", duration: "2min" },
  { title: "3. 0100c - Downloading the PDF Book", duration: "2min" },
  {
    title: "4. 0101 - Using the SELECTEDVALUE Function",
    duration: "7min",
    resources: true,
  },
  {
    title: "5. 0102 - Nesting the SELECTEDVALUE Function",
    duration: "7min",
    resources: true,
  },
];

const CoursePage = () => {
  const [activeTab, setActiveTab] = useState("Course content");
  const { slug } = useParams<{ slug: string }>(); // get slug
  const { paidCourses } = useCourseStore();
  const params = useParams();

  if (!slug || typeof slug !== 'string') return <p>Loading...</p>;

  const course = dynamicCourseDetails[slug];

  return (
    <div className="flex flex-col ml-[3rem]">
      {/* Video Section */}
      <div className=" flex items-center justify-center h-50 md:h-[500px] lg:h-[500px] relative rounded-lg">
        <div className="w-full aspect-video">
          {/*<div className="w-full max-w-6xl aspect-video">*/}
          <div>
            <HlsVideoPlayer
              poster=""
              src="https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
              autoPlay={true}
              controls={true}
              width="80%"
              height="90%"
              hlsConfig={{
                maxLoadingDelay: 4,
                minAutoBitrate: 0,
                lowLatencyMode: true
              }}
            />
          </div>

        </div>
        {/*<div>*/}
        {/*  <Image src={bg} alt="bg" fill className="bg-cover w-full" />*/}
        {/*</div>*/}
      </div>

      {/* Tabs */}
      <div className="border-b bg-white px-4 mt-[1rem]">
        <div className="flex gap-6 overflow-x-auto whitespace-nowrap text-sm text-gray-600 py-3">
          {TABS.map((tab) => (
            <button
              key={tab}
              className={`pb-2 border-b-2 text-1xl ${
                activeTab === tab
                  ? "border-black text-black font-bold"
                  : "border-transparent hover:text-black"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-y-auto bg-gray-50 p-4">
        {activeTab === "Course content" && (
          <main>
            <div className="mt-[2rem] max-w-4xl  mx-auto px-4 py-8">
              <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
              <img src={course.image} alt={course.title} className="w-full mb-4 rounded-md" />
              <h2 className="text-3xl font-bold mb-6 text-black">Overview</h2>
              <p className="mt-4 mb-10 leading-loose tracking-wide">
                {course.overview}
              </p>

              <h2 className="text-3xl font-bold mb-2 text-black">Benefits of Certification</h2>
              <ul className="list-disc pl-6 mb- gap-8">
                {course.benefits.map((benefit, index) => (
                  <li className='mb-4' key={index}>{benefit}</li>
                ))}
              </ul>

            </div>
          </main>
        )}

        {/* Placeholder content for other tabs */}
        {activeTab !== "Course content" && (
          <div className="max-w-4xl mx-auto bg-white shadow rounded-lg p-6 text-center text-gray-600">
            <p>
              Content for <strong>{activeTab}</strong> will be displayed here.
            </p>

          </div>
        )}
      </div>
    </div>
  );
};

export default CoursePage;



