import ContactCard from "@/components/socials/ContactCard";
import socialsimage from "@/public/social/socialsimage.webp";
import instagram from "@/public/social/instagram.webp";
import email from "@/public/social/email.webp";
import Image from "next/image";

const Contacts = () => {
  return (
    <div className="h-screen">
      <Image src={socialsimage} alt="Socials Banner" className="w-fit" />
      <p className="pb-[6vh] pt-[4vh] text-center font-seasons text-5xl">
        SOCIALS
      </p>
      <div className="mx-[15%] grid grid-cols-1 md:grid-cols-2">
        <ContactCard
          title="Follow us on Instagram!"
          description="Keep up with the details about upcoming new events!"
          image={instagram}
          link="https://www.instagram.com/cvdsa.uoft/"
          delay={0}
        />
        <ContactCard
          title="Reach Out!"
          description="Here's our email if you need to contact us!"
          image={email}
          link="mailto:cvdsa.uoft@gmail.com"
          delay={1}
        />
      </div>
    </div>
  );
};

export default Contacts;
