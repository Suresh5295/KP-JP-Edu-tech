import { Heading, Img } from "./..";
import React, { useState } from "react";

export default function UserProfile({
  userImage = "images/img_rectangle_4187.png",
  hoverImage = "images/hover_img_rectangle_4187.png",  // Added hoverImage prop,
  ...props
}) {
  const [isHovered, setIsHovered] = useState(false);  // Hover state

  return (
    <>
      <style>{`
        .user-profile {
          text-align: center;
          margin: 13px;
        }

        .user-image {
          width: 300px;
          height: 350px;
          object-fit: cover;
          transition: transform 0.3s ease-in-out;
        }

        .user-profile:hover .user-image {
          transform: scale(1);
        }
      `}</style>

      <div
        {...props}
        className={`${props.className} user-profile flex flex-col items-center justify-center w-[60%] md:w-full`}
        onMouseEnter={() => setIsHovered(true)}   // Set isHovered to true on hover
        onMouseLeave={() => setIsHovered(false)}  // Set isHovered to false on mouse leave
      >
        <div className=" self-baseline">
          <Img
            src={isHovered ? hoverImage : userImage}   // Toggle between userImage and hoverImage
            alt="Image"
            className=" ml-10 object-bottom user-image"
          />

        </div>
      </div>
    </>
  );
}
