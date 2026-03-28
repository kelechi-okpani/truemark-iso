'use client'
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import { CheckCircle, Globe, Shield } from "lucide-react";

const slides = [
  {
    id: 1,
    image: "/images/slide/Slide-1.jpg",
    headline: "BECOME AN ENDORSED TRAINING PARTNER",
    subHeadline: "Join a global network of accredited professionals. We provide the framework, you provide the expertise.",
    highlight: "ISO 9001 Training for",
    typedWords: ["Auditors", "Consultants", "Training Partners"],
    buttons: [
      { text: "Partner With Us", color: "bg-[#387467]", textColor: "text-white" },
      { text: "Contact Support", color: "bg-white/10", textColor: "text-white" },
    ],
  },
  {
    id: 2,
    image: "/images/slide/Slide-2.jpg",
    headline: "GET ISO CERTIFIED FROM ANYWHERE",
    subHeadline: "Scale your professional credibility with our internationally recognized online certification programs.",
    highlight: "Empowering",
    typedWords: ["Quality Experts", "Remote Learners", "Compliance Officers"],
    buttons: [
      { text: "Explore Courses", color: "bg-[#387467]", textColor: "text-white" },
      { text: "View Accreditations", color: "bg-white/10", textColor: "text-white" },
    ],
  },
];

export default function HeroSlider() {
  const settings = {
    dots: true, // Added dots for better navigation
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000, // Increased for readability
    fade: true, // Smoother transition for text-heavy slides
  };

  return (
    <div className="relative overflow-hidden">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id}>
            <div
              className="relative w-full flex items-center"
              style={{
                backgroundImage: `url(${slide.image})`,
                height: "93vh",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Darker Overlay for Text Contrast */}
              <div className="absolute inset-0 bg-black/50 z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="relative z-20 max-w-5xl px-6 md:px-16 lg:pl-[6rem]"
              >
                {/* Authority Badge */}
                <div className="flex items-center gap-2 mb-6">
                   <span className="bg-[#387467] text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
                     Global Standards
                   </span>
                   <div className="h-[1px] w-12 bg-white/30"></div>
                </div>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-6 uppercase tracking-tighter">
                  {slide.headline}
                </h1>

                <div className="flex flex-col mb-8">
                  <p className="text-lg md:text-xl text-gray-200 max-w-2xl font-medium leading-relaxed mb-4">
                    {slide.subHeadline}
                  </p>
                  
                  <div className="flex items-center gap-3">
                    <span className="text-white text-2xl md:text-3xl font-bold tracking-tight">
                        {slide.highlight}
                    </span>
                    <span className="text-[#387467] font-black bg-white px-3 py-1 rounded-lg">
                      <ReactTyped
                        strings={slide.typedWords}
                        style={{ fontSize: "28px" }}
                        typeSpeed={80}
                        backSpeed={50}
                        backDelay={2000}
                        loop
                      />
                    </span>
                  </div>
                </div>

                {/* Revived & Styled Buttons */}
                <div className="flex flex-wrap gap-4 mb-12">
                  {slide.buttons.map((btn, index) => (
                    <button
                      key={index}
                      className={`${btn.color} ${btn.textColor} px-8 py-4 rounded-xl font-black text-[11px] uppercase tracking-[0.2em] hover:scale-105 transition-all active:scale-95 border border-white/10 backdrop-blur-sm`}
                    >
                      {btn.text}
                    </button>
                  ))}
                </div>

                {/* Trust Indicators */}
                <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10 max-w-2xl">
                  <div className="flex items-center gap-3">
                    <Shield className="text-[#387467]" size={20} />
                    <span className="text-[10px] text-gray-300 font-bold uppercase tracking-wider">Accredited Certs</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="text-[#387467]" size={20} />
                    <span className="text-[10px] text-gray-300 font-bold uppercase tracking-wider">Worldwide Access</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="text-[#387467]" size={20} />
                    <span className="text-[10px] text-gray-300 font-bold uppercase tracking-wider">ISO Compliance</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}