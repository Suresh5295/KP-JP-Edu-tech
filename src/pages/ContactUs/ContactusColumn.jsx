import { Text, Heading } from "../../components";
import ContactDetails from "../../components/ContactDetails";
import React, { Suspense } from "react";

const data = [
  {
    callIcon: "images/img_call.svg",
    contactImage: "images/img_rectangle_4439.svg",
    contactHeading: "Contact Details",
    contactNumbers: (
      <>
        +91  8247510882
        <br />
        +91  9704428144
      </>
    ),
  },
  {
    callIcon: "images/img_lock.svg",
    contactImage: "images/img_rectangle_4431.svg",
    contactHeading: "Email Details",
    contactNumbers: "jpedutechcs@gmail.com  ",
  },
  {
    callIcon: "images/img_linkedin_light_blue_900.svg",
    contactImage: "images/img_rectangle_4433.svg",
    contactHeading: "Our Branch’s",
    contactNumbers: (
      <>
      Kurnool, Hyderabad, Guntur,
      <br />  
      Melbourne (Australia)
      </>
    ),
  },
];

export default function ContactusColumn() {
  return (
    <div className="mt-[18px] flex flex-col items-center ">
      <div className="container-xs flex flex-col items-center  px-14 lg:px-5 md:px-5 animate-zoomInOut">
        <Heading
          size="heading7xl"
          as="h2"
          className=" text-center text-[64px] font-semibold text-white-a700_01 lg:text-[48px] md:text-[48px]"
        >
          Contact Details
        </Heading>
        <Text
          size="textxl"
          as="p"
          className="mt-2 w-[54%] text-center text-[24px] font-normal leading-[33px] tracking-[0.48px] text-white-a700_01 lg:w-full lg:text-[20px] md:w-full"
        >
          Get in touch with us today! Our expert team will guide you through every step of the migration process. Start
          your journey today with confidence and support from Jp Edu Tech!i
        </Text>
        <div className="ml-2 mt-[52px] text-center flex  w-[88%] gap-4 md:ml-0 md:w-full md:flex-col">
          <Suspense fallback={<div>Loading feed...</div>}>
            {data.map((d, index) => (
              <ContactDetails {...d} key={"listcallone" + index} />
            ))}
          </Suspense>
        </div>
      </div>
    </div>
  );
}
