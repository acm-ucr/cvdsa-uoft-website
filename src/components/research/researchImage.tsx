import Image from "next/image";
import ResearchConference from "@/public/research/ResearchConference.webp";
const ResearchImage = () => {
  return (
    <>
      <div>
        <Image
          src={ResearchConference}
          className="aspect-[5/1] w-screen"
          alt={"Research Conference"}
        />
      </div>
    </>
  );
};

export default ResearchImage;
