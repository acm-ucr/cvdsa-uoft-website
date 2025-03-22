"use client";
import React from "react";
import { Calendar } from "@/components/ui/calendar";
import { useQuery } from "@tanstack/react-query";
import UpcomingEvents from "./Events";

// Original Google Calendar event structure
export type GoogleEventProps = {
  start: {
    dateTime?: string;
    date?: string;
  };
  end: {
    dateTime?: string;
    date?: string;
  };
  location?: string;
  description?: string;
  summary: string;
};

// What EventCard expects
export interface EventCardProps {
  date: string;
  month: string;
  title: string;
  description: string;
}

const CalendarCall = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  const { data, isLoading } = useQuery<{
    rawEvents: GoogleEventProps[];
    cardEvents: EventCardProps[];
  }>({
    queryKey: ["repoData"],
    queryFn: async () => {
      const response = await fetch(
        `https://www.googleapis.com/calendar/v3/calendars/${
          process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_EMAIL
        }/events?key=${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY}&singleEvents=true&orderBy=startTime&timeMin=${new Date(
          new Date().getTime() - 60 * 60 * 24 * 7 * 10 * 1000,
        ).toISOString()}&timeMax=${new Date(
          new Date().getTime() + 60 * 60 * 24 * 7 * 10 * 1000,
        ).toISOString()}`,
      ).then((res) => res.json());

      const rawEvents = response.items || [];

      const cardEvents = rawEvents
        .map((item: GoogleEventProps) => {
          const startString = item.start?.dateTime || item.start?.date;
          if (!startString) return null;

          const startDate = new Date(startString);
          const month = startDate
            .toLocaleString("default", { month: "short" })
            .toUpperCase();
          const day = startDate.getDate().toString();

          return {
            month,
            date: day,
            title: item.summary,
            description: item.description || "No description available.",
          };
        })
        .filter(Boolean)
        .slice(0, 2) as EventCardProps[];

      return { rawEvents, cardEvents };
    },
  });

  return (
    <>
      {!isLoading && data && <UpcomingEvents events={data.cardEvents} />}
      {!isLoading && data && (
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="mx-[5%] w-9/12 lg:mx-[15%]"
          events={data.rawEvents}
        />
      )}
    </>
  );
};

export default CalendarCall;
