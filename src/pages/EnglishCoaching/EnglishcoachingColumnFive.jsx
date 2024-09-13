import { Text, Img, Heading } from "../../components";
import React from "react";
import { TabPanel } from "react-tabs";

export default function EnglishcoachingColumnFive() {
  return (
    <div className="mx-[118px] mb-10 flex-1 lg:mx-0 md:mx-0">
      {[...Array(6)].map((_, index) => (
        <TabPanel key={`tab-panel${index}`} className="absolute items-center">
          <div className="w-full">
            <div className="flex flex-col items-start gap-6">
              <Heading
                size="heading6xl"
                as="h2"
                className="text-[48px] font-bold tracking-[-0.91px] text-light_blue-900 lg:text-[40px] md:text-[32px] sm:text-[26px]"
              >
                Why TOEFL is Recommended
              </Heading>
              <div className="flex flex-col gap-12 self-stretch">
                <div className="flex items-start gap-[17px] md:flex-col">
                  <Img src="images/img_arrow_left.svg" alt="Arrowleft" className="mt-1.5 h-[22px] md:mt-0 md:w-full" />
                  <Text
                    size="textxl"
                    as="p"
                    className="w-[54%] self-center text-[24px] font-normal leading-[30px] tracking-[0.48px] text-gray-800 lg:w-[54%] lg:text-[20px] md:w-full md:px-5"
                  >
                    <span className="font-semibold">Why TOEFL is Recommended:</span>
                    <span>
                      <>
                        &nbsp;TOEFL scores are accepted by thousands of universities and institutions around the world,
                        particularly in the U.S., Canada, and many English-speaking countries.
                        <br />
                      </>
                    </span>
                  </Text>
                </div>
                <div className="flex items-start gap-[17px] md:flex-col">
                  <Img src="images/img_arrow_left.svg" alt="Arrowleft" className="h-[22px] md:w-full" />
                  <Text
                    size="textxl"
                    as="p"
                    className="w-[54%] self-center text-[24px] font-normal leading-[30px] tracking-[0.48px] text-gray-800 lg:w-[54%] lg:text-[20px] md:w-full md:px-5"
                  >
                    Comprehensive Assessment: TOEFL evaluates all four language skills—reading, writing, listening, and
                    speaking—providing a thorough measure of your English proficiency.
                  </Text>
                </div>
                <div className="flex flex-col gap-12">
                  <div>
                    <div className="flex items-start gap-[17px] md:flex-col">
                      <Img
                        src="images/img_arrow_left.svg"
                        alt="Arrowleft"
                        className="mt-1 h-[22px] md:mt-0 md:w-full"
                      />
                      <Text
                        size="textxl"
                        as="p"
                        className="w-[54%] self-center text-[24px] font-normal leading-[30px] tracking-[0.48px] text-gray-800 lg:w-[54%] lg:text-[20px] md:w-full md:px-5"
                      >
                        Academic Focus: The test is designed to assess your ability to use English in an academic
                        setting, making it highly relevant for university studies.
                      </Text>
                    </div>
                  </div>
                  <div className="flex items-start gap-[17px] md:flex-col">
                    <Img src="images/img_arrow_left.svg" alt="Arrowleft" className="mt-1 h-[22px] md:mt-0 md:w-full" />
                    <Text
                      size="textxl"
                      as="p"
                      className="w-[56%] self-center text-[24px] font-normal leading-[30px] tracking-[0.48px] text-gray-800 lg:w-[56%] lg:text-[20px] md:w-full md:px-5"
                    >
                      Structured Testing: TOEFL offers a structured format with clear guidelines, making it easier to
                      prepare and understand what to expect on test day.
                    </Text>
                  </div>
                  <div className="flex items-start gap-[17px] md:flex-col">
                    <Img src="images/img_arrow_left.svg" alt="Arrowleft" className="h-[22px] md:w-full" />
                    <Text
                      size="textxl"
                      as="p"
                      className="w-[56%] self-center text-[24px] font-normal leading-[30px] tracking-[0.48px] text-gray-800 lg:w-[56%] lg:text-[20px] md:w-full md:px-5"
                    >
                      Flexible Scheduling: The test is available at multiple locations worldwide and on various dates
                      throughout the year, providing flexibility in planning.
                    </Text>
                  </div>
                  <div className="flex items-start gap-[17px] md:flex-col">
                    <Img src="images/img_arrow_left.svg" alt="Arrowleft" className="h-[22px] md:w-full" />
                    <Text
                      size="textxl"
                      as="p"
                      className="w-[56%] self-center text-[24px] font-normal leading-[30px] tracking-[0.48px] text-gray-800 lg:w-[56%] lg:text-[20px] md:w-full md:px-5"
                    >
                      Online and Paper-Based Options: TOEFL is available as an internet-based test (iBT) and
                      occasionally as a paper-based test, depending on your location.
                    </Text>
                  </div>
                  <div className="flex items-start gap-[17px] md:flex-col">
                    <Img src="images/img_arrow_left.svg" alt="Arrowleft" className="h-[22px] md:w-full" />
                    <Text
                      size="textxl"
                      as="p"
                      className="w-[56%] self-center text-[24px] font-normal leading-[30px] tracking-[0.48px] text-gray-800 lg:w-[56%] lg:text-[20px] md:w-full md:px-5"
                    >
                      Preparation Resources: Extensive preparation materials and practice tests are available to help
                      you achieve the best possible score.
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
      ))}
    </div>
  );
}
