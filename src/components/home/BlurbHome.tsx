"use client";
import BlurbHomeProps from "./BlurbHomeProps";
import blurbData from "@/data/blurbData";
import * as motion from "motion/react-client";

const Down = {
  initial: { opacity: 0, y: -20 },
  animate: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: custom },
  }),
};

const BlurbHome = () => {
  return (
    <div className="mt-[7vh] md:mt-[15vh]">
      <motion.p
        variants={Down}
        viewport={{ once: true, amount: 0 }}
        initial="initial"
        whileInView={"animate"}
        custom={0.4}
        className="ml-[10vw] font-seasons text-5xl md:text-7xl"
      >
        WHY JOIN?
      </motion.p>
      <motion.div
        variants={Down}
        viewport={{ once: true, amount: 0 }}
        initial="initial"
        whileInView={"animate"}
        custom={0.9}
        className="mx-[6vw] mb-8 mt-[11vh] grid grid-cols-1 md:grid-cols-3"
      >
        {blurbData.map(({ title, description, image, alt }, index) => (
          <BlurbHomeProps
            key={index}
            title={title}
            description={description}
            image={image}
            alt={alt}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default BlurbHome;
