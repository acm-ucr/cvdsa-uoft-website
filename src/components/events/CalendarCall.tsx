"use client";
import React from "react";
import { Calendar } from "@/components/ui/calendar";
import { useQuery } from "@tanstack/react-query";
/* import EventCards from "@/components/events/EventCards"; */

export type GoogleEventProps = {
  start: {
    dateTime: Date;
    date: string;
  };
  end: {
    dateTime: Date;
    date: string;
  };
  location: string;
  description: string;
  summary: string;
};

const CalendarCall = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  const { data, isLoading } = useQuery({
    queryKey: ["repoData"],
    queryFn: async () => {
      const response =
        await fetch(`https://www.googleapis.com/calendar/v3/calendars/${
          process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_EMAIL
        }/events?key=${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY}
          &singleEvents=true&orderBy=startTime&timeMin=${new Date(
            new Date().getTime() - 60 * 60 * 24 * 7 * 10 * 1000,
          ).toISOString()}&timeMax=${new Date(
            new Date().getTime() + 60 * 60 * 24 * 7 * 10 * 1000,
          ).toISOString()}`).then((res) => res.json());

      const events = response.items.map(
        ({ start, end, location, description, summary }: GoogleEventProps) => ({
          start: {
            dateTime: start.dateTime,
            date: start.date,
          },
          end: {
            dateTime: end.dateTime,
            date: end.date,
          },
          location,
          description,
          summary,
        }),
      );
      return events;
    },
  });

  return (
    <>
      {/* {!isLoading && <EventCards events={data} />} */}
      {!isLoading && (
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="mx-[5%] w-9/12 lg:mx-[15%]"
          events={data}
        />
      )}
    </>
  );
};

export default CalendarCall;
