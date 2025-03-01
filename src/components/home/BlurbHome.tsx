"use client";
import BlurbHomeProps from "./BlurbHomeProps";
import { blurbCollaborations } from "@/data/blurbData.js";
import { blurbMeeting } from "@/data/blurbData.js";
import { blurbConference } from "@/data/blurbData.js";
import { motion } from "motion/react";

const BlurbHome = () => {
  return (
    <div className="mt-[23vh]">
      <p className="ml-[10vw] font-seasons text-[4vw]">WHY JOIN?</p>

      <div className="mt-[15vh] columns-3">
        <motion.div
          className="mx-[6vw] mt-[11vh] grid-rows-1"
          whileInView={{ opacity: ["20%", "100%"], x: ["20%", "0%"] }}
          transition={{ duration: 1 }}
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

        <motion.div
          className="mx-[6vw] mt-[11vh] grid-rows-1"
          whileInView={{ opacity: ["20%", "100%"], x: ["40%", "0%"] }}
          transition={{ duration: 1 }}
        >
          {blurbMeeting.map((blurb, index) => (
            <BlurbHomeProps
              key={index}
              title={blurb.title}
              description={blurb.description}
              image={blurb.image}
              alt={blurb.alt}
            />
          ))}
        </motion.div>

        <motion.div
          className="mx-[6vw] mt-[11vh] grid-rows-1"
          whileInView={{ opacity: ["20%", "100%"], x: ["60%", "0%"] }}
          transition={{ duration: 1 }}
        >
          {blurbConference.map((blurb, index) => (
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
    </div>
  );
};

export default BlurbHome;
