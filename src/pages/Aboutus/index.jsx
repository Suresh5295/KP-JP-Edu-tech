import { Helmet } from "react-helmet";
import { Text, Heading, Img, Button } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import UserProfile3 from "../../components/UserProfile3";
import VisaProfile from "../../components/VisaProfile";
import AboutusColumnTwo from "./AboutusColumnTwo";
import AboutusRow from "./AboutusRow";
import AboutusRowTwo from "./AboutusRowTwo";
import AboutusStackiconOne from "./AboutusStackiconOne";
import React, { Suspense } from "react";

const data = [
  { png: "images/img_2_1_png.png" },
  { png: "images/img_1_1_png.png" },
  { png: "images/img_2_1_png_40x136.png" },
  { png: "images/img_4_1_png.png" },
  { png: "images/img_1_1_png.png" },
  { png: "images/img_4_1_png.png" },
];
const data1 = [
  { userImage: "images/img_graduation_1.png", visaText: "visa & Immigration" },
  { userImage: "images/img_businessman_1.png", visaText: "Software Consulting" },
  { userImage: "images/img_graduation_1.png", visaText: "Business Consulting" },
  { userImage: "images/img_graduation_1.png", visaText: "Financial Consulting" },
  { userImage: "images/img_graduation_1.png", visaText: "Career Counselling" },
  { userImage: "images/img_graduation_1.png", visaText: "English Coaching" },
];

export default function AboutusPage() {

  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);

  // Scroll to Top Function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'  // This makes the scrolling behavior smooth
    });
  };
  return (
    <>
      <Helmet>
        <title>JP Edu Tech</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <style>
        {`
        @keyframes slideDown {
              0% {
                transform: translateY(-100%); /* Starts off-screen from the top */
                opacity: 0;
              }
              100% {
                transform: translateY(0); /* Ends in its original position */
                opacity: 1;
              }
            }

            .animate-slideDown {
              animation: slideDown 1.5s ease-in-out forwards; /* Adjust duration and timing function as needed */
            }

            @keyframes slideUp {
              0% {
                transform: translateY(100%); /* Starts off-screen from the top */
                opacity: 0;
              }
              100% {
                transform: translateY(0); /* Ends in its original position */
                opacity: 1;
              }
            }

            .animate-slideUp {
              animation: slideUp 1.5s ease-in-out forwards; /* Adjust duration and timing function as needed */
            }

            @keyframes leftToRight {
              0% {
                transform: translateX(-100%); /* Starts off-screen to the left */
                opacity: 0;
              }
              100% {
                transform: translateX(0); /* Ends in its original position */
                opacity: 1;
              }
            }

            .animate-leftToRight {
              animation: leftToRight 2s ease-in-out forwards; /* Adjust the duration as needed */
            }
               @keyframes RightToleft {
              0% {
                transform: translateX(100%); /* Starts off-screen to the left */
                opacity: 0;
              }
              100% {
                transform: translateX(0); /* Ends in its original position */
                opacity: 1;
              }
            }
             .animate-RightToleft{
             animation: RightToleft 2s ease-in-out backwards;
             } 
          @keyframes zoomInOut {
            0% {
              transform: scale(0.3); /* Normal size */
            }
            100% {
              transform: scale(1.1); /* Zoomed in */
            }
           
          }

          .animate-zoomInOut {
            animation: zoomInOut 3s ease-in-out forwards; /* No infinite, and forwards to keep final state */
          }
        `}
        </style>
      <div className="w-full bg-white-a700_01">
        <div className="flex flex-col items-center">
          <div className="self-stretch">
            {/* Background Section */}
            <div className="h-[966px] bg-[url('/public/images/img_rectangle_4187_1.png')] bg-cover bg-no-repeat lg:h-auto md:h-auto">
              <div className="flex flex-col items-center gap-12 lg:gap-32 md:gap-24 sm:gap-16 padding-bottom:5rem sm:py-16">
                <Header className="self-stretch px-4 sm:px-5 lg:px-14 bg-white-a700" />
                <div className="container-xs mb-[340px] flex flex-col items-center px-4 sm:px-5 lg:px-14">
                  <div className="mt-44 ml-2 flex flex-col items-center w-[90%] md:w-full lg:w-[65%]">
                    <Heading
                      size="heading9xl"
                      as="h1"
                      className="text-[48px] lg:text-[96px] font-bold text-white-a700_01 animate-zoomInOut"
                    >
                      About JP Edu Tech
                    </Heading>
                    <Text
                      as="p"
                      className="mt-4 text-[17px] lg:text-[20px] leading-7 tracking-wide text-white-a700_01 text-center animate-zoomInOut"
                    >
                      At JP EDU TECH, we understand that navigating the complexities of visa and<br/>immigration processes can be daunting. That's why we're here—to simplify your<br/>journey and ensure your dreams of global mobility become a reality.
                    </Text>
                    <Button
                      shape="square"
                      className="mt-12 py-3 px-6 sm:px-4 min-w-[150px] lg:min-w-[198px] text-base font-bold tracking-wider"
                    >
                      Appointment
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch relative mt-[-192px] h-[856px] bg-[url(/public/images/img_group_191.png)] bg-cover bg-no-repeat py-[76px] lg:h-auto lg:py-8 md:h-auto md:py-5 sm:py-4">
            <AboutusColumnTwo />
          </div>
        </div>
          <AboutusRow />
          <div className=" relative h-[958px] content-center self-stretch bg-[url(/public/images/img_group_180.png)] bg-cover bg-no-repeat lg:h-auto md:h-auto">
            <div className=" ml-10 relative mx-auto h-[940px] flex-1 px-[72px] lg:px-8 md:px-5 sm:px-4">
              <Img
                src="images/img_group_4.png"
                alt="Image"
                className="absolute bottom-px right-[4%] m-auto h-[202px] w-[20%] object-contain"
              />
              <div className="absolute bottom-[19%] left-0 right-0 mx-[74px] my-auto flex flex-1 flex-col gap-9 lg:mx-0 md:mx-0">
                <Text
                  as="p"
                  className="w-[46%] text-[20px] font-normal leading-[30px] tracking-[0.40px] text-black-900_02 lg:w-full lg:text-[17px] md:w-full"
                >
                  At JP Edu Tech, we provide a comprehensive suite of services tailored to meet the diverse needs of
                  educational institutions and organizations. Our solutions are designed to leverage technology
                  effectively, enhance operational efficiency, and support educational goals. Explore our key services
                </Text>
                <div className="mr-[836px] grid grid-cols-2 gap-3 lg:grid-cols-2 md:mr-0 md:grid-cols-1">
                  <Suspense fallback={<div>Loading feed...</div>}>
                    {data1.map((d, index) => (
                      <VisaProfile {...d} key={"aboutus" + index} />
                    ))}
                  </Suspense>
                </div>
              </div>
              <Heading
                size="heading6xl"
                as="h2"
                className="absolute  top-[23%] m-auto text-[48px] font-bold text-black-900_01 lg:text-[40px] md:text-[32px] sm:text-[26px]"
              >
                Services at Jp Edu Tech
              </Heading>
              <div className="absolute bottom-[8%] left-0 right-0 m-auto h-[678px] w-[82%]">
                <Img
                  src="images/img_portrait_profes_632x392.png"
                  alt="Portraitprofes"
                  className="absolute right-0 top-0 m-auto h-[632px] w-[26%] rounded-[196px] object-contain"
                />
                <Img
                  src="images/img_rectangle_4250.png"
                  alt="Image"
                  className="absolute bottom-[-0.85px] right-[13%] m-auto h-[472px] w-[24%] rounded-[154px] object-contain"
                />
              </div>
              <Img
                src="images/img_group_132.png"
                alt="Image"
                className="absolute right-[29%] top-0 m-auto h-[288px] w-[36%] object-contain"
              />
            </div>
            <Img
              src="images/img_rectangle_4485.png"
              alt="Image"
              className="absolute bottom-0 left-0 top-0 my-auto h-[528px] w-[2%] object-contain"
            />
          </div>
          <div className="container-xs mt-[138px] px-8 lg:px-5 md:px-5">
            <div className="ml-2.5 flex gap-[156px] md:ml-0 md:flex-col">
              <Suspense fallback={<div>Loading feed...</div>}>
                {data.map((d, index) => (
                  <Img
                    key={"listpng" + index}
                    src={d.png}
                    alt="Png"
                    className="h-[40px] w-[16%] object-contain  md:w-full"
                  />
                ))}
              </Suspense>
            </div>
          </div>
          <AboutusStackiconOne />
          <AboutusRowTwo />
          <div className="mt-[30px] flex flex-col items-end">
          <div className="mr-32  flex rotate-[0deg] flex-col items-center justify-center rounded-[22px] bg-light_blue-900 px-2.5 py-3.5">
              <Img src="images/img_vector_white_a700_01_14x24.svg" alt="Vector" className="h-[14px]" onClick={scrollToTop} />
              </div>


                <div className="container-xs relative z-[6] flex flex-col items-center px-14 lg:px-5 md:px-5">
                <Img src="images/contact.png" className=""></Img>
                </div>
                <Footer />

          </div>
        </div>
    </>
  );
}
