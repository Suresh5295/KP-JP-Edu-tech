import { Helmet } from "react-helmet";
import { Text, Heading, Img, Button } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import UserProfile3 from "../../components/UserProfile3";
import VisaProfile from "../../components/VisaProfile";
import AboutusColumnTwo from "./AboutusColumnTwo";
import AboutusRow from "./AboutusRow";
import AboutusRowTwo from "./AboutusRowTwo";
import AboutusStackiconOne from "./AboutusStackiconOne";
import React, { Suspense } from "react";

const data = [
  { png: "images/img_2_1_png.png" },
  { png: "images/img_1_1_png.png" },
  { png: "images/img_2_1_png_40x136.png" },
  { png: "images/img_4_1_png.png" },
  { png: "images/img_1_1_png.png" },
  { png: "images/img_4_1_png.png" },
];
const data1 = [
  { userImage: "images/img_graduation_1.png", visaText: "visa & Immigration" },
  { userImage: "images/img_businessman_1.png", visaText: "Software Consulting" },
  { userImage: "images/img_graduation_1.png", visaText: "Business Consulting" },
  { userImage: "images/img_graduation_1.png", visaText: "Financial Consulting" },
  { userImage: "images/img_graduation_1.png", visaText: "Career Counselling" },
  { userImage: "images/img_graduation_1.png", visaText: "English Coaching" },
];

export default function AboutusPage() {
  return (
    <>
      <Helmet>
        <title>JP Edu Tech</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-white-a700_01">
        <div className="flex flex-col items-center">
          <div className="self-stretch">
            <div className="h-[966px] bg-[url(/public/images/img_rectangle_4187.png)] bg-cover bg-no-repeat lg:h-auto md:h-auto">
              <div className="flex flex-col items-center gap-44 bg-black-900_a5 lg:gap-[132px] md:gap-[132px] sm:gap-[88px]">
                <Header className="self-stretch px-14 md:px-5 sm:px-4" />
                <div className="container-xs mb-[340px] flex flex-col items-center px-14 lg:px-5 md:px-5">
                  <div className="ml-2 flex w-[58%] flex-col items-center lg:w-full md:ml-0 md:w-full">
                    <Heading
                      size="heading9xl"
                      as="h1"
                      className="text-[96px] font-bold text-white-a700_01 lg:text-[48px] md:text-[48px]"
                    >
                      <span>&nbsp;</span>
                      <span>About&nbsp;</span>
                      <span>Jp Edu Tech</span>
                      <span>
                        <>
                          &nbsp;
                          <br />
                        </>
                      </span>
                    </Heading>
                    <Text
                      as="p"
                      className="mt-3.5 self-stretch text-center text-[20px] font-normal leading-[30px] tracking-[0.40px] text-white-a700_01 lg:text-[17px]"
                    >
                      At JP EDU TECH, we understand that navigating the complexities of visa and immigration processes
                      can be daunting. That&#39;s why we&#39;re here—to simplify your journey and ensure your dreams of
                      global mobility become a reality.
                    </Text>
                    <Button
                      shape="square"
                      className="mt-[50px] min-w-[198px] pl-7 pr-[34px] font-nunitosans font-bold tracking-[1.20px] sm:px-4"
                    >
                      Appointment
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative mt-[-192px] h-[856px] bg-[url(/public/images/img_group_191.png)] bg-cover bg-no-repeat py-[76px] lg:h-auto lg:py-8 md:h-auto md:py-5 sm:py-4">
              <AboutusColumnTwo />
            </div>
          </div>
          <AboutusRow />
          <div className="relative h-[958px] content-center self-stretch bg-[url(/public/images/img_group_180.png)] bg-cover bg-no-repeat lg:h-auto md:h-auto">
            <div className="relative mx-auto h-[940px] flex-1 px-[72px] lg:px-8 md:px-5 sm:px-4">
              <Img
                src="images/img_group_4.png"
                alt="Image"
                className="absolute bottom-px right-[4%] m-auto h-[202px] w-[20%] object-contain"
              />
              <div className="absolute bottom-[19%] left-0 right-0 mx-[74px] my-auto flex flex-1 flex-col gap-9 lg:mx-0 md:mx-0">
                <Text
                  as="p"
                  className="w-[46%] text-[20px] font-normal leading-[30px] tracking-[0.40px] text-black-900_02 lg:w-full lg:text-[17px] md:w-full"
                >
                  At JP Edu Tech, we provide a comprehensive suite of services tailored to meet the diverse needs of
                  educational institutions and organizations. Our solutions are designed to leverage technology
                  effectively, enhance operational efficiency, and support educational goals. Explore our key services
                </Text>
                <div className="mr-[836px] grid grid-cols-2 gap-3 lg:grid-cols-2 md:mr-0 md:grid-cols-1">
                  <Suspense fallback={<div>Loading feed...</div>}>
                    {data1.map((d, index) => (
                      <VisaProfile {...d} key={"aboutus" + index} />
                    ))}
                  </Suspense>
                </div>
              </div>
              <Heading
                size="heading6xl"
                as="h2"
                className="absolute left-[8%] top-[21%] m-auto text-[48px] font-bold text-black-900_01 lg:text-[40px] md:text-[32px] sm:text-[26px]"
              >
                Services at Jp Edu Tech
              </Heading>
              <div className="absolute bottom-[8%] left-0 right-0 m-auto h-[678px] w-[82%]">
                <Img
                  src="images/img_portrait_profes_632x392.png"
                  alt="Portraitprofes"
                  className="absolute right-0 top-0 m-auto h-[632px] w-[26%] rounded-[196px] object-contain"
                />
                <Img
                  src="images/img_rectangle_4250.png"
                  alt="Image"
                  className="absolute bottom-[-0.85px] right-[13%] m-auto h-[472px] w-[24%] rounded-[154px] object-contain"
                />
              </div>
              <Img
                src="images/img_group_132.png"
                alt="Image"
                className="absolute right-[29%] top-0 m-auto h-[288px] w-[36%] object-contain"
              />
            </div>
            <Img
              src="images/img_rectangle_4485.png"
              alt="Image"
              className="absolute bottom-0 left-0 top-0 my-auto h-[528px] w-[2%] object-contain"
            />
          </div>
          <div className="container-xs mt-[138px] px-8 lg:px-5 md:px-5">
            <div className="ml-2.5 flex gap-[156px] md:ml-0 md:flex-col">
              <Suspense fallback={<div>Loading feed...</div>}>
                {data.map((d, index) => (
                  <Img
                    key={"listpng" + index}
                    src={d.png}
                    alt="Png"
                    className="h-[40px] w-[16%] object-contain opacity-40 md:w-full"
                  />
                ))}
              </Suspense>
            </div>
          </div>
          <AboutusStackiconOne />
          <AboutusRowTwo />
          <div className="mt-[84px] flex flex-col items-end self-stretch">
            <div className="relative z-[7] mr-[116px] flex rotate-[90deg] flex-col items-center justify-center rounded-[22px] bg-light_blue-900 px-2.5 py-3.5 md:mr-0">
              <Img src="images/img_vector_white_a700_01_14x24.svg" alt="Vector" className="h-[14px]" />
            </div>
            <div className="relative mt-[-44px] self-stretch">
              <div className="flex flex-col items-center">
                <div className="container-xs relative z-[6] flex flex-col items-center px-14 lg:px-5 md:px-5">
                  <div className="relative ml-2 h-[150px] w-[82%] bg-light_blue-900 px-[126px] lg:px-8 md:ml-0 md:px-5 sm:px-4">
                    <div className="absolute bottom-[0.34px] left-0 right-0 m-auto flex w-[96%] flex-col">
                      <div className="mr-[76px] flex gap-6 md:mr-0 md:flex-col">
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
                      className="absolute bottom-[11px] right-[10%] m-auto w-[22%] text-[16px] font-normal leading-[30px] text-white-a700_01 lg:text-[13px]"
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
          </div>
        </div>
      </div>
    </>
  );
}
