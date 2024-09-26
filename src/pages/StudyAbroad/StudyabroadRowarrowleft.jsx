import { Img, Button, Text, Heading } from "../../components";
import React from "react";

export default function StudyabroadRowarrowleft() {
  return (
    <div className="self-stretch">
      <div className="relative h-[840px] bg-gray-50_01">
        <div className="absolute bottom-[30%] left-0 right-0 mx-[138px] my-auto flex flex-1 flex-col items-start gap-7 lg:mx-0 md:mx-0">
          <Img src="images/img_arrow_left.svg" alt="Arrowleft" className="h-[22px]" />
          <Img src="images/img_arrow_left.svg" alt="Arrowleft" className="h-[22px]" />
          <Img src="images/img_arrow_left.svg" alt="Arrowleft" className="h-[22px]" />
          <Img src="images/img_arrow_left.svg" alt="Arrowleft" className="h-[22px]" />
          <Img src="images/img_arrow_left.svg" alt="Arrowleft" className="h-[22px]" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 m-auto flex flex-1 flex-col items-center">
          <div className="container-xs flex flex-col items-start px-4 lg:px-5 md:px-5">
            <Heading
              size="heading6xl"
              as="h2"
              className="text-[48px] font-bold tracking-[-0.91px] text-light_blue-900 lg:text-[40px] md:text-[32px] sm:text-[26px]"
            >
              Your Global Education, Funded
            </Heading>
          </div>
          <div className="flex h-[694px] items-start justify-center self-stretch bg-[url(/public/images/img_group_998.png)] bg-cover bg-no-repeat py-3 lg:h-auto md:h-auto">
            <div className="container-xs mb-[82px] flex justify-center lg:px-5 md:px-5">
              <div className="w-full">
                <div className="flex items-start md:flex-col">
                  <div className="mb-8 flex flex-1 flex-col items-start px-6 md:self-stretch sm:px-4">
                    <Text
                      size="textxl"
                      as="p"
                      className="w-[80%] text-[24px] font-normal leading-[35px] tracking-[0.48px] text-gray-800 lg:w-full lg:text-[20px] md:w-full"
                    >
                      Realize your dream of studying abroad with our flexible study loan options. We offer competitive
                      interest rates, convenient repayment terms, and minimal paperwork. Get Pre-Approved quickly and
                      focus on your studies. From tuition to living expenses, we&#39;ve got you covered. Start your
                      global adventure today!
                    </Text>
                    <Text
                      size="textxl"
                      as="p"
                      className="ml-11 mt-8 text-[24px] font-normal leading-[30px] tracking-[0.48px] text-gray-800 lg:text-[20px] md:ml-0"
                    >
                      Competitive Interest Rates
                    </Text>
                    <Text
                      size="textxl"
                      as="p"
                      className="ml-11 mt-4 text-[24px] font-normal leading-[30px] tracking-[0.48px] text-gray-800 lg:text-[20px] md:ml-0"
                    >
                      Flexible Repayment Options
                    </Text>
                    <Text
                      size="textxl"
                      as="p"
                      className="ml-11 mt-6 text-[24px] font-normal leading-[30px] tracking-[0.48px] text-gray-800 lg:text-[20px] md:ml-0"
                    >
                      Minimal Documentation
                    </Text>
                    <Text
                      size="textxl"
                      as="p"
                      className="ml-11 mt-5 text-[24px] font-normal leading-[30px] tracking-[0.48px] text-gray-800 lg:text-[20px] md:ml-0"
                    >
                      Fast Approval Process
                    </Text>
                    <Text
                      size="textxl"
                      as="p"
                      className="ml-11 mt-5 text-[24px] font-normal leading-[30px] tracking-[0.48px] text-gray-800 lg:text-[20px] md:ml-0"
                    >
                      Comprehensive Coverage
                    </Text>
                    <a href="/enquirepage" target="_self" rel="noopener noreferrer">
                      <button
                        className="mt-[38px] min-w-[198px] font-nunitosans font-bold tracking-[1.20px] sm:px-4"
                      >
                        <img
                          className="mt-4 h-[98px] w-[60%] object-contain"
                          src="images/button_4.png"
                          alt="Image"
                          loading="lazy"
                        />
                      </button>
                    </a>

                  </div>
                  <Img
                    src="images/img_graduation_cap.png"
                    alt="Graduationcap"
                    className="h-[444px] w-[28%] self-end rounded-bl-[16px] object-contain md:w-full md:self-auto z-40"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Img
          src="images/img_rectangle_4381.png"
          alt="Image"
          className="absolute bottom-0 right-px top-0 my-auto h-[598px] w-[30%] rounded-[10px] object-contain"
        />
      </div>
    </div>
  );
}
