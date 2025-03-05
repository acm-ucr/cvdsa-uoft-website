import EventCard from "./EventCard";
import Image from "next/image";
import classroom from "@/public/events/classroom.webp";
const UpcomingEvents = () => {
  return (
    <div className="flex flex-col items-center">
      <Image src={classroom} className="w-screen" alt={"Research Conference"} />
      <p className="m-4 flex justify-center font-seasons text-[4vw]">
        UPCOMING EVENTS
      </p>
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
