import React from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  tags: string[];
}

const ServiceCard = ({ title, description, tags }: ServiceCardProps) => {
  return (
    <div className="w-[35%] bg-[#ffffff14] hover:bg-[#00000014] py-12 px-8 text-white">
      <h6 className="eyebrow">Services</h6>
      <h5 className="my-3 font-extralight">{title}</h5>
      <p className="service_card_text">{description}</p>
      {/* tags */}
      <div className="mt-4 flex flex-wrap gap-3">
        {tags.map((tag, index) => (
          <div
            key={index}
            className="tags bg-[#f8f8f81f] text-[#f8f8f8] border border-[#ffffff1f] py-1.5 px-3 w-fit text-sm rounded-lg"
          >
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCard;
