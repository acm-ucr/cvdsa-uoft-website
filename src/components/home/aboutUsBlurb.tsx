import Image from "next/image";
import aboutBlurb from "@/public/home/aboutusimg.webp";

const AboutUsBlurb = () => {
  return (
    <div className="relative mx-[10vw] flex h-[40vw] justify-center rounded-3xl border-4 px-[3vw] py-[4vh]">
      <div>
        <Image
          src={aboutBlurb}
          alt="Group Club Photo"
          className="mr-[5vw] w-[40vw]"
        />
      </div>
      <div className="mt-[2vh] flex-col">
        <p className="font-seasons text-[9vh]"> ABOUT US </p>
        <p className="max-w-[30vw] font-seasons text-[2.8vh]">
          The Cardiovascular Disease Student Association (CVDSA) is a
          student-led advocacy group dedicated to raising awareness and funds in
          collaboration with charities like the Heart & Stroke Foundation of
          Canada. Our organization operates through five distinct committees:
          Events and Education, Research, Finance, Marketing, and Develpment.
          Together, we aim to increase awareness of cardiovascular diseases,
          inspire student engagement in research, and support charitable
          fundraising efforts.
        </p>
      </div>
    </div>
  );
};

export default AboutUsBlurb;
