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
    <div className="mt-[15vh] flex justify-center">
      <SocialBlurb
        title="Follow us on Instagram!"
        description="Keep up with the details about upcoming new events!"
        image={instagram}
        link=""
        delay={0}
      />
      <SocialBlurb
        title="Reach Out!"
        description="Here's our email if you need to contact us!"
        image={email}
        link=""
        delay={1}
      />
    </div>
  );
};
