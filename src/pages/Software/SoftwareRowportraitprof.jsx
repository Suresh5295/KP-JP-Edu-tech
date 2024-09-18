import { Text, Img, Heading } from "../../components";
import React from "react";

export default function SoftwareRowportraitprof() {
  return (
    <div className="relative z-[16] mt-[-2px] flex h-[944px] items-center bg-[url(/public/images/img_group_2299.png)] bg-cover bg-no-repeat lg:h-auto md:h-auto md:flex-col">
      <div className="flex w-full flex-col md:px-5">
        <div className="relative mt-[-35px] h-[930px]">
          <Img
            src="images/img_portrait_profes.png"
            alt="Portraitprofes"
            className="absolute bottom-0 left-0 top-0 my-auto h-[930px] w-[92%] object-contain"
          />

        </div>
      </div>
      <div className="flex w-full flex-col items-start gap-1.5 md:px-5">
        <Heading
          size="heading6xl"
          as="h2"
          className="text-[48px] font-bold tracking-[-0.91px] text-light_blue-900 lg:text-[40px] md:text-[32px] sm:text-[26px]"
        >
          Why choose us?
        </Heading>
        <Text
          as="p"
          className="w-[84%] text-[20px] font-normal leading-[30px] tracking-[0.40px] text-black-900_02 lg:w-full lg:text-[17px] md:w-full"
        >
          Choose us for a partner who is invested in your success and committed to helping you navigate your path with
          confidence.
        </Text>
        <div className="flex flex-col gap-[42px] self-stretch">
          <div className="flex items-start gap-[17px] md:flex-col">
            <Img src="images/img_arrow_left.svg" alt="Arrowleft" className="mt-1 h-[22px] md:mt-0 md:w-full" />
            <Text
              size="textxl"
              as="p"
              className="w-[86%] self-center text-[24px] font-normal leading-9 tracking-[0.48px] text-gray-800 lg:w-[86%] lg:text-[20px] md:w-full"
            >
              Expertise: Our team consists of seasoned professionals with extensive experience in their respective
              fields, ensuring you receive the highest quality advice and support.
            </Text>
          </div>
          <div className="flex items-start gap-[17px] md:flex-col">
            <Img src="images/img_arrow_left.svg" alt="Arrowleft" className="mt-1 h-[22px] md:mt-0 md:w-full" />
            <Text
              size="textxl"
              as="p"
              className="w-[86%] self-center text-[24px] font-normal leading-9 tracking-[0.48px] text-gray-800 lg:w-[86%] lg:text-[20px] md:w-full"
            >
              Personalized Solutions: We tailor our services to meet your specific needs and goals, providing customized
              strategies that align with your vision and objectives.
            </Text>
          </div>
          <div className="flex items-start gap-[17px] md:flex-col">
            <Img src="images/img_arrow_left.svg" alt="Arrowleft" className="mt-1 h-[22px] md:mt-0 md:w-full" />
            <Text
              size="textxl"
              as="p"
              className="w-[86%] self-center text-[24px] font-normal leading-9 tracking-[0.48px] text-gray-800 lg:w-[86%] lg:text-[20px] md:w-full"
            >
              <>
                Comprehensive Support: From visa and immigration assistance to career counselling and English coaching,
                we offer a wide range of services to support your journey from start to finish.
                <br />
                Proven Track Record: We have a history of successfully helping clients achieve their personal and
                professional goals, backed by positive testimonials and case studies.
              </>
            </Text>
          </div>
          <div className="flex items-start gap-[17px] md:flex-col">
            <Img src="images/img_arrow_left.svg" alt="Arrowleft" className="mt-1 h-[22px] md:mt-0 md:w-full" />
            <Text
              size="textxl"
              as="p"
              className="w-[86%] self-center text-[24px] font-normal leading-9 tracking-[0.48px] text-gray-800 lg:w-[86%] lg:text-[20px] md:w-full"
            >
              Commitment to Excellence: We are dedicated to delivering exceptional service, staying up-to-date with
              industry trends, and continuously improving our offerings to ensure your satisfaction.
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}
