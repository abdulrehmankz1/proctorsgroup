"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MoveRight } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 10%"], // control when animation starts & ends
  });

  const text =
    "P+S is one of the UK’s longest-established full is  full  service of marketing agencies, offering business-to-business marketing strategy, branding and technology.";

  const words = text.split(" ");

  return (
    <section ref={ref} className="about_section section_space">
      <div className="container mx-auto">
        <h6 className="eyebrow_dark mb-8">Our About</h6>

        <p className="about_text">
          {words.map((word, i) => {
            // each word reveals in sequence
            const start = i / words.length;
            const end = start + 0.1;
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

        <div>
          <a href="/" className="arow_link mt-12 black_pure_text">
            <span>Let's talk</span>
            <span className="icon">
              <MoveRight />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
