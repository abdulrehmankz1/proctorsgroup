import React from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const servicesData = [
    {
      title: "Technology",
      description: "Global and regional. Public and private. Enterprise and start-up. Our digital team has built and integrated sites, systems and apps of all shapes, sizes and functionalities.",
      tags: [
        "Cloud services",
        "Web development",
        "QA support and training",
        "Systems Architecture",
        "Technical consulting"
      ]
    },
    // {
    //   title: "Creative",
    //   description: "We produce results-driven creative that informs, inspires and engages. From copy and visual identity to video, motion graphics and digital design.",
    //   tags: [
    //     "Branding and Identity",
    //     "Copywriting",
    //     "Digital Design",
    //     "Print Design",
    //     "UX and UI",
    //     "Video and Animation"
    //   ]
    // },
    // {
    //   title: "Strategy",
    //   description: "To ensure the best possible response and returns for your business, our strategy, analytics and demand generation teams work across every relevant stage of a project.",
    //   tags: [
    //     "ABM (Account-Based Marketing)",
    //     "Brand Strategy",
    //     "SEO / SEM",
    //     "Campaign Strategy and Planning",
    //     "Conversion Rate Optimisation",
    //     "Reporting and Data"
    //   ]
    // }
  ];

  return (
    <section className="services_section section_space h-[100vh] relative">
      <div className="container mx-auto flex justify-start items-center h-full">
        {servicesData.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            tags={service.tags}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
