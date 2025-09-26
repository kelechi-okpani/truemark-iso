"use client";
import Image from "next/image";
import { CourseList } from "@/types/blog";
import { useCourseStore } from "@/store/useCourseStore";
import Link from "next/link";
import React from "react";


const EnrolledCourseItem = ({ courseListing, paid }: { courseListing: CourseList, paid: boolean }) => {
  const {image, name, price, id } = courseListing;

  const setSelectedCourse = useCourseStore((s) => s.setSelectedCourse);

  const handleClick = () => {
    setSelectedCourse(courseListing);
  };

   const paidUrl = `/overview/enrolled-course/${courseListing.id}`
   const url = `/overview/enrolled-course/${courseListing.id}`

  return (
    <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition cursor-pointer">
      <Link
        href={`/overview/enrolled-course/${courseListing.id}`}
        onClick={handleClick}
      >
      <div className="relative">
          <Image
            src={image}
            alt={name}
            className="w-full h-40 object-cover"
            width={500}
            height={160}
          />
      </div>
      <div className="p-4 flex justify-between">
        <h3 className="font-semibold ">{name}</h3>
      </div>
       <p className="text-lg text-gray-600 px-5 ">
        {new Intl.NumberFormat("en-NG", {
          style: "currency",
          currency: "NGN",
        }).format(Number(price ?? 0))}
      </p>
       <div className="flex flex-col gap-4 py-2 px-4">
        <button className="text-[#387467] px-4 py-2">
          View course
        </button>
      </div>

    </Link>
    </div>
  )

};

export default EnrolledCourseItem;
