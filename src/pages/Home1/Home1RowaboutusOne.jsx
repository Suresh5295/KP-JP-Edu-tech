import { Img, Text, Button, Heading } from "../../components";
import React from "react";

export default function Home1RowaboutusOne() {
  return (
    <div className="relative mt-[-34px] h-[1028px] self-stretch bg-[url(/public/images/img_group_2380.png)] bg-cover bg-no-repeat lg:h-auto md:h-auto">
      <div className="relative h-[1028px] bg-blue_gray-900_44">
        <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-[68%] flex-col items-start gap-[26px] bg-gray-50 py-[172px] pl-[412px] pr-14 lg:py-8 lg:pl-8 md:p-5 sm:p-4">
          <Heading
            as="p"
            className="ml-[108px] font-playfairdisplay text-[64px] font-medium text-gray-800_01 lg:text-[48px] md:ml-0 md:text-[48px]"
          >
            About Us
          </Heading>
          <Heading
            size="headinglg"
            as="h5"
            className="mb-[532px] text-[20px] font-semibold tracking-[0.40px] text-cyan-400 lg:text-[17px]"
          >
            Welcome To Our Best Quality Jp Edu Tech
          </Heading>
        </div>
        <div className="container-xs absolute bottom-1 left-0 right-0 my-auto flex justify-center px-14 lg:px-5 md:px-5">
          <div className="flex h-[472px] w-[86%] items-end justify-center bg-[url(/public/images/img_group_898.svg)] bg-cover bg-no-repeat px-14 py-[178px] lg:h-auto lg:w-full lg:py-8 md:h-auto md:w-full md:p-5 sm:p-4">
            <a href="/aboutus" target="_self">
              <button
                shape="square"
                className="ml-32 mt-[50px] min-w-[200px] font-nunitosans font-bold tracking-[1.20px] sm:px-4"
              >
                <Img src="images/button_4.png" alt="Image" className=" mt-4 h-[98px] w-[60%] object-contain" />
              </button>
            </a>
          </div>
        </div>
        <Text
  as="p"
  className="absolute bottom-[28%] left-0 right-0 m-auto  w-[52%] text-center font-nunito text-[20px] font-medium leading-[30px] tracking-[0.40px] text-gray-800_01 lg:text-[17px]"  // added 'mt-8' for margin
>
  <>
    At JP Edu Tech, we understand that navigating the complexities of visa and immigration processes can be daunting.
    That&#39;s why we&#39;re here—to simplify your journey and ensure your dreams of global mobility become a reality. <br />
    We specialize in providing comprehensive Visa and Immigration services tailored to meet your specific needs.
    Whether you&#39;re an individual seeking a Students who seek to study overseas, new adventure abroad, a family
    looking to reunite, or a business aiming to expand internationally, our team of experts is committed to guiding
    you through every step of the process. We are here to help you achieve your goals effectively and efficiently.
    <br />
    Our mission is simple: To empower our clients with the knowledge and support they need to achieve their immigration
    goals efficiently and effectively. We prioritize transparency, integrity, and personalized service, ensuring that
    each client receives the attention and care they deserve.
  </>
</Text>

        <Img
          src="images/img_vector_blue_gray_100.svg"
          alt="Vector"
          className="absolute right-[10%] top-[22.26px] m-auto h-[270px] w-[22%] object-contain"
        />
        <Img
          src="images/img_vector_blue_gray_100.svg"
          alt="Vector"
          className="absolute right-[12%] top-[15%] m-auto h-[208px] w-[12%] object-contain"
        />
      </div>
    </div>
  );
}
