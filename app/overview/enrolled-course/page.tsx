"use client";
import EnrolledCourseListing from "@/components/dashboard/EnrolledCourse/Enrolled-Course-Listing";
import CourseGuard from "@/lib/CourseGuard";

export default function OverviewPage() {
  return (
  
       <div className="min-h-screen bg-white">
          <EnrolledCourseListing />
        </div>
  
   
  );
}
