import SocialBanner, { SocialBlurb } from "@/components/socials/Social";
import instagram from "@/public/social/instagram.webp";
import email from "@/public/social/email.webp";

const SocialPage = () => {
  return (
    <div>
      <SocialBanner />
      <div>
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
    </div>
  );
};

export default SocialPage;
