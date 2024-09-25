import { Heading, Img, RatingBar, Text, Slider } from "../../components";
import React from "react";

export default function ResourcesRowourclinet() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);

  return (
    <div className="mt-[66px] h-[946px] self-stretch bg-[url(/public/images/img_group_2326.png)] bg-cover bg-no-repeat lg:h-auto md:h-auto">
      <div className="relative mt-[130px] h-[814px] content-center lg:h-auto md:h-auto">
        <div className="mx-auto flex w-full flex-col items-center">
          <div className="container-xs relative z-[2] flex flex-col items-end pl-14 pr-[700px] lg:px-5 md:px-5">
            <Heading
              as="h2"
              className="font-satisfy text-[64px] font-normal text-white-a700_01 lg:text-[48px] md:text-[48px]"
            >
              Our Clinet{" "}
            </Heading>
          </div>
          <div className="relative mt-[-18px] h-[743px] self-stretch bg-[url(/public/images/img_group_428.png)] bg-cover bg-no-repeat px-[338px] py-8 lg:px-8 md:px-5 sm:p-4">
            <div className="absolute bottom-[12%] left-0 right-0 m-auto h-[512px] w-[65%]">
            <div className="absolute mt-14 bottom-0 left-0 right-0 top-0 m-auto w-full px-[46px] md:px-5 sm:px-4">
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
                items={[
                  {
                    name: "Lavanya",
                    description: "I was overwhelmed by the visa application process until I found JP EDU TECH. Their expert guidance and support made the entire journey smooth. I highly recommend their services for anyone looking to Study/Work/Migrate Abroad.",
                    rating: 5,
                    imgSrc: "images/img_group_898.svg"
                  },
                  {
                    name: "Karthik k",
                    description: "The software developed by JP EDU TECH has significantly improved our efficiency and productivity. Their team is highly skilled and responsive to our requirements.",
                    rating: 5,
                    imgSrc: "images/img_group_898.svg"
                  },
                  {
                    name: "Dheeraj",
                    description: "The team at Jp Edu Tech is incredibly knowledgeable and efficient. They helped me gather all the necessary documents and ensured a smooth visa application process. I'm so grateful for their assistance.",
                    rating: 5,
                    imgSrc: "images/img_group_898.svg"
                  }
                ].map((item, index) => (
                  <React.Fragment key={index}>
                    <div className="relative h-[390px]">
                      <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 rounded-[48px] bg-white-a700_01">
                        <Img
                          src={item.imgSrc}
                          alt="Image"
                          className="h-[388px] w-[98%] object-contain"
                        />
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 flex-col items-center gap-5 px-14 md:px-5 sm:px-4">
                        <Text
                          as="p"
                          className="self-stretch text-center text-[20px] font-normal leading-[30px] tracking-[0.40px] text-black-900_02 lg:text-[17px]"
                        >
                          {item.description}
                        </Text>
                        <div className="ml-1.5 mr-[18px] flex w-[88%] items-start justify-between gap-5 lg:w-full md:mx-0 md:w-full">
                          <Heading
                            size="headingxl"
                            as="h3"
                            className="self-center text-[24px] font-bold tracking-[-0.46px] text-light_blue-900 lg:text-[20px]"
                          >
                            {item.name}
                          </Heading>
                          <RatingBar value={item.rating} isEditable={true} size={16} starCount={5} className="flex gap-2.5" />
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
                  className="relative z-[1] ml-40 h-[38px] md:ml-0"
                />
                <Img
                  src="images/img_vector_32.svg"
                  alt="Vectorthirtytwo"
                  className="relative mt-[-14px] h-[472px] w-[80%] rounded-[66px] object-contain"
                />
              </div>
            </div>
            <Img
              src="images/img_close_light_white_900_36x86.png"
              alt="Close"
              className="absolute bottom-[4%] left-0 right-0 m-auto h-[34px] w-[6%] object-contain z-10"
            />
          </div>
        </div>
        <Heading
          size="heading10xl"
          as="h4"
          className="absolute left-0 right-0 top-[6%] z-[3] m-auto w-max text-[128px] font-extrabold uppercase text-white-a700_01 lg:text-[48px] md:text-[48px]"
        >
          Testimonial
        </Heading>
      </div>
    </div>
  );
}
