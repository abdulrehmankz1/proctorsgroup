// import React from "react";

// interface ServiceCardProps {
//   title: string;
//   description: string;
//   tags: string[];
// }

// const ServiceCard = ({ title, description, tags }: ServiceCardProps) => {
//   return (
//     <div className="w-[37%] bg-[#ffffff14] hover:bg-[#00000f14] rounded-2xl py-12 px-8 text-white">
//       <h6 className="eyebrow">Services</h6>
//       <h3 className="my-3 font-extralight">{title}</h3>
//       <p className="service_card_text">{description}</p>
//       {/* tags */}
//       <div className="mt-4 flex flex-wrap gap-3">
//         {tags.map((tag, index) => (
//           <div
//             key={index}
//             className="tags bg-[#f8f8f81f] text-[#f8f8f8] border border-[#ffffff1f] py-1.5 px-3 w-fit text-sm rounded-lg"
//           >
//             {tag}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ServiceCard;

import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  tags: string[];
}

const ServiceCard = ({ title, description, tags }: ServiceCardProps) => {
  return (
    <div className="bg-[#ffffff14] hover:bg-[#00000f14] rounded-2xl py-12 px-8 text-white backdrop-blur-md transition-all duration-300">
      <h6 className="eyebrow text-sm uppercase tracking-wider">Services</h6>
      <h3 className="my-3 text-3xl font-extralight">{title}</h3>
      <p className="opacity-90 leading-relaxed">{description}</p>
      <div className="mt-4 flex flex-wrap gap-3">
        {tags.map((tag, index) => (
          <div
            key={index}
            className="bg-[#f8f8f81f] text-[#f8f8f8] border border-[#ffffff1f] py-1.5 px-3 w-fit text-sm rounded-lg"
          >
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCard;
