import { Img, Heading, Text } from "../../components";
import UserProfile4 from "../../components/UserProfile4";
import React, { Suspense } from "react";

const data = [
  { userImage: "images/img_view_3d_compute.png", userBrandIdentity: "Brand Identity Design" },
  { userImage: "images/img_digital_art_sty.png", userBrandIdentity: "Educational Materials" },
  { userImage: "images/img_clean_minimalis.png", userBrandIdentity: "UI/UX Design" },
  { userImage: "images/img_video_files_con.png", userBrandIdentity: "Multimedia Content" },
];

export default function SoftwareRowbrandidentit() {
  return (
    <div className="flex justify-end">
      <div className="flex w-[94%] flex-col gap-[38px] lg:w-full lg:px-5 md:w-full md:px-5">
        <div className="flex items-center md:flex-col">
          <div className="flex flex-1 flex-col items-end md:self-stretch">
            <div className="relative h-[312px] self-stretch">
              <Heading
                size="heading11xl"
                as="h5"
                className="absolute left-0 top-0 m-auto font-inter text-[182px] font-bold tracking-[3.64px] text-blue_gray-800_6b lg:text-[48px] md:text-[48px]"
              >
                01
              </Heading>
              <div className="absolute bottom-[0.87px] left-0 right-0 m-auto flex flex-1 flex-col items-start pl-[118px] pr-14 lg:pl-8 md:px-5 sm:px-4">
                <Heading
                  size="heading3xl"
                  as="h6"
                  className="ml-24 text-[32px] font-bold leading-[150%] tracking-[-0.61px] text-light_blue-900 lg:text-[27px] md:ml-0 md:text-[26px] sm:text-[24px]"
                >
                  Software Designing
                </Heading>
                <Heading
                  size="heading6xl"
                  as="h1"
                  className="w-[92%] text-[48px] font-semibold leading-[71px] text-white-a700_01 lg:w-full lg:text-[40px] md:w-full md:text-[32px] sm:text-[26px]"
                >
                  Transforming Ideas into Exceptional Software
                </Heading>
              </div>
            </div>
            <Text
              as="p"
              className="mr-7 w-[88%] text-[20px] font-normal leading-[30px] tracking-[0.40px] text-white-a700_01 lg:w-full lg:text-[17px] md:mr-0 md:w-full"
            >
              <span>At&nbsp;</span>
              <span className="capitalize">
                JP Edu Tech, software designing is more than just creating functional applications—it’s about crafting
                tailored solutions that drive progress and enhance experiences in the education sector. Our design
                process blends creativity with technical expertise to build software that meets the unique needs of
                educational institutions, educators, and learners.
              </span>
            </Text>
            <div className="mr-[68px] mt-[58px] flex w-[86%] flex-col items-start lg:w-full md:mr-0 md:w-full">
              <Heading
                size="heading3xl"
                as="h2"
                className="font-nunitosans text-[32px] font-bold tracking-[-0.61px] text-white-a700_01 lg:text-[27px] md:text-[26px] sm:text-[24px]"
              >
                Graphic Design :{" "}
              </Heading>
              <Heading
                size="headinglg"
                as="h5"
                className="mt-2 text-[20px] font-semibold text-light_blue-900 lg:text-[17px]"
              >
                Transforming Ideas into Visual Masterpieces
              </Heading>
              <Text
                as="p"
                className="mt-[18px] w-full text-[20px] font-normal leading-[30px] tracking-[0.40px] text-white-a700_01 lg:text-[17px]"
              >
                <span>
                  Graphic design is crucial for creating visually engaging and effective educational materials. At&nbsp;
                </span>
                <span className="capitalize">
                  JP Edu Tech, our Graphic Design services focus on delivering high-quality visuals that capture
                  attention and communicate your message effectively.
                </span>
              </Text>
            </div>
            <Heading
              size="headinglg"
              as="h5"
              className="ml-[120px] mt-[88px] self-start text-[20px] font-semibold text-light_blue-900 lg:text-[17px] md:ml-0"
            >
              Our Graphic Design Services Include:
            </Heading>
          </div>
          <div className="relative h-[774px] w-[44%] content-center overflow-auto lg:h-auto md:h-auto md:w-full">
            <Img
              src="images/img_quoteducational.png"
              alt="Quoteducational"
              className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[770px] flex-1 object-cover"
            />
            <Img
              src="images/img_rectangle_4466.png"
              alt="Image"
              className="absolute bottom-[1.17px] left-0 right-0 m-auto h-[296px] flex-1 object-cover"
            />
            <div className="mx-auto flex flex-1 items-start md:flex-col">
              <div className="relative z-10 h-[770px] w-[28%] rotate-[90deg] self-center bg-gradient4" />
              <Img
                src="images/img_rectangle_4466.png"
                alt="Image"
                className="relative ml-[-310px] h-[296px] w-[70%] object-contain md:ml-0 md:w-full"
              />
            </div>
            <Img
              src="images/img_rectangle_4500.png"
              alt="Image"
              className="absolute bottom-0 right-[-0.10px] top-0 my-auto h-[770px] w-[38%] object-contain"
            />
          </div>
        </div>
        <div className="container-xs px-[50px] md:px-5 sm:px-4">
          <div className="ml-[22px] flex gap-3.5 md:ml-0 md:flex-col">
            <Suspense fallback={<div>Loading feed...</div>}>
              {data.map((d, index) => (
                <UserProfile4 {...d} key={"listbrandidenti" + index} />
              ))}
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
