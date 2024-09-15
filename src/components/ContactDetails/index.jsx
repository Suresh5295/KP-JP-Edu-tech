import { Text, Heading, Img } from "./..";
import React from "react";

export default function ContactDetails({
  callIcon = "images/img_call.svg",
  contactImage = "images/img_rectangle_4439.png",
  contactHeading = "Contact Details",
  contactNumbers = (
    <>
      +91 8247510882
      <br />
      +91 9704428144
    </>
  ),
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex items-center w-[32%] md:w-full`}>
      <div className="flex w-full flex-col items-center">
        <div className="relative z-[2] w-[28%] rounded-[64px] border-[5px] border-solid border-light_blue-900 bg-white-a700_01 p-[30px] sm:p-5">
          <Img src={callIcon} alt="Call" className="h-[54px] w-[54px]" />
        </div>
        <div className="relative ml-6 mt-[-64px] h-[348px] content-center self-stretch">
          <Img
            src={contactImage}
            alt="Contact Details"
            className="mx-auto  h-[348px] w-full flex-1 rounded-[10px] object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 flex-col items-start gap-5 rounded-[10px] bg-black-900_b5 py-[50px] pl-[94px] pr-14 md:p-5">
            <Heading size="heading3xl" as="h2" className="-ml-3 mt-[86px] text-[32px] font-semibold text-white-a700_01">
              {contactHeading}
            </Heading>
            <Text
              size="textxl"
              as="p"
              className="-ml-6 text-center text-[24px] font-medium leading-[45px] text-white-a700_01"
            >
              {contactNumbers}
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}
