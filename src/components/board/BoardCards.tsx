"use client";
import board from "@/data/board/board";
import BoardCard from "./BoardCard";
import * as motion from "motion/react-client";

const Down = {
  initial: { opacity: 0, y: -15 },
  animate: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay: custom, ease: "easeOut" },
  }),
};

const BoardCards = () => {
  return (
    <div className="flex flex-col justify-center px-[10%] text-center">
      <motion.p
        variants={Down}
        viewport={{ once: true }}
        initial="initial"
        whileInView={"animate"}
        custom={0}
        className="my-[4vh] font-seasons text-6xl"
      >
        Meet The Team
      </motion.p>
      <motion.div
        variants={Down}
        viewport={{ once: true }}
        initial="initial"
        whileInView={"animate"}
        custom={0.5}
        className="grid grid-cols-1 gap-[4vw] md:grid-cols-3"
      >
        {board.map(({ name, position, image, year, email, major }, index) => (
          <BoardCard
            name={name}
            position={position}
            image={image}
            year={year}
            email={email}
            major={major}
            key={index}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default BoardCards;
