"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import {
  ConnectionSVG,
  GrowthSVG,
  PartnershipSVG,
  SomeSVG4,
  SomeSVG5,
} from "./OurValuesSVGs";
import { MoveRight } from "lucide-react";

const valuesData = [
  {
    title: "Partnership",
    description:
      "We partner with ambitious B2B and B2C organisations, globally.",
    SVG: PartnershipSVG,
  },
  {
    title: "Innovation",
    description:
      "We earn respect through our intelligence, innovation and understanding of our clients’ and customers’ journeys.",
    SVG: ConnectionSVG,
  },
  {
    title: "Leadership",
    description:
      "We lead, we do not follow. We are an independent business in thought, act and deed.",
    SVG: GrowthSVG,
  },
  {
    title: "Sustainability",
    description:
      "As a B Corp-certified agency, we are committed to being Carbon Net Zero by 2030 and will always champion good corporate, environmental and social practice.",
    SVG: SomeSVG4,
  },
  {
    title: "Community",
    description:
      "We recognise our impact on and role as part of our local and wider community, addressing social issues when necessary and embracing diversity.",
    SVG: SomeSVG5,
  },
];

const OurValues = () => {
  const [animationState, setAnimationState] = useState("default");
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setAnimationState("immediate");
    timeoutRef.current = setTimeout(
      () => setAnimationState("continuous"),
      1000
    );
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setAnimationState("default");
  };

  return (
    <section className="our_values section_space white_pure">
      <div className="container mx-auto">
        <h6 className="eyebrow_dark mb-8">Our values</h6>
        <h2 className="mb-8 black_pure_text">
          What we <strong className="font_bold">believe in</strong>
        </h2>

        <div className="flex gap-8 mt-12 items-start">
          <div className="w-[30%] pr-4">
            {valuesData.map((value, index) => {
              const SVGComponent = value.SVG;
              return (
                <div
                  key={index}
                  className={`our_value_card ${animationState}`}
                  style={{
                    paddingTop: index === 0 ? 0 : undefined,
                    borderBottom:
                      index === valuesData.length - 1 ? "none" : undefined,
                  }}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <SVGComponent className="value_svg" />
                  <h4 className="value_title">{value.title}</h4>
                  <p className="value_description">{value.description}</p>
                </div>
              );
            })}
            <div>
               <a href="/" className="arow_link mt-12 black_pure_text">
                <span>Explore our services</span>
                <span className="icon">
                  <MoveRight />
                </span>
              </a>
            </div>
          </div>

          <div className="w-[70%] sticky top-24 h-fit">
            <div className="h-[90vh]">
              <Image
                src="/assets/images/our-value.webp"
                alt="Our Values"
                width={800}
                height={500}
                className="w-full h-full object-cover rounded-3xl"
                draggable={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurValues;
