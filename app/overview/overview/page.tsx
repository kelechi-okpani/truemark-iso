"use client";
import { useState } from "react";
import CoursePage from "@/app/(site)/courses/page";


export default function MyLearningPage() {
  const [activeTab, setActiveTab] = useState("All courses");

  return (
    <div className="min-h-screen bg-white">
        <CoursePage/>
    </div>
  );
}
