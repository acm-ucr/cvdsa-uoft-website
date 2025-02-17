import Image from "next/image";
import landing from "@/public/home/landing.svg";
import Link from "next/link";

const Header = () => {
  return (
    <div className="relative mb-[3%] flex h-[80vh] flex-col items-center justify-center text-[5.5vw]">
      <Image src={landing} alt="landing" className="absolute -z-10 w-screen" />
      <p className="font-seasons font-semibold tracking-tight text-white">
        UNIVERSITY OF TORONTO
      </p>

      <p className="w-[50%] text-center text-[2.4vw] text-white">
        CARDIOVASCULAR DISEASE STUDENT ASSOCIATION
      </p>

      <Link
        href="https://ucsd.edu/"
        target="_blank"
        className="mt-[3vh] text-nowrap rounded-full bg-white px-[2%] py-[0.6%] text-[1.9vw] shadow-md shadow-black/45 duration-300 hover:scale-105"
      >
        JOIN NOW!
      </Link>
    </div>
  );
};

export default Header;
