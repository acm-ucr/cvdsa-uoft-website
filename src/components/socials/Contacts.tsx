import ContactCard from "@/components/socials/ContactCard";
import socialsimage from "@/public/social/socialsimage.webp";
import instagram from "@/public/social/instagram.webp";
import email from "@/public/social/email.webp";
import Image from "next/image";

const Contacts = () => {
  return (
    <div className="flex flex-col justify-center">
      <Image src={socialsimage} alt="Socials Banner" />
      <div className="grid grid-cols-2">
        <ContactCard
          title="Follow us on Instagram!"
          description="Keep up with the details about upcoming new events!"
          image={instagram}
          link=""
        />
        <ContactCard
          title="Reach Out!"
          description="Here's our email if you need to contact us!"
          image={email}
          link=""
        />
      </div>
    </div>
  );
};

export default Contacts;
