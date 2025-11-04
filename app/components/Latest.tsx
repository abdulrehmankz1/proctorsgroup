import { MoveRight } from "lucide-react";
import React from "react";
import LatestCard from "./LatestCard";

const Latest = () => {
  return (
    <section className="section_space">
      <div className="container mx-auto">
        <div className="mb-20 pt-20">
          <h6 className="eyebrow mb-4">latest</h6>
          <h2>
            Get<strong className="px-4">inspired</strong>
          </h2>

          <div className="mt-8 flex items-center justify-between gap-8">
            <p className="Nort w-[60%] max-w-3xl">
              Shining the spotlight on our recent success stories, insights from
              our strategic experts and updates from the world of B2B marketing.
            </p>
            <a
              href="/"
              className="arow_link flex items-center gap-2 whitespace-nowrap"
            >
              <span>Explore our insights</span>
              <MoveRight />
            </a>
          </div>
        </div>
        <LatestCard />
      </div>
    </section>
  );
};

export default Latest;
