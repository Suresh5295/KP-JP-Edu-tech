import { Text, Heading, Img } from "../../components";
import StudentVisaProfile from "../../components/StudentVisaProfile";
import React, { Suspense } from "react";

const data = [
  { studentImage: "images/img_graduation_1.png", studentVisaText: "Student Visa" },
  { studentImage: "images/img_businessman_1.png", studentVisaText: "Employment Visa" },
  { studentImage: "images/img_briefcase_1.png", studentVisaText: "Business Visa" },
  { studentImage: "images/img_travel_1.png", studentVisaText: "Tourist Visa" },
  { studentImage: "images/img_project_1.png", studentVisaText: "Application process" },
  { studentImage: "images/img_criteria_1.png", studentVisaText: "Check Your Eligibility " },
  { studentImage: "images/img_flight_ticket_1.png", studentVisaText: "Flight Bookings" },
  { studentImage: "images/img_landing_page_1.png", studentVisaText: "Post Landing Services" },
];

export default function MigrateRowThree() {
  return (
    <div className="relative mt-[-234px] flex h-[840px] items-center justify-center self-stretch bg-[url(/public/images/img_group_2336.png)] bg-cover bg-no-repeat py-[38px] lg:h-auto md:h-auto sm:py-4">
      <div className="container-xs mt-2 flex justify-center px-2 lg:px-5 md:px-5">
        <div className="flex w-full items-center md:flex-col">
          <div className="relative h-[754px] w-[48%] px-[52px] md:w-full md:px-5 sm:px-4">
            <Img
              src="images/img_group_4.png"
              alt="Image"
              className="absolute bottom-[1.15px] right-[8%] m-auto h-[202px] w-[50%] object-contain"
            />
            <Img
              src="images/img_rectangle_4384.png"
              alt="Image"
              className="absolute left-[7%] top-0 m-auto h-[686px] w-[64%] rounded-[226px] object-contain"
            />
            <Img
              src="images/img_rectangle_4250.png"
              alt="Image"
              className="absolute bottom-[26px] left-0 right-0 m-auto h-[472px] w-[44%] rounded-[154px] object-contain"
            />
          </div>
          <div className="flex flex-1 flex-col items-start gap-6 md:self-stretch">
            <Heading
              size="heading6xl"
              as="h4"
              className="text-[48px] font-bold text-black-900_01 lg:text-[40px] md:text-[32px] sm:text-[26px]"
            >
              <span className="text-black-900_01">
                <>
                  Visa Types and Eligibility
                  <br />
                  Assessment and
                </>
              </span>
              <span className="text-light_blue-900">&nbsp;Other Assistance</span>
            </Heading>
            <Text
              as="p"
              className="w-[74%] text-[20px] font-normal leading-[30px] tracking-[0.40px] text-black-900_02 lg:w-full lg:text-[17px] md:w-full"
            >
              <>
                Choosing the ideal destination for immigration is a pivotal
                <br />
                decision that can shape the trajectory of your life.
              </>
            </Text>
            <div className="mr-[60px] grid grid-cols-2 gap-3 self-stretch lg:grid-cols-2 md:mr-0 md:grid-cols-1">
              <Suspense fallback={<div>Loading feed...</div>}>
                {data.map((d, index) => (
                  <StudentVisaProfile {...d} key={"migrate" + index} />
                ))}
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
