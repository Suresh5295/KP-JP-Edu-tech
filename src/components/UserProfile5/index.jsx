import { Heading, Img } from "../../components";
import React from "react";

export default function UserProfile5({
  userImage = "images/img_computer_screen.png",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} h-[184px] md:w-full relative`}>
      <Img src={userImage} alt="Image" className="mx-auto h-[184px] w-full object-cover" />
      <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-max flex-1 px-[50px] py-14 md:p-5">
        <Heading
          size="heading2xl"
          as="h4"
          className="mb-9 text-center text-[26px] font-bold leading-[150%] tracking-[-0.49px] text-white-a700_01"
        >
          {/* Placeholder for heading text if needed */}
        </Heading>
      </div>
    </div>
  );
}
