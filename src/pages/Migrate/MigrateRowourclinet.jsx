import { Heading, Img, RatingBar, Text, Slider, Button } from "../../components";
import React from "react";

export default function MigrateRowourclinet() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);

  return (
    <div className="mt-[62px] h-[946px] self-stretch bg-[url(/public/images/img_group_2371.png)] bg-cover bg-no-repeat lg:h-auto md:h-auto">
      <div className="relative mt-[130px] h-[814px] content-center lg:h-auto md:h-auto">
        <div className="mx-auto flex w-full flex-col items-center">
          <div className="container-xs relative z-10 flex flex-col items-end pl-14 pr-[698px] lg:px-5 md:px-5">
            <Heading
              as="h2"
              className="font-satisfy text-[64px] font-normal text-white-a700_01 lg:text-[48px] md:text-[48px]"
            >
              Our Clinet{" "}
            </Heading>
          </div>
          <div className="relative mt-[-18px] flex justify-center self-stretch bg-gradient py-8 sm:py-4">
            <div className="container-xs mt-24 flex justify-center px-14 lg:px-5 md:px-5">
              <div className="flex w-[80%] flex-col items-center gap-5 lg:w-full md:w-full">
                <div className="relative ml-3 h-[512px] content-center self-stretch lg:h-auto md:ml-0 md:h-auto">
                  <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 flex-col items-start">
                    <Img
                      src="images/img_television_white_a700_01.svg"
                      alt="Television"
                      className="relative z-[7] ml-40 h-[38px] md:ml-0"
                    />
                    <Img
                      src="images/img_vector_32.svg"
                      alt="Vectorthirtytwo"
                      className="relative mt-[-14px] h-[472px] w-[80%] rounded-[66px] object-contain"
                    />
                  </div>
                  <div className="relative z-[8] mx-auto flex flex-1 flex-col items-end">
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
                  <div className="absolute bottom-0 left-0 right-0 top-0 z-[9] m-auto w-full px-[46px] md:px-5 sm:px-4">
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
                          <div className="relative mt-14 h-[390px] content-center lg:h-auto md:h-auto">
                            <div className="mx-auto flex flex-1 rounded-[48px] bg-white-a700_01">
                              <Img
                                src="images/img_group_898.svg"
                                alt="Image"
                                className="h-[388px] w-[98%] object-contain"
                              />
                            </div>
                            <div className="absolute mr-5 bottom-0 right-[-1px] top-0 my-auto ml-[122px] flex h-max flex-1 flex-col gap-5 lg:ml-0 md:ml-0">
                              <Text
                                as="p"
                                className="text-center text-[20px] font-normal leading-[30px] tracking-[0.40px] text-black-900_02 lg:text-[17px]"
                              >
                                The software developed by Jp Edu Tech has significantly improved our efficiency and
                                productivity. Their team is highly skilled and responsive to our requirements.&quot;
                              </Text>
                              <div className="flex items-start justify-between gap-5">
                                <Heading
                                  size="headingxl"
                                  as="h3"
                                  className="self-center text-[24px] font-bold tracking-[-0.46px] text-light_blue-900 lg:text-[20px]"
                                >
                                  Karthik k
                                </Heading>
                                <RatingBar
                                  value={5}
                                  isEditable={true}
                                  size={16}
                                  starCount={5}
                                  className="mr-[132px] flex gap-2.5"
                                />
                              </div>
                            </div>
                          </div>
                        </React.Fragment>
                      ))}
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
          as="h4"
          className="absolute left-0 right-0 top-[6%] z-[11] m-auto w-max text-[128px] font-extrabold uppercase text-white-a700_01 lg:text-[48px] md:text-[48px]"
        >
          Testimonial
        </Heading>
      </div>
    </div>
  );
}
