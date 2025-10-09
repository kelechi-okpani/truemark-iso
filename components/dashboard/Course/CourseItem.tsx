"use client";
import Image from "next/image";
import { CourseList } from "@/types/blog";
import { useCourseStore } from "@/store/useCourseStore";

import React from "react";


const CourseItem = ({ courseListing, paid }: { courseListing: CourseList, paid:any }) => {
   const {image, name, description, price, id } = courseListing;
   const setSelectedCourse = useCourseStore((s) => s.setSelectedCourse);
   const {addToCart, } = useCourseStore()
   const handleClick = () => {setSelectedCourse(courseListing)};

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

      <div className="flex justify-between ">

        <p className="text-lg text-gray-600 px-4 py-2 ">
          {new Intl.NumberFormat("en-NG", {
            style: "currency",
            currency: "NGN",
          }).format(Number(price ?? 0))}
        </p>

        <div className="flex flex-col gap-4 py-2 px-4">
          {paid ? (
            <button
              className="bg-[#387467] text-white px-4 py-2  rounded-lg"
            >
              Enrolled
            </button>
          ) : (
            <button
              onClick={() => addToCart(courseListing)}
              className="bg-[#387467] text-sm text-white px-4 py-2 rounded-lg"
            >
              Add to Cart
            </button>
          )}


        </div>

      </div>

      <div className="p-4 flex justify-between items-start min-h-[200px] bg-white rounded-md">
        <h3 className="text-sm">{description}</h3>
      </div>

    </div>
  )

};

export default CourseItem;
