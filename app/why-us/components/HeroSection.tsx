"use client";
import Image from "next/image";
import { useRef } from "react";
import { ChevronDown } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

const HeroSection = () => {
  const targetRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["100px", "0px"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const arrowOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  const scrollToContent = () => {
    if (targetRef.current) {
      window.scrollTo({
        top: targetRef.current.offsetHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      ref={targetRef}
      className="relative w-full h-[150vh] overflow-hidden"
    >
      {/* Pinning wrapper */}
      <div className="sticky top-0 w-full h-screen">
        {/* Background image */}
        <motion.div
          style={{ y: imageY }}
          className="absolute inset-0 z-0 h-full"
        >
          <Image
            src="/assets/images/why-us-hero.webp"
            alt="Hero Image"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Text content */}
        <motion.div
          style={{ y: textY, opacity: textOpacity }}
          className="relative z-10 flex items-center justify-center h-[150vh] top-40 px-4 text-center bg-black"
        >
          <div className="w-[35%] text-white section_space">
            <h6 className="text_eyebrow mb-8">Why us?</h6>
            <h2 className="mb-8">
              <strong className="font-semibold">Expect YES</strong> more than no
            </h2>
            <p>
              Turn your B2B marketing challenges into our B2B marketing
              challenges, and draw on more than four decades of full service
              agency expertise.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
