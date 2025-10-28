"use client";
import Image from "next/image";
import { CourseList } from "@/types/blog";
import { useCourseStore } from "@/store/useCourseStore";

import React from "react";
import toast from "react-hot-toast";


const CourseItem = ({ courseListing, paid }: { courseListing: CourseList, paid:any }) => {
   const {image, name, description, price, id } = courseListing;
   const setSelectedCourse = useCourseStore((s) => s.setSelectedCourse);
   const {addToCart, addToWishlist, wishlist, cart} = useCourseStore()

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

        <p className="text-lg text-gray-600 px-6 mt-2 py-2 ">
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
              // <div className="flex justify-between gap-4">
              //   <button className=" rounded-full"
              //           onClick={() => {
              //             addToWishlist(courseListing);
              //             toast.success("Course added to wishlist!", {
              //               style: {
              //                 background: "#387467",
              //                 color: "#fff",
              //                 padding: "0.5rem 1rem",
              //                 borderRadius: "0.5rem",
              //                 boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              //                 fontWeight: 500,
              //                 fontSize: "0.875rem"
              //               },
              //               position: "bottom-right",
              //               duration: 3000
              //             });
              //           }}>
              //     <svg
              //       xmlns="http://www.w3.org/2000/svg"
              //       fill="none"
              //       viewBox="0 0 24 24"
              //       strokeWidth="1.5"
              //       stroke="currentColor"
              //       className="w-5 h-5  text-gray-700 hover:text-red-500"
              //     >
              //       <path
              //         strokeLinecap="round"
              //         strokeLinejoin="round"
              //         d="M21 8.25c0-2.485-2.014-4.5-4.5-4.5S12 5.765 12 8.25c0-2.485-2.014-4.5-4.5-4.5S3 5.765 3 8.25c0 4.556 9 11.25 9 11.25s9-6.694 9-11.25z"
              //       />
              //     </svg>
              //   </button>
              //   <button
              //     onClick={() =>{ addToCart(courseListing)
              //       toast.success("Course added to cart!", {
              //         style: {
              //           background: "#387467",
              //           color: "#fff",
              //           padding: "0.5rem 1rem",
              //           borderRadius: "0.5rem",
              //           boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              //           fontWeight: 500,
              //           fontSize: "0.875rem"
              //         },
              //         position: "bottom-right",
              //         duration: 3000
              //       });
              //   }}
              //     className="bg-[#387467] text-sm text-white px-4 py-2 rounded-lg"
              //   >
              //     Add to Cart
              //   </button>
              // </div>
              <div className="flex justify-between gap-4">
                {/* Wishlist Button */}
                <button
                  className="rounded-full"
                  onClick={() => {
                    const existsInWishlist = wishlist.some(
                      (item: any) => item.id === courseListing.id
                    );

                    if (existsInWishlist) {
                      toast("Course already in wishlist!", {
                        style: {
                          background: "#fff",
                          color: "#000",
                          padding: "0.5rem 1rem",
                          borderRadius: "0.5rem",
                          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                          fontWeight: 500,
                          fontSize: "0.875rem",
                        },
                        position: "bottom-right",
                        duration: 2500,
                      });
                    } else {
                      addToWishlist(courseListing);
                      toast.success("Course added to wishlist!", {
                        style: {
                          background: "#387467",
                          color: "#fff",
                          padding: "0.5rem 1rem",
                          borderRadius: "0.5rem",
                          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                          fontWeight: 500,
                          fontSize: "0.875rem",
                        },
                        position: "bottom-right",
                        duration: 3000,
                      });
                    }
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5 text-gray-700 hover:text-red-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.014-4.5-4.5-4.5S12 5.765 12 8.25c0-2.485-2.014-4.5-4.5-4.5S3 5.765 3 8.25c0 4.556 9 11.25 9 11.25s9-6.694 9-11.25z"
                    />
                  </svg>
                </button>

                {/* Add to Cart Button */}
                <button
                  onClick={() => {
                    const existsInCart = cart.some(
                      (item: any) => item.id === courseListing.id
                    );

                    if (existsInCart) {
                      toast("Course already in cart!", {
                        style: {
                          background: "#fff",
                          color: "#000",
                          padding: "0.5rem 1rem",
                          borderRadius: "0.5rem",
                          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                          fontWeight: 500,
                          fontSize: "0.875rem",
                        },
                        position: "bottom-right",
                        duration: 2500,
                      });
                    } else {
                      addToCart(courseListing);
                      toast.success("Course added to cart!", {
                        style: {
                          background: "#387467",
                          color: "#fff",
                          padding: "0.5rem 1rem",
                          borderRadius: "0.5rem",
                          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                          fontWeight: 500,
                          fontSize: "0.875rem",
                        },
                        position: "bottom-right",
                        duration: 3000,
                      });
                    }
                  }}
                  className="bg-[#387467] text-sm text-white px-4 py-2 rounded-lg"
                >
                  Add to Cart
                </button>
              </div>

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
