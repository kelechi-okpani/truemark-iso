"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/lib/redux/store";
// ✅ Use your exported selector for clean code
import { selectCurrentUser } from "@/lib/redux/features/auth/authSlice"; 
import { selectActiveCourse } from "@/lib/redux/features/courses/courseSlice"; 
import ISOCertificate from "@/components/dashboard/EnrolledCourse/Certificate";

export default function CertificateContainer() {
  // ✅ This will now map correctly to state.auth.user
  const user = useSelector(selectCurrentUser);
  const activeCourse = useSelector(selectActiveCourse);
  
  // ✅ Use 'fullname' from your User interface
  const userName = user?.fullname || "Valued Learner";
  const userEmail = user?.email || "Valued Learner";
  
  console.log(user, "user.....")
  const today = new Date().toLocaleDateString('en-NG', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const certificateId = activeCourse?.id 
    ? `ISO-${activeCourse.id.slice(0, 8).toUpperCase()}-${new Date().getFullYear()}`
    : `ISO-PENDING`;

  if (!activeCourse) return <div>Loading...</div>;

  return (
    <div className="flex justify-center py-20 bg-gray-50 min-h-screen">
      <ISOCertificate 
        userEmail={userEmail}
        userName={userName}
        courseName={activeCourse?.name}
        date={today}
        certificateId={certificateId}
      />
    </div>
  );
}