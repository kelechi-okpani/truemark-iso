"use client"
import React, { ReactNode } from "react";
import SideBar from "@/components/Layout/main/sidebar";
import Header from "@/components/Layout/main/header";

export default function layout({ children }: { children: ReactNode }) {
  return (

    <div className="flex w-full h-screen">
      {/* Sidebar fixed full height */}
      <SideBar />

      {/* Main content area */}
      <div className="flex-grow flex flex-col h-screen overflow-hidden">
        {/* Sticky header at the top */}
        <div className="shrink-0">
          <Header />
        </div>

        {/* Scrollable content below header */}
        <div className="px-8 pb-10 flex-grow mt-5 overflow-auto ">
          {children}
        </div>
      </div>
    </div>


    // <div className="flex w-full h-full">
    //   <SideBar />
    //   {/*<div className="flex-grow h-screen flex flex-col overflow-auto relative gap-6">*/}
    //   <div className="flex-grow w-full h-screen flex flex-col relative">
    //   <div className="flex-grow  flex flex-col relative">
    //     {/*<div className="sticky top-0 z-20 shadow">*/}
    //       <Header />
    //     </div>
    //
    //     <div className="px-6 pb-10 flex-grow mt-5 overflow-auto">{children}</div>
    //     {/*<div className="px-6 pb-10 flex-grow mt-5 ">{children}</div>*/}
    //   </div>
    //
    // </div>
  );
}
