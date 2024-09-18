import { Helmet } from "react-helmet";
import { Img, Text, Heading, Button, TextArea, Input, Slider } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import UserProfile3 from "../../components/UserProfile3";
import StudyabroadRowFour from "./StudyabroadRowFour";
import StudyabroadRowThirteen from "./StudyabroadRowThirteen";
import StudyabroadRowarrowleft from "./StudyabroadRowarrowleft";
import StudyabroadRowstudents from "./StudyabroadRowstudents";
import React from "react";

export default function StudyAbroadPage() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);

  // Scroll to Top Function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'  // This makes the scrolling behavior smooth
    });
  };

  return (
    <>
      <Helmet>
        <title>JP Edu Tech</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
        <div className="relative  w-full content-center bg-white-a700_01 lg:h-auto md:h-auto">
          <div className="mx-auto flex-1">
              <div>
              <Header className="self-stretch px-14 md:px-5 sm:px-4" />
                <div className="relative  z-[1] mr-1 h-[966px] bg-[url(/public/images/img_group_1010.png)] bg-cover bg-no-repeat lg:h-auto md:mr-0 md:h-auto">
                  <div className="h-[966px] bg-[url(/public/images/img_group_981.png)] bg-cover bg-no-repeat lg:h-auto md:h-auto">
                    <div className="mb-[290px] flex flex-col items-center gap-[182px] lg:gap-[136px] md:gap-[136px] sm:gap-[91px]">
                      
                      <div className="container-xs flex flex-col items-center gap-[54px] px-14 lg:px-5 md:px-5 sm:gap-[27px]">
                        <Heading
                          size="heading9xl"
                          as="h1"
                          className="text-center text-[96px] font-bold leading-[144px] text-white-a700_01 lg:text-[48px] md:text-[48px] mt-40"
                        >
                          <>
                            Want to Study <br /> Abroad
                          </>
                        </Heading>
                        <Button
                          shape="square"
                          className="min-w-[198px] pl-7 pr-[34px] font-nunitosans font-bold tracking-[1.20px] sm:px-4 "
                        >
                          Appointment
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative mt-[-94px] flex flex-col items-center gap-2.5 bg-gray-50_01">
                  <div className="container-xs mt-[146px] flex flex-col items-center gap-2.5 px-14 lg:px-5 md:px-5">
                    <Heading
                      size="heading7xl"
                      as="h2"
                      className="text-[64px] font-bold text-black-900_01 lg:text-[48px] md:text-[48px]"
                    >
                      Choose your own destination
                    </Heading>
                    <Text
                      as="p"
                      className="w-[40%] text-center text-[20px] font-normal leading-[30px] tracking-[0.40px] text-black-900_02 lg:w-full lg:text-[17px] md:w-full"
                    >
                      Begin an exciting academic journey in these varied and welcoming study locations!
                    </Text>
                  </div>
                  <div className="relative h-[682px] self-stretch">
                    <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-[664px] flex-1 items-end justify-center bg-[url(/public/images/img_group_898.svg)] bg-cover bg-no-repeat py-[78px] lg:h-auto lg:py-8 md:h-auto md:py-5 sm:py-4">
                      <div className="container-xs mt-[468px] flex justify-center px-14 lg:px-5 md:px-5">
                        <Img
                          src="images/img_close_light_blue_900_36x86.png"
                          alt="Close"
                          className="h-[36px] w-[6%] object-contain"
                        />
                      </div>
                    </div>
                    <div className="container-xs absolute left-0 right-0 top-0 m-auto w-full px-[54px] lg:px-5 md:relative md:flex-col md:px-5">
                      <Slider
                        autoPlay
                        autoPlayInterval={2000}
                        responsive={{ 0: { items: 1 }, 551: { items: 1 }, 1051: { items: 3 }, 1441: { items: 5 } }}
                        disableDotsControls
                        activeIndex={sliderState}
                        onSlideChanged={(e) => {
                          setSliderState(e?.item);
                        }}
                        ref={sliderRef}
                        items={[...Array(15)].map(() => (
                          <React.Fragment key={Math.random()}>
                            <div className="flex flex-col px-3.5">
                              <div className="flex flex-col items-start">
                                <Img
                                  src="images/img_rectangle_4219.png"
                                  alt="Image"
                                  className="mr-[18px] h-[392px] w-full rounded-[128px] object-cover lg:h-auto md:mr-0 md:h-auto"
                                />
                                <div className="relative mt-[-58px] flex w-[42%] flex-col items-start gap-[30px] self-center lg:w-full md:w-full">
                                  <Heading
                                    size="heading4xl"
                                    as="h3"
                                    className="flex h-[98px] w-[98px] items-center justify-center rounded-[48px] border-[5px] border-solid border-light_blue-900 bg-white-a700_01 text-center font-nunitosans text-[36px] font-semibold tracking-[0.72px] text-light_blue-900 lg:text-[30px] md:text-[30px] sm:text-[28px]"
                                  >
                                    1
                                  </Heading>
                                  <Heading
                                    size="heading3xl"
                                    as="h4"
                                    className="ml-4 text-[32px] font-bold tracking-[-0.61px] text-light_blue-900 lg:text-[27px] md:ml-0 md:text-[26px] sm:text-[24px]"
                                  >
                                    USA
                                  </Heading>
                                </div>
                              </div>
                            </div>
                          </React.Fragment>
                        ))}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative z-[2] mt-[-76px] bg-gray-50_01">
                <StudyabroadRowFour />
              </div>
            </div>
            <Img
              src="images/img_vector_gray_50_04.png"
              alt="Vector"
              className="absolute left-0 right-0 top-[35%] z-[3] m-auto h-[94px] w-full flex-1 object-cover"
            />
          </div>
          <div className="relative mt-[62px] h-[1092px] content-center self-stretch lg:h-auto md:h-auto">
            <div className="mx-auto flex flex-1 flex-col items-center">
              <div className="self-stretch bg-white-a700_01 px-14 md:px-5 sm:px-4">
                <div>
                  <div className="flex items-center justify-end md:flex-col">
                    <div className="mt-6 h-[1044px] w-px bg-light_blue-900 md:h-px md:w-[1044px]" />
                    <div className="flex w-[46%] flex-col items-center md:w-full">
                      <div className="ml-[18px] mr-[52px] mt-1.5 self-stretch ">
                      <Img src="images/set_2.svg" alt="Plus" className="w-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 top-0 my-auto h-[1080px] w-[50%] bg-[url(/public/images/img_group_2356.png)] bg-cover bg-no-repeat lg:h-auto md:h-auto">
              <div className="flex flex-col items-center bg-black-900_bf p-[26px] sm:p-4">
                <div className="mb-5 mr-7 flex w-[82%] flex-col items-start lg:w-full md:mr-0 md:w-full">
                  <Heading
                    size="heading4xl"
                    as="h6"
                    className="w-full text-[36px] font-semibold leading-[30px] tracking-[0.72px] text-white-a700_01 lg:text-[30px] md:text-[30px] sm:text-[28px]"
                  >
                    <>
                      Empower your Global aspirations with
                      <br />&nbsp; <br/>
                      JP EDU TECH
                    </>
                  </Heading>
                  <div className="mt-[34px] flex justify-between gap-5 self-stretch md:flex-col">
                    <Input
                      shape="square"
                      type="text"
                      name="firstName"
                      placeholder={`First name`}
                      style={{ border: 'none' }} 
                      className="w-[44%] px-2.5 font-semibold tracking-[0.40px] md:w-full"
                    />
                    <Input
                      shape="square"
                      type="text"
                      name="lastName"
                      placeholder={`Last name`}
                      style={{ border: 'none' }} 
                      className="mr-[38px] w-[44%] px-2.5 font-semibold tracking-[0.40px] md:mr-0 md:w-full"
                    />
                  </div>
                  <Input
                    shape="square"
                    type="email"
                    name="email"
                    placeholder={`Email address`}
                    style={{ border: 'none' }} 
                    className="mt-[52px] w-[94%] px-2.5 font-semibold tracking-[0.40px]"
                  />
                  <Input
                    shape="square"
                    type="number"
                    name="mobileNumber"
                    placeholder={`Mobile number`}
                    style={{ border: 'none' }} 
                    className="mt-[52px] w-[94%] px-2.5 font-semibold tracking-[0.40px]"
                  />
                  <Input
                    shape="square"
                    name="group971"
                    placeholder={`Your preferred study destination`}
                    style={{ border: 'none' }} 
                    className="mt-[52px] w-[94%] px-2.5 font-semibold tracking-[0.40px]"
                  />
                  <Input
                    shape="square"
                    name="group970"
                    placeholder={`When do you plan to study?`}
                    style={{ border: 'none' }} 
                    className="mt-[52px] w-[94%] px-2.5 font-semibold tracking-[0.40px]"
                  />
                  <TextArea
                    size="sm"
                    shape="square"
                    name="comments"
                    placeholder={`Comments...`}
                    style={{ border: 'none' }} 
                    className="mt-9 w-[94%] px-3.5 font-semibold tracking-[0.40px] text-light_blue-900"
                  />
                  <Button
                    size="lg"
                    shape="square"
                    className="mt-[46px] min-w-[246px] px-[34px] font-nunitosans font-bold tracking-[0.96px] sm:px-4"
                  >
                    Get Experts Advice
                  </Button>
                  <Heading
                    size="headinglg"
                    as="h5"
                    className="mt-6 text-[20px] font-semibold tracking-[0.40px] text-white-a700_01 lg:text-[17px]"
                  >
                    Talk to Our Visa Experts
                  </Heading>
                  <div className="mt-4 flex items-start gap-[22px] self-stretch">
                    <Img
                      src="images/img_icon_white_a700_01.svg"
                      alt="Icon"
                      className="h-[54px] w-[3%] self-center object-contain"
                    />
                    <Text
                      size="textxs"
                      as="p"
                      className="mt-2.5 text-[16px] font-normal text-white-a700_01 lg:text-[13px]"
                    >
                      +91 9704428144 +91 8247510882{" "}
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <StudyabroadRowarrowleft />
          <div className="container-xs mt-[74px] px-8 lg:px-5 md:px-5">
            <div className="ml-3 flex justify-between gap-5 md:ml-0 md:flex-col">
              <Img
                src="images/img_2_1_png.png"
                alt="21png"
                className="h-[40px] w-[8%] object-contain  md:w-full"
              />
              <Img
                src="images/img_1_1_png.png"
                alt="11png"
                className="h-[40px] w-[8%] object-contain  md:w-full"
              />
              <Img
                src="images/img_2_1_png_40x136.png"
                alt="21png"
                className="h-[40px] w-[8%] object-contain  md:w-full"
              />
              <Img
                src="images/img_4_1_png.png"
                alt="41png"
                className="h-[40px] w-[8%] object-contain md:w-full"
              />
              <Img
                src="images/img_1_1_png.png"
                alt="11png"
                className="h-[40px] w-[8%] object-contain  md:w-full"
              />
              <Img
                src="images/img_4_1_png.png"
                alt="41png"
                className="h-[40px] w-[8%] object-contain  md:w-full"
              />
            </div>
          </div>
          <div className="relative h-[1950px] self-stretch">
            <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-max w-full">
              <StudyabroadRowstudents />
              <Img
                src="images/img_rectangle_4251.png"
                alt="Image"
                className="relative mt-[-170px] h-[1028px] w-full object-cover lg:h-auto md:h-auto"
              />
            </div>
            <StudyabroadRowThirteen />
          </div>
          <div className="relative mt-[68px] h-[348px] content-center self-stretch lg:h-auto md:h-auto">
            <div className="mt-8 mx-auto flex flex-1 flex-col items-center">
              <div className="container-xs relative z-[9] flex flex-col items-center px-14 lg:px-5 md:px-5">
                <div className="ml-2 flex w-[82%] justify-center  px-14 lg:w-full md:ml-0 md:w-full md:px-5 sm:px-4">
                <div className=" mb-5 container-xs relative z-[4] flex flex-col items-center px-14 lg:px-5 md:px-5 ">
                  <Img src="images/contact.png"></Img>
                  </div>
                </div>
              </div>
              <Footer />
            </div>
            <div className="absolute right-[8%] top-[3px] z-50 m-auto flex rotate-[0deg] flex-col items-center justify-center rounded-[22px] bg-light_blue-900 px-2.5 py-3.5">
              <Img src="images/img_vector_white_a700_01_14x24.svg" alt="Vector" className="h-[14px]" onClick={scrollToTop} />
          </div>
        </div>
    </>
  );
}
