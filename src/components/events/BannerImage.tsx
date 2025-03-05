import React from "react";
import Image from "next/image";
import classroom from "@/public/events/classroom.webp";

const BannerImage = () => {
  return (
    <>
      <div>
        <Image
          src={classroom}
          className="aspect-[1440/244] w-screen"
          alt={"Research Conference"}
        />
      </div>
    </>
  );
};

export default BannerImage;
