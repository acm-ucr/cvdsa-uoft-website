"use client";
import Image from "next/image";
import ResearchConference from "@/public/research/ResearchConference.webp";
import ResearchCard from "./ResearchCard";
import articles from "@/public/research/articles.webp";
import podcasts from "@/public/research/podcasts.webp";
import * as motion from "motion/react-client";

const Down = {
  initial: { opacity: 0, y: -15 },
  animate: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay: custom, ease: "easeOut" },
  }),
};

const Research = () => {
  return (
    <div className="flex flex-col justify-center text-center text-[3vw]">
      <Image
        src={ResearchConference}
        className="w-screen"
        alt={"Research Conference"}
      />
      <motion.p
        variants={Down}
        viewport={{ once: true }}
        initial="initial"
        whileInView={"animate"}
        custom={0}
        className="mb-4 pt-6 font-seasons text-4xl md:text-6xl"
      >
        RESEARCH
      </motion.p>
      <motion.p
        variants={Down}
        viewport={{ once: true }}
        initial="initial"
        whileInView={"animate"}
        custom={0.4}
        className="text-xl font-semibold"
      >
        Click on these for access to more
      </motion.p>
      <motion.p
        variants={Down}
        viewport={{ once: true }}
        initial="initial"
        whileInView={"animate"}
        custom={0.4}
        className="text-xl font-semibold"
      >
        resources!
      </motion.p>
      <motion.div
        variants={Down}
        viewport={{ once: true }}
        initial="initial"
        whileInView={"animate"}
        custom={0.8}
        className="mx-[20%] grid grid-cols-1 gap-[8vw] pb-[10vh] pt-4 md:grid-cols-2 md:gap-[2vw]"
      >
        <ResearchCard
          name="Articles"
          photo={articles}
          link="https://drive.google.com/file/d/1QHbk4PIiay8uEqw0iwcJmhFjp_ZyKdsX"
        />
        <ResearchCard
          name="Podcasts"
          photo={podcasts}
          link="https://open.spotify.com/show/14BLo7ajpvhOWuBxsv3lrl?si=b2c4543a9d8f4f54"
        />
      </motion.div>
    </div>
  );
};

export default Research;
