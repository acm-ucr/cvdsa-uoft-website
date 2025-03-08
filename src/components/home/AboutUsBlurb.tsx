"use client";
import Image from "next/image";
import aboutBlurb from "@/public/home/aboutusimg.webp";
import { motion } from "framer-motion";

const AboutUsBlurb = () => {
  return (
    <div className="mx-[10vw] mt-[-15vh] flex justify-center rounded-3xl bg-white px-[3vw] py-[4vh] shadow-xl">
      <Image src={aboutBlurb} alt="Group Club Photo" className="mr-[5vw]" />
      <div className="flex-col">
        <motion.p
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="font-seasons text-[9vh]"
        >
          ABOUT US
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="font-seasons text-[2.8vh]"
        >
          The Cardiovascular Disease Student Association (CVDSA) is a
          student-led advocacy group dedicated to raising awareness and funds in
          collaboration with charities like the Heart & Stroke Foundation of
          Canada. Our organization operates through five distinct committees:
          Events and Education, Research, Finance, Marketing, and Develpment.
          Together, we aim to increase awareness of cardiovascular diseases,
          inspire student engagement in research, and support charitable
          fundraising efforts.
        </motion.p>
      </div>
    </div>
  );
};

export default AboutUsBlurb;
