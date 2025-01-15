"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "@/public/logo.webp";
import { items } from "@/data/navigation";
import { IoMdMenu } from "react-icons/io";

const Navigation = () => {
  const [selected, setSelected] = useState("");
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="border-hearts-blue bg-hearts-beige sticky top-0 z-30 ml-[3%] mr-[3%] flex items-center justify-between border-b-4 text-lg md:text-[1.7vw]">
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
          className="left-0 my-[0.5%] w-[7%] duration-300 hover:opacity-60 md:w-[5%]"
        />
        <p className="text-hearts-blue ml-[0.5%] whitespace-nowrap text-xl font-light md:text-[2.5vw]">
          UCR Hearts
        </p>
      </Link>
      <div className="absolute right-0 hidden w-[40%] justify-evenly md:flex">
        {items.map((item, index) => (
          <Link
            href={item.link}
            key={index}
            onClick={() => {
              setSelected(item.name);
            }}
            className={`hover:text-hearts-brown border-solid duration-300 ${
              selected === item.name
                ? "border-hearts-brown text-hearts-brown border-b-2"
                : "text-hearts-blue"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>

      <div
        className={
          nav
            ? "bg-hearts-beige fixed left-0 right-0 top-7 -z-10 flex w-[100%] flex-col items-center justify-evenly transition duration-500 ease-in-out md:hidden"
            : "fixed top-[-100%] hidden transition duration-500 ease-in-out"
        }
      >
        {items.map((item, index) => (
          <Link
            href={item.link}
            key={index}
            onClick={() => {
              setSelected(item.name);
              handleNav();
            }}
            className={`hover:text-hearts-brown border-solid py-2 duration-300 md:py-0 ${
              selected === item.name
                ? "border-hearts-brown text-hearts-brown border-b-2"
                : "text-hearts-blue"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>
      <div onClick={handleNav}>
        <IoMdMenu className="hover:text-swim-blue-300 text-hearts-blue flex justify-self-end text-3xl hover:cursor-pointer md:hidden" />
      </div>
    </div>
  );
};

export default Navigation;
