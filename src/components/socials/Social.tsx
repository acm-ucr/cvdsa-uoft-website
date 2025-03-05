import SocialBlurb from "./SocialsBlurbProps";
import socialsimage from "@/public/social/socialsimage.webp";
import instagram from "@/public/social/instagram.webp";
import email from "@/public/social/email.webp";
import Image from "next/image";

const Socials = () => {
  return (
    <div className="flex justify-center">
      <Image src={socialsimage} alt="Socials Banner" />
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
export default Socials;
