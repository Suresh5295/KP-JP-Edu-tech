import { Heading, Img } from "./..";
import React from "react";

export default function UserProfile5({
  userImage = "images/img_computer_screen.png",
  userDescription = "Website Design and Development",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} h-[184px] w-[24%] md:w-full relative`}>
      <Img src={userImage} alt="Image" className="mx-auto h-[184px] flex-1 object-cover" />
      <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-max flex-1 bg-black-900_d8 px-[50px] py-14 md:p-5">
        <Heading
          size="heading2xl"
          as="h4"
          className="mb-9 text-center text-[26px] font-bold leading-[150%] tracking-[-0.49px] text-white-a700_01"
        >
          {userDescription}
        </Heading>
      </div>
    </div>
  );
}
