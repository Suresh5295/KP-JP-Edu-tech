import { Text, Img, Heading, Button, TextArea, Input } from "../../components";
import React from "react";

export default function EnquirepageRowOne() {
  return (
    <div className="relative mt-[-262px] h-auto bg-[url(/public/images/img_group_1465.png)] bg-cover bg-no-repeat lg:h-auto md:h-auto">
      <div className="flex justify-center bg-black-900_e0 py-[52px] md:py-5 sm:py-4">
        <div className="container-xs mt-[272px] flex justify-center px-14 lg:px-5 md:px-5">
          <div className="flex w-[74%] flex-col items-start lg:w-full md:w-full">
          <Input
              size="lg"
              shape="square"
              type="email"
              name="email"
              placeholder="Email address"
              className="self-stretch px-4 font-semibold tracking-[0.40px]"
            />
            <Input
              size="lg"
              shape="square"
              type="number"
              name="mobileNumber"
              placeholder="Mobile number"
              className="mt-[32px] self-stretch px-4 font-semibold tracking-[0.40px]"
            />
            <Input
              size="lg"
              shape="square"
              name="preferredDestination"
              placeholder="Your preferred study destination"
              className="mt-[32px] self-stretch px-4 font-semibold tracking-[0.40px]"
            />
            <Input
              size="lg"
              shape="square"
              name="studyPlan"
              placeholder="When do you plan to study?"
              className="mt-[32px] self-stretch px-4 font-semibold tracking-[0.40px]"
            />
            <TextArea
              size="lg"
              shape="square"
              name="comments"
              placeholder="Comments..."
              className="mt-10 self-stretch px-[22px] font-semibold tracking-[0.40px] text-light_blue-900 sm:px-4"
            />
            <Button
              size="4xl"
              shape="square"
              className="mt-10 min-w-[300px] px-[24px] font-nunitosans font-bold tracking-[1.20px] sm:px-4"
            >
              Get Experts Advice
            </Button>
            <Heading
              size="headinglg"
              as="h3"
              className="mt-[30px] text-[20px] font-semibold tracking-[0.40px] text-white-a700_01 lg:text-[17px]"
            >
              Talk to Our Visa Experts
            </Heading>
            <div className="mt-[22px] flex items-center gap-[20px] self-stretch sm:flex-col">
              <Img
                src="/images/img_icon_white_a700_01.svg"
                alt="Icon"
                className="h-[40px] w-[3%] object-contain sm:w-full"
              />
              <Text
                as="p"
                className="mb-3 self-end text-[20px] font-normal text-white-a700_01 lg:text-[17px] sm:mb-0 sm:self-auto"
              >
                +91 8247510882 +91 9704428144
              </Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}