import { Text, Heading } from "../../components";
import React from "react";

export default function SoftwareRowThree() {
  return (
    <div className="relative z-[11] h-[402px] bg-[url(/public/images/img_group_2267.png)] bg-cover bg-no-repeat lg:h-auto md:h-auto">
      <div className=" -mt-14 flex justify-center bg-black-900_e0 px-14 py-[90px] lg:py-8 md:p-5 sm:p-4">
        <div className="flex w-[96%] flex-col gap-1.5 lg:w-full md:w-full">
          <div className="ml-[158px] mr-[114px] flex items-center justify-center gap-[26px] md:mx-0 md:flex-col">
            <Heading
              size="heading3xl"
              as="h2"
              className="font-nunitosans text-[32px] font-bold tracking-[-0.61px] text-white-a700_01 lg:text-[27px] md:text-[26px] sm:text-[24px]"
            >
              Software Design
            </Heading>
            <div className="mb-[22px] h-[3px] flex-1 self-end bg-white-a700_01 md:self-stretch sm:self-auto" />
            <Heading
              size="heading3xl"
              as="h3"
              className="font-nunitosans text-[32px] font-bold tracking-[-0.61px] text-white-a700_01 lg:text-[27px] md:text-[26px] sm:text-[24px]"
            >
              Software Development
            </Heading>
            <div className="mb-[22px] h-[3px] flex-1 self-end bg-white-a700_01 md:self-stretch sm:self-auto" />
            <Heading
              size="heading3xl"
              as="h4"
              className="font-nunitosans text-[32px] font-bold tracking-[-0.61px] text-white-a700_01 lg:text-[27px] md:text-[26px] sm:text-[24px]"
            >
              Software Testing
            </Heading>
          </div>
          <div className="ml-[34px] flex flex-wrap items-start justify-between gap-5 md:ml-0 md:flex-col">
            <Text
              as="p"
              className="w-[28%] self-center text-center text-[20px] font-normal leading-[30px] tracking-[0.40px] text-white-a700_01 lg:w-[28%] lg:text-[17px] md:w-full"
            >
              Our Software Design consulting services focus on creating innovative and user-centric digital experiences.
              We combine strategic thinking with design expertise to deliver solutions that drive business growth.
            </Text>
            <Text
              as="p"
              className="w-[28%] text-center text-[20px] font-normal leading-[30px] tracking-[0.40px] text-white-a700_01 lg:w-[28%] lg:text-[17px] md:w-full"
            >
              Our Software Development consulting services are designed to propel your business forward. We offer a
              strategic approach to transforming your ideas into robust, scalable software solutions.
            </Text>
            <Text
              as="p"
              className="w-[28%] text-center text-[20px] font-normal leading-[30px] tracking-[0.40px] text-white-a700_01 lg:w-[28%] lg:text-[17px] md:w-full"
            >
              We understand that robust testing is the cornerstone of high-quality software. Our Software Testing
              consulting services are designed to identify and mitigate risks, ensuring your product meets the highest
              standards.
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}
