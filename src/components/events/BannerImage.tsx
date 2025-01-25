import React from "react";
import Image from "next/image";
import classroom from "@/public/events/classroom.jpeg";


const BannerImage = () => {
  return (
    <>
      <div>
        <Image
          src={classroom}
          className="
          overflow-hidden object-cover relative 
          object-top top-[97.8px] h-[243px] w-[1479px] inset-0"
          alt={"Research Conference"}
        />
      </div>
    </>
  );

};

export default BannerImage;
