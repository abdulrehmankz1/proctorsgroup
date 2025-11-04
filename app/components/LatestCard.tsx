import React from "react";
import Image from "next/image";

const LatestCard = () => {
  return (
    <div className="bg-[#0a0a0a] text-white rounded-2xl overflow-hidden max-w-sm hover:-translate-y-2 transition-transform duration-300">
      {/* Image */}
      <div className="relative w-full h-56">
        <Image
          src="/assets/images/hero-section.webp"
          alt="Cost-effective manufacturing marketing"
          fill
          className="object-cover rounded-t-2xl"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">
          Insights
        </p>
        <h5 className="text-xl font-light leading-snug">
          Cost-effective manufacturing marketing: the ultimate guide for 2026
        </h5>
      </div>
    </div>
  );
};

export default LatestCard;
