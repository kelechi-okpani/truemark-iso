"use client";
import React, { useEffect, useMemo, useState } from "react";
import CourseItem from "@/components/dashboard/Course/CourseItem";
import { Search } from "lucide-react";
import EmptyContainer from "@/components/utility/EmptyContainer";
import { useQuery } from "@apollo/client/react";
import { GET_COURSES, GET_USER_ENROLLED_COURSES } from "@/lib/Query/queries";
import CenteredLoader from "@/components/utility/Loader";


const empty_details = {
  title: "Your course List is empty",
  description: "Looks like you haven’t paid for any courses yet.",
  callToAction: "Add New Courses",
  to:"/overview/course"
}

export default function CourseListing() {
  const { data, loading, error} = useQuery(GET_COURSES, {
    fetchPolicy: "cache-and-network",
    // fetchPolicy: 'network-only',
    // variables:{seasonId:seasonId},
  }) as any;

  // 🔹 Get all courses
  const { data: coursesData, loading: coursesLoading, error: coursesError, } = useQuery(GET_COURSES, {
    fetchPolicy: "cache-and-network",
  }) as any;

  // 🔹 Get user enrolled courses
  const { data: enrolledData, loading: enrolledLoading, error: enrolledError, } = useQuery(GET_USER_ENROLLED_COURSES, {
    fetchPolicy: "cache-and-network",
  }) as any;

  const [paidCourses, setPaidCourses] = useState<number[]>([]);

   // 🔹 Extract paid course IDs once enrolledData is loaded
  useEffect(() => {
      if (enrolledData?.getUserEnrolledCourses) {
        const ids = enrolledData?.getUserEnrolledCourses.map(
          (course: any) => course.id
        );
        setPaidCourses(ids);
      }
    }, [enrolledData]);


  const [searchTerm, setSearchTerm] = useState("");
  const [paid, setPaid] = useState(true);

  const filteredCourses = useMemo(() => {
    let List: any = data?.getCourses || [];
    if (searchTerm.trim() !== "") {
      List = List.filter((c: any) =>
        c.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    return List;
  }, [searchTerm, data]);

  const courses = coursesData?.getCourses || [];


  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#387467] text-white px-6 py-8  rounded-lg  flex flex-col md:flex-row justify-between">
        <h1 className="text-3xl font-bold">Certification Courses</h1>
      </header>

      <div className="px-6 py-6 max-w-7xl mx-auto">
        {/* Filters & Search */}
        <div className="flex flex-col md:flex-row justify-end items-center mb-6 gap-4">

          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder="Search my courses"
              className="w-full border rounded-lg px-4 py-2"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search
              className="absolute right-3 top-2.5 text-gray-500"
              size={20}
            />
          </div>
        </div>

        {enrolledLoading || coursesLoading ? (
          <div className="flex items-center justify-center min-h-[300px] w-full">
            <CenteredLoader/>
          </div>
        ) : filteredCourses.length === 0 ? (
          <EmptyContainer
            title={empty_details.title}
            description={empty_details.description}
          />
        ) : (
          // <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses?.map((course, key) => {
              const paid = paidCourses?.includes(course?.id);
              return (
                <CourseItem key={key} courseListing={course} paid={paid}  />
              )}
            )}
          </div>
        )}

      </div>

    </div>
  );
}



