"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { MoveRight } from "lucide-react";
import React, { useRef } from "react";

const About = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 60%", "end 95%"],
  });

  const text = `Since 1979, we’ve made our name by accepting marketing challenges other agencies might shy away from and refusing to accept the concept of a comfort zone.`;
  const words = text.split(" ");

  return (
    <section ref={ref} className="about_section section_space">
      <div className="container mx-auto">
        <p className="about_text">
          {words.map((word, i) => {
            const start = i / words.length;
            const end = Math.min(start + 1 / words.length, 1);
            const opacity = useTransform(
              scrollYProgress,
              [start, end],
              [0.2, 1]
            );

            return (
              <motion.span key={i} style={{ opacity }} className="word">
                {word}{" "}
              </motion.span>
            );
          })}
        </p>
      </div>
    </section>
  );
};

export default About;
