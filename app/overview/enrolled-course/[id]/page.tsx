"use client";
import React, { useState } from "react";
import EnrolledCourseModules from "@/components/dashboard/EnrolledCourse/Enrolled-Course-Modules";

export default function MyLearningPage() {

  return (
    <div className="min-h-screen bg-white">
      <EnrolledCourseModules />
    </div>
  );
}



