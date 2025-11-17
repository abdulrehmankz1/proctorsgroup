"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const WhyVideo: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  // Track scroll inside this section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    // This offset ensures the 0-1 progress covers the entire time the element is on screen.
    offset: ["start end", "end start"],
  });

  // **********************************************
  // **CORRECTION HERE: Map scroll progress [0.5, 0.7] to width [70, 100]**
  // **********************************************
  // - 0.5 (50% scroll) → 70% width
  // - 0.7 (70% scroll) → 100% width
  const rawWidth = useTransform(scrollYProgress, [0.5, 0.7], [70, 100]);

  // Smooth animation
  const smoothWidth = useSpring(rawWidth, { stiffness: 100, damping: 30 });

  // Convert numeric MotionValue to string with %
  const widthPercent = useTransform(smoothWidth, (w) => `${w}%`);

  // Opacity (Optional: fade in/out the element)
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  return (
    <section
      ref={sectionRef}
      // Increased height to ensure a smoother, visible scroll transition.
      // The video will now zoom over 20% of this 200vh section (i.e., 40vh of scroll).
      className="relative h-[100vh] flex items-center justify-center bg-black overflow-hidden"
    >
      <motion.div
        style={{
          width: widthPercent,
          opacity,
        }}
        // 'sticky top-0' keeps the video element in place while the user scrolls.
        className="mx-auto overflow-hidden rounded-2xl w-[70vw] h-[70vh] sticky top-0 flex items-center justify-center"
      >
        <video
          className="w-full h-full object-cover rounded-2xl"
          src="/assets/images/B2B-Marketing-Agency-Proctor-Stevenson.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </motion.div>
    </section>
  );
};

export default WhyVideo;
