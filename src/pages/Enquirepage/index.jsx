import { Helmet } from "react-helmet";
import { Img, Heading, Text, Input } from "../../components";
import Header from "../../components/Header";
import EnquirepageRowOne from "./EnquirepageRowOne";
import React from "react";
import ProjectRoutes from 'Routes';

export default function EnquirepagePage() {
  return (
    <>
      <Helmet>
        <title>JP Edu Tech</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      
      <div className="relative  w-full content-center bg-white-a700_01 lg:h-auto md:h-auto">
      <Header className="self-stretch px-14 md:px-5 sm:px-4" />
        <div className="mx-auto flex-1">
          {/* Header Section */}
          <div>
            <div>
              <div>
                <div className="h-[966px] bg-[url(/public/images/img_group_149.png)] bg-cover bg-no-repeat lg:h-auto md:h-auto">
                  <div className="flex flex-col items-center gap-[162px] bg-black-900_a5 lg:gap-[100px] md:gap-[100px] sm:gap-[80px]">
                    
                    <div className="mt-32 container-xs mb-[220px] flex flex-col items-center px-14 lg:px-5 md:px-5">
                      <Heading
                        size="heading9xl"
                        as="h1"
                        className="mt-96 text-[64px] font-bold text-white-a700_01 lg:text-[48px] md:text-[48px]"
                      >
                        Quick Enquire
                      </Heading>
                    </div>
                  </div>
                </div>
                
                {/* Form Section */}
                <div className="relative mt-[-50px] flex flex-col items-center bg-black-900_e0 backdrop-blur-[10px] backdrop-opacity-50">
                  <div className="container-xs mt-[50px] flex flex-col items-start gap-[1.25rem] px-14 lg:px-5 md:px-5 sm:gap-[20px]">
                    <div className="flex w-full justify-between gap-5 lg:flex-col">
                      <div className="mx-2.5 mt-[18px] flex gap-[11px] self-stretch md:mx-0 md:flex-col">
                  <Input
                    shape="square"
                    type="text"
                    name="firstName"
                    placeholder={`First name`}
                    style={{ border: 'none' }} 
                    className="w-[40%] px-2.5 font-semibold tracking-[0.40px] md:w-full md:px-5"
                  />
                  <Input
                    shape="square"
                    type="text"
                    name="lastName"
                    placeholder={`Last name`}
                    style={{ border: 'none' }} 
                    className="w-[22%] px-2.5 font-semibold tracking-[0.40px] md:w-full md:px-5"
                  />
                </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Fields Section */}
              <EnquirepageRowOne />
            </div>
          </div>
          
          {/* Footer Section */}
          <footer className="relative flex h-[230px] bg-[url(/public/images/img_group_2395.png)] bg-cover bg-no-repeat lg:h-auto md:h-auto">
            <div className="flex w-full justify-center bg-blue_gray-900_ce py-3.5">
              <div className="container-xs mt-14 flex justify-center lg:px-5 md:px-5">
                <div className="flex w-full flex-col items-end gap-11">
                  <div className="flex w-[74%] items-center justify-between gap-5 lg:w-full md:w-full md:flex-col">
                    <div className="flex w-[66%] flex-wrap justify-between gap-5 md:w-full">
                      <a href="/home1" target="_self" className="lg:text-[17px]">
                      <Text
                        as="p"
                        className="text-[20px] font-normal tracking-[1.20px] text-white-a700_01 lg:text-[17px]"
                      >
                        Home
                      </Text>
                      </a>
                      <a href="/studyabroad" target="_self" className="lg:text-[17px]">
                      <Text
                        as="p"
                        className="text-[20px] font-normal tracking-[1.20px] text-white-a700_01 lg:text-[17px]"
                      >
                        Study Abroad
                      </Text>
                      </a>
                      <a href="/software" target="_self" className="lg:text-[17px]">
                      <Text
                        as="p"
                        className="text-[20px] font-normal tracking-[1.20px] text-white-a700_01 lg:text-[17px]"
                      >
                        Software Consulting
                      </Text>
                      </a>
                      <a href="/aboutus" target="_self" className="lg:text-[17px]">
                      <Text
                        as="p"
                        className="text-[20px] font-normal tracking-[1.20px] text-white-a700_01 lg:text-[17px]"
                      >
                        About Us
                      </Text>
                      </a>
                      <a href="/ContactUs" target="_self" className="lg:text-[17px]">
                        <Text
                          as="p"
                          className="text-[20px] font-normal tracking-[-0.38px] text-white-a700_01"
                        >
                          Contact Us
                        </Text>
                      </a>
                    </div>

                    {/* Social Icons */}
                    <div className="flex w-[22%] items-center justify-between gap-5 md:w-full" >
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

                  {/* Footer Bottom */}
                  <div className="self-stretch">
                    <div className="flex flex-col gap-8">
                      <div className="h-px bg-white-a700_01" />
                      <div className="flex justify-between gap-5 sm:flex-col">
                        <Heading
                          size="headingxs"
                          as="p"
                          className="text-[14px] font-semibold tracking-[0.28px] text-white-a700_01"
                        >
                          @2024 JP EDU TECH Pvt Ltd. All rights reserved.
                        </Heading>
                        <div className="flex w-[12%] justify-between gap-5 sm:w-full">
                          <a href="#">
                            <Heading
                              size="headingxs"
                              as="p"
                              className="text-[14px] font-semibold tracking-[0.28px] text-white-a700_01"
                            >
                              Terms
                            </Heading>
                          </a>
                          <Heading
                            size="headingxs"
                            as="p"
                            className="text-[14px] font-semibold tracking-[0.28px] text-white-a700_01"
                          >
                            Privacy Policy
                          </Heading>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>

        {/* Logo */}
        <Img
          src="images/img_logos_white_1.png"
          alt="Logoswhiteone"
          className="absolute bottom-[2%] left-[9px] m-auto h-[212px] w-[20%] object-contain"
        />
      </div>
    </>
  );
}
