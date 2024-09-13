import { Helmet } from "react-helmet";
import { Img, Text, Heading, Button } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import UserProfile3 from "../../components/UserProfile3";
import MigrateRowFive from "./MigrateRowFive";
import MigrateRowThree from "./MigrateRowThree";
import MigrateRowourclinet from "./MigrateRowourclinet";
import MigrateStackstudentvis from "./MigrateStackstudentvis";
import React from "react";

export default function MigratePage() {
  return (
    <>
      <Helmet>
        <title>JP Edu Tech</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-white-a700_01">
        <div className="flex flex-col items-center">
          <div className="h-[966px] self-stretch bg-[url(/public/images/img_group_1285.png)] bg-cover bg-no-repeat lg:h-auto md:h-auto">
            <div className="flex flex-col items-center gap-[212px] bg-black-900_a8 lg:gap-[159px] md:gap-[159px] sm:gap-[106px]">
              <Header className="self-stretch px-14 md:px-5 sm:px-4" />
              <div className="container-xs mb-[280px] flex flex-col items-center px-14 lg:px-5 md:px-5">
                <div className="ml-3.5 flex w-[78%] flex-col items-center gap-[34px] lg:w-full md:ml-0 md:w-full">
                  <Heading
                    size="heading9xl"
                    as="h1"
                    className="text-center text-[96px] font-bold leading-[144px] text-white-a700_01 lg:text-[48px] md:text-[48px]"
                  >
                    <>
                      Connecting Dreams with
                      <br /> New Destinations.
                    </>
                  </Heading>
                  <Button
                    shape="square"
                    className="min-w-[198px] pl-[22px] pr-[26px] font-bold tracking-[1.20px] sm:px-4"
                  >
                    Appointment
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-[2498px] content-center self-stretch lg:h-auto md:h-auto">
            <div className="mx-auto flex-1">
              <div>
                <div className="relative z-[2] flex flex-col items-center justify-end bg-black-900_f4 py-[110px] lg:py-8 md:py-5 sm:py-4">
                  <div className="container-xs mt-[212px] flex flex-col items-end gap-[38px] px-12 lg:px-5 md:px-5">
                    <Text
                      as="p"
                      className="w-[50%] text-[20px] font-normal leading-[30px] tracking-[0.40px] text-white-a700_01 lg:w-full lg:text-[17px] md:w-full"
                    >
                      <>
                        There are several reasons people visit Australia. It offers plenty of opportunities for all.
                        Australia is an open and multicultural country that is a chosen land for immigrants in today’s
                        world.
                        <br />
                        Its strong economy provides diverse job opportunities and career growth. The country’s
                        multicultural society ensures a welcoming environment. Enjoy beautiful landscapes and a vibrant
                        lifestyle year-round. Clear pathways to permanent residency make it a great place for long-term
                        stability.
                      </>
                    </Text>
                    <Button
                      shape="square"
                      className="mr-[524px] min-w-[198px] pl-7 pr-[34px] font-nunitosans font-bold tracking-[1.20px] md:mr-0 sm:px-4"
                    >
                      Know More
                    </Button>
                  </div>
                </div>
                <div className="relative mt-[-22px] bg-gray-50_01 py-[70px] lg:py-8 md:py-5 sm:py-4">
                  <MigrateStackstudentvis />
                </div>
              </div>
              <div className="relative z-[3] mt-[-88px] flex flex-col items-center">
                <div className="container-xs relative z-[4] flex flex-col items-start pl-[258px] pr-14 lg:px-5 md:px-5">
                  <Img src="images/img_group_43.png" alt="Image" className="h-[332px] w-[34%] object-contain" />
                </div>
                <MigrateRowThree />
              </div>
            </div>
            <div className="container-xs absolute left-0 right-0 top-[1%] z-[5] my-auto flex flex-col gap-[90px] px-1.5 lg:gap-[90px] lg:px-5 md:gap-[67px] md:px-5 sm:gap-[45px]">
              <div className="ml-[142px] mr-32 flex gap-[18px] bg-black-900_e0 blur-[24.00px] backdrop-opacity-[0.5] md:mx-0 md:flex-col">
                <Button size="6xl" shape="square" className="w-full px-[34px] font-bold tracking-[-0.46px] md:px-5">
                  Australia
                </Button>
                <Button
                  color="white_A700_01"
                  size="6xl"
                  shape="square"
                  className="w-full px-[34px] font-bold tracking-[-0.46px] md:px-5"
                >
                  Canada
                </Button>
                <Button
                  color="white_A700_01"
                  size="6xl"
                  shape="square"
                  className="w-full px-[34px] font-bold tracking-[-0.46px] md:px-5"
                >
                  UK
                </Button>
                <Button
                  color="white_A700_01"
                  size="6xl"
                  shape="square"
                  className="w-full px-[34px] font-bold tracking-[-0.46px] md:px-5"
                >
                  USA{" "}
                </Button>
                <Button
                  color="white_A700_01"
                  size="6xl"
                  shape="square"
                  className="w-full px-[34px] font-bold tracking-[-0.46px] md:px-5"
                >
                  View All
                </Button>
              </div>
              <div className="flex items-start md:flex-col">
                <div className="relative h-[500px] w-[48%] self-center md:w-full">
                  <Img
                    src="images/img_rectangle_4383.png"
                    alt="Image"
                    className="absolute bottom-0 left-px top-0 my-auto h-[500px] w-[94%] rounded-bl-sm rounded-br-sm rounded-tl-md rounded-tr-md object-contain"
                  />
                  <div className="absolute bottom-0 left-0 my-auto ml-auto mr-[52px] flex-1 bg-gradient4 lg:mr-0 md:mr-0">
                    <div className="mt-[82px] flex flex-col items-center">
                      <Heading
                        size="heading5xl"
                        as="h5"
                        className="relative z-[6] text-[40px] font-bold tracking-[-0.76px] text-white-a700_01 lg:text-[34px] md:text-[34px] sm:text-[32px]"
                      >
                        Australia
                      </Heading>
                      <div className="relative mt-[-12px] h-[20px] self-stretch bg-gradient4" />
                    </div>
                  </div>
                </div>
                <Heading
                  size="heading6xl"
                  as="h6"
                  className="mt-7 text-[48px] font-bold tracking-[-0.91px] text-light_blue-900 lg:text-[40px] md:text-[32px] sm:text-[26px]"
                >
                  Why Migrate to Australia?
                </Heading>
              </div>
            </div>
          </div>
          <div className="container-xs mt-11 px-9 lg:px-5 md:px-5">
            <div className="flex justify-between gap-5 md:flex-col">
              <Img
                src="images/img_2_1_png.png"
                alt="21png"
                className="h-[40px] w-[8%] object-contain opacity-40 md:w-full"
              />
              <Img
                src="images/img_1_1_png.png"
                alt="11png"
                className="h-[40px] w-[8%] object-contain opacity-40 md:w-full"
              />
              <Img
                src="images/img_2_1_png_40x136.png"
                alt="21png"
                className="h-[40px] w-[8%] object-contain opacity-40 md:w-full"
              />
              <Img
                src="images/img_4_1_png.png"
                alt="41png"
                className="h-[40px] w-[8%] object-contain opacity-40 md:w-full"
              />
              <Img
                src="images/img_1_1_png.png"
                alt="11png"
                className="h-[40px] w-[8%] object-contain opacity-40 md:w-full"
              />
              <Img
                src="images/img_4_1_png.png"
                alt="41png"
                className="h-[40px] w-[8%] object-contain opacity-40 md:w-full"
              />
            </div>
          </div>
          <MigrateRowourclinet />
          <MigrateRowFive />
          <div className="relative mt-[110px] h-[348px] content-center self-stretch lg:h-auto md:h-auto">
            <div className="mx-auto flex-1">
              <div className="flex flex-col items-center">
                <div className="container-xs relative z-[13] flex flex-col items-center px-14 lg:px-5 md:px-5">
                  <div className="relative ml-6 h-[150px] w-[84%] bg-light_blue-900 px-[116px] lg:px-8 md:ml-0 md:px-5 sm:px-4">
                    <div className="absolute bottom-[0.34px] left-0 right-0 m-auto flex w-[92%] flex-col">
                      <div className="mr-14 flex gap-6 md:mr-0 md:flex-col">
                        <UserProfile3 className="mt-1.5 w-[8%] bg-white-a700_01 md:mt-0 md:w-full" />
                        <Heading
                          size="headingmd"
                          as="h2"
                          className="mb-[50px] mt-1.5 w-[18%] text-[17.6px] font-bold leading-6 text-white-a700_01 lg:w-[18%] lg:text-[14px] md:my-0 md:w-full"
                        >
                          Call Us Anytime
                        </Heading>
                        <UserProfile3 className="mt-1.5 w-[40%] gap-6 md:mt-0 md:w-full" />
                        <UserProfile3 className="w-[28%] gap-6 md:w-full" />
                      </div>
                      <Text
                        size="textxs"
                        as="p"
                        className="relative ml-[100px] mt-[-50px] text-[16px] font-normal leading-[30px] text-white-a700_01 lg:text-[13px] md:ml-0"
                      >
                        <>
                          +91 9704428144
                          <br />
                          +91 8247510882
                        </>
                      </Text>
                    </div>
                    <Text
                      size="textxs"
                      as="p"
                      className="absolute bottom-[11px] right-[9%] m-auto w-[22%] text-[16px] font-normal leading-[30px] text-white-a700_01 lg:text-[13px]"
                    >
                      <>
                        Kurnool, Hyderabad, <br />
                        Guntur, Melbourne(Australia)
                      </>
                    </Text>
                  </div>
                </div>
                <Footer />
              </div>
            </div>
            <div className="absolute right-[7%] top-1 z-[14] m-auto flex rotate-[90deg] flex-col items-center justify-center rounded-[22px] bg-light_blue-900 px-2.5 py-3.5">
              <Img src="images/img_vector_white_a700_01_14x24.svg" alt="Vector" className="h-[14px]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
