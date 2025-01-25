import React from "react";
import Image from "next/image";
import classroom from "@/public/events/classroom.webp";


const BannerImage = () => {
  return (
    <>
      <div>
        <Image
          src={classroom}
          className="
          overflow-hidden object-cover relative 
          object-top top-[97.8px] inset-0"
          alt={"Research Conference"}
        />
      </div>
    </>
  );

};

export default BannerImage;
