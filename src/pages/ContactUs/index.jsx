import { Helmet } from "react-helmet";
import { Heading, Img, Button, TextArea, Input } from "../../components";
import Header from "../../components/Header";
import UserProfile6 from "../../components/UserProfile6";
import ContactusColumn from "./ContactusColumn";
import ContactusColumnThree from "./ContactusColumnThree";
import React, { Suspense } from "react";

const data = [
  { userImage: "images/img_rectangle_4253.png" },
  { userImage: "images/img_rectangle_4254.png" },
  { userImage: "images/img_rectangle_4255.png" },
];
const data1 = [
  { png: "images/img_2_1_png.png" },
  { png: "images/img_1_1_png.png" },
  { png: "images/img_2_1_png_40x136.png" },
  { png: "images/img_4_1_png.png" },
  { png: "images/img_1_1_png.png" },
  { png: "images/img_4_1_png.png" },
];

export default function ContactUsPage() {
  return (
    <>
      <Helmet>
        <title>JP Edu Tech</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>

      <div className="w-full bg-white-a700_01">
        <div className="flex flex-col items-center">
          <div className="relative content-center self-stretch lg:h-auto md:h-auto">
            <div className="mx-auto flex-1">
              <div className="relative z-[1]">
                {/* Header Section */}
                <Header className="self-stretch px-14 md:px-5 sm:px-4 bg-white z-50 relative" />
                <div className="h-[958px] bg-[url(/public/images/img_group_233.png)] bg-cover bg-no-repeat lg:h-auto md:h-auto">
                  <div className="h-[958px] bg-[url(/public/images/img_group_11.png)] bg-cover bg-no-repeat lg:h-auto md:h-auto">
                    <div className="mb-[358px] flex flex-col items-center justify-center gap-[368px] lg:gap-[276px] md:gap-[276px] sm:gap-[184px]">
                      <div className="container-xs flex flex-col items-center px-14 lg:px-5 md:px-5">
                      <Img
                          src="images/con_1.svg"
                          alt="Close"
                          className="mb-5 h-[8px] w-[5%] self-end object-contain sm:mb-0 sm:w-full sm:self-auto"
                        />
                        <Heading
                          size="heading9xl"
                          as="h1"
                          className="font-semibold text-white-a700_01 mt-96"
                        >
                          How Can we Help You?
                        </Heading>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Us Form Section */}
                <div className="relative mt-[-22px] h-[980px] bg-[url(/public/images/img_group_236.svg)] bg-cover bg-no-repeat py-[138px] lg:h-auto lg:py-8 md:h-auto md:py-5 sm:py-4">
                  <ContactusColumn />
                </div>
              </div>

              {/* Message Section */}
              <div className="relative mt-[-16px] flex items-center justify-center bg-[url(/public/images/img_group_6_white_a700_01.png)] bg-cover bg-no-repeat py-10 lg:h-auto md:h-auto sm:py-4">
                <div className="container-xs flex flex-col justify-center px-[38px] lg:px-5 md:px-5">
                  <div className="w-full">
                    <div className="flex flex-col items-start">
                      <div className="flex items-center justify-between gap-11 self-stretch sm:flex-col">
                        <Heading
                          size="heading5xl"
                          as="h3"
                          className="text-[40px] font-semibold text-light_blue-900 lg:text-[34px] md:text-[34px] sm:text-[32px]"
                        >
                          <span className="text-light_blue-900">Send a&nbsp;</span>
                          <span className="text-gray-800">Message</span>
                        </Heading>
                        <Img
                          src="images/img_close_light_blue_900_8x84.svg"
                          alt="Close"
                          className="mb-5 h-[8px] w-[5%] self-end object-contain sm:mb-0 sm:w-full sm:self-auto"
                        />
                      </div>

                      <div className="mt-[50px] flex flex-wrap gap-[15px]">
                        <Input
                          size="xl"
                          shape="square"
                          type="text"
                          name="firstName"
                          placeholder="First name"
                          style={{ border: 'none' }}
                          className="w-[48%] px-[18px] font-semibold leading-[30px] tracking-[0.48px] md:w-full"
                        />
                        <Input
                          size="xl"
                          shape="square"
                          type="text"
                          name="lastName"
                          placeholder="Last name"
                          style={{ border: 'none' }}
                          className="w-[48%] px-[18px] font-semibold leading-[30px] tracking-[0.48px] md:w-full"
                        />
                      </div>

                      <Input
                        size="xl"
                        shape="square"
                        type="email"
                        name="email"
                        placeholder="Email address"
                        style={{ border: 'none' }}
                        className="mt-[40px] w-[60%] px-[18px] font-semibold leading-[30px] tracking-[0.48px] md:w-full"
                      />
                      <Input
                        size="xl"
                        shape="square"
                        type="number"
                        name="mobileNumber"
                        placeholder="Mobile number"
                        style={{ border: 'none' }}
                        className="mt-[40px] w-[60%] px-[18px] font-semibold leading-[30px] tracking-[0.48px] md:w-full"
                      />
                      <TextArea
                        size="xl"
                        shape="square"
                        name="comments"
                        placeholder="Comments..."
                        style={{ border: 'none' }}
                        className="mt-[40px] w-[60%] px-5 font-semibold leading-[30px] tracking-[0.48px] text-light_blue-900 md:w-full"
                      />
                      <Button
                        size="7xl"
                        shape="square"
                        className="mt-[40px] min-w-[200px] px-[34px] font-nunitosans font-bold tracking-[0.96px] sm:px-4"
                      >
                        Send
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side Column */}
            <div className="absolute bottom-0 left-0 right-0 m-auto h-[1060px] flex-1">
              <Img
                src="images/img_rectangle_4252.png"
                alt="Image"
                className="absolute bottom-0 right-0 top-0 my-auto h-[1060px] w-[34%] object-contain"
              />
              <ContactusColumnThree />
            </div>
          </div>

          {/* Footer Section */}
          <div className="container-xs mt-32 flex flex-col gap-[118px] px-[34px] lg:gap-[118px] lg:px-5 md:gap-[88px] md:px-5 sm:gap-[59px]">
            <div className="ml-[164px] mr-[150px] flex gap-[18px] md:mx-0 md:flex-col">
              <Suspense fallback={<div>Loading feed...</div>}>
                {data.map((d, index) => (
                  <UserProfile6 {...d} key={"listvectorone" + index} />
                ))}
              </Suspense>
            </div>
            <div className="ml-2 flex gap-[156px] md:ml-0 md:flex-col ">
              <Suspense fallback={<div>Loading feed...</div>}>
                {data1.map((d, index) => (
                  <Img
                    key={"listpng" + index}
                    src={d.png}
                    alt="Png"
                    className="h-[40px] w-[16%] object-contain opacity-40 md:w-full mb-10"
                  />
                ))}
              </Suspense>
            </div>
          </div>

          {/* Footer Copyright */}
          <div className=" h-[270px] self-stretch bg-[url(/public/images/img_group_2023.png)] bg-cover bg-no-repeat lg:h-auto md:h-auto">
            <ul className="flex h-[270px] items-center bg-[url(/public/images/img_group_2402.png)] bg-cover bg-no-repeat px-2 py-1.5 lg:h-auto md:h-auto">
              <li>
                  <div className="flex w-[94%] flex-col items-end gap-4 lg:w-full md:w-full">
                    <div className="flex items-center justify-between gap-72 self-stretch md:flex-col">
                      <div className="flex w-[96%] ml-14 items-center justify-between gap-10 md:w-full md:flex-col">
                        <Img
                          src="images/img_logos_white_1.png"
                          alt="Logoswhiteone"
                          className="h-[212px] w-[28%] object-contain md:w-full"
                        />
                        <ul className="!mb-[60px] flex w-[100%] flex-wrap justify-between gap-5 self-end md:w-full md:self-auto">
                          <li>
                            <Heading
                              as="p"
                              size="headingxs"
                              className="text-[20px] font-normal tracking-[1.20px] text-white-a700_01 lg:text-[17px]"
                            >
                              Home
                            </Heading>
                          </li>
                          <li>
                            <Heading
                              as="p"
                              size="headingxs"
                              className="self-end text-[20px] font-normal tracking-[1.20px] text-white-a700_01 lg:text-[17px]"
                            >
                              Study Abroad
                            </Heading>
                          </li>
                          <li>
                            <Heading
                              as="p"
                              size="headingxs"
                              className="self-end text-[20px] font-normal tracking-[1.20px] text-white-a700_01 lg:text-[17px]"
                            >
                              Software Consulting
                            </Heading>
                          </li>
                          <li>
                            <Heading
                              as="p"
                              size="headingxs"
                              className="text-[20px] font-normal tracking-[1.20px] text-white-a700_01 lg:text-[17px]"
                            >
                              About Us
                            </Heading>
                          </li>
                          <li>
                            <Heading
                              as="p"
                              size="headingxs"
                              className="self-start text-[20px] font-normal tracking-[-0.38px] text-white-a700_01 lg:text-[17px]"
                            >
                              Contact Us
                            </Heading>
                          </li>
                        </ul>
                      </div>
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
                    <div className="self-stretch">
                    <div className="flex gap-4 self-center ml-10" >
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
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
