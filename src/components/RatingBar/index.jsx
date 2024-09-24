import React from "react";
import ReactStars from "react-rating-stars-component";

const RatingBar = ({
  children,
  className,
  starCount = 5,
  color = "grey",
  activeColor = "1B5D82",
  isEditable = false,
  ...restProps
}) => {
  return (
    <>
      <ReactStars
        edit={isEditable}
        classNames={className}
        count={starCount}
        isHalf={false}
        color={color}
        activeColor={activeColor}
        {...restProps}
        key={restProps.value || 1}
      />
      {children}
    </>
  );
};

export { RatingBar };
