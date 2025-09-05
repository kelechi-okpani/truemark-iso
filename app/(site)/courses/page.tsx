"use client"
import React, { useState } from "react";
import Course_Hero from "@/components/Website/Certifications/Course_Hero";
import CourseListing from "@/components/Website/Certifications/CourseListing";




const CoursePage =  () => {
  const [activeCategory, setActiveCategory] = useState("All");



  return (
    <>
      <Course_Hero/>
      <section className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1280 px-4 md:px-8 xl:px-0">
        <CourseListing/>
        </div>
      </section>

    </>
  );
};

export default CoursePage;
