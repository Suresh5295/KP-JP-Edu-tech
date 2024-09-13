import React from "react";
import PropTypes from "prop-types";

const shapes = {
  circle: "rounded-[50%]",
  round: "rounded-[16px]",
  square: "rounded-[0px]",
};
const variants = {
  fill: {
    light_blue_900_cc: "bg-light_blue-900_cc",
    cyan_900: "bg-cyan-900",
    gray_400: "bg-gray-400 text-white-a700_01",
    white_A700_01: "bg-white-a700_01 text-light_blue-900",
    light_blue_900: "bg-light_blue-900 text-white-a700_01",
  },
};
const sizes = {
  "4xl": "h-[58px] px-[34px] text-[20px]",
  "8xl": "h-[72px] px-[22px]",
  xl: "h-[52px] pl-2 pr-[18px] text-[16px]",
  "7xl": "h-[68px] px-[34px] text-[16px]",
  xs: "h-[30px] px-[22px] text-[20px]",
  md: "h-[34px] pl-6 pr-3 text-[15px]",
  "2xl": "h-[52px] px-[34px] text-[20px]",
  "3xl": "h-[54px] px-1.5",
  "6xl": "h-[66px] px-[34px] text-[24px]",
  "10xl": "h-[98px] pl-3.5 pr-[18px] text-[24px]",
  sm: "h-[34px] px-1.5",
  "9xl": "h-[76px] px-[34px] text-[32px]",
  lg: "h-[48px] px-5 text-[15px]",
  "5xl": "h-[64px] px-[34px] text-[20px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "5xl",
  color = "light_blue_900",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap ${shape && shapes[shape]} ${size && sizes[size]} ${variant && variants[variant]?.[color]}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "round", "square"]),
  size: PropTypes.oneOf(["4xl", "8xl", "xl", "7xl", "xs", "md", "2xl", "3xl", "6xl", "10xl", "sm", "9xl", "lg", "5xl"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["light_blue_900_cc", "cyan_900", "gray_400", "white_A700_01", "light_blue_900"]),
};

export { Button };
