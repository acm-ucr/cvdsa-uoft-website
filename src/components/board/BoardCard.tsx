import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { MdOutlineEmail } from "react-icons/md";

const BoardCard = ({
  position,
  image,
  name,
  email,
  year,
  major,
}: {
  image: StaticImageData;
  name: string;
  position: string;
  year: string;
  email: string;
  major: string;
}) => {
  return (
    <div className="flex w-[21vw] flex-col items-center">
      <p className="mb-[5%] text-[2vw] font-medium">{position}</p>

      <div>
        <Image
          src={image}
          alt="board pic"
          className="rounded-[8%] border-[0.15vw] border-cvdsa-cornflower-100"
        />
      </div>
      <div className="p-[5%] text-[1.4vw]">
        <div className="flex w-full justify-between">
          <p className="w-4/5 text-[1.5vw] font-semibold leading-tight">
            {name}
          </p>
          <Link href={`mailto:${email}`}>
            <MdOutlineEmail className="text-[2.8vw] text-cvdsa-blue-100 duration-300 hover:scale-110 hover:text-blue-400" />
          </Link>
        </div>

        <p className="py-[1%]">{year}</p>

        <p className="leading-tight">{major}</p>
      </div>
    </div>
  );
};
export default BoardCard;
