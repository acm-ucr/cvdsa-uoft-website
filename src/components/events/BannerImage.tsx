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
          w-screen overflow-hidden object-cover relative 
          object-top h-[600px] inset-0"
          alt={"Research Conference"}
        />
      </div>
    </>
  );

};

export default BannerImage;
