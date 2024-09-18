import { Helmet } from "react-helmet";
import { Img, Text, Heading, Button, TextArea, Input, Slider } from "../../components";
import Header from "../../components/Header";
import UserProfile3 from "../../components/UserProfile3";
import ResourcesRow from "./ResourcesRow";
import ResourcesRowOne from "./ResourcesRowOne";
import ResourcesRowTwo from "./ResourcesRowTwo";
import ResourcesRowourclinet from "./ResourcesRowourclinet";
import React from "react";

export default function ResourcesPage() {
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
      <div className="w-full bg-white-a700_01">
      <Header className="self-stretch px-14 md:px-5 sm:px-4" />
        <div className="flex flex-col items-center">
          <div className="relative h-[2466px] content-center self-stretch lg:h-auto md:h-auto">
            <div className="mx-auto flex-1">
              <div className="h-[966px] bg-[url(/public/images/img_group_1465.png)] bg-cover bg-no-repeat lg:h-auto md:h-auto">
                <div className="flex flex-col items-center gap-[254px] lg:gap-[190px] md:gap-[190px] sm:gap-[127px] mb-80">
                  
                  <div className="container-xs mb-[480px] flex flex-col items-center px-14 lg:px-5 md:px-5">
                    <Heading
                      size="heading9xl"
                      as="h1"
                      className="mt-64 text-[96px] font-bold text-white-a700_01 lg:text-[48px] md:text-[48px]"
                    >
                      Resources
                    </Heading>
                  </div>
                </div>
              </div>
              <div className="relative mt-[-40px] bg-black-900_f4 py-[18px]">
                <div className="mt-[492px] flex flex-col items-center gap-[72px] lg:gap-[72px] md:gap-[54px] sm:gap-9">
                  <div className="container-xs flex flex-col items-center gap-[26px] px-[46px] lg:px-5 md:px-5">
                    <div className="ml-[18px] flex gap-5 self-stretch md:ml-0 md:flex-col">
                      <div className="flex w-full flex-col items-start">
                        <Text
                          as="p"
                          className="w-full text-[20px] font-normal leading-[30px] tracking-[0.40px] text-white-a700_01 lg:text-[17px]"
                        >
                          Welcome to the Jp Edu Tech blog, where we share tips, stories, and insights to support your
                          journey. Explore our posts on everything from studying abroad to finding the perfect career
                          path. We’re here to provide advice and inspiration to help you succeed and grow. Dive into
                          expert insights and learn from
                        </Text>
                        <Heading
                          size="headingxl"
                          as="h2"
                          className="text-[24px] font-bold text-light_blue-900 lg:text-[20px]"
                        >
                          Read More..
                        </Heading>
                      </div>
                      <div className="flex w-full flex-col items-start">
                        <Text
                          as="p"
                          className="w-full text-[20px] font-normal leading-[30px] tracking-[0.40px] text-white-a700_01 lg:text-[17px]"
                        >
                          Welcome to the Jp Edu Tech blog—your one-stop shop for tips, tricks, and the occasional laugh!
                          Join us as we navigate the wild world of studying, working, and living abroad without getting
                          lost. We promise to deliver advice that’s as helpful as it is entertaining. Dive into posts
                          filled with expert insights, real-life{" "}
                        </Text>
                        <Heading
                          size="headingxl"
                          as="h3"
                          className="text-[24px] font-bold text-light_blue-900 lg:text-[20px]"
                        >
                          Read More..
                        </Heading>
                      </div>
                      <div className="flex w-full flex-col items-start">
                        <Text
                          as="p"
                          className="w-full text-[20px] font-normal leading-[30px] tracking-[0.40px] text-white-a700_01 lg:text-[17px]"
                        >
                          Welcome to our &quot;Moments&quot; section—where we celebrate the little things that make life
                          special! Join us as we capture and share the moments that define our journeys, both big and
                          small. Whether it’s a breakthrough in your studies, a career milestone, or a simple everyday
                          joy, we’re here to cherish it.
                        </Text>
                        <Heading
                          size="headingxl"
                          as="h4"
                          className="text-[24px] font-bold text-light_blue-900 lg:text-[20px]"
                        >
                          Read More..
                        </Heading>
                      </div>
                    </div>
                    <div className="flex w-[5%] justify-center gap-[18px] lg:w-full md:w-full">
                      <div className="rotate-180 flex w-full flex-col items-center justify-center rounded-[16px] bg-white-a700_01 p-1.5">
                        <Img src="images/img_group_2396.svg" alt="Vector" className="h-[18px]" />
                      </div>
                      <div className="rotate-180 flex w-full flex-col items-center justify-center rounded-[16px] bg-white-a700_01 p-1.5">
                        <Img src="images/img_group_2397.svg" alt="Vector" className="h-[18px]" />
                      </div>
                    </div>
                  </div>
                  <ResourcesRow />
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-full flex-col items-center">
              <div className="self-stretch bg-black-900_e0 blur-[24.00px] backdrop-opacity-[0.5]" />
              <div className="container-xs relative mt-[-110px] px-[46px] lg:px-5 md:px-5">
              <div className=" mx-auto flex w-full gap-5 md:mx-0 md:flex-col">
              <Slider
                autoPlay
                autoPlayInterval={2000}
                responsive={{ 0: { items: 1 }, 551: { items: 1 }, 1051: { items: 2 }, 1441: { items: 3 } }} // This can be adjusted if you want to show more items at certain breakpoints
                disableDotsControls
                activeIndex={sliderState}
                onSlideChanged={(e) => {
                  setSliderState(e?.item);
                }}
                ref={sliderRef}
                items={[
                  <div className="px-2.5" key="image1">
                    <div className="relative h-[454px] content-center lg:h-auto md:h-auto">
                      <Img
                        src="images/img_rectangle_4253.png" // Your existing image
                        alt="First Image"
                        className="mx-auto h-[454px] w-full flex-1 object-cover"
                      />
                      <div className="absolute bottom-[-1px] left-0 right-0 m-auto h-[160px] flex-1 bg-gradient4" />
                    </div>
                  </div>,
                  <div className="px-2.5" key="image2">
                    <div className="relative h-[454px] content-center lg:h-auto md:h-auto">
                      <Img
                        src="images/img_rectangle_4254.png" // New image
                        alt="Second Image"
                        className="mx-auto h-[454px] w-full flex-1 object-cover"
                      />
                      <div className="absolute bottom-[-1px] left-0 right-0 m-auto h-[160px] flex-1 bg-gradient4" />
                    </div>
                  </div>,
                  <div className="px-2.5" key="image3">
                    <div className="relative h-[454px] content-center lg:h-auto md:h-auto">
                      <Img
                        src="images/img_rectangle_4255.png" // Another new image
                        alt="Third Image"
                        className="mx-auto h-[454px] w-full flex-1 object-cover"
                      />
                      <div className="absolute bottom-[-1px] left-0 right-0 m-auto h-[160px] flex-1 bg-gradient4" />
                    </div>
                  </div>
                ]}
              />
            </div>

              </div>
            </div>
          </div>
          <div className="relative h-[1934px] self-stretch lg:h-auto md:h-auto">
            <div className="mx-[136px] mt-5 flex-1 lg:mx-0 md:mx-0">
              <div className="flex flex-col items-start">
                <div className="flex items-center gap-[46px] self-stretch">
                  <a
                    href="Career"
                    target="_blank"
                    rel="noreferrer"
                    className="lg:text-[40px] md:text-[32px] sm:text-[26px]"
                  >
                    <Heading size="heading6xl" as="h2" className="text-[48px] font-bold text-gray-700_01">
                      Career
                    </Heading>
                  </a>
                  <Img
                    src="images/img_close_light_blue_900_8x84.svg"
                    alt="Close"
                    className="mb-[22px] h-[8px] w-[5%] self-end object-contain"
                  />
                </div>
                <Heading
                  size="text3xl"
                  as="h3"
                  className="ml-1 text-[36px] font-medium text-gray-700_01 lg:text-[30px] md:ml-0 md:text-[30px] sm:text-[28px]"
                >
                  We are hiring!
                </Heading>
                <Text
                  as="p"
                  className="ml-2.5 w-[44%] text-[20px] font-normal leading-[30px] tracking-[0.40px] text-gray-700_01 lg:w-full lg:px-5 lg:text-[17px] md:ml-0 md:w-full md:px-5"
                >
                  <span>At&nbsp;</span>
                  <span className="uppercase">
                    JP Edu Tech, we believe in helping you achieve your career goals. Our dedicated team of career
                    counselors offers personalized guidance and support to navigate the complexities of today&#39;s job
                    market.
                  </span>
                </Text>
                <div className="mx-2.5 mt-[18px] flex gap-[11px] self-stretch md:mx-0 md:flex-col">
                  <Input
                    shape="square"
                    type="text"
                    name="firstName"
                    placeholder={`First name`}
                    style={{ border: 'none' }} 
                    className="w-[20%] px-2.5 font-semibold tracking-[0.40px] md:w-full md:px-5"
                  />
                  <Input
                    shape="square"
                    type="text"
                    name="lastName"
                    placeholder={`Last name`}
                    style={{ border: 'none' }} 
                    className="w-[22%] px-2.5 font-semibold tracking-[0.40px] md:w-full md:px-5"
                  />
                </div>
                <Input
                  shape="square"
                  type="email"
                  name="email"
                  placeholder={`Email address`}
                  style={{ border: 'none' }} 
                  className="ml-2.5 mt-[50px] w-[42%] px-2.5 font-semibold tracking-[0.40px] md:ml-0"
                />
                <Input
                  shape="square"
                  type="number"
                  name="mobileNumber"
                  placeholder={`Mobile number`}
                  style={{ border: 'none' }} 
                  className="ml-2.5 mt-[50px] w-[42%] px-2.5 font-semibold tracking-[0.40px] md:ml-0"
                />
                <Input
                  shape="square"
                  name="skills"
                  placeholder={`Skills`}
                  style={{ border: 'none' }} 
                  className="ml-2.5 mt-[50px] w-[42%] px-2.5 font-semibold tracking-[0.40px] md:ml-0"
                />
                <TextArea
                  shape="square"
                  name="comments"
                  placeholder={`Comments...`}
                  style={{ border: 'none' }} 
                  className="ml-2.5 mt-9 w-[42%] px-3.5 font-semibold tracking-[0.40px] text-light_blue-900 md:ml-0"
                />
                <div className="mx-2.5 mt-[38px] flex gap-[31px] self-stretch md:mx-0">
                  <Button
                    color="gray_400"
                    size="xs"
                    className="min-w-[162px] rounded border border-solid border-black-900_68 px-[21px] font-semibold tracking-[0.40px] sm:px-4"
                  >
                    Choose file
                  </Button>
                  <Heading
                    size="headinglg"
                    as="h4"
                    className="text-[20px] font-semibold tracking-[0.40px] text-gray-500_01 lg:text-[17px]"
                  >
                    No file Choosen{" "}
                  </Heading>
                </div>
                <button
                  size="lg"
                  shape="square"
                  className="min-w-[142px] font-nunitosans font-bold tracking-[0.96px] md:ml-0 sm:px-4"
                >
                  <Img src="images/button_3.png" alt="Image" className="px-2 h-[85px] w-[60%] object-contain" onClick={() => window.open("/enquirepage", "_self", "noopener,noreferrer")} />
                </button>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-full flex-col items-end">
              <div className="w-[40%] bg-light_blue-900 px-3.5 py-24 lg:w-full lg:py-8 md:w-full md:py-5 sm:py-4">
                <Img
                  src="images/img_ellipse_53.png"
                  alt="Image"
                  className="mt-[26px] h-[754px] w-[754px] rounded-[376px] object-cover"
                />
              </div>
              <ResourcesRowOne />
            </div>
          </div>
          <div className="container-xs mt-[106px] px-[34px] lg:px-5 md:px-5">
            <div className="ml-2 flex justify-between gap-5 md:ml-0 md:flex-col">
              <Img
                src="images/img_2_1_png.png"
                alt="21png"
                className="h-[40px] w-[8%] object-contain md:w-full"
              />
              <Img
                src="images/img_1_1_png.png"
                alt="11png"
                className="h-[40px] w-[8%] object-contain md:w-full"
              />
              <Img
                src="images/img_2_1_png_40x136.png"
                alt="21png"
                className="h-[40px] w-[8%] object-contain  md:w-full"
              />
              <Img
                src="images/img_4_1_png.png"
                alt="41png"
                className="h-[40px] w-[8%] object-contain  md:w-full"
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
          <ResourcesRowourclinet />
          <ResourcesRowTwo />
          <div className="mt-[76px] flex flex-col items-end self-stretch">
            <div className="relative z-[6] mr-[114px] flex rotate-[0deg] flex-col items-center justify-center rounded-[22px] bg-light_blue-900 px-2.5 py-3.5 md:mr-0">
              <Img src="images/img_vector_white_a700_01_14x24.svg" alt="Vector" className="h-[14px]" onClick={scrollToTop} />
            </div>
            <div className="relative mt-[-44px] self-stretch">
              <div className="flex flex-col items-center">
                <div className="container-xs relative z-[5] flex flex-col items-center px-14 lg:px-5 md:px-5">
                  <div className="relative ml-3 h-[150px] w-[84%] px-[116px] py-3 lg:px-8 md:ml-0 md:px-5 sm:px-4">
                  <Img src="images/contact.png"></Img>
                  </div>
                </div>
                <footer className="relative mt-[-82px] flex self-stretch">
                  <div className="relative h-[278px] w-full content-center bg-[url(/public/images/img_group_2412.png)] bg-cover bg-no-repeat lg:h-auto md:h-auto">
                    <Img
                      src="images/img_rectangle_4267_278x1920.png"
                      alt="Image"
                      className="mx-auto h-[278px] w-full flex-1 object-cover"
                    />
                    <div className="container-xs absolute bottom-4 left-0 right-0 my-auto flex justify-center lg:px-5 md:px-5">
                      <div className="flex w-full flex-col items-end gap-[78px] lg:gap-[78px] md:gap-[58px] sm:gap-[39px]">
                        <div className="mr-3 flex w-[74%] items-center justify-between gap-5 lg:w-full md:mr-0 md:w-full md:flex-col">
                        <ul className="flex w-[66%] flex-wrap justify-between gap-5 self-end md:w-full md:self-auto">
                  <li>
                  <a href="/home1" target="_self" rel="noreferrer" className="lg:text-[17px]">
                      <Text as="p" className="text-[20px] font-normal tracking-[1.20px] text-white-a700_01">
                        Home
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="/studyabroad" target="_self" className="self-end lg:text-[17px]">
                      <Text as="p" className="text-[20px] font-normal tracking-[1.20px] text-white-a700_01">
                        Study Abroad{" "}
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="/software" target="_self" className="self-end lg:text-[17px]">
                      <Text as="p" className="text-[20px] font-normal tracking-[1.20px] text-white-a700_01">
                        Software Consulting
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="/aboutus" target="_self" className="lg:text-[17px]">
                      <Text as="p" className="text-[20px] font-normal tracking-[1.20px] text-white-a700_01">
                        About Us{" "}
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="/contactus" target="_self" className="self-start lg:text-[17px]">
                      <Text as="p" className="text-[20px] font-normal tracking-[-0.38px] text-white-a700_01">
                        Contact Us
                      </Text>
                    </a>
                  </li>
                </ul>
                      <div className="flex w-[22%] items-center justify-between gap-5 md:w-full">
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
                        <div className="flex items-center justify-between gap-5 self-stretch sm:flex-col">
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
                    <Text
                      size="textxs"
                      as="p"
                      className="absolute left-[29%] top-[5px] m-auto w-[8%] text-[16px] font-normal leading-[30px] text-white-a700_01 lg:text-[13px]"
                    >
                      <>
                        +91 9704428144
                        <br />
                        +91 8247510882
                      </>
                    </Text>
                    <Img
                      src="images/img_logos_white_1.png"
                      alt="Logoswhiteone"
                      className="absolute left-[5px] top-2.5 m-auto h-[212px] w-[20%] object-contain"
                    />
                  </div>
                </footer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
