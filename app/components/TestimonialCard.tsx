"use client";
import { motion, useScroll } from "framer-motion";
import React, { useRef } from "react";

interface TestimonialCardProps {
  title: string;
  heading: string;
  text: string;
  image: string;
}

function TestimonialCard({
  title,
  heading,
  text,
  image,
}: TestimonialCardProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  // Keep the scroll tracking if you plan to add other animations later
  useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  return (
    <motion.div
      ref={ref}
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="sticky top-[130px] h-[80vh] section_space flex flex-col items-start px-[80px] my-[90px] justify-start text-white rounded-3xl transition-transform duration-500"
    >
      <div className="w-[30%]">
        <h6 className="eyebrow mb-8">{title}</h6>
        <h2>{heading}</h2>
        <p className="mt-2">{text}</p>
      </div>
    </motion.div>
  );
}

export default TestimonialCard;
