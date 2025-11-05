import React from "react";
import Image from "next/image";

interface LatestCardProps {
  image: string;
  category: string;
  title: string;
}

const LatestCard: React.FC<LatestCardProps> = ({ image, category, title }) => {
  return (
    <div className="group bg-[#0a0a0a] text-white rounded-2xl overflow-hidden hover:-translate-y-2 transition-transform duration-300">
      <div className="relative w-full h-56 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-t-2xl transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="p-6 transition-colors duration-300 group-hover:bg-white group-hover:text-black">
        <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 group-hover:text-gray-600">
          {category}
        </p>
        <h6 className="text-3xl font-light leading-snug">{title}</h6>
      </div>
    </div>
  );
};

export default LatestCard;
