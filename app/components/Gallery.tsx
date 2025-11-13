"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Gallery = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const ref2 = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  // Track scroll for the entire gallery section
  const { scrollYProgress: sectionScroll } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"], // detects when the section enters or leaves viewport
  });

  // Track scroll for both inner containers
  const { scrollYProgress } = useScroll({ target: ref });
  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: ref2,
    offset: ["start center", "end end"],
  });

  // Parallax transforms for first container
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -140]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, 130]);
  const y5 = useTransform(scrollYProgress, [0, 1], [0, -110]);

  // Parallax transforms for second container
  const y1_2 = useTransform(scrollYProgress2, [0, 1], [0, -140]);
  const y2_2 = useTransform(scrollYProgress2, [0, 1], [0, 140]);
  const y3_2 = useTransform(scrollYProgress2, [0, 1], [0, -180]);
  const y4_2 = useTransform(scrollYProgress2, [0, 1], [0, 130]);
  const y5_2 = useTransform(scrollYProgress2, [0, 1], [0, -110]);

  // Heading opacity
  const headingOpacity1 = useTransform(scrollYProgress, [0, 0.9, 1], [1, 1, 0]);
  // Heading opacity for Careers section
  const headingOpacity2 = useTransform(
    scrollYProgress2,
    [0, 0.1, 0.9, 1],
    [0, 1, 1, 1]
  );

  // Smooth background color for Careers section
  const sectionBgColor = useTransform(
    scrollYProgress2,
    [0, 0.1, 0.9, 1],
    [
      "rgb(11, 11, 11)",
      "rgb(255, 255, 255)",
      "rgb(255, 255, 255)",
      "rgb(255, 255, 255)",
    ]
  );

  // Text color synchronized with background
  const container1TextColor = useTransform(
    scrollYProgress2,
    [0, 0.1],
    ["rgb(255, 255, 255)", "rgb(0, 0, 0)"]
  );

  const imgClass = "w-[500px] rounded-xl object-cover shadow-lg";

  return (
    <motion.section
      ref={sectionRef}
      className="section_space"
      style={{ backgroundColor: sectionBgColor as any }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <div className="container mx-auto">
        {/* First Section */}
        <motion.div
          ref={ref}
          className="relative h-[215vh]"
          style={{
            backgroundColor: sectionBgColor as any,
            color: container1TextColor as any,
          }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <motion.div
            style={{ opacity: headingOpacity1 as any }}
            className="sticky top-1/3 left-[6%] z-20 max-w-lg"
          >
            <h1 className="text-[3.2rem] font-light leading-tight">
              Bold. Brave. <span className="font-extrabold">Brilliant.</span>
            </h1>
            <p className="mt-3 text-lg opacity-80">
              We've got talent for days (decades, actually).
            </p>
          </motion.div>

          <div className="absolute inset-0 mt-[260px]">
            {/* Row 1 */}
            <div className="absolute top-[8%] left-0 right-0 px-8 flex justify-between items-start pointer-events-none">
              <motion.img
                style={{ y: y1 as any }}
                src="/assets/images/student-awards_Ceremony.webp"
                alt="img-1"
                className={imgClass}
              />
              <motion.img
                style={{ y: y2 as any }}
                src="/assets/images/student-awards_Ceremony.webp"
                alt="img-2"
                className={imgClass}
              />
            </div>

            {/* Row 2 */}
            <div className="absolute top-[43%] left-0 right-0 flex justify-center items-center pointer-events-none">
              <motion.img
                style={{ y: y3 as any }}
                src="/assets/images/student-awards_Ceremony.webp"
                alt="img-3"
                className="w-[500px] rounded-xl object-cover shadow-lg"
              />
            </div>

            {/* Row 3 */}
            <div className="absolute bottom-[8%] left-0 right-0 px-8 flex justify-between items-end pointer-events-none">
              <motion.img
                style={{ y: y4 as any }}
                src="/assets/images/student-awards_Ceremony.webp"
                alt="img-4"
                className={imgClass}
              />
              <motion.img
                style={{ y: y5 as any }}
                src="/assets/images/student-awards_Ceremony.webp"
                alt="img-5"
                className={imgClass}
              />
            </div>
          </div>
        </motion.div>

        {/* Careers Section */}
        <motion.div
          ref={ref2}
          className="relative h-[230vh] mt-20"
          style={{
            backgroundColor: sectionBgColor as any,
            color: container1TextColor as any,
          }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <motion.div
            style={{ opacity: headingOpacity2 as any }}
            className="sticky top-1/3 left-[6%] z-20 max-w-lg"
          >
            <h1 className="text-[3.2rem] font-light leading-tight">
              <strong>Careers</strong> at P+S
            </h1>
            <p className="mt-3 text-lg opacity-80">
              We've got talent for days (decades, actually).
            </p>
          </motion.div>

          <div className="absolute inset-0 my-[260px]">
            {/* Row 1 */}
            <div className="absolute top-[8%] left-0 right-0 px-8 flex justify-between items-start pointer-events-none">
              <motion.img
                style={{ y: y1_2 as any }}
                src="/assets/images/student-awards_Ceremony.webp"
                alt="img-1"
                className={imgClass}
              />
              <motion.img
                style={{ y: y2_2 as any }}
                src="/assets/images/student-awards_Ceremony.webp"
                alt="img-2"
                className={imgClass}
              />
            </div>

            {/* Row 2 */}
            <div className="absolute top-[43%] left-0 right-0 flex justify-center items-center pointer-events-none">
              <motion.img
                style={{ y: y3_2 as any }}
                src="/assets/images/student-awards_Ceremony.webp"
                alt="img-3"
                className="w-[500px] rounded-xl object-cover shadow-lg"
              />
            </div>

            {/* Row 3 */}
            <div className="absolute bottom-[8%] left-0 right-0 px-8 flex justify-between items-end pointer-events-none">
              <motion.img
                style={{ y: y4_2 as any }}
                src="/assets/images/student-awards_Ceremony.webp"
                alt="img-4"
                className={imgClass}
              />
              <motion.img
                style={{ y: y5_2 as any }}
                src="/assets/images/student-awards_Ceremony.webp"
                alt="img-5"
                className={imgClass}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Gallery;
