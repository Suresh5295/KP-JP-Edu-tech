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
  return (
    <>
      <Helmet>
        <title>JP Edu Tech</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-white-a700_01">
        <div>
          <div className="relative h-[1352px] content-center lg:h-auto md:h-auto">
            <div className="mx-auto flex-1">
              <div className="relative z-[1] h-[966px] bg-[url(/public/images/img_rectangle_4187.png)] bg-cover bg-no-repeat lg:h-auto md:h-auto">
                <div className="flex flex-col gap-[194px] bg-black-900_a5 lg:gap-[145px] md:gap-[145px] sm:gap-[97px]">
                  <Header className="px-14 md:px-5 sm:px-4" />
                  <SoftwareColumn />
                </div>
              </div>
              <div className="relative mt-[-50px] flex justify-center bg-black-900 py-[78px] lg:py-8 md:py-5 sm:py-4">
                <div className="container-xs mt-12 flex justify-center px-14 lg:px-5 md:px-5">
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
                  className="text-[64px] font-bold text-light_blue-900 lg:text-[48px] md:text-[48px]"
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
                <div className="relative h-[332px] w-[94%]">
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
                      className="ml-[234px] text-[32px] font-bold leading-[150%] tracking-[-0.61px] text-light_blue-900 lg:text-[27px] md:ml-0 md:text-[26px] sm:text-[24px]"
                    >
                      Software Testing
                    </Heading>
                    <Heading
                      size="heading6xl"
                      as="h4"
                      className="w-[84%] self-end text-[48px] font-semibold leading-[71px] text-white-a700_01 lg:w-full lg:text-[40px] md:w-full md:text-[32px] sm:text-[26px]"
                    >
                      Ensure Software Excellence with Our Expertise
                    </Heading>
                  </div>
                </div>
                <Text
                  as="p"
                  className="mr-11 w-[80%] text-[20px] font-normal leading-[34px] tracking-[0.40px] text-white-a700_01 lg:w-full lg:text-[17px] md:mr-0 md:w-full"
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
                    <div className="relative z-[3] h-[770px] w-[26%] rotate-[90deg] self-center bg-gradient4" />
                    <div className="relative ml-[-310px] h-[296px] w-[68%] bg-gradient4 md:ml-0" />
                  </div>
                  <div className="absolute bottom-0 right-[-0.10px] top-0 my-auto h-[770px] w-[36%] rotate-[-90deg] bg-gradient4" />
                </div>
              </div>
            </div>
          </div>
          <SoftwareRowportraitprof />
          <SoftwareRowourclinet />
          <SoftwareRowSix />
          <div className="mt-[84px] flex flex-col items-center">
            <div className="container-xs relative z-[8] flex flex-col items-end px-1.5 lg:px-5 md:px-5">
              <div className="flex rotate-[90deg] flex-col items-center justify-center rounded-[22px] bg-light_blue-900 px-2.5 py-3.5">
                <Img src="images/img_vector_white_a700_01_14x24.svg" alt="Vector" className="h-[14px]" />
              </div>
            </div>
            <div className="relative mt-[-44px] self-stretch">
              <footer className="flex">
                <div className="relative mt-8 h-[314px] w-full">
                  <Img
                    src="images/img_rectangle_4266.png"
                    alt="Image"
                    className="absolute bottom-[-0.34px] left-0 right-0 m-auto h-[278px] w-full flex-1 object-cover"
                  />
                  <Img
                    src="images/img_rectangle_4267_blue_gray_900_01_278x1916.png"
                    alt="Image"
                    className="absolute bottom-[0.66px] left-0 right-0 m-auto h-[278px] flex-1 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 top-0 my-auto mr-32 flex h-max flex-1 items-center lg:mr-0 md:relative md:mr-0 md:flex-col">
                    <Img
                      src="images/img_logos_white_1.png"
                      alt="Logoswhiteone"
                      className="h-[212px] w-[20%] object-contain md:w-full"
                    />
                    <div className="container-xs lg:px-5 md:px-5">
                      <div className="relative z-[5] ml-[334px] mr-[316px] h-[194px] bg-light_blue-900 md:mx-0">
                        <div className="absolute bottom-0 left-0 top-0 my-auto mr-[92px] flex h-max flex-1 flex-col lg:mr-0 md:mr-0">
                          <div className="relative z-[6] flex gap-6 md:flex-col">
                            <div className="mt-1.5 flex w-[8%] flex-col bg-white-a700_01 px-5 md:mt-0 md:w-full">
                              <Img src="images/img_icon.svg" alt="Call Us Anytime" className="h-[74px]" />
                            </div>
                            <Heading
                              size="headingmd"
                              as="h6"
                              className="mb-[50px] mt-1.5 w-[18%] text-[17.6px] font-bold leading-6 text-white-a700_01 lg:w-[18%] lg:text-[14px] md:my-0 md:w-full"
                            >
                              Call Us Anytime
                            </Heading>
                            <div className="mt-1.5 flex w-[40%] items-center gap-6 md:mt-0 md:w-full">
                              <div className="w-[24%] bg-white-a700_01 px-5">
                                <Img
                                  src="images/img_icon_light_blue_900.svg"
                                  alt="Icon"
                                  className="h-[74px] w-full lg:h-auto md:h-auto"
                                />
                              </div>
                              <div className="flex flex-1 flex-col items-start gap-0.5">
                                <Heading
                                  size="headingmd"
                                  as="h6"
                                  className="text-[17.6px] font-bold leading-6 text-white-a700_01 lg:text-[14px]"
                                >
                                  Send Mail
                                </Heading>
                                <Text
                                  as="p"
                                  className="text-[20px] font-light tracking-[-0.38px] text-white-a700_01 lg:text-[17px]"
                                >
                                  jpedutechcs@gmail.com  
                                </Text>
                              </div>
                            </div>
                            <div className="flex w-[28%] items-start gap-6 md:w-full">
                              <div className="mt-1.5 flex w-[34%] flex-col items-center self-end bg-white-a700_01 p-5">
                                <Img src="images/img_linkedin.svg" alt="Linkedin" className="h-[32px]" />
                              </div>
                              <Heading
                                size="headingmd"
                                as="h6"
                                className="text-[17.6px] font-bold leading-6 text-white-a700_01 lg:text-[14px]"
                              >
                                Our Branche&#39;s
                              </Heading>
                            </div>
                          </div>
                          <div className="relative ml-[88px] mt-[-50px] flex w-[20%] flex-col items-start gap-11 lg:w-full md:ml-0 md:w-full">
                            <Text
                              size="textxs"
                              as="p"
                              className="self-end text-[16px] font-normal leading-[30px] text-white-a700_01 lg:text-[13px]"
                            >
                              <>
                                +91 9704428144
                                <br />
                                +91 8247510882
                              </>
                            </Text>
                            <a href="Home" target="_blank" rel="noreferrer" className="lg:text-[17px]">
                              <Text as="p" className="text-[20px] font-normal tracking-[1.20px] text-white-a700_01">
                                Home
                              </Text>
                            </a>
                          </div>
                        </div>
                        <Text
                          size="textxs"
                          as="p"
                          className="absolute right-px top-[15.34px] z-[7] m-auto w-[22%] text-[16px] font-normal leading-[30px] text-white-a700_01 lg:text-[13px]"
                        >
                          <>
                            Kurnool, Hyderabad, <br />
                            Guntur, Melbourne(Australia)
                          </>
                        </Text>
                      </div>
                      <div className="relative mt-[-38px]">
                        <div className="flex flex-col items-end gap-[78px] lg:gap-[78px] md:gap-[58px] sm:gap-[39px]">
                          <div className="mr-3 flex w-[66%] items-center justify-between gap-5 lg:w-full md:mr-0 md:w-full md:flex-col">
                            <div className="flex flex-wrap items-end self-end md:self-auto">
                              <a href="#" className="mt-1 lg:text-[17px]">
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
                            <div className="flex w-[24%] items-center justify-between gap-5 md:w-full">
                              <Img src="images/img_close_white_a700_01.svg" alt="Close" className="h-[40px] w-[40px]" />
                              <Img
                                src="images/img_volume_white_a700_01.svg"
                                alt="Volume"
                                className="h-[40px] w-[40px]"
                              />
                              <Img src="images/img_info_white_a700_01.svg" alt="Info" className="h-[40px] w-[40px]" />
                              <Img src="images/img_trash.svg" alt="Trash" className="h-[36px]" />
                            </div>
                          </div>
                          <div className="flex items-center justify-between gap-5 self-stretch sm:flex-col">
                            <Heading
                              size="headingxs"
                              as="p"
                              className="text-[14px] font-semibold tracking-[0.28px] text-white-a700_01"
                            >
                              @2024 JP EDU TECH Pvt Ltd. All rights reserved.
                            </Heading>
                            <div className="flex w-[12%] flex-wrap justify-between gap-5 sm:w-full">
                              <a href="#">
                                <Heading
                                  size="headingxs"
                                  as="p"
                                  className="text-[14px] font-semibold tracking-[0.28px] text-white-a700_01"
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
