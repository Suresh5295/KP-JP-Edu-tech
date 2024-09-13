import { Button, Img, Text, Heading } from "../../components";
import React from "react";

export default function StudyabroadRowFour() {
  return (
    <div>
      <div className="flex justify-center border border-solid border-white-a700_01 py-[42px] md:py-5 sm:py-4">
        <div className="container-xs mt-24 flex justify-center lg:px-5 md:px-5">
          <div className="flex w-full items-center justify-center md:flex-col">
            <div className="relative h-[794px] w-[46%] md:w-full">
              <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[788px] flex-1 content-center lg:h-auto md:h-auto">
                <Img
                  src="images/img_rectangle_4293.png"
                  alt="Image"
                  className="ml-auto h-[788px] w-[92%] rounded-[36px] object-contain"
                />
                <div className="absolute bottom-0 right-0 top-0 my-auto h-[788px] w-[92%] rounded-[32px] bg-gray-900_82" />
              </div>
              <Img
                src="images/img_rectangle_4294.png"
                alt="Image"
                className="absolute bottom-px left-[7%] m-auto h-[448px] w-[52%] rounded-bl-[34px] object-contain"
              />
              <Img
                src="images/img_container.svg"
                alt="Container"
                className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[106px] w-[106px]"
              />
            </div>
            <div className="ml-[26px] h-[774px] w-[3px] rounded-[1px] bg-light_blue-900_7f md:ml-0 md:h-[3px] md:w-[774px]" />
            <div className="ml-[52px] flex flex-1 flex-col items-start md:ml-0 md:self-stretch">
              <div className="self-stretch">
                <Heading
                  size="heading5xl"
                  as="h1"
                  className="text-[40px] font-semibold leading-[61px] tracking-[0.80px] text-gray-800 lg:text-[34px] md:text-[34px] sm:text-[32px]"
                >
                  Choosing your own destination is a powerful way to shape your future and achieve your goals.
                </Heading>
                <Text
                  as="p"
                  className="relative mt-[-32px] text-[20px] font-normal leading-[30px] tracking-[0.40px] text-gray-800 lg:text-[17px]"
                >
                  Choosing your own destination means selecting the best location to achieve your personal and
                  professional goals. Research various options to find the right fit for education, career
                  opportunities, and lifestyle. Consider factors like quality of life, cost of living, and immigration
                  requirements. Prepare for relocation by planning practical aspects and seeking guidance to ensure a
                  smooth transition.
                </Text>
              </div>
              <div className="mt-5 h-[0.5px] w-[94%] bg-light_blue-900_7f" />
              <div className="mt-4 flex flex-col gap-1.5 self-stretch">
                <div className="flex items-start gap-[30px] md:flex-col">
                  <Img src="images/img_arrow_left.svg" alt="Arrowleft" className="h-[22px] md:w-full" />
                  <Text
                    as="p"
                    className="w-[86%] self-center text-[20px] font-normal leading-[30px] tracking-[0.40px] text-gray-800 lg:w-[86%] lg:text-[17px] md:w-full"
                  >
                    Define Your Objectives: Identify what you want to achieve, whether it&#39;s career advancement,
                    academic growth, or cultural exploration.
                  </Text>
                </div>
                <div className="flex items-start gap-[30px] md:flex-col">
                  <Img src="images/img_arrow_left.svg" alt="Arrowleft" className="h-[22px] md:w-full" />
                  <Text
                    as="p"
                    className="w-[86%] self-center text-[20px] font-normal leading-[30px] tracking-[0.40px] text-gray-800 lg:w-[86%] lg:text-[17px] md:w-full"
                  >
                    Research Opportunities: Explore various locations to find the best fit for your goals, considering
                    factors like education, job markets, and lifestyle.
                  </Text>
                </div>
                <div className="flex items-start gap-[30px] md:flex-col">
                  <Img src="images/img_arrow_left.svg" alt="Arrowleft" className="h-[22px] md:w-full" />
                  <Text
                    as="p"
                    className="w-[86%] self-center text-[20px] font-normal leading-[30px] tracking-[0.40px] text-gray-800 lg:w-[86%] lg:text-[17px] md:w-full"
                  >
                    Understand Immigration Requirements: Check Visa and Immigration policies to ensure a smooth
                    transition to your chosen destination.
                  </Text>
                </div>
              </div>
              <div className="mt-1 flex items-start self-stretch md:flex-col">
                <Text
                  size="textxs"
                  as="p"
                  className="mt-4 w-[56%] text-[16px] font-normal leading-[30px] tracking-[0.32px] text-gray-800 lg:w-[56%] lg:text-[13px] md:w-full"
                >
                  Embarking on a migration journey opens doors to new opportunities and experiences. Embrace the
                  adventure, and let us support you in making a smooth and successful transition. Your new chapter
                  awaits—take the first step toward a brighter future today!
                </Text>
                <div className="relative h-[188px] w-[44%] content-center self-center px-[30px] lg:h-auto md:h-auto md:w-full sm:px-4">
                  <Img src="images/img_image.png" alt="Image" className="mx-auto h-[188px] flex-1 object-cover" />
                  <Button
                    color="light_blue_900_cc"
                    size="8xl"
                    shape="circle"
                    className="absolute bottom-0 left-0 right-0 top-0 m-auto w-[72px] rounded-[36px] px-[22px] sm:px-4"
                  >
                    <Img src="images/img_overflow_menu.svg" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
