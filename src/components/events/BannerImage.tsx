import React from "react";
import Image from "next/image";
import classroom from "@/public/events/classroom.webp";

const BannerImage = () => {
  return (
    <>
      <div>
        <Image
          src={classroom}
          className="relative inset-0 top-[97.8px] overflow-hidden object-cover object-top"
          alt={"Research Conference"}
        />
      </div>
    </>
  );
};

export default BannerImage;
