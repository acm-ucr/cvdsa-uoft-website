"use client";
import { Calendar, EventProps } from "@/components/ui/calendar";
import { useState } from "react";
import UpcomingEvents from "@/components/events/Events";

const CalendarCall = ({ events }: { events: EventProps[] }) => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div>
      <UpcomingEvents />
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        events={events}
        className="mb-[45vh] ml-[16.5vw] w-[67vw]"
      />
    </div>
  );
};

export default CalendarCall;
