import React, { useState } from "react"; // This already imports React and useState together
import { Helmet } from "react-helmet";
import { Img, Heading, Button, Text, Input, TextArea } from "../../components"; 
import Header from "../../components/Header";
import EnglishcoachingColumnFive from "./EnglishcoachingColumnFive";
import EnglishcoachingRowFour from "./EnglishcoachingRowFour";
import EnglishcoachingRowourclinet from "./EnglishcoachingRowourclinet";
import { TabList, Tab, Tabs } from "react-tabs";

export default function EnglishCoachingPage() {
  // State to track the selected tab
  const [selectedTab, setSelectedTab] = useState("TOEFL");

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'  // This makes the scrolling behavior smooth
    });
  };

  // Function to handle tab change
  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  // Map selected tab to corresponding image source
  const tabImages = {
    TOEFL: "images/te1.png",
    IELTS: "images/ielts.svg",
    PTE: "images/pte.svg",
    Duolingo: "images/duolingo.svg",
    GMAT: "images/gmat.svg",
  };

  
  return (
    <>
      <Helmet>
        <title>JP Edu Tech</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <style>
        {`
        @keyframes slideDown {
              0% {
                transform: translateY(-100%); /* Starts off-screen from the top */
                opacity: 0;
              }
              100% {
                transform: translateY(0); /* Ends in its original position */
                opacity: 1;
              }
            }

            .animate-slideDown {
              animation: slideDown 1.5s ease-in-out forwards; /* Adjust duration and timing function as needed */
            }

            @keyframes slideUp {
              0% {
                transform: translateY(100%); /* Starts off-screen from the top */
                opacity: 0;
              }
              100% {
                transform: translateY(0); /* Ends in its original position */
                opacity: 1;
              }
            }

            .animate-slideUp {
              animation: slideUp 1.5s ease-in-out forwards; /* Adjust duration and timing function as needed */
            }

            @keyframes leftToRight {
              0% {
                transform: translateX(-100%); /* Starts off-screen to the left */
                opacity: 0;
              }
              100% {
                transform: translateX(0); /* Ends in its original position */
                opacity: 1;
              }
            }

            .animate-leftToRight {
              animation: leftToRight 2s ease-in-out forwards; /* Adjust the duration as needed */
            }
               @keyframes RightToleft {
              0% {
                transform: translateX(100%); /* Starts off-screen to the left */
                opacity: 0;
              }
              100% {
                transform: translateX(0); /* Ends in its original position */
                opacity: 1;
              }
            }
             .animate-RightToleft{
             animation: RightToleft 2s ease-in-out backwards;
             } 
          @keyframes zoomInOut {
            0% {
              transform: scale(0.3); /* Normal size */
            }
            100% {
              transform: scale(1.1); /* Zoomed in */
            }
           
          }

          .animate-zoomInOut {
            animation: zoomInOut 3s ease-in-out forwards; /* No infinite, and forwards to keep final state */
          }
        `}
        </style>
      <div className="w-full bg-white-a700_01">
      <Header className="w-[90%] lg:w-full lg:px-5 md:w-full md:px-5" />
        <div>
          <div className="relative h-[1706px] ">
          
            <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex-1 ">
              <div className="h-[964px] bg-[url(/public/images/img_group_278.png)] bg-cover bg-no-repeat lg:h-auto md:h-auto">
                <div className="h-[964px] bg-[url(/public/images/img_group_454.png)] bg-cover bg-no-repeat lg:h-auto md:h-auto">
                  <div className="mb-[312px] flex flex-col items-center gap-[180px] lg:gap-[135px] md:gap-[135px] sm:gap-[90px]">
                    <div className="container-xs flex flex-col items-center px-14 lg:px-5 md:px-5">
                      <div className="ml-3 flex w-[84%] flex-col items-center gap-[34px] lg:w-full md:ml-0 md:w-full">
                        <Heading
                          size="heading9xl"
                          as="h1"
                          className="mt-40 text-center text-[96px] font-bold leading-[144px] text-white-a700_01 lg:text-[48px] md:text-[48px] animate-zoomInOut"
                        >
                          <>
                            Unlock Your Potential with <br />
                            Expert English Coaching!
                          </>
                        </Heading>
                        <a href="/enquirepage">
                        <button
                        shape="square"
                          className="min-w-[198px] pl-7 pr-[34px] font-nunitosans font-bold tracking-[1.20px] sm:px-4"
                          >
                        <Img src="images/a_button.png" alt="Appointment Image" className="h-[60px] w-auto object-contain" />
                      </button>
                      </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative mt-[-40px] flex flex-col items-center justify-end bg-black-900_f4 py-[184px] lg:py-8 md:py-5 sm:py-4">
                <div className="container-xs mt-[216px] flex flex-col items-center gap-[26px] px-[38px] lg:px-5 md:px-5 ">
                  <Text
                    as="p"
                    className=" -mt-20 w-[62%] self-end text-[20px] font-normal leading-[30px] tracking-[0.40px] text-white-a700_01 lg:w-full lg:text-[17px] md:w-full "
                  >
                    <>
                      To make sure that overseas students have the English language comprehension and communication
                      abilities needed to succeed in their chosen program, the majority of educational institutions
                      worldwide employ standardized English examinations.
                      <br /> 
                      <br />
                      At JPEDU TECH, we understand how each of the industry-recognized English tests is conducted and
                      what’s required of applicants.
                      <br /> 
                      <br />
                      Because of this, we provide students with the greatest exam preparation guidance available in JP
                      EDU TECH so they can get the score they want.
                      <br />
                    </>
                  </Text>
                  <a href="/enquirepage">
                   <button
                      shape="square"
                      className="mr-20 min-w-[198px] pl-7 pr-[34px] font-nunitosans font-bold tracking-[1.20px] md:mr-0 sm:px-4"
                    >
                      <Img src="images/button_4.png" alt="Image" className=" mt-4 h-[98px] w-[60%] object-contain" />
                    </button>
                    </a>
                </div>
              </div>
            </div>
            <div className="absolute bottom-[7%] left-0 right-0 m-auto flex flex-1 flex-col items-center">
              <div className="h-[314px] self-stretch bg-black-900_e0 blur-[24.00px] backdrop-opacity-[0.5]" />
              <div className="container-xs relative mt-[-200px] flex flex-col items-start px-[52px] lg:px-5 md:px-5 ">
                <Img
                  src="images/img_rectangle_4363.png"
                  alt="Image"
                  className="h-[634px] w-[26%] rounded-[210px] object-contain animate-slideDown"
                />
              </div>
            </div>
            <Heading
              size="heading6xl"
              as="h2"
              className="absolute bottom-[28%] right-[8%] m-auto w-[52%] text-[48px] font-bold leading-[150%] tracking-[-0.91px] text-light_blue-900 lg:text-[40px] md:text-[32px] sm:text-[26px] animate-RightToleft"
            >
              Why English Proficiency Course marks are an important part of qualifying for studying abroad.{" "}
            </Heading>
            <Img
              src="images/img_rectangle_4364.png"
              alt="Image"
              className="absolute bottom-[3%] left-[20%] m-auto h-[436px] w-[18%] rounded-[144px] object-contain animate-slideUp"
            />
          </div>
          <div className="relative z-[7] mt-[-2px] h-[2110px] lg:h-auto md:h-auto">
            <div className="mt-[22px] h-[888px] flex-1 bg-gray-50_01" />
            
            <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-max w-full">
            <Tabs
              className="relative h-[1170px] content-end bg-gray-50_01 lg:h-auto md:h-auto"
              selectedTabClassName="!text-white-a700_01 bg-light_blue-900 shadow-3xl text-[20px] font-semibold"
              selectedTabPanelClassName="tab-panel--selected"
            >
              <TabList className="absolute z-50 left-0 right-0 top-[6%] mx-[118px] my-auto flex flex-1 flex-wrap gap-12 px-[30px] lg:mx-0 md:mx-0 sm:px-4">
              <Tab
                className="px-[30px] py-4 text-[20px] font-semibold cursor-pointer transition duration-300 hover:bg-light_blue-900 hover:text-white-a700_01 shadow-md hover:shadow-lg"
                onClick={() => handleTabChange("TOEFL")}
              >
                TOEFL
              </Tab>
              <Tab
                className="px-[30px] py-4 text-[20px] font-semibold cursor-pointer transition duration-300 hover:bg-light_blue-900 hover:text-white-a700_01 shadow-md hover:shadow-lg"
                onClick={() => handleTabChange("IELTS")}
              >
                IELTS
              </Tab>
              <Tab
                className="px-[30px] py-4 text-[20px] font-semibold cursor-pointer transition duration-300 hover:bg-light_blue-900 hover:text-white-a700_01 shadow-md hover:shadow-lg"
                onClick={() => handleTabChange("PTE")}
              >
                PTE
              </Tab>
              <Tab
                className="px-[30px] py-4 text-[20px] font-semibold cursor-pointer transition duration-300 hover:bg-light_blue-900 hover:text-white-a700_01 shadow-md hover:shadow-lg"
                onClick={() => handleTabChange("Duolingo")}
              >
                Duolingo
              </Tab>
              <Tab
                className="px-[30px] py-4 text-[20px] font-semibold cursor-pointer transition duration-300 hover:bg-light_blue-900 hover:text-white-a700_01 shadow-md hover:shadow-lg"
                onClick={() => handleTabChange("GMAT")}
              >
                GMAT
              </Tab>
              <Tab
                className="px-[30px] py-4 text-[20px] font-semibold cursor-pointer transition duration-300 hover:bg-light_blue-900 hover:text-white-a700_01 shadow-md hover:shadow-lg"
              >
                View All
              </Tab>
            </TabList>
              {/* Conditionally render the image based on the selected tab */}
              <div className="absolute ml-8 mb-10 bottom-0 left-0 right-0 m-auto h-[940px] flex-1 object-cover">
                <Img src={tabImages[selectedTab]} alt={`${selectedTab} Image`} />
              </div>
    {/* Images and additional components */}
    <Img
      src="images/img_group_998.png"
      alt="Image"
      className="absolute bottom-0 left-0 right-0 m-auto h-[664px] flex-1 object-cover"
    />

    {/* English Coaching Column */}
    <EnglishcoachingColumnFive />

    <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[1164px] flex-1 content-center lg:h-auto md:h-auto">

      <div className="absolute bottom-0 right-0 top-0 my-auto flex h-[1172px] w-[38%] flex-col items-center bg-[url(/public/images/img_group_469_1.png)] bg-cover bg-no-repeat p-10 lg:h-auto md:h-auto sm:p-4">
        <div className="mb-2.5 flex w-[90%] flex-col items-start gap-[42px] lg:w-full md:w-full">
          <Heading
            size="heading5xl"
            as="h3"
            className="text-[40px] font-semibold tracking-[0.80px] text-white-a700_01 lg:text-[34px] md:text-[34px] sm:text-[32px]"
          >
            Quick Enquiry
          </Heading>

          {/* Enquiry Form */}
          <div className="self-stretch">
            <div className="flex flex-col items-start">
              <div className="flex justify-between gap-5 self-stretch sm:flex-col">
                <Input
                  size="md"
                  shape="square"
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  style={{ border: 'none' }}
                  className="w-[44%] px-2 font-semibold tracking-[0.40px] sm:w-full"
                />
                <Input
                  size="md"
                  shape="square"
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  style={{ border: 'none' }}
                  className="mr-[50px] w-[44%] px-2 font-semibold tracking-[0.40px] sm:mr-0 sm:w-full"
                />
              </div>

              {/* Other form fields */}
              <Input
                size="md"
                shape="square"
                type="email"
                name="email"
                placeholder="Email address"
                style={{ border: 'none' }}
                className="mt-14 w-[90%] px-2 font-semibold tracking-[0.40px]"
              />
              <Input
                size="md"
                shape="square"
                type="number"
                name="mobileNumber"
                placeholder="Mobile number"
                style={{ border: 'none' }}
                className="mt-14 w-[90%] px-2 font-semibold tracking-[0.40px]"
              />
              <Input
                size="md"
                shape="square"
                name="group463"
                placeholder="Your preferred study destination"
                style={{ border: 'none' }}
                className="mt-14 w-[90%] px-2 font-semibold tracking-[0.40px]"
              />
              <Input
                size="md"
                shape="square"
                name="group462"
                placeholder="When do you plan to study?"
                style={{ border: 'none' }}
                className="mt-14 w-[90%] px-2 font-semibold tracking-[0.40px]"
              />
              <TextArea
                size="md"
                shape="square"
                name="comments"
                placeholder="Comments..."
                style={{ border: 'none' }}
                className="mt-[38px] w-[90%] px-2.5 font-semibold tracking-[0.40px] text-light_blue-900"
              />
              <Button
                size="xl"
                shape="square"
                className="mt-[50px] min-w-[188px] font-nunitosans font-bold tracking-[0.96px]"
              >
                Get Experts Advice
              </Button>

              <Heading
                size="headinglg"
                as="h4"
                className="mt-[26px] text-[20px] font-semibold tracking-[0.40px] text-white-a700_01 lg:text-[17px]"
              >
                Talk to Our Visa Experts
              </Heading>

              {/* Contact Information */}
              <div className="mt-4 flex items-start gap-3.5 self-stretch">
                <Img
                  src="images/img_icon_white_a700_01.svg"
                  alt="Icon"
                  className="h-[58px] w-[3%] self-center object-contain"
                />
                <Text
                  size="textxs"
                  as="p"
                  className="mt-3.5 text-[16px] font-normal text-white-a700_01 lg:text-[13px]"
                >
                  +91 8247510882 +91 9704428144
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Tabs>

  {/* Additional content */}
  <EnglishcoachingRowourclinet />
</div>

          </div>
          <EnglishcoachingRowFour />
          <div className="mt-[40px] flex flex-col items-center">
            <div className="container-xs relative z-[6] flex flex-col items-end lg:px-5 md:px-5">
              <div className=" -mb-4 flex rotate-[0deg] flex-col items-center justify-center rounded-[22px] bg-light_blue-900 px-2.5 py-3.5 cursor-pointer" onClick={scrollToTop}>
                <Img src="images/img_vector_white_a700_01_14x24.svg" alt="Vector" className="h-[14px]"   />
              </div>
            </div>
            <footer className="relative  flex flex-col self-stretch ">
              <div className="relative h-[346px] ">
                <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 flex-col items-center">
                  {/* <div className="container-xs relative z-[4] flex flex-col items-center px-14 lg:px-5 md:px-5 ">
                    <div className="relative ml-2.5 h-[150px] w-[82%] bg-light_blue-900 px-[126px] lg:px-8 md:ml-0 md:px-5 sm:px-4 ">
                      <div className="absolute bottom-[0.34px] left-[11%] m-auto flex w-[90%] flex-col">
                        <div className="flex gap-6 md:flex-col">
                          <div className="mt-1.5 flex w-[8%] flex-col bg-white-a700_01 px-5 md:mt-0 md:w-full">
                            <Img src="images/img_icon.svg" alt="Call Us Anytime" className="h-[74px]" />
                          </div>
                          <Heading
                            size="headingmd"
                            as="h6"
                            className="mb-[50px] mt-1.5 w-[18%] text-[17.6px] font-bold leading-6 text-white-a700_01 lg:w-[18%] lg:text-[14px] md:my-0 md:w-full"
                          >
                            Call Us Anytime
                          </Heading>
                          <div className="mt-1.5 flex w-[40%] items-center gap-6 md:mt-0 md:w-full">
                            <div className="w-[24%] bg-white-a700_01 px-5">
                              <Img
                                src="images/img_icon_light_blue_900.svg"
                                alt="Icon"
                                className="h-[74px] w-full lg:h-auto md:h-auto"
                              />
                            </div>
                            <div className="flex flex-1 flex-col items-start gap-0.5">
                              <Heading
                                size="headingmd"
                                as="h6"
                                className="text-[17.6px] font-bold leading-6 text-white-a700_01 lg:text-[14px]"
                              >
                                Send Mail
                              </Heading>
                              <Text
                                as="p"
                                className="text-[20px] font-light tracking-[-0.38px] text-white-a700_01 lg:text-[17px]"
                              >
                                jpedutechcs@gmail.com  
                              </Text>
                            </div>
                          </div>
                          <div className="flex w-[28%] items-start gap-6 md:w-full">
                            <div className="mt-1.5 flex w-[34%] flex-col items-center self-end bg-white-a700_01 p-5">
                              <Img src="images/img_linkedin.svg" alt="Linkedin" className="h-[32px]" />
                            </div>
                            <Heading
                              size="headingmd"
                              as="h6"
                              className="text-[17.6px] font-bold leading-6 text-white-a700_01 lg:text-[14px]"
                            >
                              Our Branche&#39;s
                            </Heading>
                          </div>
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
                  </div> */}
                  <div className="container-xs relative z-[4] flex flex-col items-center px-14 lg:px-5 md:px-5 ">
                  <Img src="images/contact.png"></Img>
                  </div>
                  <Img
                    src="images/img_rectangle_4266_276x1920.png"
                    alt="Image"
                    className="relative mt-[-80px] h-[276px] w-full object-cover lg:h-auto md:h-auto"
                  />
                </div>
                <Img
                  src="images/img_rectangle_4267_blue_gray_900_01_278x1920.png"
                  alt="Image"
                  className="absolute bottom-[-1px] left-0 right-0 z-[3] m-auto h-[278px] w-full flex-1 object-cover mt-10"
                />
                <div className="container-xs absolute bottom-[15px] left-0 right-0 z-[5] my-auto flex lg:px-5 md:px-5 ">
                  <div className="flex w-full flex-col items-end gap-[78px] py-3.5 lg:gap-[78px] lg:pr-8 md:gap-[58px] md:px-5 sm:gap-[39px] sm:px-4">
                    <div className="mr-5 mt-[104px] flex w-[72%] items-center justify-between gap-5 lg:w-full md:mr-0 md:w-full md:flex-col">
                      <div className="flex mr-16 w-[80%] flex-wrap justify-between gap-5 self-end md:w-full md:self-auto ">
                      <a href="/home1" className="lg:text-[17px]">
                        <Text
                          as="p"
                          className="text-[20px] font-normal tracking-[1.20px] text-white-a700_01 lg:text-[17px]"
                        >
                          Home
                        </Text>
                        </a>
                        <a href="/studyabroad" className="lg:text-[17px]">
                        <Text
                          as="p"
                          className="self-end text-[20px] font-normal tracking-[1.20px] text-white-a700_01 lg:text-[17px]"
                        >
                          Study Abroad{" "}
                        </Text>
                        </a>
                        <a href="/software" className="lg:text-[17px]">
                        <Text
                          as="p"
                          className="self-end text-[20px] font-normal tracking-[1.20px] text-white-a700_01 lg:text-[17px]"
                        >
                          Software Consulting
                        </Text>
                        </a>
                        <a href="/aboutus" className="lg:text-[17px]">
                          <Text as="p" className="text-[20px] font-normal tracking-[1.20px] text-white-a700_01">
                            About Us{" "}
                          </Text>
                        </a>
                        <a href="/contactus" className="self-start lg:text-[17px]">
                          <Text as="p" className="text-[20px] font-normal tracking-[-0.38px] text-white-a700_01">
                            Contact Us
                          </Text>
                        </a>
                      </div>
                      <div className="flex w-[22%] items-center justify-between gap-5 md:w-full" >
                      <a href="https://www.facebook.com/share/XL5X5UrAG4VuFYuy/?mibextid=qi2Omg" target="_blank">
                      <Img src="images/img_close_white_a700_01.svg" alt="Close" className="h-[40px] w-[40px]" />
                      </a>
                      <a href="https://wa.me/message/2I52EUSWYTQBG1" target="_blank">
                      <Img src="images/img_volume_white_a700_01.svg" alt="Volume" className="h-[40px] w-[40px]"  />
                      </a>
                      <a href="https://www.instagram.com/jpetcs?igsh=MW5xNjF3aDN5dTE3bw==" target="_blank">
                      <Img src="images/img_info_white_a700_01.svg" alt="Info" className="h-[40px] w-[40px]" />
                      </a>
                      <a href="https://x.com/jpedutech" target="_blank" >
                      <Img src="images/img_trash.svg" alt="Trash" className="h-[36px]"  />
                      </a>
                    </div>
                    </div>
                    <div className=" flex w-[100%] items-center justify-between gap-5 lg:w-full md:mr-0 md:w-full sm:flex-col">
                      <Heading
                        size="headingxs"
                        as="p"
                        className="text-[14px] font-semibold tracking-[0.28px] text-white-a700_01"
                      >
                        @2024 JP EDU TECH Pvt Ltd. All rights reserved.
                      </Heading>
                      <div className="flex w-[12%] flex-wrap justify-between gap-5 sm:w-full">
                        <a href="#">
                          <Heading
                            size="headingxs"
                            as="p"
                            className="text-[14px] font-semibold tracking-[0.28px] text-white-a700_01"
                          >
                            Terms{" "}
                          </Heading>
                        </a>
                        <a href="#">
                          <Heading
                            size="headingxs"
                            as="p"
                            className="text-[14px] font-semibold tracking-[0.28px] text-white-a700_01"
                          >
                            Privacy Policy{" "}
                          </Heading>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <Img
                  src="images/img_logos_white_1.png"
                  alt="Logoswhiteone"
                  className="absolute bottom-[16%] left-1 z-[4] m-auto h-[212px] w-[20%] object-contain"
                />
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}
