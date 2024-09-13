import React from "react";

const sizes = {
  textxs: "text-[16px] font-normal not-italic lg:text-[13px]",
  texts: "text-[17px] font-normal not-italic lg:text-[14px]",
  textlg: "text-[20px] font-normal not-italic lg:text-[17px]",
  textxl: "text-[24px] font-normal not-italic lg:text-[20px] md:text-[22px]",
};

const Text = ({ children, className = "", as, size = "textlg", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`font-poppins ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
