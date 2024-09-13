import { Button, TextArea, Text, Heading, Img, Input } from "../../components";
import UserProfile2 from "../../components/UserProfile2";
import React, { Suspense } from "react";

const data = [
  { userImage: "images/img_rectangle_4253.png" },
  { userImage: "images/img_rectangle_4254.png" },
  { userImage: "images/img_rectangle_4255.png" },
];

export default function ResourcesRowTwo() {
  return (
    <div className="mt-[52px] self-stretch">
      <div className="flex items-center md:flex-col">
        <div className="relative h-[922px] w-[38%] self-end md:w-full md:self-auto md:px-5">
          <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[750px] w-[88%] bg-light_blue-900" />
          <Img
            src="images/img_rectangle_4396.png"
            alt="Image"
            className="absolute bottom-0 left-0 top-0 my-auto h-[922px] w-[88%] object-contain"
          />
        </div>
        <div className="flex flex-1 flex-col items-start gap-[26px] md:self-stretch md:px-5">
          <div className="relative ml-9 h-[492px] self-stretch md:ml-0">
            <div className="absolute bottom-0 left-0 right-0 top-0 my-auto ml-5 mr-auto flex h-max flex-1 flex-col items-start lg:ml-0 md:ml-0">
              <div className="flex items-center self-stretch md:flex-col">
                <Input
                  shape="square"
                  type="text"
                  name="name"
                  placeholder={`Enter your name..`}
                  className="relative z-[4] mb-[34px] flex-grow self-end px-2.5 font-semibold tracking-[0.40px] md:self-auto"
                />
                <Img
                  src="images/img_group_blue_gray_100_02_444x328.png"
                  alt="Image"
                  className="relative ml-[-16px] h-[444px] w-[28%] object-contain md:ml-0 md:w-full"
                />
              </div>
              <Input
                shape="square"
                type="email"
                name="email"
                placeholder={`Enter your email id..`}
                className="relative mt-[-4px] w-[72%] px-2.5 font-semibold tracking-[0.40px]"
              />
            </div>
            <div className="absolute left-0 right-0 top-[8%] m-auto flex flex-1 flex-col gap-6">
              <Img src="images/img_close_light_blue_900.svg" alt="Close" className="h-[40px] w-[40px]" />
              <div className="mx-4 flex flex-col items-start gap-5 md:mx-0">
                <a href="#" className="lg:text-[48px] md:text-[48px]">
                  <Heading as="h2" className="font-playfairdisplay text-[64px] font-medium text-blue_gray-800_01">
                    Contact Us
                  </Heading>
                </a>
                <Text
                  as="p"
                  className="w-[58%] text-[20px] font-normal leading-[33px] tracking-[0.40px] text-black-900_02 lg:w-full lg:text-[17px] md:w-full"
                >
                  Get in touch with us today! Our expert team will guide you through every step of the migration
                  process. Start your journey today with confidence and support from Jp Edu Tech!
                </Text>
              </div>
            </div>
          </div>
          <TextArea
            shape="square"
            name="television_four"
            placeholder={`Message..`}
            className="ml-14 flex w-[72%] gap-4 pl-3.5 pr-0.5 font-semibold tracking-[0.40px] text-light_blue-900 md:ml-0 md:py-5 sm:py-4"
          />
          <Button
            size="9xl"
            shape="square"
            className="ml-14 min-w-[206px] px-[34px] font-nunitosans uppercase tracking-[0.64px] md:ml-0 sm:px-4"
          >
            Send
          </Button>
          <div className="ml-[54px] flex gap-4 self-stretch md:ml-0 md:flex-col">
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
