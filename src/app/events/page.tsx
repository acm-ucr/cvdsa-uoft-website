import UpcomingEvents from "@/components/events/Events";
import PastEvents from "@/components/events/PastEvents";
import CalendarCall from "@/components/events/CalendarCall";

const Page = () => {
  return (
    <div>
      <UpcomingEvents />
      <CalendarCall />
      <PastEvents />
    </div>
  );
};

export default Page;
