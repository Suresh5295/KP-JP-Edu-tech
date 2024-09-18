import { Img, Slider, Text, Heading } from "../../components";
import React from "react";
import { TabPanel, TabList, Tab, Tabs } from "react-tabs";

export default function ResourcesRowOne() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);

  return (
    <div className="relative mt-[-12px] self-stretch">
      <div className="bg-gray-50_01">
        <Tabs
          className="mt-[70px] flex flex-col items-center gap-2"
          selectedTabClassName="!text-white-a700_01 bg-light_blue-900 shadow-3xl"
          selectedTabPanelClassName="px-12 md:px-5 !relative tab-panel--selected"
        >
          <div className="container-xs flex flex-col items-start gap-[18px] pl-16 pr-14 lg:px-5 md:px-5">
            <Heading
              size="heading6xl"
              as="h5"
              className="text-[48px] font-bold text-gray-700_01 lg:text-[40px] md:text-[32px] sm:text-[26px]"
            >
              Semior videos
            </Heading>
            <Text
              as="p"
              className="w-[44%] text-[20px] font-normal leading-[30px] tracking-[0.40px] text-gray-700_01 lg:w-full lg:text-[17px] md:w-full"
            >
              laoreet maximus quis libero, odio nulla, elementum dui laoreet ipsum enim. felis, vehicula, urna.
              tincidunt
            </Text>
            <TabList className="flex flex-wrap gap-[74px] self-stretch pl-[76px] pr-14 lg:gap-5 lg:pl-8 md:gap-5 md:px-5 sm:px-4">
              <Tab className="px-[34px] py-4 text-[20px] font-bold tracking-[-0.38px] text-light_blue-900 lg:text-[17px] sm:px-4">
                All
              </Tab>
              <Tab className="px-[34px] py-4 text-[20px] font-bold tracking-[-0.38px] text-light_blue-900 lg:text-[17px] sm:px-4">
                Up Coming Event
              </Tab>
              <Tab className="px-[34px] py-4 text-[20px] font-bold tracking-[-0.38px] text-light_blue-900 lg:text-[17px] sm:px-4">
                Past Events
              </Tab>
            </TabList>
          </div>
          <div className="relative h-[624px] content-center self-stretch lg:h-auto md:h-auto">
            {[...Array(3)].map((_, index) => (
              <TabPanel key={`tab-panel${index}`} className="absolute items-center px-12 lg:px-5 md:px-5">
                <div className="container-xs w-full">
                  <div className="ml-3 flex flex-col items-center gap-14 md:ml-0 sm:gap-7">
                  <div className="mx-auto flex w-full gap-5 self-stretch md:mx-0 md:flex-col">
                  <Slider
                    autoPlay
                    autoPlayInterval={2000}
                    responsive={{ 0: { items: 1 }, 551: { items: 1 }, 1051: { items: 2 }, 1441: { items: 3 } }}
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
                            src="images/img_rectangle_4253.png" // Existing image
                            alt="First Image"
                            className="mx-auto h-[454px] w-full flex-1 object-cover"
                          />
                          <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 justify-center bg-black-900_9e px-14 py-[196px] lg:py-8 md:p-5 sm:p-4">
                            <Img
                              src="images/img_overflow_menu_white_a700_01.svg"
                              alt="Overflow Menu"
                              className="mt-4 h-[42px] w-[42px]"
                            />
                          </div>
                        </div>
                      </div>,
                      <div className="px-2.5" key="image2">
                        <div className="relative h-[454px] content-center lg:h-auto md:h-auto">
                          <Img
                            src="images/img_rectangle_4254.png" // New image
                            alt="Second Image"
                            className="mx-auto h-[454px] w-full flex-1 object-cover"
                          />
                          <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 justify-center bg-black-900_9e px-14 py-[196px] lg:py-8 md:p-5 sm:p-4">
                            <Img
                              src="images/img_overflow_menu_white_a700_01.svg"
                              alt="Overflow Menu"
                              className="mt-4 h-[42px] w-[42px]"
                            />
                          </div>
                        </div>
                      </div>,
                      <div className="px-2.5" key="image3">
                        <div className="relative h-[454px] content-center lg:h-auto md:h-auto">
                          <Img
                            src="images/img_rectangle_4255.png" // Another new image
                            alt="Third Image"
                            className="mx-auto h-[454px] w-full flex-1 object-cover"
                          />
                          <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 justify-center bg-black-900_9e px-14 py-[196px] lg:py-8 md:p-5 sm:p-4">
                            <Img
                              src="images/img_overflow_menu_white_a700_01.svg"
                              alt="Overflow Menu"
                              className="mt-4 h-[42px] w-[42px]"
                            />
                          </div>
                        </div>
                      </div>
                    ]}
                  />
                </div>
                <Img
                    src="images/img_close_light_blue_900_36x86.png"
                    alt="Close"
                    className="h-[34px] w-[6%] object-contain"
                    style={{ transform: 'scaleX(-1)' }} // This will flip the image horizontally
                  />
                  </div>
                </div>
              </TabPanel>
            ))}
            <Img
              src="images/img_group_gray_800.png"
              alt="Image"
              className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[624px] w-full flex-1 object-cover"
            />
          </div>
        </Tabs>
      </div>
    </div>
  );
}
