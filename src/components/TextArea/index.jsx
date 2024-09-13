import React from "react";
import PropTypes from "prop-types";

const shapes = {
  square: "rounded-[0px]",
};
const variants = {
  tarOutlineLightblue90028: "bg-white-a700_01 shadow-lg",
};
const sizes = {
  sm: "h-[152px] p-3.5 text-[20px]",
  md: "h-[164px] p-2.5 text-[20px]",
  lg: "h-[182px] p-[22px] text-[20px]",
  xl: "h-[212px] p-5 text-[24px]",
  xs: "h-[148px] p-3.5 text-[20px]",
};

const TextArea = React.forwardRef(
  (
    {
      className = "",
      name = "",
      placeholder = "",
      shape,
      size = "xs",
      variant = "tarOutlineLightblue90028",
      onChange,
      ...restProps
    },
    ref,
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    return (
      <textarea
        ref={ref}
        className={`${className} ${shape && shapes[shape]} ${size && sizes[size]} ${variant && variants[variant]}`}
        name={name}
        onChange={handleChange}
        placeholder={placeholder}
        {...restProps}
      />
    );
  },
);

TextArea.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  shape: PropTypes.oneOf(["square"]),
  size: PropTypes.oneOf(["sm", "md", "lg", "xl", "xs"]),
  variant: PropTypes.oneOf(["tarOutlineLightblue90028"]),
};

export { TextArea };
