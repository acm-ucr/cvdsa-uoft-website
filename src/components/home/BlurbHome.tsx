"use client";
import BlurbHomeProps from "./BlurbHomeProps";
import { blurbCollaborations } from "@/data/blurbData.js";
import {motion} from "motion/react";

const BlurbHome = () => {
  return (
    <div className="mt-[23vh]">
      <p className="ml-[10vw] font-seasons text-[4vw]">WHY JOIN?</p>
      <motion.div className="mx-[6vw] mt-[11vh] columns-3 grid-rows-1"
      whileInView={{opacity: ["20%", "100%"], x: ["20%", "0%"]}}
      transition={{duration:1}}
      >
        {blurbCollaborations.map((blurb, index) => (
          <BlurbHomeProps
            key={index}
            title={blurb.title}
            description={blurb.description}
            image={blurb.image}
            alt={blurb.alt}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default BlurbHome;
