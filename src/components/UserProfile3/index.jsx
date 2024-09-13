import { Img } from "./..";
import React from "react";

export default function UserProfile3({ ...props }) {
  return (
    <div {...props} className={`${props.className} flex flex-col items-center px-5`}>
      <Img src="images/img_icon.svg" alt="Call Us Anytime" className="h-[74px] w-full" />
    </div>
  );
}
