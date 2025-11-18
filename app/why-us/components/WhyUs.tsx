import React from "react";
import { CheckIcon } from "./CheckIcon";
import { BoxIcon } from "./BoxIcon";
import { StarIcon } from "./StarIcon";

const WhyUs = () => {
  return (
    <section className="section_space">
      <div className="container mx-auto">
        <h6 className="eyebrow mb-8">Why us</h6>
        <h2>How can we help?</h2>
        <p className="Nort w-[60%] max-w-3xl mt-8">
          When you’re choosing a marketing agency, attitude and aptitude make
          all the difference. With P+S you get can-do people with the capability
          to deliver on every project.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-16">
          <div className="why_us_box">
            <CheckIcon />
            <div className="text-28 mt-4 mb-12">
              Feeling under pressure due to lack of time and marketing resource?
            </div>
            <p className="why_us_box_text">
              No problem, we’ll take the strain for you.
            </p>
          </div>

          <div className="why_us_box">
            <BoxIcon />
            <div className="text-28 mt-4 mb-12">
              Need strategic or technical expertise to get your marketing
              operations running efficiently and effectively?
            </div>
            <p className="why_us_box_text">We’re the people for you.</p>
          </div>

          <div className="why_us_box">
            <StarIcon />
            <div className="text-28 mt-4 mb-12">
              Want some creative flair to lift your brand head and shoulders
              above the rest?
            </div>
            <p className="why_us_box_text">We have it in spades.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
