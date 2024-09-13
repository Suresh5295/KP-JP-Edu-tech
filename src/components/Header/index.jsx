import { Button, Img } from "./..";
import React from "react";

export default function Header({ ...props }) {
  return (
    <header
      {...props}
      className={`${props.className} flex justify-center items-center bg-white z-50 shadow-xs py-4`}
    >
      <div className="flex w-full items-center justify-between px-10 lg:px-5 md:px-4">
        {/* Logo Image */}
        <Img
          src="images/img_logos1_1.png"
          alt="Logos1one"
          className="h-[86px] w-[8%] object-contain md:w-[20%] sm:w-[30%]"
        />

        {/* Main Navigation */}
        <div className="flex w-[88%] items-center justify-between md:w-full md:flex-col gap-5">
          <nav className="flex flex-1 items-center justify-center">
            <ul className="flex items-center justify-center gap-10 lg:gap-6 md:gap-4 flex-wrap">
              {["Home", "Study Abroad", "Software Consulting", "Migrate", "English Coaching", "About Us", "Resources", "Contact Us"].map(
                (item, index) => (
                  <li key={index}>
                    <a
                      href={item === "Contact Us" ? "/ContactUs" : "#"}
                      className={`text-[16px] font-semibold text-blue_gray-800 hover:text-teal-400`}
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
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
          <Button
            size="lg"
            shape="square"
            className="min-w-[150px] px-5 py-2 bg-teal-400 text-white font-bold text-[14px] leading-[20px] hover:bg-teal-500 tracking-wide"
          >
            Enquire Now
          </Button>
        </div>
      </div>
    </header>
  );
}
