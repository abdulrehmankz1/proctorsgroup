"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { MoveRight } from "lucide-react";
import React, { useRef } from "react";
import TestimonialCard from "./TestimonialCard";

const ClientsTestimonials = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 60%", "end 95%"],
  });

  const text = `"The work has surpassed expectations and brought flair and feeling to our brand. Much more than a provider, going beyond a business partner to offer invested, committed and inspired help."`;
  const words = text.split(" ");

  return (
    <section ref={ref} className="about_section section_space">
      <div className="container mx-auto">
        <h6 className="eyebrow_dark mb-8">client testimonials</h6>

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

export default ClientsTestimonials;
