import { Img } from "./..";
import React from "react";

export default function UserProfile6({ userImage = "images/img_rectangle_4253.png", ...props }) {
  return (
    <div {...props} className={`${props.className} h-[178px] w-[32%] md:w-full relative`}>
      <Img src={userImage} alt="Image" className="mx-auto h-[178px] w-full flex-1 object-cover" />
      <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 justify-center bg-blue_gray-900_89 px-14 py-[76px] md:p-5">
        <Img src="images/img_vector_white_a700_01_24x24.svg" alt="Vector" className="h-[24px] w-[24px]" />
      </div>
    </div>
  );
}
