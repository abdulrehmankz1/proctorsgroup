import React from "react";

interface MemberCardProps {
  name: string;
  role: string;
  excerpt: string;
  img: string;
}

export default function MemberCard({ name, role, excerpt, img }: MemberCardProps) {
  return (
    <article className="c-card grid grid-cols-1 md:grid-cols-2 gap-6 mt-5 w-full min-h-[600px] h-[90vh] bg-white border border-[#202330] overflow-hidden">
      <div className="flex flex-col justify-center p-8 text-[#202330]">
        <div className="text-sm font-semibold uppercase mb-2">Amon The Sign</div>
        <h2 className="text-3xl font-bold mb-4">{name} / <span className="font-normal">{role}</span></h2>
        <p className="text-base leading-7 mb-6">{excerpt}</p>
        <div className="mt-6">
          <a
            className="inline-block px-4 py-2 border border-black text-black no-underline"
            href="https://www.youtube.com/watch?v=aqacOQpfbxc&ab_channel=AmonTheSign"
            target="_blank"
            rel="noreferrer"
          >
            Escuchar en Youtube
          </a>
        </div>
      </div>

      <figure className="relative overflow-hidden">
        <img src={img} alt={name} className="absolute inset-0 w-full h-full object-cover" />
      </figure>
    </article>
  );
}
