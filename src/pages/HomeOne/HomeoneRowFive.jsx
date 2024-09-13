import { Img, Button, Text, Heading } from "../../components";
import React from "react";

export default function HomeoneRowFive() {
  return (
    <div className="mt-[38px] self-stretch px-14 md:px-5 sm:px-4">
      <div className="flex items-center md:flex-col">
        <div className="relative h-[820px] flex-1 md:w-full md:flex-none md:self-stretch">
          <Img
            src="images/img_group_18.png"
            alt="Imageteen"
            className="absolute left-0 top-0 m-auto h-[512px] w-[32%] object-contain"
          />
          <Img
            src="images/img_rectangle_4249.png"
            alt="Imageteen"
            className="absolute bottom-0 left-[21%] top-0 my-auto h-[686px] w-[58%] rounded-[226px] object-contain"
          />
          <Img
            src="images/img_rectangle_4250.png"
            alt="Imageeen"
            className="absolute bottom-[-1px] right-[23%] m-auto h-[472px] w-[42%] rounded-[154px] object-contain"
          />
        </div>
        <div className="mb-10 flex w-[46%] flex-col items-start gap-4 self-end md:w-full md:self-auto">
          <Img src="images/img_close_light_blue_900.svg" alt="Close" className="h-[40px] w-[40px]" />
          <Heading
            as="p"
            className="font-playfairdisplay text-[64px] font-medium text-blue_gray-800_01 lg:text-[48px] md:text-[48px]"
          >
            Resources
          </Heading>
          <Text
            as="p"
            className="w-[76%] font-nunitosans text-[20px] font-normal leading-[30px] tracking-[0.40px] text-black-900_02 lg:w-full lg:text-[17px] md:w-full"
          >
            Our Resources section is designed to provide you with the tools and knowledge you need for a successful
            study abroad or immigration experience. Explore our curated collection of articles, blogs, and helpful links
            to stay informed and make well-informed decisions.
          </Text>
          <div className="relative h-[276px] self-stretch">
            <Button
              shape="square"
              className="absolute left-0 top-0 m-auto min-w-[200px] px-[34px] font-nunitosans font-bold tracking-[1.20px] sm:px-4"
            >
              Know More
            </Button>
            <Img
              src="images/img_group_13.png"
              alt="Imageteen"
              className="absolute bottom-0 left-[13%] top-0 my-auto h-[264px] w-[64%] object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
