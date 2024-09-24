import { Img, Button, Text, Heading } from "../../components";
import React from "react";

export default function MigrateStackstudentvis() {
  return (
    <div className="relative mt-3 h-[732px] content-center lg:h-auto md:h-auto">
      <div className="mx-auto flex flex-1 flex-col items-center">
        <div className="container-xs px-1.5 lg:px-5 md:px-5">
          <div className="flex flex-col items-start">
            <Heading
              size="heading6xl"
              as="h3"
              className="relative mb-20  mt-[-6px] text-[48px] font-bold tracking-[-0.91px] text-light_blue-900 lg:text-[40px] md:text-[32px] sm:text-[26px]"
            >
              Why do People Migrate?
            </Heading>
          </div>
        </div>
        <div className="relative mt-[-150px] flex h-[646px] items-end justify-center self-stretch bg-[url(/public/images/img_group_998.png)] bg-cover bg-no-repeat py-5 lg:h-auto md:h-auto">
          <div className="container-xs mt-12 flex justify-center lg:px-5 md:px-5">
            <div className="w-full">
              <div className="flex flex-col items-start">
                <div className="mx-1 flex items-start gap-[17px] self-stretch md:mx-0 md:flex-col">
                  <Img src="images/img_arrow_left.svg" alt="Arrowleft" className="mt-1.5 h-[22px] md:mt-0 md:w-full" />
                  <Text
                    size="textxl"
                    as="p"
                    className="w-[56%] self-center text-[24px] font-normal leading-[30px] tracking-[0.48px] text-gray-800 lg:w-[56%] lg:text-[20px] md:w-full"
                  >
                    <span className="font-semibold">Economic Opportunities:</span>
                    <span>&nbsp;</span>
                    <span>Seeking better jobs, higher wages, or business prospects</span>
                    <span>
                      <>
                        .<br />
                      </>
                    </span>
                  </Text>
                </div>
                <div className="mx-1 mt-4 flex items-start gap-[17px] self-stretch md:mx-0 md:flex-col">
                  <Img src="images/img_arrow_left.svg" alt="Arrowleft" className="mt-1 h-[22px] md:w-full" />
                  <Text
                    size="textxl"
                    as="p"
                    className="w-[56%] self-center text-[24px] font-normal leading-[30px] tracking-[0.48px] text-gray-800 lg:w-[56%] lg:text-[20px] md:w-full"
                  >
                    <span className="font-semibold">Education:</span>
                    <span>&nbsp;</span>
                    <span>Pursuing advanced studies or specialized training</span>
                    <span>
                      <>
                        .<br />
                      </>
                    </span>
                  </Text>
                </div>
                <div className="mx-1 mt-4 flex items-center gap-[17px] self-stretch md:mx-0 md:flex-col">
                  <Img
                    src="images/img_arrow_left.svg"
                    alt="Arrowleft"
                    className=" h-[22px] self-end md:w-full md:self-auto"
                  />
                   <Text
                    size="textxl"
                    as="p"
                    className=" w-[56%] self-center text-[24px] font-normal leading-[30px] tracking-[0.48px] text-gray-800 lg:w-[56%] lg:text-[20px] md:w-full"
                  >
                    <span className="font-semibold">Safety and Security:</span>
                    <span>&nbsp;</span>
                    <span>Escaping conflict, political instability, or persecution</span>
                    <span>
                      <>
                        .<br />
                      </>
                    </span>
                  </Text>
                  
                </div>
                <div className="mx-1 mt-4 flex items-start gap-[17px] self-stretch md:mx-0 md:flex-col">
                  <Img src="images/img_arrow_left.svg" alt="Arrowleft" className="mt-1 h-[22px] md:mt-0 md:w-full" />
                  <Text
                    size="textxl"
                    as="p"
                    className="w-[56%] self-center text-[24px] font-normal leading-[30px] tracking-[0.48px] text-gray-800 lg:w-[56%] lg:text-[20px] md:w-full"
                  >
                    <span className="font-semibold">Family Reunification:</span>
                    <span>&nbsp;</span>
                    <span>Joining relatives who have already settled elsewhere.</span>
                    <span>
                      <>
                        <br />
                      </>
                    </span>
                  </Text>
                </div>
                <div className="mx-1 mt-4 flex items-start gap-[17px] self-stretch md:mx-0 md:flex-col">
                  <Img src="images/img_arrow_left.svg" alt="Arrowleft" className="mt-1 h-[22px] md:w-full" />
                  <Text
                    size="textxl"
                    as="p"
                    className="w-[56%] self-center text-[24px] font-normal leading-[30px] tracking-[0.48px] text-gray-800 lg:w-[56%] lg:text-[20px] md:w-full"
                  >
                    <span className="font-semibold">Environmental Factors:</span>
                    <span>&nbsp;</span>
                    <span>Moving away from natural disasters or adverse climate conditions.</span>
                    <span>
                      <>
                        <br />
                      </>
                    </span>
                  </Text>
                  
                </div>
                <div className="mx-1 mt-4 flex items-start gap-[17px] self-stretch md:mx-0 md:flex-col">
                  <Img src="images/img_arrow_left.svg" alt="Arrowleft" className="mt-1 h-[22px] md:w-full" />
                  <Text
                    size="textxl"
                    as="p"
                    className="w-[56%] self-center text-[24px] font-normal leading-[30px] tracking-[0.48px] text-gray-800 lg:w-[56%] lg:text-[20px] md:w-full"
                  >
                    <span className="font-semibold">Lifestyle Preferences:</span>
                    <span>&nbsp;</span>
                    <span>Finding a better quality of life or new cultural experiences.</span>
                    <span>
                      <>
                        <br />
                      </>
                    </span>
                  </Text>
                  
                </div>
                <button
                      shape="square"
                      className="mr-[450px] min-w-[198px] pl-7 pr-[34px] font-nunitosans font-bold tracking-[1.20px] md:mr-0 sm:px-4"
                    >
                      <Img src="images/button_4.png" alt="Image" className=" mt-4 h-[98px] w-[60%] object-contain" />
                  </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Img
        src="images/img_rectangle_4381_598x594.png"
        alt="Image"
        className="absolute bottom-0 right-[7%] top-0 my-auto h-[598px] w-[32%] rounded-[10px] object-contain"
      />
    </div>
  );
}
