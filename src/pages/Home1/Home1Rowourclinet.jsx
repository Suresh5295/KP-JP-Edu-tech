import { Heading, Button, Img, Text, Slider } from "../../components";
import React from "react";

export default function Home1Rowourclinet() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);

  return (
    <div className="relative z-[25] mt-[110px] h-[946px] self-stretch bg-[url(/public/images/img_group_2371.png)] bg-cover bg-no-repeat lg:h-auto md:h-auto">
      <div className="relative mt-[130px] h-[814px] content-center lg:h-auto md:h-auto">
        <div className="mx-auto flex w-full flex-col items-center">
          <div className="container-xs relative z-[27] flex flex-col items-end pl-14 pr-[698px] lg:px-5 md:px-5">
            <Heading
              as="p"
              className="font-satisfy text-[64px] font-normal text-white-a700_01 lg:text-[48px] md:text-[48px]"
            >
              Our Clinet{" "}
            </Heading>
          </div>
          <div className="relative mt-[-18px] flex justify-center self-stretch  py-8 sm:py-4">
            <div className="container-xs mt-24 flex justify-center px-14 lg:px-5 md:px-5">
              <div className="flex w-[80%] flex-col items-center gap-5 lg:w-full md:w-full">
                <div className="relative ml-3 h-[512px] content-center self-stretch lg:h-auto md:ml-0 md:h-auto">
                  <div className="mx-auto flex w-full px-[46px] md:px-5 sm:px-4">
                    <Slider
                      autoPlay
                      autoPlayInterval={2000}
                      responsive={{ 0: { items: 1 }, 551: { items: 1 }, 1051: { items: 1 }, 1441: { items: 1 } }}
                      disableDotsControls
                      activeIndex={sliderState}
                      onSlideChanged={(e) => {
                        setSliderState(e?.item);
                      }}
                      ref={sliderRef}
                      items={[...Array(3)].map(() => (
                        <React.Fragment key={Math.random()}>
                          <div className="relative h-[390px] content-center lg:h-auto md:h-auto">
                            <div className="mx-auto flex flex-1 rounded-[48px] bg-white-a700_01">
                              <Img
                                src="images/img_group_898.svg"
                                alt="Image"
                                className="h-[388px] w-[98%] object-contain"
                              />
                            </div>
                            <div className="absolute bottom-0 right-[-1px] top-0 my-auto ml-[118px] flex h-max flex-1 flex-col gap-5 lg:ml-0 md:ml-0">
                              <Text
                                as="p"
                                className="text-center text-[20px] font-normal leading-[30px] tracking-[0.40px] text-black-900_02 lg:text-[17px] mr-14"
                              >
                                &quot;I was overwhelmed by the visa application process until I found Jp Edu Tech. Their
                                expert guidance and support made the entire journey smooth. I highly recommend their
                                services for anyone looking to Study/Work/Migrate Abroad.&quot;
                              </Text>
                              <div className="flex items-start">
                                <Heading
                                  size="headingxl"
                                  as="h4"
                                  className="self-center text-[24px] font-bold tracking-[-0.46px] text-light_blue-900 lg:text-[20px]"
                                >
                                  Lavanya
                                </Heading>
                                <div className="flex flex-1 justify-end pl-14 pr-32 lg:pr-8 md:px-5 sm:px-4">
                                  <Img src="images/img_signal.svg" alt="Signal" className="h-[16px] w-[16px]" />
                                  <Img src="images/img_signal.svg" alt="Signal" className="ml-1 h-[16px] w-[16px]" />
                                  <div className="flex gap-1">
                                    <Img src="images/img_signal.svg" alt="Signal" className="h-[16px] w-[16px]" />
                                    <Img src="images/img_signal.svg" alt="Signal" className="h-[16px] w-[16px]" />
                                    <Img src="images/img_signal.svg" alt="Signal" className="h-[16px] w-[16px]" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </React.Fragment>
                      ))}
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 flex-col items-end">
                    <Img
                      src="images/img_vector_31.svg"
                      alt="Vectorthirtyone"
                      className="h-[472px] w-[82%] rounded-[66px] object-contain"
                    />
                    <Img
                      src="images/img_television.svg"
                      alt="Television"
                      className="relative mr-[172px] mt-[-22px] h-[38px] md:mr-0"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 flex-col items-start">
                    <Img
                      src="images/img_television_white_a700_01.svg"
                      alt="Television"
                      className="relative z-[26] ml-40 h-[38px] md:ml-0"
                    />
                    <Img
                      src="images/img_vector_32.svg"
                      alt="Vectorthirtytwo"
                      className="relative mt-[-14px] h-[472px] w-[80%] rounded-[66px] object-contain"
                    />
                  </div>
                </div>
                <div className="flex gap-[18px]">
                  <Button
                    color="white_A700_01"
                    size="sm"
                    shape="round"
                    onClick={() => {
                      sliderRef?.current?.slidePrev();
                    }}
                    className="w-[34px] rounded-[16px] px-1.5 rotate-180"
                  >
                    <Img src="images/img_group_2396.svg" />
                  </Button>
                  <Button
                    color="white_A700_01"
                    size="sm"
                    shape="round"
                    onClick={() => {
                      sliderRef?.current?.slideNext();
                    }}
                    className="w-[34px] rounded-[16px] px-1.5 rotate-180"
                  >
                    <Img src="images/img_group_2397.svg" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Heading
          size="heading10xl"
          as="h1"
          className="absolute left-0 right-0 top-[6%] z-[28] m-auto w-max text-[128px] font-extrabold uppercase text-white-a700_01 lg:text-[48px] md:text-[48px]"
        >
          Testimonial
        </Heading>
      </div>
    </div>
  );
}
