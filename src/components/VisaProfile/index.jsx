import { Heading, Img } from "./..";
import React from "react";

export default function VisaProfile({
  userImage = "images/img_graduation_1.png",
  visaText = "visa & Immigration",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex items-center w-full gap-[30px] px-[22px] py-3.5 sm:px-4 border-light_blue-900 border-l border-solid bg-white-a700_01 shadow-sm`}
    >
      <div className="flex flex-col items-center justify-center rounded-[26px] bg-light_blue-900 p-1.5">
        <Img src={userImage} alt="Visa" className="h-[40px] object-cover" />
      </div>
      <Heading
        size="headinglg"
        as="h5"
        className="mb-1.5 self-end text-[20px] font-semibold tracking-[-0.38px] text-black-900_02"
      >
        {visaText}
      </Heading>
    </div>
  );
}
