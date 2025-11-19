import { MoveRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const WeDo: React.FC = () => {
  return (
    <section className="section_space white_pure">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Column - Image Wrapper */}
          <div className="w-full md:w-1/2 h-[800px] rounded-4xl overflow-hidden">
            <Image
              src="/assets/images/we-do.webp"
              alt="we do"
              width={1200}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Column - Content */}
          <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-8">
            <h6 className="eyebrow_dark mb-8">We do it all</h6>
            <h2 className="black_pure_text">
              Full service,{" "}
              <strong className="font_bold">at your service</strong>
            </h2>
            <p className="Nort mt-8 black_pure_text">
              With P+S, you’ll have the full range of marketing services at your
              disposal – you never to need look elsewhere. We’ll help you build
              your brand, drive sales, launch products, create award-winning
              websites, target new audiences, integrate high-performing
              marketing systems and much, much more.
            </p>
            <div>
              <a href="/" className="arow_link mt-12 black_pure_text">
                <span>Explore our services</span>
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

export default WeDo;
