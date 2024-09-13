import { Heading, Text } from "../../components";
import UserProfile5 from "../../components/UserProfile5";
import React, { Suspense } from "react";

const data = [
  { userImage: "images/img_computer_screen.png", userDescription: "Website Design and Development" },
  { userImage: "images/img_mobile_phone_ta.png", userDescription: "Responsive Design" },
  { userImage: "images/img_3d_character_em.png", userDescription: "User Experience (UX) Design" },
  { userImage: "images/img_man_is_looking.png", userDescription: "SEO and Performance Optimization" },
];

export default function SoftwareColumnTwo() {
  return (
    <div className="mb-2.5 flex flex-col items-center">
      <div className="container-xs flex flex-col gap-10 px-[50px] lg:px-5 md:px-5">
        <div className="mx-16 flex flex-col items-start md:mx-0">
          <Heading
            size="heading3xl"
            as="h2"
            className="font-nunitosans text-[32px] font-bold tracking-[-0.61px] text-white-a700_01 lg:text-[27px] md:text-[26px] sm:text-[24px]"
          >
            Web Designing :
          </Heading>
          <Heading
            size="headinglg"
            as="h5"
            className="mt-2 text-[20px] font-semibold text-light_blue-900 lg:text-[17px]"
          >
            Building Intuitive and Engaging Digital Experiences
          </Heading>
          <Text
            as="p"
            className="mt-[18px] w-[80%] text-[20px] font-normal leading-[30px] tracking-[0.40px] text-white-a700_01 lg:w-full lg:text-[17px] md:w-full"
          >
            Web design is essential for creating effective and accessible online platforms that serve educational
            purposes. At JP Edu Tech, we focus on designing websites that are not only visually appealing but also
            functional, responsive, and user-centric.
          </Text>
          <Heading
            size="headinglg"
            as="h5"
            className="mt-[38px] text-[20px] font-semibold text-light_blue-900 lg:text-[17px]"
          >
            Our Web Design Services Include:
          </Heading>
        </div>
        <div className="ml-[22px] flex gap-3.5 md:ml-0 md:flex-col">
          <Suspense fallback={<div>Loading feed...</div>}>
            {data.map((d, index) => (
              <UserProfile5 {...d} key={"listwebsitedesi" + index} />
            ))}
          </Suspense>
        </div>
      </div>
    </div>
  );
}
