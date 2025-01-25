import React from "react";
import Image from "next/image";
import classroom from "@/public/events/classroom.png";

const BannerImage = () => {
  return (
    <>
      <div>
        <Image
          src={classroom}
          className="top-[97.8px] w-screen"
          alt={"Research Conference"}
        />
      </div>
    </>
  );
};

export default BannerImage;
