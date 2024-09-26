import { Text, Img, Button, Heading } from "../../components";
import React from "react";

export default function ResourcesRow() {
  return (
    <div className="flex justify-center self-stretch px-14 md:px-5 sm:px-4">
      <div className="flex w-[96%] items-start justify-center lg:w-full md:w-full md:flex-col">
        <div className="mt-[100px] flex w-[54%] flex-col gap-3.5 md:w-full">
          <div className="flex items-center gap-[35px] animate-leftToRight">
            <Heading
              size="heading6xl"
              as="h5"
              className="text-[48px] font-bold text-white-a700_01 lg:text-[40px] md:text-[32px] sm:text-[26px]"
            >
              News{" "}
            </Heading>
            <Img
              src="images/img_close_light_blue_900_8x84.svg"
              alt="Close"
              className="mb-[26px] h-[8px] w-[8%] self-end object-contain"
            />
          </div>
          <div className="flex flex-col items-start gap-5">
            <Text
              as="p"
              className="w-[90%] text-[20px] font-normal leading-[30px] tracking-[0.40px] text-white-a700_01 lg:w-full lg:text-[17px] md:w-full animate-leftToRight"
            >
              Stay updated with the latest news and announcements from Jp Edu Tech. We bring you valuable insights on
              migration, education, and career opportunities. Our news section keeps you informed about new developments
              and important changes. From helpful tips to exciting updates, find everything you need to stay ahead.
              Check back often to ensure you don’t miss out on the information that matters to you.
            </Text>
            {/* <button
                        shape="square"
                          className="min-w-[198px] pr-[34px] font-nunitosans font-bold tracking-[1.20px] sm:px-4"
                          >
                        <Img src="images/button_4.png" alt="Appointment Image" className="h-[60px] w-auto object-contain" />
                      </button> */}
          </div>
        </div>
        <div className="flex w-[44%] justify-center self-center md:w-full md:flex-col">
          <div className="flex flex-1 flex-col gap-2.5 md:self-stretch">
            <div className="relative h-[298px] mt-4">
              <Img
                src="images/img_rectangle_4403.png"
                alt="Image"
                className="absolute bottom-0 right-[-0.50px] top-0 my-auto h-[298px] w-[74%] object-contain"
              />
            </div>
            <div className="relative h-[322px]">
              <Img
                src="images/img_rectangle_4188_1.png"
                alt="Image"
                className="absolute right-0 top-0 m-auto h-[288px] w-[74%] object-contain"
              />
              <div className="absolute right-2.5 top-0 m-auto h-[298px] w-[76%]" />
            </div>
          </div>
          <div className="relative h-[630px] w-[44%] md:w-full">
            <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[606px] flex-1 content-center lg:h-auto md:h-auto">
              <Img
                src="images/img_rectangle_4403_606x320.png"
                alt="Image"
                className="mx-auto h-[590px] flex-1 object-cover"
              />
              <div className="absolute bottom-[-1px] left-0 right-0 m-auto h-[298px] flex-1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
