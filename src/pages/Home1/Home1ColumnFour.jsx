import React from "react";
import { Heading } from "../../components";

const data = [
  { userHeading: "1", userSubHeading: "1", userLocation: "USA" },
  { userHeading: "2", userSubHeading: "2", userLocation: "CANADA"},
  { userHeading: "3", userSubHeading: "3", userLocation: "LONDON"},
  { userHeading: "4", userSubHeading: "4", userLocation: "AUSTRALIA"},
  { userHeading: "5", userSubHeading: "5", userLocation: "GERMANY"},
];

export default function Home1ColumnFour() {
  return (
    <div className="flex flex-col items-center">
      <div className="container-xs flex flex-col items-center px-[54px] lg:px-5 md:px-5">
        <div className="relative h-[170px] w-[36%] content-center lg:h-auto md:h-auto">
          <Heading
            size="text6xl"
            as="p"
            className="absolute bottom-0 left-0 right-0 top-0 m-auto h-max w-max font-playfairdisplay text-[128px] font-medium text-white-a700_01 lg:text-[48px] md:text-[48px]"
          >
            MIGRATE
          </Heading>
        </div>
        <Heading
          size="headinglg"
          as="h5"
          className="w-[42%] text-center font-poppins text-[20px] font-semibold leading-[30px] tracking-[0.40px] text-white-a700_01 lg:w-full lg:text-[17px] md:w-full"
        >
          We're here to help! Our expert team will guide you through every step of the Migration process. Start your journey today with confidence and support from Jp Edu Tech!
        </Heading>
        <div className="ml-3.5 mt-6 flex flex-col items-center gap-14 self-stretch md:ml-0 sm:gap-7">
          <div className="flex gap-16 md:flex-col">
            <img
             src="images/img_rectangle_4219.svg"
             alt="Image"
             className="mr-[18px] h-[392px] w-full  object-cover lg:h-auto md:mr-0 md:h-auto"
             />
             <img
             src="images/img_rectangle_4220.svg"
             alt="Image"
             className="mr-[18px] h-[392px] w-full  object-cover lg:h-auto md:mr-0 md:h-auto"
             />
             <img
             src="images/img_rectangle_4221.svg"
             alt="Image"
             className="mr-[18px] h-[392px] w-full  object-cover lg:h-auto md:mr-0 md:h-auto"
             />
             <img
             src="images/img_rectangle_4222.svg"
             alt="Image"
             className="mr-[18px] h-[392px] w-full  object-cover lg:h-auto md:mr-0 md:h-auto"
             />
             <img
             src="images/img_rectangle_4223.svg"
             alt="Image"
             className="mr-[18px] h-[392px] w-full  object-cover lg:h-auto md:mr-0 md:h-auto"
             />
          </div>
        </div>
      </div>
    </div>
  );
}
