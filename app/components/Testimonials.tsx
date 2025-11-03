"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isInViewState, setIsInViewState] = useState(false);

  const isInView = useInView(sectionRef, {
    amount: 0.3,
    once: false,
  });

  useEffect(() => {
    const checkInitialView = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;
      const isVisible =
        rect.top < windowHeight * 0.7 && rect.bottom > windowHeight * 0.3;
      setIsInViewState(isVisible);
    };

    checkInitialView();

    const handleScroll = () => checkInitialView();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsInViewState(isInView);
  }, [isInView]);

  const testimonials = [
    {
      title: "who we are",
      heading: "Born in Bristol, built on talent",
      text: "Established in 1979, P+S is one of the UK’s longest-established full-service marketing agencies. And we’re still growing thanks to our world-class team.",
      image: "/assets/images/hero-section.webp",
    },
    {
      title: "our values",
      heading: "Built on creativity, driven by results",
      text: "Our culture blends innovation and strategy. We turn ideas into measurable outcomes for our clients.",
      image: "/assets/images/service_2.webp",
    },
    {
      title: "our people",
      heading: "A team of thinkers and makers",
      text: "We hire people who care deeply about their craft and about the impact their work creates.",
      image: "/assets/images/service_2.webp",
    },
    {
      title: "our story",
      heading: "Growing with our clients",
      text: "Our success comes from long-term partnerships. Many clients have been with us for decades.",
      image: "/assets/images/service_2.webp",
    },
  ];

  return (
    <motion.section
      ref={sectionRef}
      animate={{
        backgroundColor: isInViewState ? "#0a0a0a" : "#f8f8f8",
      }}
      transition={{
        duration: 1.2, // slower fade
        ease: [0.4, 0, 0.2, 1], // smooth easing curve
      }}
      className="services_section section_space"
    >
      <div className="relative container mx-auto">
        {testimonials.map((item, index) => (
          <TestimonialCard
            key={index}
            title={item.title}
            heading={item.heading}
            text={item.text}
            image={item.image}
          />
        ))}
      </div>
    </motion.section>
  );
};

export default Testimonials;
