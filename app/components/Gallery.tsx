"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Gallery: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  // Track scroll progress of the gallery section
  const { scrollYProgress } = useScroll({
    target: ref,
    // default offsets are usually fine; you can tune with offset if needed
  });

  // noticeable movement values, tweak the numeric ranges as you like
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -140]); // left top
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 140]); // right top
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -180]); // center middle
  const y4 = useTransform(scrollYProgress, [0, 1], [0, 130]); // left bottom
  const y5 = useTransform(scrollYProgress, [0, 1], [0, -110]); // right bottom

  // helper class for images
  const imgClass = "w-[500px] rounded-xl object-cover shadow-lg";

  return (
    <section className="section_space">
      <div className="container mx-auto">
        {/* images container start */}
        <div ref={ref} className="relative h-[200vh] bg-[#0b0b0b] text-white">
          <div className="sticky top-1/3 left-[6%] z-20 max-w-lg">
            <h1 className="text-[3.2rem] font-light leading-tight">
              Bold. Brave. <span className="font-extrabold">Brilliant.</span>
            </h1>
            <p className="mt-3 text-lg opacity-80">
              We've got talent for days (decades, actually).
            </p>
          </div>

          <div className="absolute inset-0 my-[260px]">
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
        </div>
        {/* images container end */}
      </div>
    </section>
  );
};

export default Gallery;
