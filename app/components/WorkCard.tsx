import React from "react";

interface WorkCardProps {
  videoSrc: string;
  title: string;
  description: string;
  className?: string;
}

function WorkCard({
  videoSrc,
  title,
  description,
  className = "",
}: WorkCardProps) {
  return (
    <div
      className={`relative w-full aspect-[16/9] overflow-hidden group rounded-2xl shadow-lg mx-auto ${className}`}
    >
      {/* Background Video */}
      <video
        src={videoSrc}
        className="w-full h-full object-cover bg-black"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay tint */}
      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-all duration-500" />

      {/* Info Box */}
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2
        w-[95%] rounded-xl p-6 text-left text-white border border-white/20 shadow-md"
      >
        <h3 className="mb-3 text-xl font-semibold">{title}</h3>
        <p className="text-sm text-gray-200">{description}</p>
      </div>
    </div>
  );
}

export default WorkCard;
