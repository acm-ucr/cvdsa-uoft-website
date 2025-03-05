"use client";
import BlurbHomeProps from "./BlurbHomeProps";
import blurbData from "@/data/blurbData.js";
import { motion } from "motion/react";

const BlurbHome = () => {
  return (
    <div className="mt-[23vh]">
      <p className="ml-[10vw] columns-3 font-seasons text-[4vw]">WHY JOIN?</p>
      <div className="mt-[15vh] columns-3 grid-rows-1">
        {blurbData.map((blurb, index) => (
          <motion.div
            whileInView={{
              opacity: ["0%", "100%"],
              x: [`${20 + index * 10}%`, "0%"],
            }}
            transition={{ duration: 0.75, delay: index * 0.2 }}
          >
            <BlurbHomeProps
              key={index}
              title={blurb.title}
              description={blurb.description}
              image={blurb.image}
              alt={blurb.alt}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BlurbHome;
