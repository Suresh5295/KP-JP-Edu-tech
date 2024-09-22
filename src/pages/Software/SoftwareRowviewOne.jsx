import { Text, Heading, Img } from "../../components";
import React from "react";

export default function SoftwareRowviewOne() {
  return (
    <div className="mb-[30px] flex items-start gap-4 px-1.5 md:flex-col">
      <div className="relative h-[770px] w-[42%] self-center md:w-full">
        <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-max flex-1">
          <div className="relative z-[13] mr-2.5 h-[296px] md:mr-0" />
          <Img
            src="images/img_software_developers_office_192x488_1.png"
            alt="Software"
            className="relative mt-[-296px] h-[770px] w-full object-cover lg:h-auto md:h-auto"
          />
        </div>
        {/* <div className=" absolute bottom-[0.17px] left-0 right-0 m-auto h-[296px] flex-1 bg-gradient4" /> */}
        <div className=" absolute bottom-0 left-0 right-0 top-0 z-[14] m-auto flex h-max flex-1 items-center md:relative md:flex-col">
          <div className="h-[770px] w-[32%] rotate-[90deg]" />
          <Img
            src="images/img_software_developers_office_192x488.png"
            alt="Software"
            className="relative ml-[-150px] h-[192px] w-[52%] object-contain md:ml-0 md:w-full"
          />
        </div>
        {/* <div className="absolute bottom-0 right-[-0.10px] top-0 z-[15] my-auto h-[770px] w-[40%] rotate-[-90deg] bg-gradient4" /> */}
      </div>
      <div className="mt-[52px] flex flex-1 px-4 md:self-stretch">
        <div className="flex w-[86%] flex-col items-end lg:w-full md:w-full">
          <div className="relative h-[322px] self-stretch animate-RightToleft">
            <Heading
              size="heading11xl"
              as="h2"
              className="absolute left-0 top-0 m-auto font-inter text-[182px] font-bold tracking-[3.64px] text-blue_gray-800_6b lg:text-[48px] md:text-[48px]"
            >
              02
            </Heading>
            <div className="absolute bottom-[0.87px] left-0 right-0 m-auto flex flex-1 flex-col items-center">
              <Heading
                size="heading3xl"
                as="h3"
                className="text-[32px] font-bold leading-[150%] tracking-[-0.61px] text-light_blue-900 lg:text-[27px] md:text-[26px] sm:text-[24px]"
              >
                Software Development
              </Heading>
              <Heading
                size="heading6xl"
                as="h4"
                className="w-[84%] self-end text-[48px] font-semibold leading-[71px] text-white-a700_01 lg:w-full lg:text-[40px] md:w-full md:text-[32px] sm:text-[26px]"
              >
                Unlock Your Business Potential with Expert Guidance
              </Heading>
            </div>
          </div>
          <Text
            as="p"
            className="w-[84%] text-[20px] font-normal leading-[30px] tracking-[0.40px] text-white-a700_01 lg:w-full lg:text-[17px] md:w-full animate-RightToleft"
          >
            <>
              Elevate your technology initiatives with JP Edu Tech&#39;s expert software development consulting. We
              provide strategic guidance through every stage of your project, from initial planning and requirements
              analysis to technology selection and implementation. Our team ensures your software solutions are aligned
              with your educational goals and institutional needs. By optimizing development processes and managing
              project risks, we help you achieve efficient and successful outcomes. Partner with us for tailored advice
              and innovative solutions that drive educational excellence and operational efficiency. Let’s turn your
              technology vision into reality.
              <br />
              <br />
            </>
          </Text>
        </div>
      </div>
    </div>
  );
}
