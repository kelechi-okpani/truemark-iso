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


const CourseVideoItem = ({ courseListing, module }: { courseListing: CourseList, module:any }) => {
  const {image,  video, name, price, id, description } = courseListing;

  const { isOpen, openModal, closeModal,   isUpdate,  openUpdate, closeUpdate,  isDelete, openDelete, closeDelete  } = useModal();


  return (
        <div className=" overflow-hidden  transition cursor-pointer">
             <div className="w-full aspect-video bg-transparent relative">
              <HlsVideoPlayer
                poster={module?.image}
                src={video}
                autoPlay={false}
                controls={true}
                width="100%"
                height="100%"
                hlsConfig={{
                  maxLoadingDelay: 4,
                  minAutoBitrate: 0,
                  lowLatencyMode: true
                }}
              />
          </div>

            <div className="p-4 shadow-sm hover:shadow-md border">
              <p className="font-bold capitalize ">{name}</p>
              <span className=" text-xs">{description}</span>
              {/*<span className="font-semibold line-clamp-2">{description}</span>*/}
           </div>

    </div>
  )

};

export default CourseVideoItem;
