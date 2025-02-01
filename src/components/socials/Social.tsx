import Image from "next/image";
import socialsimage from "@/public/social/socialsimage.webp";

const SocialBanner = () => {
  return (
    <div className="w-full">
      <Image src={socialsimage} alt="Socials Banner" />
    </div>
  );
};

export default SocialBanner;
