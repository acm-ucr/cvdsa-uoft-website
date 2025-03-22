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
      <Image src={photo} alt="research photo" className="w-9/12" />
      <div className="absolute bottom-0 h-[10vh] w-9/12 rounded-b-[2rem] bg-cvdsa-blue-100/90 pl-4 pt-4 text-left text-4xl font-medium">
        {name}
      </div>
    </Link>
  );
};
export default ResearchCard;
