"use client";
import EventCard from "./EventCard";
import Image from "next/image";
import classroom from "@/public/events/classroom.webp";
import * as motion from "motion/react-client";

const Down = {
  initial: { opacity: 0, y: -15 },
  animate: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay: custom, ease: "easeOut" },
  }),
};

const UpcomingEvents = () => {
  return (
    <div className="flex flex-col items-center">
      <Image src={classroom} className="w-screen" alt={"Research Conference"} />
      <motion.p
        variants={Down}
        viewport={{ once: true }}
        initial="initial"
        whileInView={"animate"}
        custom={0}
        className="m-4 flex justify-center font-seasons text-[4vw]"
      >
        UPCOMING EVENTS
      </motion.p>
      <div className="flex w-10/12 gap-4">
        <EventCard
          date="20"
          month="OCT"
          title="NAME"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <EventCard
          date="21"
          month="OCT"
          title="NAME"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </div>
    </div>
  );
};

export default UpcomingEvents;
