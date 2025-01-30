import Image from "next/image";
import socialsimage from "@/public/social/socialsimage.webp";

const SocialBanner = () => {
  return (
    <div className="relative flex w-full overflow-hidden">
      <Image src={socialsimage} alt="Socials Banner" />
    </div>
  );
};

export default SocialBanner;
