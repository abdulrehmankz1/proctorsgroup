import { MoveRight } from "lucide-react";
import React from "react";

const OurCSR = () => {
  return (
    <section className="our_csr_section section_space white_pure">
      <div className="container mx-auto">
        <div className="csr_content">
          <div className="csr_content_inner w-1/2">
            <h6 className="eyebrow mb-4">Our CSR credentials</h6>

            <h3 className="mb-2.5">
              It’s good
              <strong className="font_bold"> to do good</strong>
            </h3>
            <p>
              Corporate social responsibility (CSR) runs through the heart of
              our business. From the energy we use (and produce!) to the way we
              connect with our local communities, our pledge is always to do
              good, be good and help others feel good. And, in case you wanted
              proof, we're now proudly B Corp certified.
            </p>
            <div className="mt-12">
              <a href="/" className="arow_link mt-12 white_pure_text">
                <span>Check out our CSR work</span>
                <span className="icon">
                  <MoveRight />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurCSR;
