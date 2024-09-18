import { Text, Img, Heading, Button, TextArea, Input } from "../../components";
import React from "react";

export default function EnquirepageRowOne() {
  return (
    <div className="relative mt-[-200px] h-auto bg-[url(/public/images/img_group_1465.png)] bg-cover bg-no-repeat lg:h-auto md:h-auto">

      <div className="flex justify-center bg-black-900_e0 py-[52px] md:py-5 sm:py-4">

        <div className="container-xs mt-[200px] flex justify-center px-14 lg:px-5 md:px-5">

          <div className="flex w-[74%] flex-col items-start lg:w-full md:w-full">
          <Heading
                      size="heading5xl"
                      as="h2"
                      className=" mb-20 text-[30px] font-semibold tracking-[0.80px] text-white-a700_01 lg:text-[26px] sm:text-[24px]"
                    >
                      Fill the form for enquire / Appointment..
                    </Heading>
                    <div className="flex-col" >
                    <Input
              size="lg"
              shape="square"
              type=" Name"
              name="Name"
              placeholder="First Name"
              style={{ border: 'none' }} 
              className="  px-4 self-stretch  font-semibold tracking-[0.40px] w-[1150px] "
            />
            
               <Input
              size="lg"
              shape="square"
              type="Name"
              name=" Name"
              placeholder="Last Name"
              style={{ border: 'none' }} 
              className="mt-[32px] self-stretch  px-4 font-semibold tracking-[0.40px] "
            />
            </div>
          <Input
              size="lg"
              shape="square"
              type="email"
              name="email"
              placeholder="Email address"
              style={{ border: 'none' }} 
              className="mt-[32px]  self-stretch px-4 font-semibold tracking-[0.40px] "
            />
            <Input
              size="lg"
              shape="square"
              type="number"
              name="mobileNumber"
              placeholder="Mobile number"
              style={{ border: 'none' }} 
              className="mt-[32px] self-stretch px-4 font-semibold tracking-[0.40px]"
            />
            <Input
              size="lg"
              shape="square"
              name="preferredDestination"
              placeholder="Your preferred study destination"
              style={{ border: 'none' }} 
              className="mt-[32px] self-stretch px-4 font-semibold tracking-[0.40px]"
            />
            <Input
              size="lg"
              shape="square"
              name="studyPlan"
              placeholder="When do you plan to study?"
              style={{ border: 'none' }} 
              className="mt-[32px] self-stretch px-4 font-semibold tracking-[0.40px]"
            />
            <TextArea
              size="lg"
              shape="square"
              name="comments"
              placeholder="Comments..."
              style={{ border: 'none' }} 
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
              className="mb-2 self-end text-[20px] font-normal text-white-a700_01 lg:text-[17px] sm:mb-0 sm:self-auto"
            >
              <span>+91 8247510882</span>
              <span className="ml-5">+91 9704428144</span> {/* Adds a margin of 1rem (4 tailwind spacing units) */}
            </Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}