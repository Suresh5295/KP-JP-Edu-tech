// import { Helmet } from "react-helmet";
// import { Text, Heading, Img, Button, Input } from "../../components";
// import Footer from "../../components/Footer";
// import { CloseSVG } from "../../components/Input/close.jsx";
// import UserProfile from "../../components/UserProfile";
// import UserProfile3 from "../../components/UserProfile3";
// import HomeoneColumnThree from "./HomeoneColumnThree";
// import HomeoneRowFive from "./HomeoneRowFive";
// import HomeoneRowSeven from "./HomeoneRowSeven";
// import HomeoneRowThree from "./HomeoneRowThree";
// import HomeoneRowaboutusOne from "./HomeoneRowaboutusOne";
// import HomeoneRowourclinet from "./HomeoneRowourclinet";
// import React, { Suspense } from "react";

// const data = [
//   { userImage: "images/img_rectangle_4187.png", userRole: "Software Consulting" },
//   { userImage: "images/img_rectangle_4188.png", userRole: "Software Consulting" },
//   { userImage: "images/img_rectangle_4189.png", userRole: "Software Consulting" },
//   { userImage: "images/img_rectangle_4190.png", userRole: "Software Consulting" },
//   { userImage: "images/img_rectangle_4187.png", userRole: "Software Consulting" },
// ];

// export default function HomeOnePage() {
//   const [searchBarValue14, setSearchBarValue14] = React.useState("");

//   return (
//     <>
//       <Helmet>
//         <title>JP Edu Tech</title>
//         <meta name="description" content="Web site created using create-react-app" />
//       </Helmet>
//       <div className="w-full bg-white-a700_01">
//         <div className="flex flex-col gap-[22px]">
//           <div className="ml-8 md:ml-0">
//             <div>
//               <header className="flex items-center md:flex-col">
//                 <Img
//                   src="images/img_logos1_2.png"
//                   alt="Logos1two"
//                   className="h-[116px] w-[14%] object-contain md:w-full"
//                 />
//                 <div className="mb-7 ml-[60px] flex w-[80%] items-start justify-between gap-5 self-end md:ml-0 md:w-full md:flex-col md:self-auto md:px-5">
//                   <Input
//                     size="xs"
//                     shape="round"
//                     name="search"
//                     placeholder={`Search your destination...`}
//                     value={searchBarValue14}
//                     onChange={(e) => setSearchBarValue14(e.target.value)}
//                     suffix={
//                       <div className="flex h-[18px] w-[18px] items-center justify-center">
//                         {searchBarValue14?.length > 0 ? (
//                           <CloseSVG onClick={() => setSearchBarValue14("")} height={18} width={18} />
//                         ) : (
//                           <Img src="images/img_rewind.svg" alt="Rewind" className="my-1.5 h-[18px] w-[18px]" />
//                         )}
//                       </div>
//                     }
//                     className="mb-1.5 w-[34%] gap-4 rounded-[22px] font-light tracking-[1.20px] !text-blue_gray-300 !shadow-md md:w-full"
//                   />
//                   <div className="flex w-[24%] items-center justify-center gap-[30px] self-end md:w-full md:self-auto">
//                     <div className="flex flex-1 items-center justify-between gap-5">
//                       <a href="#">
//                         <Img src="images/img_facebook.svg" alt="Facebook" className="h-[24px] w-[24px]" />
//                       </a>
//                       <a href="#">
//                         <Img src="images/img_volume.svg" alt="Volume" className="h-[24px] w-[24px]" />
//                       </a>
//                       <a href="#">
//                         <Img src="images/img_info.svg" alt="Info" className="h-[24px] w-[24px]" />
//                       </a>
//                       <a href="#">
//                         <Img src="images/img_vector.svg" alt="Vector" className="h-[22px]" />
//                       </a>
//                     </div>
//                     <Button
//                       size="md"
//                       shape="square"
//                       className="min-w-[144px] font-bold leading-[22px] tracking-[0.90px]"
//                     >
//                       Enquire Now
//                     </Button>
//                   </div>
//                 </div>
//               </header>
//               <div className="relative ml-20 h-[928px] md:ml-0">
//                 <Img
//                   src="images/img_mask_group.png"
//                   alt="Image"
//                   className="absolute bottom-0 right-0 top-0 my-auto h-[896px] w-[56%] object-contain"
//                 />
//                 <Img
//                   src="images/img_group_7.png"
//                   alt="Image"
//                   className="absolute right-[26%] top-0 m-auto h-[602px] w-[24%] object-contain"
//                 />
//                 <div className="absolute right-0 top-1 m-auto flex h-[776px] w-[56%] items-end justify-end bg-[url(/public/images/img_group_2364.png)] bg-cover bg-no-repeat py-[78px] pl-14 pr-[338px] lg:h-auto lg:py-8 lg:pr-8 md:h-auto md:p-5 sm:p-4">
//                   <Img src="images/img_close.svg" alt="Close" className="mt-[584px] h-[34px] w-[14%] object-contain" />
//                 </div>
//                 <div className="absolute left-0 right-0 top-[5%] m-auto flex flex-1 flex-col items-start">
//                   <Heading
//                     size="heading8xl"
//                     as="h1"
//                     className="font-playfairdisplay text-[90px] font-black text-blue_gray-800_01 lg:text-[48px] md:text-[48px]"
//                   >
//                     Expert Guidance
//                   </Heading>
//                   <Heading
//                     as="h2"
//                     className="ml-3.5 mt-[38px] font-satisfy text-[64px] font-normal tracking-[3.84px] text-light_blue-900 lg:text-[48px] md:ml-0 md:text-[48px]"
//                   >
//                     For Your Journey Ahead
//                   </Heading>
//                   <Heading
//                     size="heading6xl"
//                     as="h3"
//                     className="ml-3 mt-[18px] text-[48px] font-bold tracking-[2.88px] text-blue_gray-800 lg:text-[40px] md:ml-0 md:text-[32px] sm:text-[26px]"
//                   >
//                     Let’go!
//                   </Heading>
//                   <Text
//                     as="p"
//                     className="ml-3 mt-5 w-[36%] text-[20px] font-normal leading-[31px] tracking-[0.40px] text-black-900_02 lg:w-full lg:px-5 lg:text-[17px] md:ml-0 md:w-full md:px-5"
//                   >
//                     <span>
//                       Welcome to Jp Edu Tech! Let’s Discover Your Path Together. Find Your Destination with Jp Edu Tech
//                     </span>
//                     <span className="uppercase">&nbsp;</span>
//                     <span>
//                       – Your Adventure Awaits! Hey There! Ready to Explore New Horizons with Jp Edu Tech? Let’s Go! Join
//                       Us at&nbsp;
//                     </span>
//                     <span className="capitalize">Jp Edu tech</span>
//                     <span>
//                       &nbsp;– Where Learning is a Journey, Not a Destination. Step Into Your Future with&nbsp;
//                     </span>
//                     <span className="capitalize">Jp Edu Tech</span>
//                     <span className="uppercase">&nbsp;– We’re Here to Guide You!</span>
//                   </Text>
//                   <Button
//                     size="2xl"
//                     shape="square"
//                     className="ml-3 mt-9 min-w-[198px] px-[34px] font-bold tracking-[1.20px] md:ml-0 sm:px-4"
//                   >
//                     Learn More
//                   </Button>
//                   <Img src="images/img_group_9.svg" alt="Image" className="mt-4 h-[98px] w-[32%] object-contain" />
//                 </div>
//                 <div className="absolute bottom-[6%] right-[7%] m-auto flex w-[28%] flex-col gap-[202px] bg-white-a700_01 lg:gap-[151px] md:gap-[151px] sm:gap-[101px]">
//                   <div>
//                     <div className="flex flex-col gap-7">
//                       <div>
//                         <div className="relative h-[130px] content-center lg:h-auto md:h-auto">
//                           <Img
//                             src="images/img_rectangle_4455.png"
//                             alt="Image"
//                             className="mx-auto h-[130px] w-full flex-1 object-cover"
//                           />
//                           <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 items-start justify-center bg-black-900_bf_01">
//                             <div className="mb-7 mt-2.5 flex flex-1 items-center gap-[25px] px-[22px] sm:px-4">
//                               <Heading
//                                 size="headingxl"
//                                 as="h4"
//                                 className="flex h-[70px] w-[70px] items-center justify-center rounded-[34px] bg-cyan-900 text-center text-[24px] font-bold tracking-[1.44px] text-white-a700_01 lg:text-[20px]"
//                               >
//                                 JET
//                               </Heading>
//                               <Heading
//                                 size="heading3xl"
//                                 as="h5"
//                                 className="w-[52%] text-[32px] font-semibold leading-[143.87%] tracking-[1.92px] text-white-a700_01 lg:text-[27px] md:text-[26px] sm:text-[24px]"
//                               >
//                                 <>
//                                   Chat with
//                                   <br />
//                                   JP EDU TECH
//                                 </>
//                               </Heading>
//                             </div>
//                             <a href="" target="_blank">
//                               <Button
//                                 color="cyan_900"
//                                 size="sm"
//                                 shape="circle"
//                                 className="w-[32px] rounded-[16px] px-2.5"
//                               >
//                                 <Img src="images/img_vector_50.svg" />
//                               </Button>
//                             </a>
//                           </div>
//                         </div>
//                         <div className="relative z-[1] mt-[-20px] flex items-end gap-[13px] bg-black-900_02 px-[26px] py-1.5 sm:px-4">
//                           <div className="mb-1 h-[12px] w-[12px] rounded-md bg-green-a700" />
//                           <Heading
//                             size="headings"
//                             as="h6"
//                             className="text-[16px] font-semibold tracking-[0.96px] text-white-a700_01 lg:text-[13px]"
//                           >
//                             We reply immediately.....
//                           </Heading>
//                         </div>
//                       </div>
//                       <div className="mx-[22px] flex flex-col items-end md:mx-0">
//                         <div className="flex w-[88%] rounded-[12px] bg-cyan-900 px-8 py-5 lg:w-full md:w-full sm:px-4">
//                           <Heading
//                             size="textmd"
//                             as="p"
//                             className="w-[86%] text-[18px] font-medium leading-[8px] tracking-[0.36px] text-white-a700_01 lg:text-[15px]"
//                           >
//                             <>
//                               Hi there, i have a question about
//                               <br />
//                               immigration.
//                             </>
//                           </Heading>
//                         </div>
//                         <Heading
//                           size="headingxs"
//                           as="p"
//                           className="mr-4 mt-3 text-[14px] font-semibold tracking-[0.84px] text-blue_gray-400_9e md:mr-0"
//                         >
//                           12.12 AM
//                         </Heading>
//                         <div className="mt-1.5 flex flex-col items-start gap-4 self-stretch">
//                           <div className="flex w-[88%] flex-col items-start gap-0.5 rounded-[18px] bg-gray-100 px-[22px] py-3.5 lg:w-full md:w-full sm:px-4">
//                             <Heading
//                               size="textmd"
//                               as="p"
//                               className="mt-1 text-[18px] font-medium tracking-[0.36px] text-blue_gray-800_01 lg:text-[15px]"
//                             >
//                               Great! I can help you with the that.
//                             </Heading>
//                             <Img src="images/img_offer.svg" alt="Offer" className="h-[26px] w-[26px]" />
//                           </div>
//                           <Heading
//                             size="headingxs"
//                             as="p"
//                             className="ml-2.5 text-[14px] font-semibold tracking-[0.84px] text-blue_gray-400_9e md:ml-0"
//                           >
//                             12.12 AM
//                           </Heading>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <Input
//                     color="blue_gray_100_7c"
//                     size="2xl"
//                     shape="square"
//                     name="vector_two"
//                     placeholder={`Type here and press enter to chat...`}
//                     suffix={
//                       <div className="flex h-[12px] w-[14px] items-center justify-center">
//                         <Img
//                           src="images/img_vector_white_a700_01_14x14.svg"
//                           alt="Vector"
//                           className="my-2 h-[14px] w-[14px]"
//                         />
//                       </div>
//                     }
//                     className="gap-4 tracking-[0.36px]"
//                   />
//                 </div>
//                 <div className="absolute bottom-[7%] right-[7%] m-auto w-[4%] rounded-[34px] border-2 border-solid border-light_blue-900">
//                   <div className="relative h-[60px] content-center lg:h-auto md:h-auto">
//                     <Img
//                       src="images/img_ellipse_67.png"
//                       alt="Image"
//                       className="mx-auto h-[58px] w-[58px] rounded-[28px] object-cover"
//                     />
//                     <Heading
//                       size="headingxl"
//                       as="h4"
//                       className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-max items-center justify-center rounded-[30px] bg-black-900_bc text-center text-[24px] font-bold tracking-[1.44px] text-white-a700_01 lg:text-[20px]"
//                     >
//                       JET
//                     </Heading>
//                   </div>
//                 </div>
//                 <div className="container-xs absolute bottom-0 left-0.5 my-auto flex items-end justify-center px-14 lg:px-5 md:relative md:flex-col md:px-5">
//                   <Heading
//                     size="text2xl"
//                     as="p"
//                     className="text-[25px] font-medium tracking-[1.50px] text-blue_gray-800 lg:text-[21px]"
//                   >
//                     Study Abroad
//                   </Heading>
//                   <Heading
//                     size="text2xl"
//                     as="p"
//                     className="ml-[60px] text-[25px] font-medium tracking-[1.50px] text-blue_gray-800 lg:text-[21px] md:ml-0"
//                   >
//                     Software Consulting{" "}
//                   </Heading>
//                   <div className="flex flex-1 flex-wrap items-start justify-between gap-5 self-center px-8 md:self-stretch sm:px-4">
//                     <Heading
//                       size="text2xl"
//                       as="p"
//                       className="ml-[34px] self-end text-[25px] font-medium tracking-[1.50px] text-blue_gray-800 lg:ml-0 lg:text-[21px] md:ml-0"
//                     >
//                       Migrate
//                     </Heading>
//                     <Heading
//                       size="text2xl"
//                       as="p"
//                       className="text-[25px] font-medium tracking-[-0.47px] text-blue_gray-800 lg:text-[21px]"
//                     >
//                       English Coaching
//                     </Heading>
//                     <Heading
//                       size="text2xl"
//                       as="p"
//                       className="self-center text-[25px] font-medium tracking-[1.50px] text-blue_gray-800 lg:text-[21px]"
//                     >
//                       About Us{" "}
//                     </Heading>
//                   </div>
//                   <div className="flex w-[22%] flex-wrap justify-between gap-5 self-start md:w-full md:self-auto">
//                     <Heading
//                       size="text2xl"
//                       as="p"
//                       className="ml-8 text-[25px] font-medium tracking-[-0.47px] text-blue_gray-800 lg:text-[21px]"
//                     >
//                       Resources
//                     </Heading>
//                     <a href="/ContactUs" className="lg:text-[21px]">
//                       <Heading
//                         size="text2xl"
//                         as="p"
//                         className="text-[25px] font-medium tracking-[-0.47px] text-blue_gray-800"
//                       >
//                         Contact Us
//                       </Heading>
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="flex flex-col items-center">
//             <div className="relative h-[4934px] self-stretch">
//               <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-max flex-1">
//                 <div className="relative z-[5]">
//                   <div className="relative z-[12]">
//                     <div className="relative h-[942px] bg-gradient1">
//                       <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[940px] flex-1">
//                         <div className="absolute bottom-[24%] left-0 right-0 mx-[126px] my-auto flex flex-1 flex-col items-start gap-[34px] lg:mx-0 md:mx-0">
//                           <Text
//                             as="p"
//                             className="w-[34%] text-[20px] font-normal leading-[30px] tracking-[0.40px] text-black-900_02 lg:w-full lg:px-5 lg:text-[17px] md:w-full md:px-5"
//                           >
//                             Studying abroad opens doors to new cultures, experiences, and opportunities. At Jp Edu Tech,
//                             we are dedicated to helping you navigate the complexities of studying in a foreign country,
//                             ensuring a smooth and successful international academic experience.
//                           </Text>
//                           <Button
//                             shape="square"
//                             className="min-w-[198px] px-[34px] font-bold tracking-[1.20px] sm:px-4"
//                           >
//                             Learn More
//                           </Button>
//                         </div>
//                         <div className="absolute left-0 right-0 top-[21%] mx-[126px] my-auto flex flex-1 flex-col gap-[34px] lg:mx-0 md:mx-0">
//                           <Img
//                             src="images/img_close_light_blue_900.svg"
//                             alt="Close"
//                             className="ml-1.5 h-[40px] w-[40px] md:ml-0"
//                           />
//                           <div className="flex flex-col items-start gap-1">
//                             <Heading
//                               as="h2"
//                               className="font-playfairdisplay text-[64px] font-medium leading-[85px] text-blue_gray-800_01 lg:text-[48px] md:text-[48px]"
//                             >
//                               <>
//                                 Choose Your own <br />
//                                 Destionation
//                               </>
//                             </Heading>
//                             <div className="ml-[244px] h-[2px] w-[8%] bg-light_blue-900 md:ml-0" />
//                           </div>
//                         </div>
//                         <div className="absolute bottom-[0.98px] right-[0.34px] m-auto h-[780px] w-[56%] bg-[url(/public/images/img_group_877.png)] bg-cover bg-no-repeat py-[18px]">
//                           <div className="absolute left-0 right-0 top-[17%] m-auto h-[44px] w-[48%] content-center lg:h-auto md:h-auto">
//                             <div className="ml-auto mr-2.5 h-[24px] w-[24px] rounded-[12px] bg-light_blue-900 lg:mr-0 md:mr-0" />
//                             <div className="absolute bottom-0 right-[0.66px] top-0 my-auto h-[44px] w-[44px] rounded-[22px] border border-dashed border-teal-600_4f" />
//                           </div>
//                           <div className="absolute bottom-[43%] left-0 right-0 m-auto h-[36px] w-[68%] content-center lg:h-auto md:h-auto">
//                             <div className="ml-auto mr-2.5 h-[16px] w-[16px] rounded-lg bg-light_blue-900 lg:mr-0 md:mr-0" />
//                             <div className="absolute bottom-0 right-[-0.34px] top-0 my-auto h-[36px] w-[36px] rounded-[18px] border border-dashed border-teal-600_4f" />
//                           </div>
//                           <Img
//                             src="images/img_group_6.png"
//                             alt="Image"
//                             className="absolute bottom-[18.66px] right-[-0.34px] m-auto h-[192px] w-[24%] object-contain"
//                           />
//                         </div>
//                         <div className="absolute bottom-[18%] right-[18%] m-auto flex w-[48%] flex-col items-start bg-white-a700_01 px-[34px] py-[18px] shadow-xl sm:px-4">
//                           <Heading
//                             size="headinglg"
//                             as="h3"
//                             className="ml-[18px] text-[20px] font-extrabold tracking-[1.20px] text-blue_gray-900 lg:text-[17px] md:ml-0"
//                           >
//                             United States Of America
//                           </Heading>
//                           <Text
//                             as="p"
//                             className="ml-[18px] mt-2.5 w-full text-[20px] font-normal leading-[33px] tracking-[0.40px] text-gray-700 lg:text-[17px] md:ml-0"
//                           >
//                             The United States is the most popular destination for international students. It has a long
//                             history of welcoming foreign students and offers some of the best universities in the world.
//                             The US Student Visa is a Non-Immigrant Visa that allows foreign nationals to pursue academic
//                             studies, language training programs or other types of vocational or technical training. 
//                           </Text>
//                           <div className="mb-2.5 ml-[18px] mr-[70px] mt-[84px] flex gap-4 self-stretch md:mx-0 md:flex-col">
//                             <Img
//                               src="images/img_rectangle_4178.png"
//                               alt="Rectangle"
//                               className="h-[176px] w-[32%] object-contain md:w-full"
//                             />
//                             <Img
//                               src="images/img_rectangle_4177.png"
//                               alt="Rectangle"
//                               className="h-[176px] w-[32%] object-contain md:w-full"
//                             />
//                             <div className="relative h-[180px] w-[34%] content-center lg:h-auto md:h-auto md:w-full">
//                               <Img
//                                 src="images/img_rectangle_4179.png"
//                                 alt="Image"
//                                 className="mx-auto h-[176px] flex-1 object-cover"
//                               />
//                               <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 justify-center bg-gray-900_bc px-14 py-[72px] lg:py-8 md:p-5 sm:p-4">
//                                 <Heading
//                                   size="headinglg"
//                                   as="h4"
//                                   className="mb-1 font-nunitosans text-[20px] font-extrabold tracking-[1.20px] text-white-a700_01 lg:text-[17px]"
//                                 >
//                                   +7
//                                 </Heading>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="absolute left-0 right-0 top-0 m-auto flex flex-1 items-start pl-[660px] pr-14 lg:pl-8 md:px-5 sm:relative sm:flex-col sm:px-4">
//                           <Img
//                             src="images/img_group.png"
//                             alt="Image"
//                             className="relative z-[13] h-[346px] w-[36%] self-center object-contain sm:w-full"
//                           />
//                           <Img
//                             src="images/img_airplane.svg"
//                             alt="Airplane"
//                             className="relative ml-[-28px] mt-[60px] h-[70px] w-[6%] object-contain sm:ml-0 sm:w-full"
//                           />
//                         </div>
//                       </div>
//                     </div>
//                     <div className="relative z-[14] mt-[-108px] flex items-center justify-end md:flex-col">
//                       <Text
//                         as="p"
//                         className="w-[36%] text-[20px] font-normal leading-[30px] tracking-[0.40px] text-black-900_02 lg:w-[36%] lg:text-[17px] md:w-full md:px-5"
//                       >
//                         <span>Our Services at&nbsp;</span>
//                         <span className="capitalize">
//                           Jp Edu Tech offer tailored solutions for your educational and career goals. Explore study
//                           abroad programs, secure international internships, and find work opportunities worldwide. We
//                           provide expert guidance and support every step of the way. Let us help you achieve your dreams
//                           and succeed on a global scale!
//                         </span>
//                       </Text>
//                       <Img
//                         src="images/img_group_8.png"
//                         alt="Image"
//                         className="relative ml-[-172px] h-[786px] w-[24%] object-contain md:ml-0 md:w-full"
//                       />
//                     </div>
//                   </div>
//                   <div className="relative mt-[-676px]">
//                     <div className="flex items-center md:flex-col">
//                       <div className="relative h-[958px] w-[34%] md:w-full md:px-5">
//                         <Img
//                           src="images/img_rectangle_4179.png"
//                           alt="Image"
//                           className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[952px] w-full flex-1 object-cover"
//                         />
//                         <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 flex-col items-center justify-end bg-gradient3 p-1">
//                           <div className="mt-[512px] flex flex-col items-start">
//                             <Img
//                               src="images/img_rectangle_4186.png"
//                               alt="Image"
//                               className="h-[434px] w-[82%] object-contain"
//                             />
//                             <div className="relative mt-[-98px] flex border-b-[2.5px] border-solid border-light_blue-900 bg-white-a700_01 px-5 py-6 sm:py-4">
//                               <Heading
//                                 size="headingxl"
//                                 as="h5"
//                                 className="mt-2 text-[24px] font-semibold tracking-[-0.46px] text-light_blue-900 lg:text-[20px]"
//                               >
//                                 Visa & Immigration
//                               </Heading>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="relative z-[6] ml-[-244px] flex flex-1 gap-3.5 self-end md:ml-0 md:flex-col md:self-stretch md:px-5 sm:self-auto">
//                         <Suspense fallback={<div>Loading feed...</div>}>
//                           {data.map((d, index) => (
//                             <UserProfile {...d} key={"listsoftware" + index} />
//                           ))}
//                         </Suspense>
//                       </div>
//                     </div>
//                     <div className="relative z-[7] mt-[-6px] h-[984px] bg-[url(/public/images/img_mask_group_984x1918.png)] bg-cover bg-no-repeat lg:h-auto md:h-auto">
//                       <div className="bg-gradient2 py-11 md:py-5 sm:py-4">
//                         <HomeoneColumnThree />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="relative mt-[-46px]">
//                   <div className="relative z-[3] flex flex-col items-start">
//                     <Img
//                       src="images/img_group_blue_gray_100_02.png"
//                       alt="Image Ten"
//                       className="relative z-[4] h-[444px] w-[16%] object-contain"
//                     />
//                     <HomeoneRowThree />
//                   </div>
//                   <div className="relative mt-[-282px] flex flex-col items-start">
//                     <Img
//                       src="images/img_group_blue_gray_100_02_342x364.png"
//                       alt="Image Eleven"
//                       className="relative z-[2] h-[342px] w-[18%] object-contain"
//                     />
//                     <HomeoneRowaboutusOne />
//                   </div>
//                 </div>
//               </div>
//               <Img
//                 src="images/img_group_618x1920.png"
//                 alt="Image Twelve"
//                 className="absolute left-0 right-0 top-[6%] z-[15] m-auto h-[618px] w-full flex-1 object-cover"
//               />
//               <Heading
//                 as="p"
//                 className="absolute left-0 right-0 top-[21%] z-[16] m-auto w-max font-playfairdisplay text-[64px] font-medium text-blue_gray-800_01 lg:text-[48px] md:text-[48px]"
//               >
//                 Our Services
//               </Heading>
//               <Button
//                 shape="square"
//                 className="absolute left-0 right-0 top-[26%] z-[17] m-auto min-w-[200px] px-[34px] font-nunitosans font-bold tracking-[1.20px] sm:px-4"
//               >
//                 Learn More
//               </Button>
//               <div className="absolute bottom-[13%] left-0 right-0 z-[18] mx-[100px] my-auto flex flex-1 flex-col items-end lg:mx-0 md:mx-0">
//                 <div className="relative z-[19] flex flex-col items-end self-stretch">
//                   <Img
//                     src="images/img_rectangle_4190.png"
//                     alt="Image Thirteen"
//                     className="relative z-20 h-[1004px] w-[42%] object-contain"
//                   />
//                   <Img
//                     src="images/img_vector_blue_gray_100.svg"
//                     alt="Vector"
//                     className="relative mr-[188px] mt-[-4px] h-[118px] w-[12%] object-contain md:mr-0"
//                   />
//                 </div>
//                 <Img
//                   src="images/img_vector_blue_gray_100_402x266.svg"
//                   alt="Vector Ten"
//                   className="relative mr-52 mt-[-104px] h-[402px] w-[18%] object-contain md:mr-0"
//                 />
//               </div>
//               <Img
//                 src="images/img_group_blue_gray_100_02_318x262.png"
//                 alt="Imageteen"
//                 className="absolute bottom-[23%] left-0 z-[21] m-auto h-[318px] w-[14%] object-contain"
//               />
//               <Img
//                 src="images/img_group_13.png"
//                 alt="Image Fifteen"
//                 className="absolute bottom-[22%] left-[17%] z-[22] m-auto h-[264px] w-[30%] object-contain"
//               />
//               <Img
//                 src="images/img_image_9.png"
//                 alt="Imagenine"
//                 className="absolute bottom-0 left-0 right-0 m-auto h-[130px] w-full flex-1 object-cover"
//               />
//             </div>
//             <HomeoneRowFive />
//             <div className="container-xs mt-[122px] px-8 lg:px-5 md:px-5">
//               <div className="ml-3 flex justify-between gap-5 md:ml-0 md:flex-col">
//                 <Img
//                   src="images/img_2_1_png.png"
//                   alt="21png"
//                   className="h-[40px] w-[8%] object-contain opacity-40 md:w-full"
//                 />
//                 <Img
//                   src="images/img_1_1_png.png"
//                   alt="11png"
//                   className="h-[40px] w-[8%] object-contain opacity-40 md:w-full"
//                 />
//                 <Img
//                   src="images/img_2_1_png_40x136.png"
//                   alt="21png"
//                   className="h-[40px] w-[8%] object-contain opacity-40 md:w-full"
//                 />
//                 <Img
//                   src="images/img_4_1_png.png"
//                   alt="41png"
//                   className="h-[40px] w-[8%] object-contain opacity-40 md:w-full"
//                 />
//                 <Img
//                   src="images/img_1_1_png.png"
//                   alt="11png"
//                   className="h-[40px] w-[8%] object-contain opacity-40 md:w-full"
//                 />
//                 <Img
//                   src="images/img_4_1_png.png"
//                   alt="41png"
//                   className="h-[40px] w-[8%] object-contain opacity-40 md:w-full"
//                 />
//               </div>
//             </div>
//             <HomeoneRowourclinet />
//             <HomeoneRowSeven />
//             <div className="mt-[86px] flex flex-col items-center self-stretch">
//               <div className="container-xs relative z-[25] flex flex-col items-end lg:px-5 md:px-5">
//                 <div className="flex rotate-[90deg] flex-col items-center justify-center rounded-[22px] bg-light_blue-900 px-2.5 py-3.5">
//                   <Img src="images/img_vector_white_a700_01_14x24.svg" alt="Vector Twelve" className="h-[14px]" />
//                 </div>
//               </div>
//               <div className="relative mt-[-46px] self-stretch">
//                 <div className="flex flex-col items-center">
//                   <div className="container-xs relative z-[24] flex flex-col items-center px-14 lg:px-5 md:px-5">
//                     <div className="relative ml-1 h-[150px] w-[82%] bg-light_blue-900 px-[126px] lg:px-8 md:ml-0 md:px-5 sm:px-4">
//                       <div className="absolute bottom-[0.34px] left-0 right-0 m-auto flex w-[96%] flex-col">
//                         <div className="mr-[76px] flex gap-6 md:mr-0 md:flex-col">
//                           <UserProfile3 className="mt-1.5 w-[8%] bg-white-a700_01 md:mt-0 md:w-full" />
//                           <Heading
//                             size="headingmd"
//                             as="h6"
//                             className="mb-[50px] mt-1.5 w-[18%] text-[17.6px] font-bold leading-6 text-white-a700_01 lg:w-[18%] lg:text-[14px] md:my-0 md:w-full"
//                           >
//                             Call Us Anytime
//                           </Heading>
//                           <UserProfile3 className="mt-1.5 w-[40%] gap-6 md:mt-0 md:w-full" />
//                           <UserProfile3 className="w-[28%] gap-6 md:w-full" />
//                         </div>
//                         <Text
//                           size="textxs"
//                           as="p"
//                           className="relative ml-[100px] mt-[-50px] text-[16px] font-normal leading-[30px] text-white-a700_01 lg:text-[13px] md:ml-0"
//                         >
//                           <>
//                             +91 9704428144
//                             <br />
//                             +91 8247510882
//                           </>
//                         </Text>
//                       </div>
//                       <Text
//                         size="textxs"
//                         as="p"
//                         className="absolute bottom-[11px] right-[10%] m-auto w-[22%] text-[16px] font-normal leading-[30px] text-white-a700_01 lg:text-[13px]"
//                       >
//                         <>
//                           Kurnool, Hyderabad, <br />
//                           Guntur, Melbourne(Australia)
//                         </>
//                       </Text>
//                     </div>
//                   </div>
//                   <Footer />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
