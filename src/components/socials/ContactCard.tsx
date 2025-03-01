import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface BlurbProps {
  title: string;
  description: string;
  image: StaticImageData;
  link: string;
}

const ContactCard: React.FC<BlurbProps> = ({
  title,
  description,
  image,
  link,
}) => {
  return (
    <div className="grid grid-cols-3 items-center">
      <Link href={link}>
        <Image src={image} alt={title} />
      </Link>
      <div className="col-span-2 flex flex-col pl-4">
        <p className="font-bold">{title}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ContactCard;
