"use client";
import React from "react";
import SingleBrand from "./SingleBrand";
import brandData from "./brandData";
import { motion } from "framer-motion";
import Link from "next/link";
import SectionHeader from "@/components/Website/Common/SectionHeader";


const Brands = () => {

  const allSubmenuItems = brandData.flatMap((brand) => brand.submenu);

  return (
    <>
      {/* <!-- ===== Clients Start ===== --> */}

      <section
        className="border border-x-0 border-y-stroke bg-alabaster py-3 dark:border-y-strokedark dark:bg-black overflow-hidden">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0 pt-8">
          <motion.div
            className="flex gap-12 sm:gap-7.5 lg:gap-12.5 xl:gap-16"
            animate={{ x: ["0%", "-50%"] }} // moves halfway (looping)
            transition={{
              repeat: Infinity,
              duration: 20, // speed — smaller = faster
              ease: "linear",
            }}
          >
            {/*{[...brandData, ...brandData].map((brand, key) => (*/}
            {/*  <div key={key} className="flex-shrink-0 w-auto">*/}
            {/*    <SingleBrand brand={brand} />*/}
            {/*  </div>*/}
            {/*))}*/}

            {[...allSubmenuItems, ...allSubmenuItems].map((item, index) => (
              <div key={index} className="flex-shrink-0 w-auto">
                  {/*<SingleBrand brand={item} />*/}
                <Link
                  href={item?.path}
                  className="block px-4 rounded-md transition text-sm font-medium text-gray-700"
                >
                  <SectionHeader
                    headerInfo={{
                      title: `${item?.title}`
                    }}
                  />
                </Link>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Brands;
