import EventCard from "./EventCard";

const UpcomingEvents = () => {
  return (
    <div className="flex flex-col items-center">
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
