import { Heading, Text } from "../../components";
import UserProfile5 from "../../components/UserProfile5";
import React, { useState, Suspense } from "react";

const data = [
  { userImage: "images/img_computer_screen.png", hoverImage: "images/hover_image_5.png" },
  { userImage: "images/img_mobile_phone_ta.png", hoverImage: "images/hover_image_6.png" },
  { userImage: "images/img_3d_character_em.png", hoverImage: "images/hover_image_7.png" },
  { userImage: "images/img_man_is_looking.png", hoverImage: "images/hover_image_8.png" },
];

export default function SoftwareColumnTwo() {
  const [hoverIndex, setHoverIndex] = useState(null); // Track hover state for each item

  return (
    <div className="mb-2.5 flex flex-col items-center">
      <div className="container-xs flex flex-col gap-10 px-[50px] lg:px-5 md:px-5">
        <div className="mx-16 flex flex-col items-start md:mx-0">
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
              <div
                key={"listwebsitedesi" + index}
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
                className="relative flex flex-col items-center"
              >
                {/* Conditionally switch image on hover */}
                <UserProfile5
                  userImage={hoverIndex === index ? d.hoverImage : d.userImage}
                />
              </div>
            ))}
          </Suspense>
        </div>
      </div>
    </div>
  );
}
