'use client'
import React from "react";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useCourseStore } from "@/store/useCourseStore";
import { useQuery } from "@apollo/client/react";
import { GET_USER_ENROLLED_COURSES_MODULES } from "@/lib/Query/queries";
import CenteredLoader from "@/components/utility/Loader";
import EmptyContainer from "@/components/utility/EmptyContainer";
import EnrolledAccordion from "@/components/dashboard/EnrolledCourse/Enrolled-Accordion";
import Link from "next/link";


const empty_details = {
  title: "Your course Module List is empty",
  description: "Looks like you haven’t added any courses module yet.",
  callToAction: "Add New Courses Module",
}


const EnrolledCourseModules = () => {
  const course = useCourseStore((s) => s.selectedCourse);
  const params = useParams();
  const router = useRouter();

  const searchParams = useSearchParams();
  const dataId = searchParams.get("dataId");

  const { data, loading, error} = useQuery(GET_USER_ENROLLED_COURSES_MODULES, {
    fetchPolicy: "cache-and-network",
    variables:{courseId:course?.id},
    // fetchPolicy: 'network-only',
  }) as any;

    return (
      <div>
        <button
          onClick={() => router.back()}
          className="mb-6 inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200"
        >
          ← Back
        </button>

        <header className="bg-[#387467] text-white px-6 py-8  rounded-lg  flex justify-between mt-2">
          <h1 className="text-2xl font-bold">{course?.name}</h1>
          <Link
            href={`/overview/enrolled-course/course/quiz-instruction`}
            // href={`/overview/enrolled-course/${params?.id}/quiz-instruction`}
          >
            <button className="bg-white text-[#387467] px-4 py-2 rounded-lg">
              Take Exam
            </button>
          </Link>
        </header>

        {loading ? (
          <div className="flex items-center justify-center min-h-[300px] w-full">
            <CenteredLoader />
          </div>
        ) : data?.getEnrolledCourseModules.length === 0 ? (
          <EmptyContainer
            title={empty_details.title}
            description={empty_details.description}
          />
        ) : (
          <EnrolledAccordion course={course} modules={data?.getEnrolledCourseModules}/>
        )}

      </div>
    )
}
export default EnrolledCourseModules;