"use client";
import Awareness from "./committees/Awareness";
import Development from "./committees/Development";
import Events from "./committees/Events";
import Finance from "./committees/Finance";
import Research from "./committees/Research";
import * as motion from "motion/react-client";

const Down = {
  initial: { opacity: 0, y: -10 },
  animate: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay: custom, ease: "easeOut" },
  }),
};

const Committees = () => {
  return (
    <div className="mb-4">
      <div className="my-[8vh] h-1 w-[98.91vw] bg-gradient-to-r from-cvdsa-orange-100 to-cvdsa-purple-100"></div>
      <motion.p
        variants={Down}
        viewport={{ once: true }}
        initial="initial"
        whileInView={"animate"}
        custom={0}
        className="my-[4vh] text-center font-seasons text-5xl"
      >
        MEET THE COMMITTEE MEMBERS
      </motion.p>
      <motion.div
        variants={Down}
        viewport={{ once: true }}
        initial="initial"
        whileInView={"animate"}
        custom={0.5}
        className="grid grid-cols-1 justify-center text-center md:grid-cols-3"
      >
        <Research />
        <div>
          <Awareness />
          <Finance />
        </div>
        <div>
          <Development />
          <Events />
        </div>
      </motion.div>
    </div>
  );
};
export default Committees;
