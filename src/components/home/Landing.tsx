import Image from "next/image";
import landing from "@/public/home/landing.svg";
import Link from "next/link";

const Landing = () => {
  return (
    <div className="relative z-[-1]">
      <Image src={landing} alt="landing" className="w-screen" />
      <div className="absolute left-[5vw] top-[7vh] text-center md:left-[15vw] md:top-[30vh] 2xl:left-[25vw]">
        <p className="font-seasons text-3xl font-semibold tracking-tight text-white md:text-7xl">
          UNIVERSITY OF TORONTO
        </p>
        <p className="mb-4 text-center text-[3.5vw] text-white md:mb-[4vh] md:text-3xl">
          CARDIOVASCULAR DISEASE STUDENT <br />
          ASSOCIATION
        </p>
        <Link
          href="https://ucsd.edu/"
          target="_blank"
          className="rounded-full bg-white px-4 py-2 text-sm shadow-md shadow-black/45 hover:scale-105 md:text-3xl"
        >
          JOIN NOW!
        </Link>
      </div>
    </div>
  );
};

export default Landing;
