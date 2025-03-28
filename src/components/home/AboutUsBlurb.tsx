"use client";
import Image from "next/image";
import aboutBlurb from "@/public/home/aboutusimg.webp";
import * as motion from "motion/react-client";

const Down = {
  initial: { opacity: 0, y: -5 },
  animate: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay: custom, ease: "backInOut" },
  }),
};

const AboutUsBlurb = () => {
  return (
    <motion.div
      variants={Down}
      viewport={{ once: true, amount: 0 }}
      initial="initial"
      whileInView="animate"
      custom={0.1}
      className="relative z-20 mx-[10%] mt-[-4vh] grid grid-cols-1 items-center justify-center rounded-3xl bg-white py-[2vh] shadow-xl md:mt-[-15vh] md:grid-cols-2 md:py-[4vh]"
    >
      <Image src={aboutBlurb} alt="Group Club Photo" className="px-4 md:px-8" />
      <div className="flex flex-col px-8">
        <motion.p
          initial={{ opacity: 0, x: 15 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mb-6 mt-8 font-seasons text-5xl md:mt-0 md:text-6xl"
        >
          ABOUT US
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: -15 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
          className="font-seasons text-xl"
        >
          The Cardiovascular Disease Student Association or CVDSA is a student
          led advocacy group dedicated to raising awareness and funds in
          collaboration with charities like the Heart and Stroke Foundation of
          Canada. Our organization operates through five distinct committees:
          Events and Education, Research, Finance, Marketing, and Development.
          Together, we aim to increase awareness of cardiovascular diseases,
          inspire student engagement in research, and support charitable
          fundraising efforts.
        </motion.p>
      </div>
    </motion.div>
  );
};

export default AboutUsBlurb;
