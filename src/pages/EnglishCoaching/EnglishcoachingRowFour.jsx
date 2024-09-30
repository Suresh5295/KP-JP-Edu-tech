import { Button, TextArea, Input, Img, Text, Heading } from "../../components";
import UserProfile2 from "../../components/UserProfile2";
import React, { Suspense } from "react";

const data = [
  { userImage: "images/img_rectangle_4253.png" },
  { userImage: "images/img_rectangle_4254.png" },
  { userImage: "images/img_rectangle_4255.png" },
];

export default function EnglishcoachingRowFour() {
  return (
    <>
      <style>{`
        input::placeholder,
        textarea::placeholder {
          font-size: 14px; /* Set the desired font size */
          color: #a0aec0;  /* Optional: Adjust the color to match */
        }
      `}
      </style>
    <div className="mt-5">
      <div className="flex items-center md:flex-col">
        <div className="relative h-[922px] w-[38%] self-end md:w-full md:self-auto md:px-5">
          <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[750px] w-[88%] bg-light_blue-900" />
          <Img
            src="images/img_rectangle_4292.png"
            alt="Image"
            className="absolute bottom-0 left-0 top-0 my-auto h-[922px] w-[88%] object-contain animate-leftToRight"
          />
        </div>
        <div className="flex flex-1 flex-col items-center gap-[26px] md:self-stretch md:px-5">
          <div className="ml-9 self-stretch md:ml-0">
            <div className="flex flex-col items-start gap-7">
              <div className="relative h-[492px] self-stretch">
                <div className="absolute left-0 right-0 top-[9%] m-auto flex flex-1 flex-col gap-5">
                  <Img src="images/img_close_light_blue_900.svg" alt="Close" className="h-[40px] w-[40px]" />
                  <div className="mx-4 flex flex-col items-start gap-[22px] md:mx-0">
                    <a href="#" className="lg:text-[48px] md:text-[48px]">
                      <Heading as="h2" className="font-playfairdisplay text-[64px] font-medium text-blue_gray-800_01">
                        Contact Us
                      </Heading>
                    </a>
                    <Text
                      as="p"
                      className="w-[58%] text-[20px] font-normal leading-[33px] tracking-[0.40px] text-black-900_02 lg:w-full lg:text-[17px] md:w-full">
                      Get in touch with us today! Our expert team will guide you through every step of the migration
                      process. Start your journey today with confidence and support from Jp Edu Tech!
                    </Text>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 top-0 my-auto ml-5 mr-auto flex h-max flex-1 flex-col items-start lg:ml-0 md:ml-0">
                  <div className="flex items-center self-stretch md:flex-col">
                    <Input
                      shape="square"
                      type="text"
                      name="name"
                      placeholder={`Enter your name..`}
                      style={{ border: 'none' }} 
                      className="relative z-[1] mb-[34px] flex-grow self-end px-2.5 font-semibold tracking-[0.40px] md:self-auto"
                    />
                    <Img
                      src="images/img_group_blue_gray_100_02_444x328.png"
                      alt="Image"
                      className="relative ml-[-16px] h-[444px] w-[28%] object-contain md:ml-0 md:w-full"
                    />
                  </div>
                  <Input
                    shape="square"
                    type="email"
                    name="email"
                    placeholder={`Enter your email id..`}
                    style={{ border: 'none' }} 
                    className="relative mt-[-4px] w-[73%] px-2.5 font-semibold tracking-[0.40px]"
                  />
                </div>
                
              </div>
              <Input
                shape="square"
                type="email"
                name="email"
                placeholder="Enter your mobile number.."
                style={{ border: 'none', fontSize: '14px' }} // Specify a common font size
                className="relative ml-5 mt-4 w-[72%] px-2.5 font-semibold tracking-[0.40px]"
              />
              <Input
                shape="square"
                name="television_four"
                placeholder="Message.."
                style={{ border: 'none', fontSize: '14px' }} // Use the same font size
                className="ml-5 flex w-[72%] gap-4 pl-3.5 pr-0.5 font-semibold tracking-[0.40px]"
              />
            </div>
            <button
                size="9xl"
                shape="square"
                className=" ml-8 mt-7  min-w-[206px]  font-nunitosans uppercase tracking-[0.64px] md:ml-0 sm:px-4"
              >
              <Img src="images/button_3.png" alt="Image" className=" -ml-4 h-[98px] w-[60%] object-contain" onClick={() => window.open("/enquirepage", "_self", "noopener,noreferrer")} />
          </button>
          </div>
          
          <div className="ml-[54px] mr-1.5 flex gap-4 self-stretch md:mx-0 md:flex-col animate-RightToleft">
            <Suspense fallback={<div>Loading feed...</div>}>
              {data.map((d, index) => (
                <UserProfile2 {...d} key={"listvectorone" + index} />
              ))}
            </Suspense>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
