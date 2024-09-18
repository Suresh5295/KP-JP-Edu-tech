import { Button, TextArea, Input, Img, Text, Heading } from "../../components";
import UserProfile2 from "../../components/UserProfile2";
import React, { Suspense } from "react";

const data = [
  { userImage: "images/img_rectangle_4253.png" },
  { userImage: "images/img_rectangle_4254.png" },
  { userImage: "images/img_rectangle_4255.png" },
];

export default function Home1RowSeven() {
  return (
    <div className="relative mt-[-4px] self-stretch">
      <div className="flex items-center md:flex-col">
        <div className="relative h-[922px] w-[38%] self-end md:w-full md:self-auto md:px-5">
          <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[750px] w-[88%] bg-light_blue-900" />
          <Img
            src="images/img_rectangle_4252_922x646.png"
            alt="Imageteen"
            className="absolute bottom-0 left-0 top-0 my-auto h-[922px] w-[88%] object-contain"
          />
        </div>
        <div className="flex flex-1 flex-col items-start md:self-stretch md:px-5">
          <div className="relative ml-9 h-[444px] self-stretch lg:h-auto md:ml-0 md:h-auto">
            <div className="mt-[68px] flex flex-1 flex-col gap-5">
              <Img src="images/img_close_light_blue_900.svg" alt="Close" className="h-[40px] w-[40px]" />
              <div className="mx-4 flex flex-col items-start gap-3.5 md:mx-0">
                <a href="#" className="lg:text-[48px] md:text-[48px]">
                  <Heading as="p" className="font-playfairdisplay text-[64px] font-medium text-blue_gray-800_01">
                    Contact Us
                  </Heading>
                </a>
                <Text
                  as="p"
                  className="ml-1 w-[58%] text-[20px] font-normal leading-[33px] tracking-[0.40px] text-black-900_02 lg:w-full lg:text-[17px] md:ml-0 md:w-full"
                >
                  <span>
                    Get in touch with us today! Our expert team will guide you through every step of the migration
                    process. Start your journey today with confidence and support from&nbsp;
                  </span>
                  <span className="capitalize">Jp Edu Tech</span>
                  <span className="capitalize">!</span>
                </Text>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 items-center md:relative md:flex-col ">
              <Input
                shape="square"
                type="text"
                name="name"
                placeholder={`Enter your name..`}
                style={{ border: 'none' }} 
                className="relative z-[22] w-[70%]  ml-4 mb-2.5 flex-grow self-end px-2.5 font-nunitosans font-semibold tracking-[0.40px] md:self-auto"
              />
              <Img
                src="images/img_group_blue_gray_100_02_444x328.png"
                alt="Image Twenty"
                className="relative ml-[-18px] h-[444px] w-[28%] object-contain md:ml-0 md:w-full"
              />
            </div>
          </div>
          <Input
            shape="square"
            type="email"
            name="email"
            placeholder={`Enter your email id..`}
            style={{ border: 'none' }} 
            className="ml-14 mt-[18px] w-[70%] px-2.5 font-nunitosans font-semibold tracking-[0.40px] md:ml-0 z-10"
          />
          <TextArea
            shape="square"
            name="television_four"
            placeholder={`Message..`}
            style={{ border: 'none' }} 
            className="ml-14 mt-7 flex w-[70%] gap-4 pl-3.5 pr-0.5 font-nunitosans font-semibold tracking-[0.40px] text-light_blue-900 md:ml-0 md:py-5 sm:py-4"
          />
          <button
            size="9xl"
            shape="square"
            className="ml-14 mt-7 min-w-[206px] font-nunitosans uppercase tracking-[0.64px] md:ml-0 sm:px-4"
          >
           <Img src="images/button_3.png" alt="Image" className=" mt-4 h-[98px] w-[60%] object-contain" onClick={() => window.open("/enquirepage", "_self", "noopener,noreferrer")} />
          </button>
          <div className="ml-[54px] mt-[22px] flex gap-4 self-stretch md:ml-0 md:flex-col">
            <Suspense fallback={<div>Loading feed...</div>}>
              {data.map((d, index) => (
                <UserProfile2 {...d} key={"listvectorone" + index} />
              ))}
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
