"use client";

import { Calendar, EventProps } from "@/components/ui/calendar";
import { useState } from "react";
import BannerImage from "@/components/events/BannerImage";

const CalendarCall = ({ events }: { events: EventProps[] }) => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="relative h-[100vw] w-[100vw] overflow-clip md:h-[75vw]">
      <BannerImage />
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        events={events}
        className="bg-hearts-beige text-hearts-brown mb-[45vh] ml-[16.5vw] w-[67vw]"
      />
    </div>
  );
};

export default CalendarCall;
