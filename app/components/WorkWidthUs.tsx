"use client";
import React, { useEffect, useRef } from "react";
import { MoveRight } from "lucide-react";
import WorkCard from "./WorkCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WorkWidthUs = () => {
  const pinSectionRef = useRef<HTMLDivElement | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const pinSection = pinSectionRef.current;
    const scrollContainer = scrollContainerRef.current;
    if (!pinSection || !scrollContainer) return;

    const scrollWidth = scrollContainer.scrollWidth;
    const viewportWidth = window.innerWidth;
    const scrollDistance = scrollWidth - viewportWidth + 150;

    // Only pin the cards section now
    gsap.to(scrollContainer, {
      x: -scrollDistance,
      ease: "none",
      scrollTrigger: {
        trigger: pinSection,
        start: "top top",
        end: () => `+=${scrollWidth}`,
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section className="relative overflow-hidden">
      {/* Normal static intro section */}
      <div className="container mx-auto mb-20 pt-20">
        <h6 className="eyebrow mb-4">work with us</h6>
        <h2>
          Why say <strong className="px-4">YES</strong> to P+S?
        </h2>

        <div className="mt-8 flex items-center justify-between gap-8">
          <p className="Nort w-[60%] max-w-3xl">
            Whatever your challenge, we combine the best of world-class B2B
            marketing strategy, creative and technology for maximum business
            impact.
          </p>
          <a
            href="/"
            className="arow_link flex items-center gap-2 whitespace-nowrap"
          >
            <span>See all case studies</span>
            <MoveRight />
          </a>
        </div>
      </div>

      {/* Only this part gets pinned during scroll */}
      <div
        ref={pinSectionRef}
        className="relative h-screen overflow-hidden flex items-center"
      >
        <div
          ref={scrollContainerRef}
          className="flex flex-row gap-8 flex-nowrap pl-[5vw] pb-20"
        >
          <WorkCard
            videoSrc="/assets/images/work_1.mp4"
            title="Panasonic North America"
            description="A sustainability story reimagined for a new generation"
            className="flex-none"
          />
          <WorkCard
            videoSrc="/assets/images/work_2.mp4"
            title="Tesla Innovation Lab"
            description="Exploring the next era of autonomous design"
            className="flex-none"
          />
          <WorkCard
            videoSrc="/assets/images/work_3.mp4"
            title="Nike Motion Project"
            description="A kinetic narrative showcasing creative freedom"
            className="flex-none"
          />
        </div>
      </div>

      {/* Continue normal vertical scroll after cards */}
      <div className="container mx-auto py-32">
        <h3 className="text-3xl font-semibold mb-6">Next Section Title</h3>
        <p className="max-w-2xl text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          suscipit, eros at imperdiet vehicula, neque justo suscipit sapien, nec
          bibendum orci urna id libero.
        </p>
      </div>
    </section>
  );
};

export default WorkWidthUs;
