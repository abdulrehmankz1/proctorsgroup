"use client";
import FadeInText from "./FadeInText";

export default function WhyUs() {
  const text1 = "No challenge is too big, too ambitious or too technical –";
  const text2 =
    "thanks to our award-winning team of B2B marketing experts, creative problem-solvers, tech whizzes and strategists.";

  return (
    <section className="section_space why_section">
      <div className="container mx-auto">
        <h6 className="eyebrow mb-8">Why us?</h6>

        <FadeInText text={text1} className="fadein_text" />
        <FadeInText text={text2} className="fadein_text" />
      </div>
    </section>
  );
}
