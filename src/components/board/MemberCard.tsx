import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { MdOutlineEmail } from "react-icons/md";

const MemberCard = (
  position,
  name
}: {
  position: string;
  name: string;
}) => {
  return (
    <div className="flex w-[21vw] flex-col items-center">
      <p className="mb-[5%] text-[2vw] font-medium">{position}</p>  
    </div>
  )
};

export default MemberCard;