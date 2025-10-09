"use client";
import React from "react";
import SingleBrand from "./SingleBrand";
import brandData from "./brandData";
import { motion } from "framer-motion";


const Brands = () => {
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
            {/* Duplicate the list to create a seamless infinite scroll */}
            {[...brandData, ...brandData].map((brand, key) => (
              <div key={key} className="flex-shrink-0 w-auto">
                <SingleBrand brand={brand} />
              </div>
            ))}
          </motion.div>
        </div>
      </section>


      {/*<section className="border border-x-0 border-y-stroke bg-alabaster py-3 dark:border-y-strokedark dark:bg-black">*/}
      {/*  <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0 ">*/}
      {/*    <div*/}
      {/*      className="lg:mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8 sm:gap-7.5 lg:gap-12.5 xl:gap-16">*/}
      {/*      {brandData.map((brand, key) => (*/}
      {/*        <SingleBrand brand={brand} key={key} />*/}
      {/*      ))}*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</section>*/}

      {/* <!-- ===== Clients End ===== --> */}
    </>
  );
};

export default Brands;
