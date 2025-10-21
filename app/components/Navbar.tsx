"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Mail } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dynamic blur + color control
  const getNavbarStyles = () => {
    if (isScrolled) {
      if (isHovered) {
        // Small navbar hover → deeper black
        return {
          backdropFilter: "blur(8px)",
          backgroundColor: "rgba(0,0,0,0.8)",
          transition:
            "background-color 3s ease-in-out, width 0.5s ease-in-out, transform 0.5s ease-in-out",
        };
      } else {
        return {
          backdropFilter: "blur(4px)",
          backgroundColor: "rgba(0,0,0,0.6)",
          transition:
            "background-color 0.5s ease-in-out, width 0.5s ease-in-out, transform 0.5s ease-in-out",
        };
      }
    } else {
      // Expanded navbar
      return {
        backdropFilter: "none",
        backgroundColor: "black",
        transition:
          "background-color 0s ease-in-out, width 0.5s ease-in-out, transform 0.5s ease-in-out",
      };
    }
  };

  return (
    <header
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsServicesOpen(false);
      }}
      className={`fixed top-0 left-1/2 -translate-x-1/2 z-50 ease-in-out px-9 ${
        isScrolled ? "shadow-md rounded-[120px] mt-8" : ""
      }`}
      style={{
        width: isScrolled ? "50%" : "100%",
        transformOrigin: "center center",
        ...getNavbarStyles(),
      }}
    >
      <div className="text-gray-600 body-font transition-all duration-500">
        {/* Banner Section */}
        <div
          className={`flex flex-wrap items-center justify-center gap-4 px-4 transition-all duration-500 ${
            isScrolled
              ? "opacity-0 h-0 overflow-hidden hidden"
              : "opacity-100 h-auto"
          }`}
        >
          <a
            href="#"
            className="text-center text-sm font-medium nav_banner mt-2"
          >
            📣
            <span className="hover:underline transition-all duration-200">
              Turn brand marketing into your strongest sales tool
            </span>
          </a>
        </div>

        {/* Main Navbar */}
        <div
          className={`container mx-auto flex flex-wrap items-center justify-between transition-all duration-500 ${
            isScrolled ? "py-2" : "py-4"
          }`}
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex title-font font-medium items-center text-gray-900"
          >
            <Image
              src="/assets/images/logo.svg"
              alt="Logo"
              width={80}
              height={35}
              className="transition-all duration-500"
              style={{
                transform: isScrolled ? "scale(0.9)" : "scale(1)",
              }}
            />
          </Link>

          {/* Links */}
          <nav className="relative flex flex-wrap items-center text-base justify-center gap-6 text-white">
            <Link href="/" className="navbar_link">
              Work
            </Link>
            <Link href="/" className="navbar_link">
              Why us?
            </Link>

            {/* ===== Services with Mega Menu ===== */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="navbar_link flex items-center gap-1">
                Services
                <span
                  className={`transition-transform duration-300 ${
                    isServicesOpen ? "rotate-180" : ""
                  }`}
                >
                  ▾
                </span>
              </button>

              {/* Mega Menu */}
              {isServicesOpen && (
                <div
                  className="absolute left-1/2 top-14 z-40 w-[700px] -translate-x-1/2 mt-4 p-6 rounded-2xl backdrop-blur-md bg-black/80 shadow-lg transition-all duration-500"
                >
                  <div className="grid grid-cols-3 gap-6 text-sm text-gray-300">
                    {/* Column 1 */}
                    <div>
                      <h4 className="font-semibold text-white mb-3">
                        Design
                      </h4>
                      <ul className="space-y-2">
                        <li>
                          <Link href="#" className="hover:text-white">
                            UI/UX Design
                          </Link>
                        </li>
                        <li>
                          <Link href="#" className="hover:text-white">
                            Brand Identity
                          </Link>
                        </li>
                        <li>
                          <Link href="#" className="hover:text-white">
                            Product Design
                          </Link>
                        </li>
                      </ul>
                    </div>

                    {/* Column 2 */}
                    <div>
                      <h4 className="font-semibold text-white mb-3">
                        Development
                      </h4>
                      <ul className="space-y-2">
                        <li>
                          <Link href="#" className="hover:text-white">
                            Web Development
                          </Link>
                        </li>
                        <li>
                          <Link href="#" className="hover:text-white">
                            App Development
                          </Link>
                        </li>
                        <li>
                          <Link href="#" className="hover:text-white">
                            CMS & APIs
                          </Link>
                        </li>
                      </ul>
                    </div>

                    {/* Column 3 */}
                    <div>
                      <h4 className="font-semibold text-white mb-3">
                        Marketing
                      </h4>
                      <ul className="space-y-2">
                        <li>
                          <Link href="#" className="hover:text-white">
                            SEO Optimization
                          </Link>
                        </li>
                        <li>
                          <Link href="#" className="hover:text-white">
                            Social Media Marketing
                          </Link>
                        </li>
                        <li>
                          <Link href="#" className="hover:text-white">
                            Paid Campaigns
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link href="/" className="navbar_link">
              Careers
            </Link>
            <Link href="/" className="navbar_link">
              Knowledge
            </Link>
          </nav>

          {/* Contact Button */}
          <button
            className={`primary_btn btn flex items-center justify-center gap-2 transition-all duration-500 ${
              isScrolled
                ? "bg-transparent py-2 px-2.5"
                : " text-black py-3 px-4"
            }`}
          >
            {isScrolled ? (
              <Mail size={20} className="transition-all duration-500" />
            ) : (
              "Contact"
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
