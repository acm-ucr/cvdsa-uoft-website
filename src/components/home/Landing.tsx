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
    <div className="relative">
      {/* Background Image */}
      <Image
        src={landing}
        alt="landing"
        className="absolute left-0 top-0 z-0 h-screen w-screen object-cover"
      />

      {/* Content */}
      <div className="relative z-10 flex h-screen flex-col items-center justify-center">
        <motion.p
          variants={Down}
          viewport={{ once: true, amount: 0 }}
          initial="initial"
          whileInView="animate"
          className="font-seasons text-3xl font-semibold tracking-tight text-white md:text-7xl"
        >
          UNIVERSITY OF TORONTO
        </motion.p>
        <motion.p
          variants={Down}
          viewport={{ once: true, amount: 0 }}
          initial="initial"
          whileInView="animate"
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
          whileInView="animate"
          custom={0.7}
        >
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLScp2vI1qp2TY2f7dkbMfajwCw87RrSyBeHAgDQGOa-4E7NfgQ/viewform"
            target="_blank"
            className="rounded-full bg-white px-8 py-4 text-sm shadow-md shadow-black/20 hover:scale-105 md:text-3xl"
          >
            JOIN NOW!
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Landing;
