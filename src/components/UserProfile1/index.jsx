import { Heading, Img } from "./..";
import React from "react";

export default function UserProfile1({ userHeading = "1", userSubHeading = "1", userLocation = "USA", ...props }) {
  return (
    <div {...props} className={`${props.className} h-[510px] w-[20%] md:w-full relative`}>
      <div className="flex flex-1 flex-col items-center">
        <Img
          src="images/img_rectangle_4220.png"
          alt="Image"
          className="h-[392px] w-full rounded-[128px] object-cover"
        />
        <div className="relative mt-[-58px] flex w-[98px] flex-col items-center justify-center rounded-[48px] border-[5px] border-solid border-light_blue-900 bg-white-a700_01">
          <Heading
            size="heading4xl"
            as="h1"
            className="font-nunitosans text-[36px] font-semibold tracking-[0.72px] text-light_blue-900"
          >
            {userHeading}
          </Heading>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 flex-col items-center">
        <Img
          src="images/img_rectangle_4219.png"
          alt="Image"
          className="h-[392px] w-full rounded-[128px] object-cover"
        />
        <div className="relative mt-[-58px] flex w-[38%] flex-col items-center gap-[30px]">
          <Heading
            size="heading4xl"
            as="h1"
            className="flex h-[98px] w-[98px] items-center justify-center rounded-[48px] border-[5px] border-solid border-light_blue-900 bg-white-a700_01 text-center font-nunitosans text-[36px] font-semibold tracking-[0.72px] text-light_blue-900"
          >
            {userSubHeading}
          </Heading>
          <Heading size="heading3xl" as="h2" className="text-[32px] font-bold tracking-[-0.61px] text-white-a700_01">
            {userLocation}
          </Heading>
        </div>
      </div>
    </div>
  );
}
