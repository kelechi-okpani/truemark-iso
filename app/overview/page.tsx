"use client";
import React, { useState, useMemo } from "react";
import Analytics from "@/components/dashboard/Overview";
import { useQuery } from "@apollo/client/react";
import { GET_USER_ENROLLED_COURSES } from "@/lib/Query/queries";
import { useCourseStore } from "@/store/useCourseStore";



export default function OverviewPage() {
  const { wishlist} = useCourseStore();

  const { data} = useQuery(GET_USER_ENROLLED_COURSES, {
    fetchPolicy: "cache-and-network",
  }) as any;


  return (
    <div className="min-h-screen bg-white">
      <header className="bg-[#387467] text-white px-6 py-8 rounded-md mb-5">
        <h1 className="text-3xl font-bold">Analytics Overview</h1>
      </header>
      <Analytics data={data} list={wishlist}/>
    </div>
  );
}


