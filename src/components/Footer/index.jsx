import { Img, Heading, Text } from "./..";
import React from "react";

export default function Footer({ ...props }) {
  return (
    <footer {...props} className={`${props.className} flex self-stretch items-center mt-[-82px] relative`}>
      <div className="w-full">
        <div className="relative h-[278px] content-center bg-[url(/public/images/img_group_943.png)] bg-cover bg-no-repeat lg:h-auto md:h-auto">
          <Img
            src="images/img_rectangle_4267.png"
            alt="Image Twentyone"
            className="mx-auto h-[278px] w-full flex-1 object-cover"
          />
          <div className="container-xs absolute bottom-4 left-0 right-0 my-auto flex lg:px-5 md:px-5">
            <div className="flex w-full flex-col items-end gap-[78px] lg:gap-[78px] md:gap-[58px] sm:gap-[39px]">
              <div className="mr-3 flex w-[74%] items-center justify-between gap-5 lg:w-full md:mr-0 md:w-full md:flex-col">
                <ul className="flex w-[66%] flex-wrap justify-between gap-5 self-end md:w-full md:self-auto">
                  <li>
                  <a href="/home1" target="_self" rel="noreferrer" className="lg:text-[17px]">
                      <Text as="p" className="text-[20px] font-normal tracking-[1.20px] text-white-a700_01">
                        Home
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="/studyabroad" target="_self" className="self-end lg:text-[17px]">
                      <Text as="p" className="text-[20px] font-normal tracking-[1.20px] text-white-a700_01">
                        Study Abroad{" "}
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="/software" target="_self" className="self-end lg:text-[17px]">
                      <Text as="p" className="text-[20px] font-normal tracking-[1.20px] text-white-a700_01">
                        Software Consulting
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="/aboutus" target="_self" className="lg:text-[17px]">
                      <Text as="p" className="text-[20px] font-normal tracking-[1.20px] text-white-a700_01">
                        About Us{" "}
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="/contactus" target="_self" className="self-start lg:text-[17px]">
                      <Text as="p" className="text-[20px] font-normal tracking-[-0.38px] text-white-a700_01">
                        Contact Us
                      </Text>
                    </a>
                  </li>
                </ul>
                <div className="flex w-[22%] items-center justify-between gap-5 md:w-full">
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
              <div className="flex items-center justify-between gap-5 self-stretch sm:flex-col">
                <Heading
                  size="headingxs"
                  as="p"
                  className="text-[14px] font-semibold tracking-[0.28px] text-white-a700_01"
                >
                  @2024 JP Edu Tech Consulting Serivces Pvt Ltd. All rights reserved.
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
          <Img
            src="images/img_logos_white_1.png"
            alt="Logoswhiteone"
            className="absolute left-px top-2.5 m-auto h-[212px] w-[20%] object-contain"
          />
        </div>
      </div>
    </footer>
  );
}
