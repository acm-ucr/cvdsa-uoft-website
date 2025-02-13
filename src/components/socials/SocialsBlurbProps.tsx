import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface BlurbProps {
  title: string;
  description: string;
  image: StaticImageData;
  link: string;
}

const SocialBlurb: React.FC<BlurbProps> = ({
  title,
  description,
  image,
  link,
}) => {
  return (
    <div>
      <Link href={link} className="flex items-center">
        <Image src={image} alt={title} className="h-20 w-20" />
        <div className="m-4">
          <h2 className="font-bold">{title}</h2>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
};

export default SocialBlurb;
