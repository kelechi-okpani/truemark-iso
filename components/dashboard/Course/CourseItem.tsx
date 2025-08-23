"use client";
import Image from "next/image";
import { CourseList } from "@/types/blog";
import { useCourseStore } from "@/store/useCourseStore";
import { MoreVertical } from "lucide-react";
import Link from "next/link";

const CourseItem = ({ courseListing }: { courseListing: CourseList }) => {
  const { mainImage, mainVideo, title, metadata, price, _id } = courseListing;

  const { addToCart, addToWishlist, paidCourses } = useCourseStore();

  const isPaid = paidCourses.includes(_id);


  return (

        <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition cursor-pointer">
          <Link href={`/overview/course/${courseListing.slug}`}>
             <div className="relative">
        <Image
          src={mainImage}
          alt={title}
          className="w-full h-40 object-cover"
          width={400}
          height={160}
        />
        <button className="absolute top-2 right-2 bg-white p-1 rounded-full shadow">
          <MoreVertical size={18} />
        </button>
      </div>
          </Link>
      <div className="p-4">
        <h3 className="font-semibold line-clamp-2">{title}</h3>
        {metadata && (
          <p className="text-sm text-gray-600">{metadata}</p>
        )}
      </div>

      <p className="text-lg text-gray-600 px-5">
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
           {isPaid ? "Already Enrolled" : "Add to Cart"}
        </button>
        <button
          onClick={() => addToWishlist(courseListing)}
          className=" text-black px-4 py-2 rounded-2xl bg-gray-300"
        >
          Wishlist
        </button>
      </div>


    </div>
  )

};

export default CourseItem;
