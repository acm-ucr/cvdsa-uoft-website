import Image from "next/image";
import ResearchConference from "@/public/research/ResearchConference.webp";
const Research = () => {
  return (
    <div className="flex flex-col justify-center text-center text-[3vw]">
      <Image
        src={ResearchConference}
        className="w-screen"
        alt={"Research Conference"}
      />
      <p className="font-seasons">RESEARCH</p>
      <p className="text-xl">Click on these for access to more</p>
      <p className="text-xl">resources!</p>
    </div>
  );
};

export default Research;
