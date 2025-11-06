"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type FadeInTextProps = {
  text: string;
  className?: string;
};

export default function FadeInText({ text, className }: FadeInTextProps) {
  const ref = useRef<HTMLParagraphElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 60%", "end 95%"],
  });

  const words = text.split(" ");

  return (
    <p ref={ref} className={`${className || ""} about_text`}>
      {words.map((word, i) => {
        const start = (words.length - 1 - i) / words.length;
        const end = Math.min(start + 1 / words.length, 1);
        const opacity = useTransform(scrollYProgress, [start, end], [1, 0.2]);

        return (
          <motion.span key={i} style={{ opacity }} className="word">
            {word}{" "}
          </motion.span>
        );
      })}
    </p>
  );
}
