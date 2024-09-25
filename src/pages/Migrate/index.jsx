import React, { useState } from "react";  // Added useState import
import { Helmet } from "react-helmet";
import { Img, Text, Heading, Button } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MigrateRowFive from "./MigrateRowFive";
import MigrateRowThree from "./MigrateRowThree";
import MigrateRowourclinet from "./MigrateRowourclinet";
import MigrateStackstudentvis from "./MigrateStackstudentvis";

export default function MigratePage() {
  const [selectedCountry, setSelectedCountry] = useState('Australia');
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);

  // Scroll to Top Function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'  // This makes the scrolling behavior smooth
    });
  };

  // Content for each country
  const countryData = {
    Australia: {
      imgSrc: "images/img_rectangle_4383.png",
      heading: "Why Migrate to Australia?",
      description:   <>
      There are several reasons people visit Australia. It offers plenty of opportunities for all.
      Australia is an open and multicultural country that is a chosen land for immigrants in today’s world.<br /> <br />
      Its strong economy provides diverse job opportunities and career growth. The country’s multicultural society
      ensures a welcoming environment. Enjoy beautiful landscapes and a vibrant lifestyle year-round.
      Clear pathways to permanent residency make it a great place for long-term stability.
    </>
    },
    Canada: {
      imgSrc: "images/img_screen_4384.png",
      heading: "Why Migrate to Canada?",
      description: 
        <>
          Canada is the second largest country in the world, with three territories and ten provinces.
          It is a country where half of the land is filled with forests.
          With spectacular landscapes, wide-open spaces, and pleasant weather, Canada has everything to make your holiday memorable!<br /> <br />
          From exploring the bustling streets of Toronto to exploring the majestic Canadian Rockies, this country offers a variety of destinations.
          Canada's vibrant landscapes, undisturbed nature, and rich culture make it a sought-after holiday destination for adventure lovers.
        </>
    },
    UK: {
      imgSrc: "images/img_screen_4385.png",
      heading: "Why Migrate to the UK?",
      description: `Immerse yourself in a city rich with history and cultural diversity. Benefit from world-class education with renowned institutions and cutting-edge research facilities. Experience a thriving economy with numerous career opportunities across various sectors. Enjoy access to excellent healthcare services through the NHS. Discover vibrant neighborhoods, iconic landmarks, and a dynamic arts scene. Take advantage of London’s extensive public transportation system and global connections. Explore a city that embraces innovation, creativity, and personal growth.`,
    },
    USA: {
      imgSrc: "images/img_screen_4386.png",
      heading: "Why Migrate to the USA?",
      description:   <>
      Discover a land of opportunity with diverse career prospects and innovation.
      Benefit from world-class educational institutions and cutting-edge research facilities.
      Enjoy a high standard of living with access to excellent healthcare and a strong economy.<br /> <br />
      Experience vibrant cities and diverse landscapes, from bustling metropolises to stunning natural wonders.
      Join a culture known for its entrepreneurial spirit and dynamic lifestyle.
      Explore a country with a rich cultural tapestry and numerous recreational activities.
    </>
    },
  };

  return (
    <>
      <Helmet>
        <title>JP Edu Tech</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <style>
        {`
        @keyframes slideDown {
              0% {
                transform: translateY(-100%); /* Starts off-screen from the top */
                opacity: 0;
              }
              100% {
                transform: translateY(0); /* Ends in its original position */
                opacity: 1;
              }
            }

            .animate-slideDown {
              animation: slideDown 1.5s ease-in-out forwards; /* Adjust duration and timing function as needed */
            }

            @keyframes slideUp {
              0% {
                transform: translateY(100%); /* Starts off-screen from the bottom */
                opacity: 0;
              }
              100% {
                transform: translateY(0); /* Ends in its original position */
                opacity: 1;
              }
            }

            .animate-slideUp {
              animation: slideUp 1.5s ease-in-out forwards; /* Adjust duration and timing function as needed */
            }

            @keyframes zoomInOut {
            0% {
              transform: scale(0.3); /* Start zoomed out */
            }
            100% {
              transform: scale(1.1); /* Zoomed in */
            }
          }

          .animate-zoomInOut {
            animation: zoomInOut 3s ease-in-out forwards; /* No infinite, forwards to retain final state */
          }
        `}
      </style>
      <div className="w-full bg-white-a700_01">
        <Header className="self-stretch px-14 md:px-5 sm:px-4" />
        <div className="flex flex-col items-center">
          <div className="h-[966px] self-stretch bg-[url(/public/images/img_group_1285.png)] bg-cover bg-no-repeat lg:h-auto md:h-auto">
            <div className="flex flex-col items-center gap-[212px] lg:gap-[159px] md:gap-[159px] sm:gap-[106px]">
              <div className="container-xs mb-[280px] flex flex-col items-center px-14 lg:px-5 md:px-5">
                <div className="ml-3.5 flex w-[85%] flex-col items-center gap-[34px] lg:w-full md:ml-0 md:w-full">
                  <Heading
                    size="heading9xl"
                    as="h1"
                    className="mt-80 text-center text-[96px] font-bold leading-[144px] text-white-a700_01 lg:text-[48px] md:text-[48px] animate-zoomInOut"
                  >
                    <span>
                      Connecting Dreams with <br /> New Destinations.
                    </span>
                  </Heading>
                  <a href="/enquirepage">
                  <button
                  shape="square"
                    className="min-w-[198px] pl-7 pr-[34px] font-nunitosans font-bold tracking-[1.20px] sm:px-4"
                    >
                  <Img src="images/a_button.png" alt="Appointment Image" className="h-[60px] w-auto object-contain" />
                </button>
                </a>
                </div>
              </div>
            </div>
          </div>
          <div className="relative content-center self-stretch lg:h-auto md:h-auto">
            <div className="mx-auto flex-1">
              <div>
                <div className="relative z-[2] flex flex-col items-center justify-end bg-black-900_f4 py-[110px] lg:py-8 md:py-5 sm:py-4">
                  <div className="container-xs mt-[212px] flex flex-col items-end gap-[38px] px-12 lg:px-5 md:px-5">
                    <Text
                      as="p"
                      className="w-[50%] text-[20px] font-normal leading-[30px] tracking-[0.40px] text-white-a700_01 lg:w-full lg:text-[17px] md:w-full"
                    >
                      {countryData[selectedCountry].description}
                    </Text>
                    <button
                      shape="square"
                      className="mr-[450px] min-w-[198px] pl-7 pr-[34px] font-nunitosans font-bold tracking-[1.20px] md:mr-0 sm:px-4"
                    >
                      <Img src="images/button_4.png" alt="Image" className="mt-4 h-[98px] w-[60%] object-contain" />
                    </button>
                  </div>
                </div>
                <div className="relative mt-[-22px] bg-gray-50_01 py-[70px] lg:py-8 md:py-5 sm:py-4">
                  <MigrateStackstudentvis />
                </div>
              </div>
              <div className="relative z-[3] mt-[-88px] flex flex-col items-center">
                <div className="container-xs relative z-[4] flex flex-col items-start pl-[258px] pr-14 lg:px-5 md:px-5">
                  <Img src="images/img_group_43.png" alt="Image" className="h-[332px] w-[34%] object-contain" />
                </div>
                <MigrateRowThree />
              </div>
            </div>

            {/* Country Buttons */}
            <div className="container-xs absolute left-0 right-0 top-[1%] z-[5] my-auto flex flex-col gap-[90px] px-1.5 lg:gap-[90px] lg:px-5 md:gap-[67px] md:px-5 sm:gap-[45px]">
              <div className="mt-10 ml-[142px] mr-32 flex gap-[18px] bg-black-900_e0 backdrop-opacity-[0.5] md:mx-0 md:flex-col z-50">
                <button
                  size="6xl"
                  shape="square"
                  className={`w-full px-[34px] font-bold tracking-[-0.46px] md:px-5 ${
                    selectedCountry === 'Australia' ? 'text-[24px] bg-light_blue-900 text-white-a700_01' : 'text-[24px] bg-white-a700_01 text-blue_gray-800'
                  }`}
                  onClick={() => setSelectedCountry('Australia')}
                >
                  Australia
                </button>
                <button
                  size="6xl"
                  shape="square"
                  className={`w-full px-[34px] font-bold tracking-[-0.46px] md:px-5 ${
                    selectedCountry === 'Canada' ? 'text-[24px] bg-light_blue-900 text-white-a700_01' : 'text-[24px] bg-white-a700_01 text-blue_gray-800'
                  }`}
                  onClick={() => setSelectedCountry('Canada')}
                >
                  Canada
                </button>
                <button
                  size="6xl"
                  shape="square"
                  className={`w-full px-[34px] font-bold tracking-[-0.46px] md:px-5 ${
                    selectedCountry === 'UK' ? 'text-[24px] bg-light_blue-900 text-white-a700_01' : 'text-[24px] bg-white-a700_01 text-blue_gray-800'
                  }`}
                  onClick={() => setSelectedCountry('UK')}
                >
                  UK
                </button>
                <button
                  size="6xl"
                  shape="square"
                  className={`w-full px-[34px] font-bold tracking-[-0.46px] md:px-5 ${
                    selectedCountry === 'USA' ? 'text-[24px] bg-light_blue-900 text-white-a700_01' : 'text-[24px] bg-white-a700_01 text-blue_gray-800'
                  }`}
                  onClick={() => setSelectedCountry('USA')}
                >
                  USA
                </button>
                <Button
                  size="6xl"
                  shape="square"
                  className="w-full px-[34px] font-bold tracking-[-0.46px] md:px-5"
                >
                  View All
                </Button>
              </div>
              {/* Country Details Section */}
              <div className="flex items-start md:flex-col">
                <div className="relative h-[500px] w-[48%] self-center md:w-full">
                  <Img
                    src={countryData[selectedCountry].imgSrc}
                    alt={`Image of ${selectedCountry}`}
                    className="absolute bottom-0 left-px top-0 my-auto h-[500px] w-[94%] rounded-bl-sm rounded-br-sm rounded-tl-md rounded-tr-md object-contain"
                  />
                </div>
                <Heading
                  size="heading6xl"
                  as="h6"
                  className="ml-7 mt-7 text-[48px] font-bold tracking-[-0.91px] text-light_blue-900 lg:text-[40px] md:text-[32px] sm:text-[26px]"
                >
                  {countryData[selectedCountry].heading}
                </Heading>
              </div>
            </div>
          </div>
          <div className="container-xs mt-11 px-9 lg:px-5 md:px-5">
            <div className="flex justify-between gap-5 md:flex-col">
              <Img
                src="images/img_2_1_png.png"
                alt="21png"
                className="h-[40px] w-[8%] object-contain md:w-full"
              />
              <Img
                src="images/img_1_1_png.png"
                alt="11png"
                className="h-[40px] w-[8%] object-contain md:w-full"
              />
              <Img
                src="images/img_2_1_png_40x136.png"
                alt="21png"
                className="h-[40px] w-[8%] object-contain md:w-full"
              />
              <Img
                src="images/img_4_1_png.png"
                alt="41png"
                className="h-[40px] w-[8%] object-contain md:w-full"
              />
              <Img
                src="images/img_1_1_png.png"
                alt="11png"
                className="h-[40px] w-[8%] object-contain md:w-full"
              />
              <Img
                src="images/img_4_1_png.png"
                alt="41png"
                className="h-[40px] w-[8%] object-contain md:w-full"
              />
            </div>
          </div>
          <MigrateRowourclinet />
          <MigrateRowFive />
          <div className="relative mt-[110px] h-[348px] content-center self-stretch lg:h-auto md:h-auto">
            <div className="mx-auto flex-1">
              <div className="flex flex-col items-center">
                <div className="container-xs relative z-[13] flex flex-col items-center px-14 lg:px-5 md:px-5">
                <Img src="images/contact.png" alt="Contact Image" />
                </div>
                <Footer />
              </div>
            </div>
            <div className="absolute right-[7%] top-1 z-[14] m-auto flex rotate-[0deg] flex-col items-center justify-center rounded-[22px] bg-light_blue-900 px-2.5 py-3.5">
              <Img src="images/img_vector_white_a700_01_14x24.svg" alt="Vector" className="h-[14px]" onClick={scrollToTop} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
