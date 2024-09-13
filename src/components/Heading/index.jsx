import React from "react";

const sizes = {
  textmd: "text-[18px] font-medium lg:text-[15px]",
  text2xl: "text-[25px] font-medium lg:text-[21px] md:text-[23px] sm:text-[21px]",
  text3xl: "text-[36px] font-medium lg:text-[30px] md:text-[34px] sm:text-[32px]",
  text4xl: "text-[48px] font-medium lg:text-[40px] md:text-[44px] sm:text-[38px]",
  text5xl: "text-[64px] font-medium lg:text-[64px] md:text-[48px]",
  text6xl: "text-[128px] font-medium lg:text-[128px] md:text-[48px]",
  headingxs: "text-[14px] font-semibold",
  headings: "text-[16px] font-semibold lg:text-[13px]",
  headingmd: "text-[17px] font-semibold lg:text-[14px]",
  headinglg: "text-[20px] font-semibold lg:text-[17px]",
  headingxl: "text-[24px] font-bold lg:text-[20px] md:text-[22px]",
  heading2xl: "text-[26px] font-bold lg:text-[22px] md:text-[24px] sm:text-[22px]",
  heading3xl: "text-[32px] font-bold lg:text-[27px] md:text-[30px] sm:text-[28px]",
  heading4xl: "text-[36px] font-semibold lg:text-[30px] md:text-[34px] sm:text-[32px]",
  heading5xl: "text-[40px] font-semibold lg:text-[34px] md:text-[38px] sm:text-[36px]",
  heading6xl: "text-[48px] font-bold lg:text-[40px] md:text-[44px] sm:text-[38px]",
  heading7xl: "text-[64px] font-bold lg:text-[64px] md:text-[48px]",
  heading8xl: "text-[90px] font-black lg:text-[90px] md:text-[48px]",
  heading9xl: "text-[96px] font-bold lg:text-[96px] md:text-[48px]",
  heading10xl: "text-[128px] font-extrabold lg:text-[128px] md:text-[48px]",
  heading11xl: "text-[182px] font-bold lg:text-[182px] md:text-[48px]",
};

const Heading = ({ children, className = "", size = "text5xl", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`font-Poppins ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
