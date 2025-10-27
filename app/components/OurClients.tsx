import Image from "next/image";
import React from "react";

interface OurClientsProps {
  speed?: number; // seconds for one loop
}

const OurClients = ({ speed = 45 }: OurClientsProps) => {
  const items = [
    { value: "/assets/images/logo_1.svg" },
    { value: "/assets/images/logo_2.svg" },
    { value: "/assets/images/logo_3.svg" },
    { value: "/assets/images/logo_4.svg" },
    { value: "/assets/images/logo_5.svg" },
    { value: "/assets/images/logo_6.svg" },
    { value: "/assets/images/logo_7.svg" },
    { value: "/assets/images/logo_8.svg" },
    { value: "/assets/images/logo_9.svg" },
    { value: "/assets/images/logo_10.svg" },
    { value: "/assets/images/logo_11.svg" },
    { value: "/assets/images/logo_12.svg" },
    { value: "/assets/images/logo_13.svg" },
    { value: "/assets/images/logo_14.svg" },
  ];

  // Split into two halves
  const half = Math.ceil(items.length / 2);
  const firstHalf = items.slice(0, half);
  const secondHalf = items.slice(half);

  // Duplicate for seamless loop
  const loopFirst = [...firstHalf, ...firstHalf];
  const loopSecond = [...secondHalf, ...secondHalf];

  return (
    <section className="our-clients relative overflow-hidden w-full section_space">
      <div className="container mx-auto">
        <h6 className="eyebrow mb-8">Our clients</h6>

        {/* Only this part has overlay */}
        <div className="relative">
          <div className="logo-overlay pointer-events-none"></div>

          {/* Slider - Left ➜ Right */}
          <div className="marquee">
            <div
              className="marquee-track reverse"
              style={{ animationDuration: `${speed}s` }}
            >
              {loopFirst.map((item, index) => (
                <div key={`left-${index}`} className="logo-item">
                  <Image
                    src={item.value}
                    alt={`Client logo ${index + 1}`}
                    draggable="false"
                    width={200}
                    height={80}
                    className="client-logo"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Slider - Right ➜ Left */}
          <div className="marquee mt-12">
            <div
              className="marquee-track"
              style={{ animationDuration: `${speed}s` }}
            >
              {loopSecond.map((item, index) => (
                <div key={`right-${index}`} className="logo-item">
                  <Image
                    src={item.value}
                    alt={`Client logo ${index + 1}`}
                    draggable="false"
                    width={200}
                    height={80}
                    className="client-logo"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Overlay ends before heading */}
      </div>
    </section>
  );
};

export default OurClients;
