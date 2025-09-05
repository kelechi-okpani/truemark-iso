'use client'
import Accordion from "@/components/dashboard/Course/Accordion";
import React from "react";
import { useParams, useRouter } from "next/navigation";
import { useCourseStore } from "@/store/useCourseStore";
import { useQuery } from "@apollo/client/react";
import { GET_COURSES_MODULES } from "@/lib/Query/queries";
import CenteredLoader from "@/components/utility/Loader";
import EmptyContainer from "@/components/utility/EmptyContainer";



const empty_details = {
  title: "Your course Module List is empty",
  description: "Looks like you haven’t added any courses module yet.",
  callToAction: "Add New Courses Module",
}


const CourseModules = () => {
  const course = useCourseStore((s) => s.selectedCourse);
  const params = useParams();
  const router = useRouter();
  const { data, loading, error} = useQuery(GET_COURSES_MODULES, {
    fetchPolicy: "cache-and-network",
    variables:{courseId:params?.id},
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
          <h1 className="text-3xl font-bold">Course Modules</h1>
          {/*<h1 className="text-1xl font-bold">{data?.getCourseModules?.name}</h1>*/}
        </header>

        {loading ? (
          <div className="flex items-center justify-center min-h-[300px] w-full">
            <CenteredLoader/>
          </div>
        ) : data?.getCourseModules.length === 0 ? (
          <EmptyContainer
            title={empty_details.title}
            description={empty_details.description}
          />
        ) : (
          <Accordion course={course} modules={data?.getCourseModules}/>
        )}

      </div>
    )
}
export default CourseModules;