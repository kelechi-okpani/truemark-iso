"use client";
import { useState } from "react";
import CoursePage from "@/components/dashboard/Course/CoursePlayer";


export default function MyLearningPage() {
  const [activeTab, setActiveTab] = useState("All courses");

  return (
    <div className="min-h-screen bg-white">
       <h1>TRUE-MARK-GLOBAL-ADMIN</h1>
    </div>
  );
}
