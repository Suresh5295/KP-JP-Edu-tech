import { Heading, Img } from "./..";
import React from "react";

export default function UserProfile4({
  userImage = "images/img_view_3d_compute.png",
  userBrandIdentity = "Brand Identity Design",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} h-[184px] w-[24%] md:w-full relative`}>
      <Img src={userImage} alt="Image" className="mx-auto h-[184px] flex-1 object-cover" />
      <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-max flex-1 px-[26px] py-[70px] md:py-5 sm:p-5">
        <Heading
          size="heading2xl"
          as="h4"
          className=" text-center self-end text-[26px] font-bold leading-[150%] tracking-[-0.49px] text-white-a700_01"
        >
          {userBrandIdentity}
        </Heading>
      </div>
    </div>
  );
}
