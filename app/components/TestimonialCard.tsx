"use client";
import { motion, useScroll } from "framer-motion";
import React, { useRef } from "react";

interface TestimonialCardProps {
  title: string;
  heading: string;
  text: string;
  image: string;
  index: number;
}

function TestimonialCard({
  title,
  heading,
  text,
  image,
  index,
}: TestimonialCardProps) {
  const ref = useRef<HTMLDivElement | null>(null);

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
      className={`sticky top-[130px] h-[80vh] flex flex-col items-start justify-start px-20 section_space text-white rounded-3xl transition-transform duration-500 ${
        index === 0 ? "mt-0" : "mt-[1vh]"
      }`}
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
