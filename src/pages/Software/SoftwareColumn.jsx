import { Button, Heading } from "../../components";
import React from "react";

export default function SoftwareColumn() {
  return (
    <div className="mb-[290px] flex flex-col items-center">
      <div className="container-xs flex flex-col items-center gap-11 lg:px-5 md:px-5">
        <Heading
          size="heading9xl"
          as="h1"
          className="self-stretch mt-20 text-center text-[96px] font-bold leading-[144px] text-white-a700_01 lg:text-[48px] md:text-[48px]"
        >
           Find a Perfect Solution Through our Software Consulting.
        </Heading>
        <Button shape="square" className="min-w-[198px] pl-[22px] pr-[26px] font-bold tracking-[1.20px] sm:px-4">
          Appointment
        </Button>
      </div>
    </div>
  );
}
