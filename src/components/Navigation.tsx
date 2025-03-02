"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "@/public/logo.webp";
import { items } from "@/data/navigation";
import { AlignJustify } from "lucide-react";

const Navigation = () => {
  const [selected, setSelected] = useState("");
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="sticky top-0 z-30 flex items-center justify-between border-b-4 border-cvdsa-red-200 bg-white text-lg md:text-[1.7vw]">
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
        {items.map(({ name, link }, index) => (
          <Link
            href={link}
            key={index}
            onClick={() => {
              setSelected(name);
            }}
            className={`border-solid duration-300 hover:opacity-40 ${
              selected === name
                ? "inline-block rounded-full border-b-2 bg-cvdsa-red-100 p-4 text-black"
                : "text-black"
            }`}
          >
            {name}
          </Link>
        ))}
      </div>

      <div
        className={
          nav
            ? "fixed left-0 right-0 top-7 -z-10 flex w-[100%] flex-col items-center justify-evenly bg-white transition duration-500 ease-in-out md:hidden"
            : "fixed top-[-100%] hidden transition duration-500 ease-in-out"
        }
      >
        {items.map(({ name, link }, index) => (
          <Link
            href={link}
            key={index}
            onClick={() => {
              setSelected(name);
              handleNav();
            }}
            className={`border-solid py-2 duration-300 hover:opacity-60 md:py-0 ${
              selected === name
                ? "inline-block rounded-full border-b-2 bg-cvdsa-red-100 p-4 text-black"
                : "text-black"
            }`}
          >
            {name}
          </Link>
        ))}
      </div>
      <div onClick={handleNav}>
        <AlignJustify className="justify-self-end text-3xl text-black hover:cursor-pointer hover:opacity-60 md:hidden" />
      </div>
    </div>
  );
};

export default Navigation;
