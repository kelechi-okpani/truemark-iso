'use client'
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";



const slides = [
  {
    id: 1,
    image: "/images/slide/Slide-1.jpg",
    headline: "BECOME AN ENDORSED TRAINING PARTNER",
    highlight: "ISO 9001 Training",
    typedWords: ["Auditors", "Consultants", "Training Partners"],
    buttons: [
      { text: "Get Started", color: "bg-red-600", textColor: "text-white" },
      { text: "Contact Us", color: "bg-blue-900", textColor: "text-white" },
    ],
  },
  {
    id: 2,

    image: "/images/slide/Slide-2.jpg",
    headline: "GET ISO CERTIFIED FROM ANYWHERE",
    highlight: "ISO Online Certification",
    typedWords: ["Quality Experts", "Remote Learners", "Compliance Officers"],
    buttons: [
      { text: "Explore Courses", color: "bg-red-600", textColor: "text-white" },
      { text: "Become a Partner", color: "bg-blue-900", textColor: "text-white" },
    ],
  },

  // {
  //   id: 3,
  //   image: "/images/slide/Slide-4.jpg",
  //   headline: "JOIN OUR GLOBAL LEARNING COMMUNITY",
  //   highlight: "Accredited ISO Courses",
  //   typedWords: ["Global Students", "Certified Professionals", "ISO Enthusiasts"],
  //   buttons: [
  //     { text: "Join Now", color: "bg-red-600", textColor: "text-white" },
  //     { text: "See Testimonials", color: "bg-blue-900", textColor: "text-white" },
  //   ],
  // },
  // {
  //   id: 4,
  //   image: "/images/Home/bg1.webp",
  //   headline: "BUILD YOUR CAREER WITH CERTIFIED COURSES",
  //   highlight: "Career-Focused ISO Programs",
  //   typedWords: ["Auditors", "Lead Implementers", "Certification Coaches"],
  //   buttons: [
  //     { text: "Start Learning", color: "bg-red-600", textColor: "text-white" },
  //     { text: "Browse Programs", color: "bg-blue-900", textColor: "text-white" },
  //   ],
  // },
];


export default function HeroSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div >

      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id}>
            <div
              style={{
                backgroundImage: `url(${slide.image})`,
                height: "93vh",
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                alignItems: "left",
                justifyContent: "left",
                textAlign: "left",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-l from-[#38546a]/30 to-transparent z-10" />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-20 max-w-4xl px-4 text-white pl-[4rem] pt-[12rem]"

              >
                <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-8">
                  {slide.headline}
                </h1>
                <div className="text-lg md:text-xl font-medium mb-8">
                  <span className="text-[#ffff] text-3xl ">{slide.highlight} </span>
                  <span className="text-[#ffff]  font-semibold ">
                  {/*<span className="text-[#00FFAA] font-semibold ">*/}
                    <ReactTyped
                      strings={slide.typedWords}
                      style={{ fontSize: "30px" }}
                      typeSpeed={100}
                      backSpeed={100}
                      backDelay={2500}
                      loop
                    />
                  </span>
                </div>
                {/*<div className="flex justify-left gap-4 flex-wrap">*/}
                {/*  {slide.buttons.map((btn, index) => (*/}
                {/*    <button*/}
                {/*      key={index}*/}
                {/*      className={`${btn.color} ${btn.textColor} px-6 py-3 rounded-md font-semibold hover:opacity-90 transition`}*/}
                {/*    >*/}
                {/*      {btn.text}*/}
                {/*    </button>*/}
                {/*  ))}*/}
                {/*</div>*/}

              </motion.div>
            </div>
          </div>
        ))}
      </Slider>
    </div>

  );
}
