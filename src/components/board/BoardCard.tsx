import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { MdOutlineEmail } from "react-icons/md";

interface BoardCardTypes {
  name: string;
  position: string;
  image: StaticImageData;
  year: string;
  email: string;
  major: string;
}

const BoardCard: React.FC<BoardCardTypes> = ({
  name,
  position,
  image,
  year,
  email,
  major,
}) => {
  return (
    <div className="flex flex-col">
      <p className="mb-2 text-center text-xl font-medium">{position}</p>

      <Image
        src={image}
        alt="BoardPhoto"
        className="rounded-xl border-2 border-cvdsa-blue-200"
      />

      <div className="p-2 text-left text-xl">
        <div className="grid grid-cols-5 items-center">
          <p className="col-span-4 text-left text-lg font-semibold leading-tight">
            {name}
          </p>
          <Link href={`mailto:${email}`}>
            <MdOutlineEmail className="text-4xl text-cvdsa-blue-100 duration-300 hover:scale-110 hover:text-blue-400" />
          </Link>
        </div>
        <p>{year}</p>
        <p className="leading-tight">{major}</p>
      </div>
    </div>
  );
};
export default BoardCard;
