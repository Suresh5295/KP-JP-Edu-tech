import React, { useState, useEffect, Suspense } from 'react'; // Import useEffect
import { Helmet } from "react-helmet";
import Slider from "react-slick";
import { Text, Heading, Img, Button, Input } from "../../components";
import Footer from "../../components/Footer";
import ChatModal from "../../components/ChatModal";
import { CloseSVG } from "../../components/Input/close.jsx";
import UserProfile from "../../components/UserProfile";
import Home1ColumnFour from "./Home1ColumnFour";
import Home1RowFive from "./Home1RowFive";
import Home1RowSeven from "./Home1RowSeven";
import Home1RowThree from "./Home1RowThree";
import Home1RowaboutusOne from "./Home1RowaboutusOne";
import Home1Rowourclinet from "./Home1Rowourclinet";

export default function Home1Page() {
  const [activeImageSet, setActiveImageSet] = useState(0); // State for image set
  const [searchBarValue, setSearchBarValue] = useState(""); // State for search input
  const [isChatOpen, setChatOpen] = useState(false); // State for chat modal

  // useEffect hook for automatically changing the image sets every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImageSet((prevIndex) => (prevIndex + 1) % imageSets.length); // Cycle through image sets
    }, 3000);  // Change every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []); // Empty dependency array ensures it runs only once
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll effect
    });
  };
  

  const data = [
    {
      userImage: "images/img_rectangle_4186.png",
      hoverImage: "images/hover_img_rectangle_4186.png",
    },
    {
      userImage: "images/img_rectangle_4187.png",
      hoverImage: "images/hover_img_rectangle_4187.png",
    },
    {
      userImage: "images/img_rectangle_4188.png",
      hoverImage: "images/hover_img_rectangle_4188.png",
    },
    {
      userImage: "images/img_rectangle_4189.png",
      hoverImage: "images/hover_img_rectangle_4189.png",
    },
    {
      userImage: "images/img_rectangle_4190.png",
      hoverImage: "images/hover_img_rectangle_4190.png",
    },
    {
      userImage: "images/img_rectangle_4191.png",
      hoverImage: "images/hover_img_rectangle_4191.png",
    },
  ];
  
  // List of image sets
  const imageSets = [
    [
      "images/img_rectangle_4178.png",
      "images/img_rectangle_4177.png",
      "images/img_rectangle_4179.png"
    ],
    [
      "images/screen_0001.png",
      "images/screen_0002.png",
      "images/screen_0003.png"
    ],
    [
      "images/screen_0004.png",
      "images/screen_0005.png",
      "images/screen_0006.png"
    ],
    [
      "images/screen_0007.png",
      "images/screen_0008.png",
      "images/screen_0009.png"
    ]
  ];

  const handleDotClick = (index) => {
    setActiveImageSet(index); // Switch the image set when a dot is clicked
  };

  const toggleChat = () => {
    setChatOpen(!isChatOpen); // Toggle chat modal visibility
  };

  const handleMouseEnter = () => {
    const element = document.querySelector(".vector-animate");
    element.classList.add("vector-animate-right");
    element.classList.remove("vector-animate-left");
  };

  const handleMouseLeave = () => {
    const element = document.querySelector(".vector-animate");
    element.classList.add("vector-animate-left");
    element.classList.remove("vector-animate-right");
  };

  return (
    <>
      <Helmet>
        <title>JP Edu Tech</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <style>
        {`
          @keyframes slideRight {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(calc(100% + 375px));
            }
          }

          @keyframes slideLeft {
            from {
              transform: translateX(calc(100% + 375px));
            }
            to {
              transform: translateX(0);
            }
          }

          .vector-animate-right {
            animation: slideRight 5s forwards;
          }

          .vector-animate-left {
            animation: slideLeft 5s forwards;
          }

          .chat-modal-backdrop {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0,0,0,0.5); /* Dim the background to focus on the chat modal */
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1050; /* High enough to be above most other content */
          }

          .chat-modal {
            background-color: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            width: 90%;
            height: 50%;
            max-width: 25%; /* Adjust width as needed */
            z-index: 10000; /* Even higher to ensure the modal itself is above the backdrop */
            position: absolute; /* This will position the modal fixed within the viewport */
            bottom: 10%; /* Raise it slightly from the bottom */
            transform: translateX(-50%); /* Center it horizontally relative to the button */
            
            margin-left:96%;
          }
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
        <div className="flex flex-col gap-[22px]">
          <div className="ml-8 md:ml-0">
            <div>
              {/* Header Section */}
              <header className="header-container flex items-center justify-between md:flex-col">
                <Img
                  src="images/img_logos1_2.png"
                  alt="Logos1two"
                  className="h-[116px] w-[14vw] object-contain md:w-full"
                />
                <div className="mb-7 ml-[60px] flex w-[100%] items-start justify-between gap-5 self-end md:ml-0 md:w-full md:flex-col md:self-auto md:px-5">
                  <Input
                    size="xs"
                    shape="round"
                    name="search"
                    placeholder="Search your destination..."
                    value={searchBarValue}
                    onChange={(e) => setSearchBarValue(e.target.value)}
                    suffix={
                      <div className="flex h-[18px] w-[18px] items-center justify-center">
                        {searchBarValue?.length > 0 ? (
                          <CloseSVG onClick={() => setSearchBarValue("")} height={18} width={18} />
                        ) : (
                          <Img
                            src="images/img_rewind.svg"
                            alt="Rewind"
                            className="my-1.5 h-[18px] w-[18px]"
                          />
                        )}
                      </div>
                    }
                    className="mb-1.5 w-[34%] gap-4 rounded-[22px] font-light tracking-[1.20px] text-blue_gray-300 shadow-md md:w-full"
                    style={{ border: "none", outline: "none" }}
                  />

                  <div className="mr-20 flex w-[24%] items-center justify-center gap-[30px] self-end md:w-full md:self-auto z-10">
                    <div className="flex flex-1 items-center justify-between gap-5">
                      <a href="https://www.facebook.com/share/XL5X5UrAG4VuFYuy/?mibextid=qi2Omg">
                        <Img
                          src="images/img_facebook.svg"
                          alt="Facebook"
                          className="h-[24px] w-[24px]"
                        />
                      </a>
                      <a href="https://wa.me/message/2I52EUSWYTQBG1">
                        <Img src="images/img_volume.svg" alt="Volume" className="h-[24px] w-[24px]" />
                      </a>
                      <a
                        href="https://www.instagram.com/jpetcs?igsh=MW5xNjF3aDN5dTE3bw=="
                        target="_blank"
                      >
                        <Img src="images/img_info.svg" alt="Info" className="h-[24px] w-[24px]" />
                      </a>
                      <a href="https://x.com/jpedutech" target="_blank">
                        <Img src="images/img_vector.svg" alt="Vector" className="h-[22px]" />
                      </a>
                    </div>
                    <a href="/Enquirepage" target="_self">
                      <Button
                        size="md"
                        shape="square"
                        className="min-w-[144px] font-bold leading-[22px] tracking-[0.90px] text-white bg-blue-600"
                      >
                        Enquire Now
                      </Button>
                    </a>
                  </div>
                </div>
              </header>
              <div className="relative ml-20 h-[900px] content-center lg:h-auto md:ml-0 md:h-auto">
                
                <Img
                  src="images/img_group_7.png"
                  alt="Image"
                  className="absolute right-[26%] top-0 m-auto h-[602px] w-[24%] object-contain z-10 -mt-24 animate-slideDown"
                />
                <div className="absolute right-0 top-1 m-auto flex h-[776px] w-[56%] items-end justify-end bg-[url(/public/images/img_group_2364.png)] bg-cover bg-no-repeat py-[78px] pl-14 pr-[338px] lg:h-auto lg:py-8 lg:pr-8 md:h-auto md:p-5 sm:p-4">
                  {/* <Img src="images/img_close.svg" alt="Close" className="mt-[584px] h-[34px] w-[14%] object-contain" /> */}
                </div>
                <div className="absolute left-0 right-0 top-[5%] m-auto flex flex-1 flex-col items-start ">
                <Heading
                  size="heading8xl"
                  as="h1"
                  className="font-playfairdisplay text-[90px] font-black text-blue-gray-800 lg:text-[48px] md:text-[48px] animate-leftToRight"
                >
                  Expert Guidance
                </Heading>
                  <Heading
                    as="h2"
                    className="ml-3.5 mt-[38px] font-satisfy text-[64px] font-normal tracking-[3.84px] text-light_blue-900 lg:text-[48px] md:ml-0 md:text-[48px] animate-leftToRight"
                  >
                    For Your Journey Ahead
                  </Heading>
                  <Heading
                    size="heading6xl"
                    as="h3"
                    className="ml-3 mt-[18px] text-[48px] font-bold tracking-[2.88px] text-blue_gray-800 lg:text-[40px] md:ml-0 md:text-[32px] sm:text-[26px] animate-leftToRight"
                  >
                    Let’go!
                  </Heading>
                  <Text
                    as="p"
                    className="ml-3 mt-5 w-[36%] text-[20px] font-normal leading-[31px] tracking-[0.40px] text-black-900_02 lg:w-full lg:px-5 lg:text-[17px] md:ml-0 md:w-full md:px-5 animate-leftToRight"
                  >
                    <span>Welcome to JP Edu Tech! Let’s Discover Your Path Together. Find Your Destination with JP Edu Tech</span>
                    <span> – Your Adventure Awaits! Hey There! Ready to Explore New Horizons with JP Edu Tech? Let’s Go! Join Us at </span>
                    <span className="capitalize">JP Edu Tech</span>
                    <span> – Where Learning is a Journey, Not a Destination. Step Into Your Future with </span>
                    <span className="capitalize">JP Edu Tech</span>
                    <span> – We’re Here to Guide You!</span>
                  </Text>
                  <button
                  className="mt-9 font-bold tracking-[1.20px] text-white md:ml-0 sm:px-4"
                >
                  <Img src="images/button_1.svg" alt="Image" className=" h-[98px] w-[60%] object-contain" onClick={() => window.open("/enquirepage", "_self", "noopener,noreferrer")} />
                </button>

                <div className="relative mt-4 h-[58px] w-[25%]" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                  <Img src="images/Vector-2.png" alt="Base Image" className="mt-10 absolute top-0 left-0 h-full w-full object-contain" />
                  <Img src="images/Vector-1.png" alt="Sliding Image" className=" absolute top-0 left-0 h-[50px] w-[10%] object-contain vector-animate" />
                </div>
                </div>
                <div className=" container-xs absolute bottom-0 left-0.5 my-auto flex items-end justify-center px-14 lg:px-5 md:relative md:flex-col md:px-5">
                <div className="flex flex-1 flex-wrap items-start justify-between gap-5 self-center px-8 md:self-stretch sm:px-4">
                <a href="/studyabroad" target="_blank" className="hover:underline hover:text-blue_gray-800 focus:underline focus:text-blue_gray-800">
                  <Heading
                    size="text2xl"
                    as="h5"
                    className="text-[25px] font-medium tracking-[1.50px] text-blue_gray-800 lg:text-[21px]"
                  >
                    Study Abroad
                  </Heading>
                </a>
                  <a href="/software" target="_blank" className="hover:underline hover:text-blue_gray-800 focus:underline focus:text-blue_gray-800">
                  <Heading
                    size="text2xl"
                    as="h6"
                    className="text-[25px] font-medium tracking-[1.50px] text-blue_gray-800 lg:text-[21px] md:ml-0"
                  >
                    Software Consulting{" "}
                  </Heading>
                  </a>
                    <a href="/Migrate" target="_blank" className="hover:underline hover:text-blue_gray-800 focus:underline focus:text-blue_gray-800">
                      <Heading
                        size="text2xl"
                        as="p"
                        className="self-end text-[25px] font-medium tracking-[1.50px] text-blue_gray-800 lg:ml-0 lg:text-[21px] md:ml-0"
                      >
                        Migrate
                      </Heading>
                    </a>
                    <a href="/EnglishCoaching" target="_blank" className="hover:underline hover:text-blue_gray-800 focus:underline focus:text-blue_gray-800">
                      <Heading
                        size="text2xl"
                        as="p"
                        className="text-[25px] font-medium tracking-[-0.47px] text-blue_gray-800 lg:text-[21px]"
                      >
                        English Coaching
                      </Heading>
                    </a>
                    <a href="/Aboutus" target="_blank" className="hover:underline hover:text-blue_gray-800 focus:underline focus:text-blue_gray-800">
                      <Heading
                        size="text2xl"
                        as="p"
                        className="self-center text-[25px] font-medium tracking-[1.50px] text-blue_gray-800 lg:text-[21px]"
                      >
                        About Us{" "}
                      </Heading>
                    </a>
                    <a href="/Resources" target="_blank" className="hover:underline hover:text-blue_gray-800 focus:underline focus:text-blue_gray-800">
                      <Heading
                        size="text2xl"
                        as="p"
                        className="text-[25px] font-medium tracking-[-0.47px] text-blue_gray-800 lg:text-[21px]"
                      >
                        Resources
                      </Heading>
                    </a>
                    <a href="/ContactUs" target="_blank" className="hover:underline hover:text-blue_gray-800 focus:underline focus:text-blue_gray-800">
                      <Heading
                        size="text2xl"
                        as="p"
                        className="text-[25px] font-medium tracking-[-0.47px] text-blue_gray-800"
                      >
                        Contact Us
                      </Heading>
                    </a>
                  </div>
                </div>
                <div className="absolute bottom-5 left-0 right-0 m-auto flex w-11/12 flex-col items-end">
                  <div className="rounded-full border-2 border-solid border-light_blue-900  lg:w-full md:w-full md:px-5">
                    {/* Use a div or button here for non-navigation action */}
                    <div className="relative h-15 lg:h-auto md:h-auto  cursor-pointer" onClick={toggleChat}>
                      <img
                        src="images/img_ellipse_67.png"
                        alt="Chatbot Trigger"
                        className="mx-auto h-14 w-14 rounded-full  object-cover" // Tailwind classes for round image
                      />
                      <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-max items-center justify-center rounded-full text-center text-lg font-bold text-white-a700_01  tracking-wider lg:text-sm z-20">
                        JET
                      </div>
                    </div>
                  </div>
                </div>

                {/* Modal should be conditionally rendered outside of any <a> or similar tag */}
                {isChatOpen && (
                  <div className="chat-modal-backdrop">
                    <div className="chat-modal">
                      <ChatModal isOpen={isChatOpen} onClose={() => setChatOpen(false)} />
                    </div>
                  </div>
                )}


              </div>
            </div>
          </div>
          <div className="flex flex-col items-center ">
            <div className="relative h-[4934px] self-stretch">
              <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-max flex-1">
                <div className="relative z-[4]">
                  <div className="relative z-[11]">
                    <div className="relative">
                    <Img
                            src="images/bg_tower.png"
                            alt="Close"
                            
                          /> 
                      <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[940px] flex-1">
                        <div className="absolute bottom-[24%] left-0 right-0 mx-[126px] my-auto flex flex-1 flex-col items-start lg:mx-0 md:mx-0" style={{top: '400px', marginTop: '10px'}}>

                          <Text
                            as="p"
                            className=" w-[34%] text-[20px] font-normal leading-[30px] tracking-[0.40px] text-black-900_02 lg:w-full lg:px-5 lg:text-[17px] md:w-full md:px-5 animate-leftToRight "
                          >
                            Studying abroad opens doors to new cultures, experiences, and opportunities. At Jp Edu Tech,
                            we are dedicated to helping you navigate the complexities of studying in a foreign country,
                            ensuring a smooth and successful international academic experience.
                          </Text>
                          <a href="/studyabroad" target="_self">
                          <button
                            className="mt-2 font-bold tracking-[1.20px] text-white md:ml-0 sm:px-4"
                          >
                            <Img src="images/button_1.svg" alt="Image" className="mt-4 h-[98px] w-[60%] object-contain" onClick={() => window.open("/enquirepage", "_self", "noopener,noreferrer")} />
                          </button>
                          </a>
                        </div>
                        <div className="absolute left-0 right-0 top-[21%] mx-[126px] my-auto flex flex-1 flex-col gap-[34px] lg:mx-0 md:mx-0">
                          {/* <Img
                            src="images/img_close_light_blue_900.svg"
                            alt="Close"
                            className="ml-1.5 h-[40px] w-[40px] md:ml-0"
                          /> */}
                          <div className="flex flex-col items-start gap-4 ">
                            <Heading
                              as="h2"
                              className="font-playfairdisplay text-[64px] font-medium leading-[85px] text-blue_gray-800_01 lg:text-[48px] md:text-[48px] animate-leftToRight "
                            >
                              <>
                                Choose Your own <br />
                                Destination
                              </>
                            </Heading>
                            <div className="ml-80 h-[2px] w-[8%] bg-light_blue-900 md:ml-0 animate-leftToRight" />
                          </div>
                        </div>
                        {/* <div className="absolute bottom-[0.98px] right-[0.34px] m-auto h-[780px] w-[56%] bg-[url(/public/images/img_group_877.png)] bg-cover bg-no-repeat py-[18px]">
                          <div className="absolute left-0 right-0 top-[17%] m-auto h-[44px] w-[48%] content-center lg:h-auto md:h-auto">
                            <div className="ml-auto mr-2.5 h-[24px] w-[24px] rounded-[12px] bg-light_blue-900 lg:mr-0 md:mr-0" />
                            <div className="absolute bottom-0 right-[0.66px] top-0 my-auto h-[44px] w-[44px] rounded-[22px] border border-dashed border-teal-600_4f" />
                          </div>
                          <div className="absolute bottom-[43%] left-0 right-0 m-auto h-[36px] w-[68%] content-center lg:h-auto md:h-auto">
                            <div className="ml-auto mr-2.5 h-[16px] w-[16px] rounded-lg bg-light_blue-900 lg:mr-0 md:mr-0" />
                            <div className="absolute bottom-0 right-[-0.34px] top-0 my-auto h-[36px] w-[36px] rounded-[18px] border border-dashed border-teal-600_4f" />
                          </div>
                          <Img
                            src="images/img_group_6.png"
                            alt="Image"
                            className="absolute bottom-[18.66px] right-[-0.34px] m-auto h-[192px] w-[24%] object-contain"
                          />
                        </div> */}
                            <div className="absolute  bottom-[30%] right-[20%] m-auto flex w-[38%] flex-col items-start bg-white-a700_01 px-[32px] py-[18px] shadow-xl sm:px-4 animate-zoomInOut">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">
                              United States Of America
                            </h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                              The United States is the most popular destination for international students. It has a long history of welcoming foreign students and offers some of the best universities in the world. The US Student Visa is a Non-Immigrant Visa that allows foreign nationals to pursue academic studies, language training programs, or other types of vocational or technical training.
                            </p>
                            <div className="flex justify-evenly gap-2 mb-4 w-full">
                              {imageSets[activeImageSet].map((imgSrc, index) => (
                                <img
                                  key={index}
                                  src={imgSrc}
                                  alt={`Image ${index + 1}`}
                                  className="w-48 h-48 object-cover  " // Fixed size: 96px x 96px
                                />
                              ))}
                            </div>
                            <div className="flex justify-center mt-5 gap-3 w-full">
                              {imageSets.map((_, index) => (
                                <button
                                  key={index}
                                  onClick={() => handleDotClick(index)}
                                  className={`w-3 h-3 flex justify-center rounded-full ${activeImageSet === index ? 'bg-gray-900' : 'bg-gray-400'}`}
                                />
                              ))}
                            </div>
                          </div>

                        <div className="absolute left-0 right-0 top-0 m-auto flex flex-1 items-start pl-[660px] pr-14 lg:pl-8 md:px-5 sm:relative sm:flex-col sm:px-4">
                          {/* <Img
                            src="images/img_group.png"
                            alt="Image"
                            className="relative z-[12] h-[346px] w-[36%] self-center object-contain sm:w-full"
                          /> */}
                          {/* <Img
                            src="images/img_airplane.svg"
                            alt="Airplane"
                            className="relative ml-[-28px] mt-[60px] h-[70px] w-[6%] object-contain sm:ml-0 sm:w-full"
                          /> */}
                        </div>
                      </div>
                    </div>
                    <div className="relative z-[13] mt-[-108px]  flex items-center justify-end md:flex-col" >
                      <Text
                        as="p"
                        className="w-[36%] text-[20px] mr-40 font-normal leading-[30px] tracking-[0.40px] text-black-900_02 lg:w-[36%] lg:text-[17px] md:w-full md:px-5" 
                      >
                        <span>Our Services at&nbsp;</span>
                        <span className="capitalize">
                          Jp Edu Tech offer tailored solutions for your educational and career goals. Explore study
                          abroad programs, secure international internships, and find work opportunities worldwide. We
                          provide expert guidance and support every step of the way. Let us help you achieve your dreams
                          and succeed on a global scale!
                        </span>
                      </Text>
                      <Img
                        src="images/img_group_8.png"
                        alt="Image"
                        className="relative ml-[-172px] h-[786px] w-[24%] object-contain md:ml-0 md:w-full"
                      />
                    </div>
                  </div>
                  <div className="relative mt-[-676px]">
                    <div className="flex items-center md:flex-col">
                      <div className="relative h-[958px] w-[34%] md:w-full md:px-5">
                        <Img
                          src="images/Rectangle 4185.png"
                          alt="Image"
                          className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[952px] w-full flex-1 object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 top-0  flex h-[952px] flex-1 flex-col items-center justify-end p-1">
                          <div className="mt-[512px] w-[46%] lg:w-full md:w-full">
                            <a href="" target="_blank">
                              {/* <div className="flex flex-col items-start">
                                <Img
                                  src="images/img_rectangle_4186.png"
                                  alt="Image"
                                  className="h-[434px] w-[82%] object-contain"
                                />
                                <div className="relative mt-[-98px] flex border-b-[2.5px] border-solid border-light_blue-900 bg-white-a700_01 px-5 py-6 sm:py-4">
                                  <Heading
                                    size="headingxl"
                                    as="h5"
                                    className="mt-2 text-[24px] font-semibold tracking-[-0.46px] text-light_blue-900 lg:text-[20px]"
                                  >
                                    Visa & Immigration
                                  </Heading>
                                </div>
                              </div> */}
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="relative z-[5] mt-10 ml-[-244px] flex flex-1 self-end md:ml-0 md:flex-col md:self-stretch md:px-5 sm:self-auto">
                      <Suspense fallback={<div>Loading feed...</div>}>
                        <div className="mt-10 flex justify-center">
                          {data.map((d, index) => (
                            <UserProfile 
                              userImage={d.userImage} 
                              hoverImage={d.hoverImage} 
                              userRole={d.userRole}
                              key={"listsoftware" + index} 
                              className="w-[30%] max-w-[220px]"  // Added width constraints
                            />
                          ))}
                        </div>
                      </Suspense>

                      </div>
                    </div>
                    <div className="relative z-[6] mt-[-15px] h-[984px] bg-[url(/public/images/img_mask_group_984x1918.png)] bg-cover bg-no-repeat lg:h-auto md:h-auto">
                      <div className="py-11 md:py-5 sm:py-4">
                        <Home1ColumnFour />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative mt-[-46px]">
                  <div className="relative z-[2] flex flex-col items-start">
                    <Img
                      src="images/img_group_blue_gray_100_02.png"
                      alt="Image"
                      className="relative z-[3] h-[444px] w-[16%] object-contain"
                    />
                    <Home1RowThree />
                  </div>
                  <div className="relative mt-[-282px] flex flex-col items-start">
                    <Img
                      src="images/img_group_blue_gray_100_02_342x364.png"
                      alt="Image Ten"
                      className="relative z-[7] h-[342px] w-[18%] object-contain"
                    />
                    <Home1RowaboutusOne />
                  </div>
                </div>
              </div>
              {/* <Img
                src="images/img_group_618x1920.png"
                alt="Image Eleven"
                className="absolute left-0 right-0 top-[6%] z-[14] m-auto h-[618px] w-full flex-1 object-cover"
              /> */}
              <Heading
                as="p"
                className="absolute left-0 right-0 top-[21%] z-[15] m-auto w-max font-playfairdisplay text-[64px] font-medium text-blue_gray-800_01 lg:text-[48px] md:text-[48px]"
              >
                Our Services
              </Heading>
              <a href="" target="_blank">
              <button
                className="absolute top-[26%]  mt-14 mr-10 z-40"
                style={{ width: 'auto', left: '45%', transform: 'translateX(-50%)' }}
                onClick={() => window.open("/enquirepage", "_self")}
              >
                <img src="images/button_1.svg" alt="Learn More" className="ml-6 z-[16] mt-4 object-contain" />
              </button>
              </a>
              <div className="absolute bottom-[13%] left-0 right-0 z-[17] mx-[100px] my-auto flex flex-1 flex-col items-end lg:mx-0 md:mx-0">
                <div className="relative z-[18] flex flex-col items-end self-stretch">
                  <Img
                    src="images/img_rectangle_4190_1.png"
                    alt="Image Twelve"
                    className="relative z-[19] h-[1004px] mb-[405px] w-[42%] object-contain"
                  />

                </div>
              </div>
              <Img
                src="images/img_group_blue_gray_100_02_318x262.png"
                alt="Image Thirteen"
                className="absolute bottom-[23%] left-0 z-20 m-auto h-[318px] w-[14%] object-contain"
              />
              <Img
                src="images/img_group_13.png"
                alt="Imageteen"
                className="absolute bottom-[22%] left-[17%] z-[21] m-auto h-[264px] w-[30%] object-contain"
              />
              <Img
                src="images/img_image_9.png"
                alt="Imagenine"
                className="absolute bottom-0 left-0 right-0 m-auto h-[130px] w-full flex-1 object-cover"
              />
            </div>
            <Home1RowFive />
            <div className="container-xs mt-[122px] px-8 lg:px-5 md:px-5">
              <div className="ml-3 flex justify-between gap-5 md:ml-0 md:flex-col">
                <Img
                  src="images/img_2_1_png.png"
                  alt="21png"
                  className="h-[40px] w-[8%] object-contain  md:w-full"
                />
                <Img
                  src="images/img_1_1_png.png"
                  alt="11png"
                  className="h-[40px] w-[8%] object-contain md:w-full"
                />
                <Img
                  src="images/img_2_1_png_40x136.png"
                  alt="21png"
                  className="h-[40px] w-[8%] object-contain  md:w-full"
                />
                <Img
                  src="images/img_4_1_png.png"
                  alt="41png"
                  className="h-[40px] w-[8%] object-contain  md:w-full"
                />
                <Img
                  src="images/img_1_1_png.png"
                  alt="11png"
                  className="h-[40px] w-[8%] object-contain  md:w-full"
                />
                <Img
                  src="images/img_4_1_png.png"
                  alt="41png"
                  className="h-[40px] w-[8%] object-contain  md:w-full"
                />
              </div>
            </div>
            <Home1Rowourclinet />
            <Home1RowSeven />
            <div className="mt-[86px] flex flex-col items-center self-stretch">
              <div className="container-xs relative z-[24] flex flex-col items-end lg:px-5 md:px-5">
              <div className="flex rotate-[0deg] flex-col items-center justify-center rounded-[22px] bg-light_blue-900 px-2.5 py-3.5 cursor-pointer"
                onClick={scrollToTop}>
                <Img src="images/img_vector_white_a700_01_14x24.svg" alt="Vector Eleven" className="h-[14px]" />
              </div>

              </div>
              <div className="relative mt-[-46px] self-stretch">
                <div className="flex flex-col items-center ">
                  <div className=" mb-8 container-xs relative z-[23] flex flex-col items-center px-14 lg:px-5 md:px-5">
                  <div className="container-xs relative z-[4] flex flex-col items-center px-14 lg:px-5 md:px-5 ">
                  <Img src="images/contact.png"></Img>
                  </div>
                    </div>
                  
                  <Footer />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
