"use client";
import Image from "next/image";
import landing from "@/public/home/landing.svg";
import Link from "next/link";
import * as motion from "motion/react-client";

const Down = {
  initial: { opacity: 0, y: -5 },
  animate: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: custom },
  }),
};

const Landing = () => {
  return (
    <div className="relative z-[-1]">
      <Image src={landing} alt="landing" className="w-screen" />
      <div className="absolute left-[8vw] top-[7vh] text-center md:left-[20vw] md:top-[30vh] 2xl:left-[28vw]">
        <motion.p
          variants={Down}
          viewport={{ once: true, amount: 0 }}
          initial="initial"
          whileInView={"animate"}
          className="font-seasons text-3xl font-semibold tracking-tight text-white md:text-7xl"
        >
          UNIVERSITY OF TORONTO
        </motion.p>
        <motion.p
          variants={Down}
          viewport={{ once: true, amount: 0 }}
          initial="initial"
          whileInView={"animate"}
          custom={0.4}
          className="mb-4 text-center text-[3.5vw] text-white md:mb-[4vh] md:text-3xl"
        >
          CARDIOVASCULAR DISEASE STUDENT <br />
          ASSOCIATION
        </motion.p>
        <motion.div
          variants={Down}
          viewport={{ once: true, amount: 0 }}
          initial="initial"
          whileInView={"animate"}
          custom={0.7}
        >
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLScp2vI1qp2TY2f7dkbMfajwCw87RrSyBeHAgDQGOa-4E7NfgQ/viewform"
            target="_blank"
            className="rounded-full bg-white px-4 py-2 text-sm shadow-md shadow-black/20 hover:scale-105 md:text-3xl"
          >
            JOIN NOW!
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Landing;
