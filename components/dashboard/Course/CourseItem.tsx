"use client";
import Image from "next/image";
import { CourseList } from "@/types/blog";
import { useCourseStore } from "@/store/useCourseStore";
import Link from "next/link";
import React from "react";


const CourseItem = ({ courseListing, paid }: { courseListing: CourseList, paid:any }) => {
   const {image, name, price, id } = courseListing;
   const setSelectedCourse = useCourseStore((s) => s.setSelectedCourse);
   const {addToCart, } = useCourseStore()
   const handleClick = () => {setSelectedCourse(courseListing)};

  return (
    <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition cursor-pointer">
      <div className="relative">
        <Link
          href={`/overview/course/${courseListing?.id}`}
          onClick={handleClick}
        >
          <Image
            src={image}
            alt={name}
            className="w-full h-40 object-cover"
            width={500}
            height={160}
          />
        </Link>
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
         {paid ? (
             <button
               className="bg-[#387467] text-white px-4 py-2 rounded-lg"
             >
               ✅ Enrolled
             </button>
         ) : (
           <button
             onClick={() => addToCart(courseListing)}
             className="bg-[#387467] text-white px-4 py-2 rounded-lg"
           >
             Add to Cart
           </button>
         )}


       </div>


    </div>
  )

};

export default CourseItem;
