import React from "react";
import EventsProps from "./EventsProps";

const UpcomingEvents = () => {
  return (
    <div className="mt-8 flex flex-col items-center">
      <h2 className="m-4 flex justify-center font-seasons text-[4vw]">
        UPCOMING EVENTS
      </h2>
      <div className="flex gap-12">
        <EventsProps
          date="20"
          month="OCT"
          title="NAME"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <EventsProps
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
