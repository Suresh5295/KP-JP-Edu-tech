import { Heading, Img } from "./..";
import React from "react";

export default function UserProfile({
  userImage = "images/img_rectangle_4187.png",
  userRole = "Software Consulting",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex flex-col items-center justify-center w-[20%] md:w-full`}>
      <div className="mb-1 self-stretch">
        <Img src={userImage} alt="Image" className="h-[434px] w-full object-cover" />
        <div className="relative mt-[-98px] flex justify-center border-b-[2.5px] border-solid border-light_blue-900 bg-white-a700_01 px-3.5 py-6 sm:py-5">
          <Heading
            size="headingxl"
            as="h4"
            className="mt-2 text-base font-semibold tracking-[-0.46px] text-light_blue-900"
          >
            {userRole}
          </Heading>
        </div>
      </div>
    </div>
  );
}
