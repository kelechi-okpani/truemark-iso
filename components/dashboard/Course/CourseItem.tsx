"use client";
import Image from "next/image";
import { CourseList } from "@/types/blog";
import { useCourseStore } from "@/store/useCourseStore";
import { MoreVertical, Pencil, Trash2 } from "lucide-react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Modal } from "@/components/ui/modal";
import React from "react";
import { useModal } from "@/components/hooks/useModal";
import Update_Course from "@/components/dashboard/Course/course/course/UpdateCourse";
import Delete_Course from "@/components/dashboard/Course/course/course/DeleteCourse";


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
        <Link
          href={`/overview/course/${courseListing.id}`}
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

      <p className="text-lg text-gray-600 px-5 py-4">
        {new Intl.NumberFormat("en-NG", {
          style: "currency",
          currency: "NGN",
        }).format(Number(price ?? 0))}
      </p>


       <div className="flex flex-col gap-4 py-2 px-4">
        <button
          onClick={() => addToCart(courseListing)}
          className="bg-[#387467] text-white px-4 py-2 rounded-2xl hover:bg-gray-300"
        >
          Add to Cart
           {/*{isPaid ? "Already Enrolled" : "Add to Cart"}*/}
        </button>
      </div>


    </div>
  )

};

export default CourseItem;
