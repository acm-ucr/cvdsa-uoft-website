"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "@/public/logo.webp";
import { items } from "@/data/navigation";

const Navigation = () => {
  const [selected, setSelected] = useState("");
  return (
    <div className="sticky top-0 z-30 ml-[3%] mr-[3%] flex items-center justify-between border-b-4 border-cvdsa-red-200 bg-white text-lg md:text-[1.7vw]">
      <Link
        onClick={() => {
          setSelected("");
        }}
        href="/"
        className="flex items-center duration-300 hover:opacity-75"
      >
        <Image
          src={logo}
          alt="Logo"
          className="left-0 mx-[4%] my-[1%] w-[7%] duration-300 hover:opacity-60 md:w-[20%]"
        />
        <p className="ml-[0.5%] whitespace-nowrap font-seasons text-2xl text-black md:text-[3vw]">
          CVDSA
        </p>
      </Link>
      <div className="absolute right-0 hidden w-[40%] items-center justify-evenly text-center md:flex">
        {items.map((item, index) => (
          <Link
            href={item.link}
            key={index}
            onClick={() => {
              setSelected(item.name);
            }}
            className={`border-solid duration-300 hover:opacity-40 ${
              selected === item.name
                ? "inline-block rounded-full border-b-2 bg-cvdsa-red-100 p-4 text-black"
                : "text-black"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navigation;
