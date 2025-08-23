"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { CourseList } from "@/types/blog";


const CertificationItem = ({ courseListing }: { courseListing: CourseList }) => {
  const { mainImage, title, metadata } = courseListing;

  return (
    <main>

      <motion.div
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
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        className="animate_top rounded-lg bg-white p-4  shadow-solid-8 dark:bg-blacksection"
      >
        <Link href={`/courses/${courseListing.slug}`} className="relative block aspect-368/239">
          <Image src={mainImage} alt={title} fill />
        </Link>

        <div className="px-4">
          <h3 className="mb-3 mt-7.5 line-clamp-2 inline-block text-lg font-medium text-black duration-300 hover:text-primary dark:text-white dark:hover:text-primary xl:text-itemtitle2">
            {/*  /!*{`${title.slice(0, 40)}...`}*!/*/}
            <Link href={`/courses/${courseListing.slug}`}>
              {title}
            </Link>
          </h3>
          <p className="line-clamp-3">{metadata}</p>
        </div>
      </motion.div>
    </main>
  );
};

export default CertificationItem;
