import ContactCard from "@/components/socials/ContactCard";
import socialsimage from "@/public/social/socialsimage.webp";
import instagram from "@/public/social/instagram.webp";
import email from "@/public/social/email.webp";
import Image from "next/image";

const Contacts = () => {
  return (
    <div className="h-screen">
      <Image src={socialsimage} alt="Socials Banner" className="w-fit" />
      <p className="pb-[6vh] pt-[2vh] text-center font-seasons text-[4vw]">
        SOCIALS
      </p>
      <div className="mx-[15%] grid grid-cols-2">
        <ContactCard
          title="Follow us on Instagram!"
          description="Keep up with the details about upcoming new events!"
          image={instagram}
          link=""
          delay={0}
        />
        <ContactCard
          title="Reach Out!"
          description="Here's our email if you need to contact us!"
          image={email}
          link=""
          delay={1}
        />
      </div>
    </div>
  );
};

export default Contacts;
