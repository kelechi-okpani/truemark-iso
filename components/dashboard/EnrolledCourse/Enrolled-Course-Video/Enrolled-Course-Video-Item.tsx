"use client";
import { CourseList } from "@/types/blog";
import HlsVideoPlayer from "@/components/utility/VideoPlayer";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { MoreVertical, Pencil, Trash2 } from "lucide-react";
import React from "react";
import { Modal } from "@/components/ui/modal";
import { useModal } from "@/components/hooks/useModal";
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';


const EnrolledCourseVideoItem = ({ courseListing, module }: { courseListing: CourseList, module:any }) => {
  const {image,  video, name, price, id, description } = courseListing;
  const { isOpen, openModal, closeModal,   isUpdate,  openUpdate, closeUpdate,  isDelete, openDelete, closeDelete  } = useModal();


  return (
    <div className=" overflow-hidden  transition cursor-pointer">
      <div className="w-full aspect-video bg-transparent relative">
        <video
          poster={module?.image}
          src={video}
          autoPlay={false}
          controls={true}
          width="100%"
          height="100%"
          style={{ objectFit: "contain" }}>
          Your browser does not support the video tag.
        </video>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="absolute top-2 right-2 bg-[#387467] p-1 rounded-full shadow text-white">
              <MoreVertical size={18} />
            </button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end" className="w-32 ">
            <DropdownMenuItem className="hover:bg-gray-300 "
                              onClick={openUpdate}
            >
              <Pencil size={16} className="mr-2 text-blue-500" /> edit
            </DropdownMenuItem>

            <DropdownMenuItem className="hover:bg-red-100 mt-3"
                              onClick={openDelete}
            >
              <Trash2 size={16} className="mr-2 text-red-500" /> delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="p-4 shadow-sm hover:shadow-md border">
        <p className="font-bold capitalize ">{name}</p>
        <span className=" text-xs">{description}</span>
        {/*<span className="font-semibold line-clamp-2">{description}</span>*/}
      </div>

    </div>)

};

export default EnrolledCourseVideoItem;
