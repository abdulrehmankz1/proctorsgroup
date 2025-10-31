"use client";
import { motion, useScroll, useTransform } from "framer-motion";
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

  // Track scroll position relative to each card
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Scale the width slightly when another card overlaps
  const scale = useTransform(scrollYProgress, [0, 0.4, 1], [1, 0.9, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ scale }}
      className={`sticky top-[130px] h-[80vh] section_space bg-[url(${image})] bg-cover bg-center 
      flex flex-col items-start px-[80px] my-[90px] justify-start text-white rounded-3xl transition-transform duration-500`}
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
