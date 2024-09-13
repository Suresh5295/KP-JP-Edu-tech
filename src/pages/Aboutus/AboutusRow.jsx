import { Text, Img, Heading } from "../../components";
import React from "react";

export default function AboutusRow() {
  return (
    <div className="flex items-center self-stretch md:flex-col">
      <div className="flex w-[44%] flex-col items-start md:w-full md:px-5">
        <div className="w-[92%] bg-light_blue-900 px-3.5 py-24 lg:w-full lg:py-8 md:w-full md:py-5 sm:py-4">
          <Img
            src="images/img_ellipse_53.png"
            alt="Image"
            className="mt-[26px] h-[754px] w-[754px] rounded-[376px] object-cover"
          />
        </div>
      </div>
      <div className="flex-1 px-14 md:self-stretch md:px-5">
        <div className="flex flex-col">
          <div className="flex items-center gap-8 sm:flex-col">
            <Heading
              size="text4xl"
              as="h2"
              className="text-[48px] font-medium text-black-900_01 lg:text-[40px] md:text-[32px] sm:text-[26px]"
            >
              Our mission
            </Heading>
            <Img
              src="images/img_close_light_blue_900_8x84.svg"
              alt="Close"
              className="mb-[26px] h-[8px] w-[8%] self-end object-contain sm:mb-0 sm:w-full sm:self-auto"
            />
          </div>
          <Text
            as="p"
            className="mt-[38px] w-[90%] text-[20px] font-normal leading-[33px] tracking-[0.40px] text-black-900_02 lg:w-full lg:text-[17px] md:w-full"
          >
            Our mission is simple: to empower our clients with the knowledge and support they need to achieve their
            immigration goals efficiently and effectively. We prioritize transparency, integrity, and personalized
            service, ensuring that each client receives the attention and care they deserve.
          </Text>
          <div className="mt-2.5 flex items-center gap-[45px] sm:flex-col">
            <Heading
              size="text4xl"
              as="h3"
              className="text-[48px] font-medium text-black-900_01 lg:text-[40px] md:text-[32px] sm:text-[26px]"
            >
              Our Vision
            </Heading>
            <Img
              src="images/img_close_light_blue_900_8x84.svg"
              alt="Close"
              className="mb-[26px] h-[8px] w-[8%] self-end object-contain sm:mb-0 sm:w-full sm:self-auto"
            />
          </div>
          <Text
            as="p"
            className="mt-[38px] w-[90%] text-[20px] font-normal leading-[33px] tracking-[0.40px] text-black-900_02 lg:w-full lg:text-[17px] md:w-full"
          >
            At JP Edu Tech, we aim to simplify global migration by offering expert, personalized visa and immigration
            solutions. We are dedicated to empowering individuals to achieve their international educational and
            professional goals with ease and confidence. Our commitment is to deliver exceptional service and support
            throughout your journey. Transform your aspirations into reality with JP Edu Tech.
          </Text>
          <div className="mx-1.5 mt-[34px] flex items-center gap-10 md:mx-0 sm:flex-col">
            <Heading
              size="text4xl"
              as="h4"
              className="text-[48px] font-medium text-black-900_01 lg:text-[40px] md:text-[32px] sm:text-[26px]"
            >
              Satisfied Clients
            </Heading>
            <Img
              src="images/img_close_light_blue_900_8x84.svg"
              alt="Close"
              className="mb-7 h-[8px] w-[8%] self-end object-contain sm:mb-0 sm:w-full sm:self-auto"
            />
          </div>
          <Text
            as="p"
            className="mt-[38px] w-[90%] text-[20px] font-normal leading-[33px] tracking-[0.40px] text-black-900_02 lg:w-full lg:text-[17px] md:w-full"
          >
            We take pride in the satisfaction of our clients. Over the years, we have served more than 10,000
            individuals and businesses, earning their trust and loyalty through our exceptional service and successful
            results. Our clients’ testimonials and referrals are a testament to our commitment to their immigration
            success.
          </Text>
        </div>
      </div>
    </div>
  );
}
