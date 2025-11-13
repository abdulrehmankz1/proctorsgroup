import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 md:px-16 py-16 container mx-auto">
      {/* Top section */}
      <div className="md:flex md:gap-12 border-b border-gray-700 pb-12">
        {/* Left (40%) */}
        <div className="md:w-[55%] mb-10 md:mb-0">
          <h2 className="text-4xl font-semibold mb-4">Let’s talk</h2>
          <p className="text-gray-300 mb-6">
            We want to hear about you, your business, and your challenges
          </p>
          <a
            href="/contact"
            className="inline-block text-lg font-medium border-b-2 border-white pb-1 hover:text-gray-300 transition"
          >
            Get in touch →
          </a>
        </div>

        {/* Right (60%) */}
        <div className="md:w-[45%] grid md:grid-cols-3 gap-8">
          {/* Navigation Columns */}
          <div className="col-span-2 grid grid-cols-2 gap-6">
            <div className="space-y-3">
              <Link
                href="/"
                className="block font-semibold hover:text-gray-300"
              >
                Home
              </Link>
              <Link href="/work" className="block hover:text-gray-300">
                Work
              </Link>
              <Link href="/team" className="block hover:text-gray-300">
                Team
              </Link>
              <Link href="/why-us" className="block hover:text-gray-300">
                Why us?
              </Link>
              <Link href="/services" className="block hover:text-gray-300">
                Services
              </Link>
              <Link
                href="/proctors-pledge"
                className="block hover:text-gray-300"
              >
                Proctors Pledge
              </Link>
            </div>
            <div className="space-y-3">
              <Link href="/middle-east" className="block hover:text-gray-300">
                Middle East
              </Link>
              <Link href="/north-america" className="block hover:text-gray-300">
                North America
              </Link>
              <Link href="/csr" className="block hover:text-gray-300">
                CSR
              </Link>
              <Link href="/careers" className="block hover:text-gray-300">
                Careers
              </Link>
              <Link href="/knowledge" className="block hover:text-gray-300">
                Knowledge
              </Link>
              <Link href="/contact" className="block hover:text-gray-300">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact info */}
          <div>
            <p className="font-semibold">The Old Printworks</p>
            <p>178 Easton Road</p>
            <p>Bristol</p>
            <p>BS5 0ES</p>
            <p>UK</p>

            <p className="mt-4">+44 (0)117 923 2282</p>
            <p className="mt-1">marketing@proctorsgroup.com</p>

            <div className="flex space-x-4 mt-6">
              <a href="#" aria-label="Facebook" className="hover:text-gray-300">
                <Facebook size={20} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="hover:text-gray-300"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                aria-label="Twitter / X"
                className="hover:text-gray-300"
              >
                <Twitter size={20} />
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-gray-300">
                <Linkedin size={20} />
              </a>
              <a href="#" aria-label="YouTube" className="hover:text-gray-300">
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-8 mt-10">
        {/* Copyright and legal */}
        <div>
          <p className="text-sm">Copyright © 2025 Proctor and Stevenson Ltd.</p>
          <p className="text-sm text-gray-400">
            Registered in England & Wales No. 2572010. ISO 27001 accredited.
          </p>
          <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-400">
            <a href="#" className="hover:text-white">
              Modern Slavery Policy
            </a>
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Candidate Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>

        {/* Accreditation logos */}
        <div className="flex flex-wrap gap-4 items-center">
          <Image
            src="/cert1.png"
            alt="ISO Certification"
            width={100}
            height={60}
          />
          <Image
            src="/cert2.png"
            alt="Cyber Essentials"
            width={60}
            height={60}
          />
          <Image src="/cert3.png" alt="Green Hosting" width={120} height={60} />
          <Image src="/cert4.png" alt="Women Charter" width={60} height={60} />
          <Image src="/cert5.png" alt="Living Wage" width={80} height={60} />
          <Image src="/cert6.png" alt="B Corporation" width={60} height={60} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
