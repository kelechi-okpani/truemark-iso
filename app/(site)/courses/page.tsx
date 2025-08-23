"use client"
import CertificationData from "@/components/Website/Certifications/CertificationData";
import CertificationItem from "@/components/Website/Certifications/CertificationItem";
import { Metadata } from "next";
import React, { useState } from "react";
import Course_Hero from "@/components/Website/Certifications/Course_Hero";




const CoursePage =  () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Quality, Health & Environment Mgt",
    "Info. Tech Mgt",
    "Cyber & Privacy",
    "Business Management",
    "MS Audit",
  ];

  const filteredCerts = CertificationData.filter((item) =>
    activeCategory === "All" ? true : item.category === activeCategory
  );

  return (
    <>
      <Course_Hero/>
      <section className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1280 px-4 md:px-8 xl:px-0">
          {/* Tabs */}
          <div className="mb-8 flex flex-wrap gap-4 w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-2 text-sm font-semibold rounded ${
                  activeCategory === cat
                    ? "bg-[#387467] text-white"
                    : "bg-blue-900 text-white hover:bg-[#387467]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-4 xl:gap-10">
            {filteredCerts.slice(0, 1).map((post, key) => (
              <CertificationItem key={key} courseListing={post} />
            ))}
          </div>
        </div>
      </section>

    </>
  );
};

export default CoursePage;
