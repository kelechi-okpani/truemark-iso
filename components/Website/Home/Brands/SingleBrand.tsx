import React, { useRef, useEffect } from "react";
import Image from "next/image";
// import { Brand } from "@/types/brand";
import { motion } from "framer-motion";
import SectionHeader from "@/components/Website/Common/SectionHeader";
import Link from "next/link";

const SingleBrand = ({ brand }: { brand: any }) => {

  const { title, path, name, imageLight, id } = brand;

  return (
    <>
      <motion.a
        variants={{
          hidden: {
            opacity: 0,
            y: -20,
          },

          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, delay: id }}
        viewport={{ once: true }}
        // href={path}
        className="animate_top mx-w-full  relative block  w-full sm:text-xs "
        // className="animate_top mx-w-full relative block h-10 w-[98px]"
      >
        <Link
          href={path}
          className="block px-4 rounded-md transition text-sm font-medium text-gray-700"
        >
        <SectionHeader
          headerInfo={{
            title: `${title}`
          }}
        />
        </Link>
      </motion.a>
    </>
  );
};

export default SingleBrand;
