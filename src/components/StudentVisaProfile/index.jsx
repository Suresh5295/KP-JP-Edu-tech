import { Text, Img } from "./..";
import React from "react";

export default function StudentVisaProfile({
  studentImage = "images/img_graduation_1.png",
  studentVisaText = "Student Visa",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex items-center w-full gap-[30px] px-[22px] py-3.5 sm:px-4 border-light_blue-900 border-l border-solid bg-white-a700_01 shadow-sm`}
    >
      <div className="flex rounded-[26px] bg-light_blue-900 p-1">
        <Img src={studentImage} alt="Student Visa" className="h-[38px] w-[38px] object-cover" />
      </div>
      <Text as="p" className="mb-1.5 self-end text-[20px] font-medium tracking-[0.40px] text-gray-700_01">
        {studentVisaText}
      </Text>
    </div>
  );
}
