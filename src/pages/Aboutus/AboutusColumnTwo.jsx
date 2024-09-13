import { Text, Heading } from "../../components";
import React from "react";

export default function AboutusColumnTwo() {
  return (
    <div className="mb-14 flex flex-col items-center">
      <div className="container-xs flex flex-col items-center gap-12 px-14 lg:px-5 md:px-5">
        <div className="mx-[98px] flex w-[72%] flex-col items-center gap-3.5 lg:w-full md:mx-0 md:w-full">
          <Heading
            size="heading7xl"
            as="h2"
            className="text-[64px] font-bold text-light_blue-900 lg:text-[48px] md:text-[48px]"
          >
            What We Are?
          </Heading>
          <Text
            as="p"
            className="self-stretch text-center text-[20px] font-normal leading-[30px] tracking-[0.40px] text-gray-50_03 lg:text-[17px]"
          >
            We specialize in providing comprehensive visa and immigration services tailored to meet your specific needs.
            Whether you&#39;re an individual seeking a Students who seek to study overseas, new adventure abroad, a
            family looking to reunite, or a business aiming to expand internationally, our team of experts is committed
            to guiding you through every step of the process. we are here to help you achieve your goals effectively and
            efficiently.
          </Text>
        </div>
        <div className="ml-2 flex w-[76%] flex-col items-center gap-2.5 lg:w-full md:ml-0 md:w-full">
          <Heading
            size="heading7xl"
            as="h3"
            className="text-[64px] font-bold text-light_blue-900 lg:text-[48px] md:text-[48px]"
          >
            About Our CEO
          </Heading>
          <Text
            as="p"
            className="self-stretch text-center text-[20px] font-normal leading-[30px] tracking-[0.40px] text-gray-50_03 lg:text-[17px]"
          >
            <span>John Moses Mekala is the founder of&nbsp;</span>
            <span className="capitalize">
              Jp Edu Tech bringing a wealth of international experience and expertise to the forefront of the software
              industry. After completing his higher studies in Melbourne, Australia, where he spent six years honing his
              skills, John returned to India and worked with renowned multinational corporations such as Dell and IBM.
              Driven by a passion for innovation and entrepreneurship, he established JP EDU TECH CONSULTING SERVICES
              PVT LTD to offer cutting-edge software solutions while also dedicating efforts to assist individuals
              seeking opportunities abroad for studies and career advancement. John&#39;s unique blend of global
              experience and industry knowledge ensures that both his clients and students receive exceptional guidance
              and support.
            </span>
          </Text>
        </div>
      </div>
    </div>
  );
}
