import { Button, Img, Text, Heading } from "../../components";
import React from "react";

export default function StudyabroadRowFour() {
  return (
      <div className="flex justify-center border border-solid border-white-a700_01 py-[42px] md:py-5 sm:py-4">
        <div className="container-xs mt-24 flex justify-center lg:px-5 md:px-5">
          <div className="flex w-full items-center justify-center md:flex-col">
            <div className="relative h-[794px] w-[100%] md:w-full">
              <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[788px] flex-1 content-center lg:h-auto md:h-auto">
                <Img
                  src="images/set_1.svg"
                  alt="Image"
                  className="w-full self-stretch"
                />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
