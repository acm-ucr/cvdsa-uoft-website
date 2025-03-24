import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface ResearchCardProps {
  name: string;
  photo: StaticImageData;
  link: string;
}
const ResearchCard: React.FC<ResearchCardProps> = ({ name, photo, link }) => {
  return (
    <Link
      href={link}
      className="relative flex justify-center hover:scale-105"
      target="_blank"
    >
      <Image src={photo} alt="research photo" className="size-full" />
      <div className="absolute bottom-0 size-full h-[8vh] rounded-b-[1.6rem] bg-cvdsa-blue-100/90 pl-4 pt-4 text-left text-2xl font-medium md:h-[10vh] md:rounded-b-[2rem] md:text-4xl">
        {name}
      </div>
    </Link>
  );
};
export default ResearchCard;
