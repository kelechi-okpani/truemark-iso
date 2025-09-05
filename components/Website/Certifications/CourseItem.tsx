"use client";
import Image from "next/image";
import { CourseList } from "@/types/blog";
import { useCourseStore } from "@/store/useCourseStore";
import React from "react";


const CourseItem = ({ courseListing }: { courseListing: CourseList }) => {
  const {image, name, price, id } = courseListing;

  const setSelectedCourse = useCourseStore((s) => s.setSelectedCourse);
   const {addToCart, } = useCourseStore()


  const handleClick = () => {
    setSelectedCourse(courseListing);
  };

  return (
    <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition cursor-pointer">
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

      <p className="text-lg text-gray-600 px-5 py-4">
        {new Intl.NumberFormat("en-NG", {
          style: "currency",
          currency: "NGN",
        }).format(Number(price ?? 0))}
      </p>

    </div>
  )

};

export default CourseItem;
