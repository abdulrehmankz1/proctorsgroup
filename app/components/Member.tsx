"use client";
import React, { useEffect, useRef } from "react";
import MemberCard from "./MemberCard";

export const members = [
  {
    name: "Zzor",
    role: "Bass",
    excerpt: "Zzor es el bajista...",
    img: "https://www.ats.hugo-salazar.com/wp-content/uploads/2023/04/zzor.jpeg",
  },
  {
    name: "Amón Lopez",
    role: "Vocals",
    excerpt: "Amon Lopez es la voz...",
    img: "https://www.ats.hugo-salazar.com/wp-content/uploads/2023/04/pincho.jpeg",
  },
  {
    name: "Marisa",
    role: "Vocals",
    excerpt: "Marisa es la voz femenina...",
    img: "https://www.ats.hugo-salazar.com/wp-content/uploads/2023/04/marisa.jpeg",
  },
  {
    name: "Vicente",
    role: "Guitars",
    excerpt: "Vicente es el guitarrista...",
    img: "https://www.ats.hugo-salazar.com/wp-content/uploads/2023/04/vicente.jpeg",
  },
  {
    name: "Leoben Conoy",
    role: "Synths",
    excerpt: "Leoben Conoy es el teclista...",
    img: "https://www.ats.hugo-salazar.com/wp-content/uploads/2023/04/leoben.jpeg",
  },
];

const Member = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let ctx: any;
    (async () => {
      const gsap = (await import("gsap")).default;
      const ScrollTrigger = (await import("gsap/ScrollTrigger")).ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        const cards = gsap.utils.toArray<HTMLElement>(".c-card");
        const last = cards.length - 1;

        const lastTrigger = ScrollTrigger.create({
          trigger: cards[last],
          start: "center center",
        });

        cards.forEach((card: any, index: number) => {
          gsap.to(card, {
            scale: index === last ? 1 : 0.5,
            scrollTrigger: {
              trigger: card,
              start: "top top",
              end: () => lastTrigger.start,
              pin: true,
              pinSpacing: false,
              scrub: 0.5,
            },
          });
        });
      }, containerRef);
    })();

    return () => ctx && ctx.revert();
  }, []);

  return (
    <div className="container mx-auto">
      <div ref={containerRef} className="h-[100vh] mx-auto px-6">
        {members.map((m) => (
          <MemberCard
            key={m.name}
            name={m.name}
            role={m.role}
            excerpt={m.excerpt}
            img={m.img}
          />
        ))}
      </div>

      <div className="h-screen" />
    </div>
  );
};

export default Member;
