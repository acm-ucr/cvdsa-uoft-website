import Image from "next/image";
import aboutBlurb from "@/public/home/aboutusimg.webp";

const AboutUsBlurb = () => {
  return (
    <div className="ml-[10vw] mt-[5vw] h-[40vw] w-[80vw] rounded-3xl border-4">
      <div className="mt-[40vh] flex items-center justify-center">
        <Image
          src={aboutBlurb}
          alt="Group Club Photo"
          className="w-[39vw]"
        />
      </div>
      <h2 className="ml-[45vw] mt-[-14vw] font-seasons text-6xl"> ABOUT US </h2>
      <h3 className="ml-[45vw] mt-[2vw] max-w-[30vw] font-seasons text-[20px]">
        The Cardiovascular Disease Student Association (CVDSA) is a student-led
        advocacy group dedicated to raising awareness and funds in collaboration
        with charities like the Heart & Stroke Foundation of Canada. Our
        organization operates through five distinct committees: Events and
        Education, Research, Finance, Marketing, and Develpment. Together, we
        aim to increase awareness of cardiovascular diseases, inspire student
        engagement in research, and support charitable fundraising efforts.
      </h3>
    </div>
  );
};

export default AboutUsBlurb;
