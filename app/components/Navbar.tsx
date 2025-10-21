"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Mail } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`fixed top-0 left-0 right-0 z-50 ease-in-out ${
        isScrolled
          ? "w-1/2 mx-auto backdrop-blur-md shadow-md rounded-[120px] px-9 mt-8"
          : "w-full bg-black"
      }`}
      // 👇 Background change only on hover (3s transition)
      style={{
        backgroundColor:
          isScrolled && isHovered
            ? "rgba(0,0,0,0.8)"
            : isScrolled
            ? "backdrop-blur-md"
            : "black",
        transition: "background-color 3s ease-in-out, width 0.5s ease-in-out",
      }}
    >
      <div className="text-gray-600 body-font transition-all duration-500">
        {/* Banner Section */}
        <div
          className={`flex flex-wrap items-center justify-center gap-4 py-2 px-4 transition-all duration-500 ${
            isScrolled
              ? "opacity-0 h-0 overflow-hidden hidden"
              : "opacity-100 h-auto"
          }`}
        >
          <a href="#" className="text-center text-sm font-medium nav_banner">
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
          <nav className="flex flex-wrap items-center text-base justify-center gap-6 text-white">
            <Link href="/" className="navbar_link">
              Work
            </Link>
            <Link href="/" className="navbar_link">
              Why us?
            </Link>
            <Link href="/" className="navbar_link">
              Services
            </Link>
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
              isScrolled ? "bg-transparent " : " text-black"
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
