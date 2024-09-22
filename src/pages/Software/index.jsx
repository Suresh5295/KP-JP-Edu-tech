import { Helmet } from "react-helmet";
import { Heading, Img, Text } from "../../components";
import Header from "../../components/Header";
import SoftwareColumn from "./SoftwareColumn";
import SoftwareColumnTwo from "./SoftwareColumnTwo";
import SoftwareRowSix from "./SoftwareRowSix";
import SoftwareRowThree from "./SoftwareRowThree";
import SoftwareRowbrandidentit from "./SoftwareRowbrandidentit";
import SoftwareRowourclinet from "./SoftwareRowourclinet";
import SoftwareRowportraitprof from "./SoftwareRowportraitprof";
import SoftwareRowviewOne from "./SoftwareRowviewOne";
import React from "react";

export default function SoftwarePage() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);

  // Scroll to Top Function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'  // This makes the scrolling behavior smooth
    });
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
                transform: translateY(100%); /* Starts off-screen from the top */
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

            @keyframes leftToRight {
              0% {
                transform: translateX(-100%); /* Starts off-screen to the left */
                opacity: 0;
              }
              100% {
                transform: translateX(0); /* Ends in its original position */
                opacity: 1;
              }
            }

            .animate-leftToRight {
              animation: leftToRight 2s ease-in-out forwards; /* Adjust the duration as needed */
            }
               @keyframes RightToleft {
              0% {
                transform: translateX(100%); /* Starts off-screen to the left */
                opacity: 0;
              }
              100% {
                transform: translateX(0); /* Ends in its original position */
                opacity: 1;
              }
            }
             .animate-RightToleft{
             animation: RightToleft 2s ease-in-out backwards;
             } 
          @keyframes zoomInOut {
            0% {
              transform: scale(0.3); /* Normal size */
            }
            100% {
              transform: scale(1.1); /* Zoomed in */
            }
           
          }

          .animate-zoomInOut {
            animation: zoomInOut 3s ease-in-out forwards; /* No infinite, and forwards to keep final state */
          }
        `}
        </style>
      <div className="w-full bg-white-a700_01">
      <Header className="px-14 md:px-5 sm:px-4" />
        <div>
          <div className="relative content-center lg:h-auto md:h-auto ">
            <div className="mx-auto flex-1">
              <div className="  relative z-[1] h-[966px] bg-[url(/public/images/img_rectangle_4187_1.png)] bg-cover bg-no-repeat lg:h-auto md:h-auto">
                <div className="flex flex-col gap-[194px] lg:gap-[145px] md:gap-[145px] sm:gap-[97px]">
                 
                  <SoftwareColumn />
                </div>
              </div>
              <div className="relative mt-[-50px] flex justify-center bg-black-900 py-[78px] lg:py-8 md:py-5 sm:py-4">
                <div className="container-xs  flex justify-center px-14 lg:px-5 md:px-5">
                  <Text
                    size="textxl"
                    as="p"
                    className="flex-1 text-center text-[24px] font-normal leading-9 tracking-[0.48px] text-gray-50_02 lg:text-[20px]"
                  >
                    <span>At&nbsp;</span>
                    <span className="capitalize">
                      JP EDU TECH, our software consulting services are designed to provide comprehensive solutions that
                      drive business success. Our approach combines deep technical knowledge with strategic insight to
                      help you navigate complex technology challenges and achieve your goals. We are dedicated to
                      helping you navigate the complexities of technology and achieve your business objectives with
                      confidence and efficiency. Contact us today to discover how our software consulting services can
                      drive your success.
                    </span>
                  </Text>
                </div>
              </div>
            </div>
            <div className="absolute bottom-1/4 left-0 right-0 z-[2] m-auto flex flex-1 flex-col items-center">
              <Img
                src="images/img_rectangle_4386.png"
                alt="Image"
                className="h-[164px] w-full object-cover lg:h-auto md:h-auto"
              />
              <div className="container-xs relative mt-[-82px] flex flex-col items-center px-14 lg:px-5 md:px-5">
                <Heading
                  size="heading7xl"
                  as="h2"
                  className="-mb-10 text-[64px] font-bold text-light_blue-900 lg:text-[48px] md:text-[48px]"
                >
                  What we do
                </Heading>
              </div>
            </div>
          </div>
          <div className="relative z-[9] mt-[-2px]">
            <SoftwareRowThree />
            <div className="relative mt-[-8px] flex flex-col gap-[60px] bg-black-900 py-[46px] md:py-5 sm:gap-[30px] sm:py-4">
              <SoftwareRowbrandidentit />
              <SoftwareColumnTwo />
            </div>
          </div>
          <div className="relative z-[12] mt-[-2px] bg-black-900 py-[60px] md:py-5 sm:py-4">
            <SoftwareRowviewOne />
          </div>
          <div className="bg-black-900 py-1.5">
            <div className="mb-[132px] flex items-start md:flex-col">
              <div className="mt-[92px] flex flex-1 flex-col items-end pl-14 pr-[58px] md:self-stretch md:px-5">
                <div className="relative h-[332px] w-[94%] animate-leftToRight ">
                  <Heading
                    size="heading11xl"
                    as="h2"
                    className="absolute left-0 top-0 m-auto font-inter text-[182px] font-bold tracking-[3.64px] text-blue_gray-800_6b lg:text-[48px] md:text-[48px]"
                  >
                    03
                  </Heading>
                  <div className="absolute bottom-[0.87px] left-0 right-0 m-auto flex flex-1 flex-col items-start">
                    <Heading
                      size="heading3xl"
                      as="h3"
                      className="ml-[250px] text-[32px] font-bold leading-[150%] tracking-[-0.61px] text-light_blue-900 lg:text-[27px] md:ml-0 md:text-[26px] sm:text-[24px]"
                    >
                      Software Testing
                    </Heading>
                    <Heading
                      size="heading6xl"
                      as="h4"
                      className="w-[90%] self-end text-[48px] font-semibold leading-[71px] text-white-a700_01 lg:w-full lg:text-[40px] md:w-full md:text-[32px] sm:text-[26px]"
                    >
                      Ensure Software Excellence with Our Expertise
                    </Heading>
                  </div>
                </div>
                <Text
                  as="p"
                  className="mr-11 w-[80%] text-[20px] font-normal leading-[34px] tracking-[0.40px] text-white-a700_01 lg:w-full lg:text-[17px] md:mr-0 md:w-full animate-leftToRight"
                >
                  Ensure software excellence with our expert testing services. We develop robust test strategies, design
                  effective test cases, and implement automation for efficiency. Our focus on performance, security, and
                  usability guarantees top-notch software quality. Let us be your partner in delivering flawless digital
                  products.
                </Text>
              </div>
              <div className="relative h-[770px] w-[44%] content-center self-center lg:h-auto md:h-auto md:w-full md:px-5">
                <Img
                  src="images/img_man_is_looking_770x782.png"
                  alt="Manislooking"
                  className="ml-auto h-[770px] w-[92%] object-contain"
                />
                <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[770px] flex-1 content-end lg:h-auto md:h-auto">
                  <div className="ml-auto mr-2.5 h-[296px] w-[92%] bg-gradient4 lg:mr-0 md:mr-0" />
                  <div className="absolute bottom-0 left-0 right-0 top-0 mx-2.5 my-auto flex h-max flex-1 items-start justify-center lg:mx-0 md:relative md:mx-0 md:flex-col">
                    {/* <div className="relative z-[3] h-[770px] w-[26%] rotate-[90deg] self-center bg-gradient4" /> */}
                    {/* <div className="relative ml-[-310px] h-[296px] w-[68%] bg-gradient4 md:ml-0" /> */}
                  </div>
                  {/* <div className="absolute bottom-0 right-[-0.10px] top-0 my-auto h-[770px] w-[36%] rotate-[-90deg] bg-gradient4" /> */}
                </div>
              </div>
            </div>
          </div>
          <SoftwareRowportraitprof />
          <SoftwareRowourclinet />
          <SoftwareRowSix />
          <div className="mt-[84px] flex flex-col items-center">
            <div className="container-xs relative z-[8] flex flex-col items-end px-1.5 lg:px-5 md:px-5">
              <div className="flex rotate-[0deg] flex-col items-center justify-center rounded-[22px] bg-light_blue-900 px-2.5 py-3.5">
              <Img src="images/img_vector_white_a700_01_14x24.svg" alt="Vector" className="h-[14px]" onClick={scrollToTop} />
              </div>
            </div>
            <div className=" relative mt-[-44px] self-stretch">
              <footer className="  flex">
                <div className="  relative mt-8 h-[314px] w-full">
                  <Img
                    src="images/img_rectangle_4266.png"
                    alt="Image"
                    className="absolute bottom-[-0.34px] left-0 right-0 m-auto h-[278px] w-full flex-1 object-cover"
                  />
                  <Img
                    src="images/img_rectangle_4267_blue_gray_900_01_278x1916.png"
                    alt="Image"
                    className=" absolute bottom-[0.66px] left-0 right-0 m-auto h-[278px] flex-1 object-cover"
                  />
                  <div className="absolute  bottom-0 left-0 top-0 my-auto flex h-max flex-1 items-center lg:mr-0 md:relative md:flex-col">
                    <Img
                      src="images/img_logos_white_1.png"
                      alt="Logoswhiteone"
                      className="h-[212px] w-[20%] object-contain md:w-full"
                    />
                                        
                    <div >
                    <Img src="images/contact.png" className="mb-16"></Img>
                      <div className="relative mt-[-38px]">
                        <div className=" ml-48 flex flex-col items-end gap-[78px] lg:gap-[78px] md:gap-[58px] sm:gap-[39px]">
                          <div className="  flex w-[100%] items-center justify-between gap-5 lg:w-full md:mr-0 md:w-full md:flex-col">
                            
                            <div className=" w-full flex flex-wrap items-end self-end md:self-auto">
                              <a href="Home" target="_blank" rel="noreferrer" className="ml-1  lg:text-[17px]">
                              <Text as="p" className=" text-[20px] font-normal tracking-[1.20px] text-white-a700_01">
                                  Home
                              </Text>
                              </a>
                              <a href="#" className="ml-10 lg:text-[17px]">
                                <Text as="p" className="text-[20px] font-normal tracking-[1.20px] text-white-a700_01">
                                  Study Abroad{" "}
                                </Text>
                              </a>
                              <a href="#" className="ml-10 lg:text-[17px]">
                                <Text as="p" className="text-[20px] font-normal tracking-[1.20px] text-white-a700_01">
                                  Software Consulting
                                </Text>
                              </a>
                              <a href="#" className="ml-9 self-center lg:text-[17px]">
                                <Text as="p" className="text-[20px] font-normal tracking-[1.20px] text-white-a700_01">
                                  About Us{" "}
                                </Text>
                              </a>
                              <a href="#" className="ml-[52px] self-start lg:text-[17px]">
                                <Text as="p" className="text-[20px] font-normal tracking-[-0.38px] text-white-a700_01">
                                  Contact Us
                                </Text>
                              </a>
                            </div>
                            
                            <div className="ml-44 flex w-[24%] items-center justify-between gap-5 md:w-full  ">
                            <a href="https://www.facebook.com/share/XL5X5UrAG4VuFYuy/?mibextid=qi2Omg" target="_blank">
                      <Img src="images/img_close_white_a700_01.svg" alt="Close" className="h-[40px] w-[40px]" />
                      </a>
                      <a href="https://wa.me/message/2I52EUSWYTQBG1" target="_blank">
                      <Img src="images/img_volume_white_a700_01.svg" alt="Volume" className="h-[40px] w-[40px]"  />
                      </a>
                      <a href="https://www.instagram.com/jpetcs?igsh=MW5xNjF3aDN5dTE3bw==" target="_blank">
                      <Img src="images/img_info_white_a700_01.svg" alt="Info" className="h-[40px] w-[40px]" />
                      </a>
                      <a href="https://x.com/jpedutech" target="_blank" >
                      <Img src="images/img_trash.svg" alt="Trash" className="h-[36px]"  />
                      </a>
                            </div>
                          </div>
                          <div className=" flex items-center justify-between gap-5 self-stretch sm:flex-col">
                            <Heading
                              size="headingxs"
                              as="p"
                              className=" -ml-96 text-[14px] font-semibold tracking-[0.28px] text-white-a700_01"
                            >
                              @2024 JP EDU TECH Pvt Ltd. All rights reserved.
                            </Heading>
                            <div className=" flex w-[25%] flex-wrap justify-between  sm:w-full">
                              <a href="#">
                                <Heading
                                  size="headingxs"
                                  as="p"
                                  className="  ml-36 text-[14px] font-semibold tracking-[0.28px] text-white-a700_01"
                                >
                                  Terms{" "}
                                </Heading>
                              </a>
                              <a href="#">
                                <Heading
                                  size="headingxs"
                                  as="p"
                                  className="text-[14px] font-semibold tracking-[0.28px] text-white-a700_01"
                                >
                                  Privacy Policy{" "}
                                </Heading>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
