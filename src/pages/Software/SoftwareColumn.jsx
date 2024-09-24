import { Img, Text, Heading, Button, TextArea, Input, Slider } from "../../components";
import React from "react";

export default function SoftwareColumn() {
  return (
    <div className="mb-[290px] flex flex-col items-center">
      <div className="container-xs flex flex-col items-center gap-11 lg:px-5 md:px-5">
        <Heading
          size="heading9xl"
          as="h1"
          className="self-stretch mt-56 text-center text-[96px] font-bold leading-[144px] text-white-a700_01 lg:text-[48px] md:text-[48px] animate-zoomInOut"
        >
           Find a Perfect Solution Through our Software Consulting.
        </Heading>
        <button
          shape="square"
            className="min-w-[198px] pl-7 pr-[34px] font-nunitosans font-bold tracking-[1.20px] sm:px-4"
            >
          <Img src="images/a_button.png" alt="Appointment Image" className="h-[60px] w-auto object-contain" />
         </button>
      </div>
    </div>
  );
}
