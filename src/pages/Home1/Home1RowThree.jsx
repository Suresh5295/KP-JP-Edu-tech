import { Button, Heading, Img } from "../../components";
import React from "react";

export default function Home1RowThree() {
  return (
    <div className="relative mt-[-398px] h-[982px] self-stretch bg-[url(/public/images/img_group_2377.png)] bg-cover bg-no-repeat py-[108px] lg:h-auto lg:py-8 md:h-auto md:py-5 sm:py-4">
      <div>
        <div className="flex items-start md:flex-col">
          <div className="mt-[100px] flex w-full flex-col items-start px-14 md:px-5">
            <Img
              src="images/img_close_light_blue_900.svg"
              alt="Close"
              className="ml-[246px] h-[40px] w-[40px] md:ml-0"
            />
            <Heading
              as="p"
              className="mr-[22px] mt-6 w-[70%] self-end font-playfairdisplay text-[64px] font-normal leading-[72px] tracking-[1.28px] text-black-900_02 lg:w-full lg:text-[48px] md:mr-0 md:w-full md:text-[48px]"
            >
              Get The Best Coaching From Us
            </Heading>
            <Heading
              size="headinglg"
              as="h5"
              className="mt-1.5 w-[70%] self-end text-[20px] font-semibold leading-[30px] tracking-[0.40px] text-blue_gray-800 lg:w-full lg:text-[17px] md:w-full"
            >
              Unlock your potential and reach new heights with our professional coaching services. At Jp Edu Tech, we
              offer personalized coaching designed to guide you through every step of your journey, whether you’re
              preparing for exams, applying for visas, or planning an international move.
            </Heading>
            <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
              <Button
                shape="square"
                className="ml-[246px] mt-11 min-w-[198px] px-[34px] font-nunitosans font-bold tracking-[1.20px] md:ml-0 sm:px-4"
              >
                View More
              </Button>
            </a>
          </div>
          <div className="h-[762px] w-full self-center bg-cyan-900_01 md:px-5" />
        </div>
      </div>
    </div>
  );
}
