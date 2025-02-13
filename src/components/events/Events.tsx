import React from "react";
import EventsProps from "./EventsProps";

const events = [
  {
    date: "20",
    month: "OCT",
    title: "NAME",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    date: "21",
    month: "OCT",
    title: "NAME",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const UpcomingEvents = () => {
  return (
    <div className="mt-8 flex flex-col items-center">
      <h2 className="flex justify-center font-seasons text-[3vw]">
        UPCOMING EVENTS
      </h2>
      <div className="flex gap-12">
        {events.map((event, index) => (
          <EventsProps key={index} {...event} />
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
