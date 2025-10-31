// 'use client';

// import React, { forwardRef } from 'react';
// import ServiceCard from './ServiceCard';

// interface ServiceSlideProps {
//   service: {
//     title: string;
//     description: string;
//     tags: string[];
//     bg: string;
//   };
//   isActive: boolean;
// }

// const ServiceSlide = forwardRef<HTMLImageElement, ServiceSlideProps>(
//   ({ service, isActive }, ref) => {
//     return (
//       <div className="absolute inset-0 transition-opacity duration-700">
//         <img
//           ref={ref}
//           src={service.bg}
//           alt={service.title}
//           className={`bg-img absolute inset-0 h-full w-full object-cover ${
//             isActive ? 'opacity-100' : 'opacity-0'
//           }`}
//         />
//         <div className="absolute inset-0 bg-black/50" />
//         {isActive && (
//           <div className="relative z-10 flex items-center justify-between h-full px-20">
//             <div className="card-content w-[40%]">
//               <ServiceCard
//                 title={service.title}
//                 description={service.description}
//                 tags={service.tags}
//               />
//             </div>
//           </div>
//         )}
//       </div>
//     );
//   }
// );

// ServiceSlide.displayName = 'ServiceSlide';
// export default ServiceSlide;
