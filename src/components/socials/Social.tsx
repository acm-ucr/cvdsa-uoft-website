import SocialBlurb from "./SocialsBlurbProps";
import socialsimage from "@/public/social/socialsimage.webp";
import instagram from "@/public/social/instagram.webp";
import email from "@/public/social/email.webp";
import Image from "next/image";

export const SocialBanner = () => {
  return (
    <div className="w-full">
      <Image src={socialsimage} alt="Socials Banner" />
    </div>
  );
};

export const SocialPage = () => {
  return (
    <div className="flex justify-center">
      <SocialBlurb
        title="Follow us on Instagram!"
        description="Keep up with the details about upcoming new events!"
        image={instagram}
        link=""
      />
      <SocialBlurb
        title="Reach Out!"
        description="Here's our email if you need to contact us!"
        image={email}
        link=""
      />
    </div>
  );
};
