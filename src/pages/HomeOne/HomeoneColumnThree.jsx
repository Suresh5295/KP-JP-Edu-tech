import { Heading } from "../../components";
import UserProfile1 from "../../components/UserProfile1";
import React, { Suspense } from "react";

const data = [
  { userHeading: "1", userSubHeading: "1", userLocation: "USA" },
  { userHeading: "1", userSubHeading: "1", userLocation: "USA" },
  { userHeading: "1", userSubHeading: "1", userLocation: "USA" },
  { userHeading: "1", userSubHeading: "1", userLocation: "USA" },
  { userHeading: "1", userSubHeading: "1", userLocation: "USA" },
];

export default function HomeoneColumnThree() {
  return (
    <div className="flex flex-col items-center">
      <div className="container-xs flex flex-col items-center px-[54px] lg:px-5 md:px-5">
        <div className="relative h-[170px] w-[36%] content-center lg:h-auto md:h-auto">
          <Heading
            size="text6xl"
            as="h6"
            className="mx-auto font-playfairdisplay text-[128px] font-medium text-white-a700_01 lg:text-[48px] md:text-[48px]"
          >
            MIGRATE
          </Heading>
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
          <span>
            We&#39;re here to help! Our expert team will guide you through every step of the Migration process. Start
            your journey today with confidence and support from
          </span>
          <span className="uppercase">&nbsp;</span>
          <span className="capitalize">Jp Edu Tech!</span>
        </Heading>
        <div className="ml-3.5 mt-6 flex flex-col items-center gap-14 self-stretch md:ml-0 sm:gap-7">
          <div className="flex gap-16 self-stretch md:flex-col">
            <Suspense fallback={<div>Loading feed...</div>}>
              {data.map((d, index) => (
                <UserProfile1 {...d} key={"listone" + index} />
              ))}
            </Suspense>
          </div>
          <div className="flex w-[4%] justify-center gap-3 lg:w-full md:w-full">
            <div className="h-[12px] w-[12px] rounded-md border border-solid border-white-a700_01 bg-light_blue-900" />
            <div className="h-[12px] w-[12px] rounded-md bg-white-a700_01" />
            <div className="h-[12px] w-[12px] rounded-md bg-white-a700_01" />
          </div>
        </div>
      </div>
    </div>
  );
}
