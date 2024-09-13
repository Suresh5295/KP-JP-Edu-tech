import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[22px]",
  square: "rounded-[0px]",
};

const variants = {
  fill: {
    blue_gray_100_7c: "bg-blue_gray-100_7c text-light_blue-900",
    white_A700_01: "bg-white-a700_01 shadow-lg text-light_blue-900",
  },
};

const sizes = {
  "2xl": "h-[84px] pl-[22px] pr-3 text-[18px]",
  xs: "h-[44px] pl-9 pr-6 text-[20px]",
  xl: "h-[74px] px-[18px] text-[24px]",
  md: "h-[58px] px-2 text-[20px]",
  lg: "h-[64px] px-4 text-[20px]",
  sm: "h-[54px] px-2.5 text-[20px]",
};

const Input = React.forwardRef(
  (
    {
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      label = "",
      prefix,
      suffix,
      onChange,
      shape,
      variant = "fill",
      size = "sm",
      color = "white_A700_01",
      ...restProps
    },
    ref,
  ) => {
    return (
      <label
        className={`${className} flex items-center justify-center cursor-text  ${shape && shapes[shape]} ${variant && (variants[variant]?.[color] || variants[variant])} ${size && sizes[size]}`}
      >
        {!!label && label}
        {!!prefix && prefix}
        <input ref={ref} type={type} name={name} placeholder={placeholder} onChange={onChange} {...restProps} />
        {!!suffix && suffix}
      </label>
    );
  },
);
Input.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  shape: PropTypes.oneOf(["round", "square"]),
  size: PropTypes.oneOf(["2xl", "xs", "xl", "md", "lg", "sm"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["blue_gray_100_7c", "white_A700_01"]),
};

export { Input };
