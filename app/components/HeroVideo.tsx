"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const HeroVideo = () => {
  const { scrollY } = useScroll();

  // Smooth width change between 70% → 100%
  const width = useTransform(scrollY, [0, 500], ["70%", "100%"]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.9]);

  return (
    <section className="relative h-auto flex items-center justify-center bg-black overflow-hidden">
      <motion.div
        style={{
          width,
          opacity,
        }}
        className="mx-auto overflow-hidden rounded-2xl"
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

export default HeroVideo;
