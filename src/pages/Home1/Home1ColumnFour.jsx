import React, { useState } from "react";
import { Heading } from "../../components";

// Data array for default and hover images
const data = [
  { defaultImage: "images/img_rectangle_4219.svg", hoverImage: "images/hover_img_rectangle_4219.png" },
  { defaultImage: "images/img_rectangle_4220.svg", hoverImage: "images/hover_img_rectangle_4220.png" },
  { defaultImage: "images/img_rectangle_4221.svg", hoverImage: "images/hover_img_rectangle_4221.png" },
  { defaultImage: "images/img_rectangle_4222.svg", hoverImage: "images/hover_img_rectangle_4222.png" },
  { defaultImage: "images/img_rectangle_4223.svg", hoverImage: "images/hover_img_rectangle_4223.png" },
];

export default function Home1ColumnFour() {
  const [hoveredIndex, setHoveredIndex] = useState(null); // Track which image is being hovered

  return (
    <>
      <style>{`
        /* Define the spin animation */
        @keyframes twistSpin {
          0% {
            transform: rotateY(0);
          }
          50% {
            transform: rotateY(90deg);
          }
          100% {
            transform: rotateY(0);
          }
        }

        .twist-animation {
          animation: twistSpin 0.6s ease-in-out forwards;
        }
      `}</style>

      <div className="flex flex-col items-center">
        <div className="container-xs flex flex-col items-center px-[54px] lg:px-5 md:px-5">
          <div className="relative h-[170px] w-[36%] content-center lg:h-auto md:h-auto">
            <Heading
              size="text6xl"
              as="p"
              className="absolute bottom-0 left-0 right-0 top-0 m-auto h-max w-max font-playfairdisplay text-[128px] font-medium text-white-a700_01 lg:text-[48px] md:text-[48px]"
            >
              MIGRATE
            </Heading>
          </div>
          <Heading
            size="headinglg"
            as="h5"
            className="w-[42%] text-center font-poppins text-[20px] font-semibold leading-[30px] tracking-[0.40px] text-white-a700_01 lg:w-full lg:text-[17px] md:w-full"
          >
            We're here to help! Our expert team will guide you through every step of the Migration process. Start your journey today with confidence and support from JP Edu Tech!
          </Heading>
          <div className="ml-3.5 mt-6 flex flex-col items-center gap-14 self-stretch md:ml-0 sm:gap-7">
            <div className="flex gap-16 md:flex-col">
              {/* Map over the data array */}
              {data.map((item, index) => (
                <div
                  key={index}
                  onMouseEnter={() => setHoveredIndex(index)} // Set hoveredIndex on hover
                  onMouseLeave={() => setHoveredIndex(null)} // Reset hoveredIndex on mouse leave
                  className={`mr-[18px] transition-transform duration-300 transform ${
                    hoveredIndex === index ? "twist-animation" : ""
                  }`} // Add spin animation on hover
                >
                  <img
                    src={hoveredIndex === index ? item.hoverImage : item.defaultImage} // Show hoverImage if hovered
                    alt={`Image ${index + 1}`}
                    className="w-full h-[392px] object-cover"
                  />
                  <Heading
                    size="text4xl"
                    as="h4"
                    className="mt-4 text-center text-white-a700_01"
                  >
                    {/* You can add heading or subheading content here */}
                  </Heading>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
