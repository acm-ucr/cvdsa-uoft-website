import React from "react";
import Image from "next/image";
import landing from "@/public/home/landing.svg";

const MainText = () => {
  return (
    <div className="flex justify-center font-seasons text-[6vw]">
      <Image
        src={landing}
        alt="landing"
        className="absolute z-0 w-screen"
      ></Image>
      <p className="z-10 text-white">UNIVERSITY OF TORONTO</p>
    </div>
  );
};

export default MainText;

//w-full aspect-[16/9]
//h-auto w-full

//flex aspect-[1414/1000] w-full justify-center bg-[url('/home/landing.svg')] bg-cover bg-center bg-no-repeat font-seasons text-[6vw]
