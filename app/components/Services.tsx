// import React from "react";
// import ServiceCard from "./ServiceCard";

// const Services = () => {
//   const servicesData = [
//     {
//       title: "Technology",
//       description:
//         "Global and regional. Public and private. Enterprise and start-up. Our digital team has built and integrated sites, systems and apps of all shapes, sizes and functionalities.",
//       tags: [
//         "Cloud services",
//         "Web development",
//         "QA support and training",
//         "Systems Architecture",
//         "Technical consulting",
//       ],
//     },
//     // {
//     //   title: "Creative",
//     //   description: "We produce results-driven creative that informs, inspires and engages. From copy and visual identity to video, motion graphics and digital design.",
//     //   tags: [
//     //     "Branding and Identity",
//     //     "Copywriting",
//     //     "Digital Design",
//     //     "Print Design",
//     //     "UX and UI",
//     //     "Video and Animation"
//     //   ]
//     // },
//     // {
//     //   title: "Strategy",
//     //   description: "To ensure the best possible response and returns for your business, our strategy, analytics and demand generation teams work across every relevant stage of a project.",
//     //   tags: [
//     //     "ABM (Account-Based Marketing)",
//     //     "Brand Strategy",
//     //     "SEO / SEM",
//     //     "Campaign Strategy and Planning",
//     //     "Conversion Rate Optimisation",
//     //     "Reporting and Data"
//     //   ]
//     // }
//   ];

//   return (
//     <section className="services_section section_space h-[100vh] relative">
//       <div className="container mx-auto flex justify-start items-center h-full">
//         {servicesData.map((service, index) => (
//           <ServiceCard
//             key={index}
//             title={service.title}
//             description={service.description}
//             tags={service.tags}
//           />
//         ))}
//       </div>
//       {/* slider btn is here */}
//       <div className="absolute z-10 right-10 bottom-[50%]">
//         <div className="h-3 w-3 bg-white rounded-2xl mb-2 cursor-pointer"></div>
//         <div className="h-3 w-3 bg-white rounded-2xl mb-2 cursor-pointer"></div>
//         <div className="h-12 w-3 bg-white rounded-2xl cursor-pointer"></div>
//       </div>
//     </section>
//   );
// };

// export default Services;

"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ServiceCard from "./ServiceCard";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const bgRef = useRef<HTMLImageElement | null>(null);
  const isAnimating = useRef(false);
  const totalSlides = 3;
  const triggerRef = useRef<ScrollTrigger | null>(null);

  const servicesData = [
    {
      title: "Technology",
      description:
        "Global and regional. Public and private. Enterprise and start-up. Our digital team has built and integrated sites, systems and apps of all shapes, sizes and functionalities.",
      tags: [
        "Cloud services",
        "Web development",
        "QA support",
        "Systems Architecture",
      ],
      bg: "/assets/images/hero-section.webp",
    },
    {
      title: "Creative",
      description:
        "We produce results-driven creative that informs, inspires and engages. From copy and visual identity to video, motion graphics and digital design.",
      tags: ["Branding", "Copywriting", "UI/UX", "Animation"],
      bg: "/assets/images/service_2.webp",
    },
    {
      title: "Strategy",
      description:
        "To ensure the best possible response and returns for your business, our strategy, analytics and demand generation teams work across every relevant stage of a project.",
      tags: ["ABM", "SEO", "Campaign Strategy", "Data Reporting"],
      bg: "/assets/images/service_3.webp",
    },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let wheelEnabled = false;

    const trigger = ScrollTrigger.create({
      trigger: section,
      start: "top top+=1", // ensures it pins immediately when section enters
      end: () => `+=${section.offsetHeight - 1}`, // stops exactly at the end
      pin: true,
      pinSpacing: true,
      scrub: false,
      anticipatePin: 1, // helps avoid flicker when pinning starts
      onEnter: () => (wheelEnabled = true),
      onEnterBack: () => (wheelEnabled = true),
      onLeave: () => (wheelEnabled = false),
      onLeaveBack: () => (wheelEnabled = false),
      markers: true,
    });

    triggerRef.current = trigger;

    const handleWheel = (e: WheelEvent) => {
      if (!wheelEnabled || isAnimating.current) return;

      // Only prevent scroll while inside the pinned area
      if (trigger.isActive) e.preventDefault();

      isAnimating.current = true;

      if (e.deltaY > 0 && activeIndex < totalSlides - 1) {
        goToSlide(activeIndex + 1);
      } else if (e.deltaY < 0 && activeIndex > 0) {
        goToSlide(activeIndex - 1);
      } else {
        isAnimating.current = false;

        // If user tries to scroll past the last slide, unpin and continue scroll
        if (e.deltaY > 0 && activeIndex === totalSlides - 1) {
          trigger.disable(); // unpin
          ScrollTrigger.refresh();

          // Small delay then auto-scroll down a bit to next section
          setTimeout(() => {
            window.scrollTo({
              top: window.scrollY + window.innerHeight * 0.5,
              behavior: "smooth",
            });
          }, 100);
        }

        // If scrolling up from first slide, also unpin to go to previous section
        if (e.deltaY < 0 && activeIndex === 0) {
          trigger.disable();
          ScrollTrigger.refresh();
          setTimeout(() => {
            window.scrollTo({
              top: window.scrollY - window.innerHeight * 0.5,
              behavior: "smooth",
            });
          }, 100);
        }
      }
    };

    const goToSlide = (index: number) => {
      const tl = gsap.timeline({
        onComplete: () => (isAnimating.current = false),
      });

      tl.to(".bg-img", { opacity: 0, duration: 0.4 });
      tl.to(".card-content", { opacity: 0, y: 30, duration: 0.3 }, "<");

      tl.add(() => {
        if (bgRef.current) bgRef.current.src = servicesData[index].bg;
        setActiveIndex(index);
      });

      tl.to(".bg-img", { opacity: 1, duration: 0.6 });
      tl.to(".card-content", { opacity: 1, y: 0, duration: 0.4 }, "<");
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      trigger.kill();
    };
  }, [activeIndex]);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden text-white"
      style={{ position: "relative", zIndex: 10 }}
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          ref={bgRef}
          src={servicesData[activeIndex].bg}
          alt=""
          className="bg-img absolute inset-0 h-full w-full object-cover opacity-1 transition-opacity duration-500"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-between h-full px-20">
        <div className="card-content w-[40%]">
          <ServiceCard
            title={servicesData[activeIndex].title}
            description={servicesData[activeIndex].description}
            tags={servicesData[activeIndex].tags}
          />
        </div>

        <div className="flex flex-col gap-3 items-center">
          {servicesData.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`transition-all duration-300 ${
                activeIndex === i
                  ? "h-12 w-3 rounded-2xl bg-white"
                  : "h-3 w-3 rounded-full bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
