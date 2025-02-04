import Image, { StaticImageData } from "next/image";
import socialsimage from "@/public/social/socialsimage.webp";

const SocialBanner = () => {
  return (
    <div className="w-full">
      <Image src={socialsimage} alt="Socials Banner" />
    </div>
  );
};
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
    <link href={link}>
      <div>
        <Image src={image} alt={title} />
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </link>
  );
};

export default SocialBanner;
export { SocialBlurb };
