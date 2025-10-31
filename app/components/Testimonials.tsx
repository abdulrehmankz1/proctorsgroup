"use client";
import React from "react";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  const testimonials = [
    {
      title: "who we are",
      heading: "Born in Bristol, built on talent",
      text: "Established in 1979, P+S is one of the UK’s longest-established full-service marketing agencies. And we’re still growing thanks to our world-class team.",
      image: "/assets/images/service_2.webp",
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
    <section className="services_section section_space bg-white">
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
    </section>
  );
};

export default Testimonials;
