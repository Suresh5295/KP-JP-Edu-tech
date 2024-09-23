import { Button, Img } from "./..";
import React, { useState } from "react";

export default function Header(props) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header
      {...props}
      className={`${props.className} w-full flex justify-center items-center bg-white shadow-xs py-4`}
    >
      <div className="container mx-auto flex w-full items-center justify-between px-10 lg:px-5 md:px-4">
        {/* Logo Image */}
        <Img
          src="images/img_logos1_1.png"
          alt="Logos1one"
          className="h-[86px] w-[8%] object-contain md:w-[20%] sm:w-[30%]"
        />

        {/* Hamburger Icon for Mobile */}
        <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <Img src="images/img_hamburger.svg" alt="Menu" className="h-6 w-6" />
        </button>

        {/* Main Navigation */}
        <div className={`${
          isMobileMenuOpen ? "flex" : "hidden"
        } md:flex w-[88%] items-center justify-between md:w-full md:flex-col gap-5`}>
          <nav className="flex flex-1 items-center justify-center">
            <ul className="flex items-center justify-center gap-10 lg:gap-6 md:gap-4 flex-wrap">
              <li>
                <a
                  href="/home" // Specific URL for "Home"
                  className="text-[16px] font-semibold text-blue_gray-800 hover:text-teal-400"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/studyabroad" // Specific URL for "Study Abroad"
                  className="text-[16px] font-semibold text-blue_gray-800 hover:text-teal-400"
                >
                  Study Abroad
                </a>
              </li>
              <li>
                <a
                  href="/softwareconsulting" // Specific URL for "Software Consulting"
                  className="text-[16px] font-semibold text-blue_gray-800 hover:text-teal-400"
                >
                  Software Consulting
                </a>
              </li>
              <li>
                <a
                  href="/migrate" // Specific URL for "Migrate"
                  className="text-[16px] font-semibold text-blue_gray-800 hover:text-teal-400"
                >
                  Migrate
                </a>
              </li>
              <li>
                <a
                  href="/englishcoaching" // Specific URL for "English Coaching"
                  className="text-[16px] font-semibold text-blue_gray-800 hover:text-teal-400"
                >
                  English Coaching
                </a>
              </li>
              <li>
                <a
                  href="/aboutus" // Specific URL for "About Us"
                  className="text-[16px] font-semibold text-blue_gray-800 hover:text-teal-400"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/resources" // Specific URL for "Resources"
                  className="text-[16px] font-semibold text-blue_gray-800 hover:text-teal-400"
                >
                  Resources
                </a>
              </li>
              <li>
                <a
                  href="/contactus" // Specific URL for "Contact Us"
                  className="text-[16px] font-semibold text-blue_gray-800 hover:text-teal-400"
                >
                  Contact Us
                </a>
              </li>
            </ul>

            {/* Search Icon */}
            <a href="#" className="ml-6">
              <Img
                src="images/img_search.svg"
                alt="Search"
                className="h-[22px] w-[22px] object-contain"
              />
            </a>
          </nav>

          {/* Enquire Now Button */}
          <a href="/enquirepage" className="no-underline">
            <Button
              size="lg"
              shape="square"
              className="min-w-[150px] px-5 py-2 bg-teal-400 text-white font-bold text-[14px] leading-[20px] hover:bg-teal-500 tracking-wide"
            >
              Enquire Now
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
}
