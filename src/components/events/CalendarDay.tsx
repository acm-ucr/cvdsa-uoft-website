import { GoogleEventProps } from "@/components/events/CalendarCall";
import { useState, useEffect } from "react";
import CalendarEventPopover from "./CalendarEventPopover";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface DayProps {
  date: Date;
  displayMonth: Date;
  events: GoogleEventProps[];
}

const CalendarDay = ({ date, events }: DayProps) => {
  const filteredEvents = events.filter((event) => {
    let eventStartDate: Date | null = null;
    let eventEndDate: Date | null = null;

    if (event.start.dateTime) {
      eventStartDate = new Date(event.start.dateTime);
    } else if (event.start.date) {
      eventStartDate = new Date(event.start.date);
    }

    if (event.end.dateTime) {
      eventEndDate = new Date(event.end.dateTime);
    } else if (event.end.date) {
      eventEndDate = new Date(event.end.date);
    }

    eventStartDate?.setHours(0, 0, 0, 0);
    eventEndDate?.setHours(23, 59, 59, 999);

    return (
      eventStartDate &&
      eventEndDate &&
      date >= eventStartDate &&
      date <= eventEndDate
    );
  });

  const [visibleEventCount, setVisibleEventCount] = useState(2);
  const displayEventCount =
    filteredEvents.length > visibleEventCount
      ? visibleEventCount - 1
      : visibleEventCount;

  useEffect(() => {
    const updateVisibleEventCount = () => {
      if (window.innerHeight > 1440) {
        setVisibleEventCount(4);
      } else if (window.innerHeight > 1080) {
        setVisibleEventCount(3);
      } else {
        setVisibleEventCount(2);
      }
    };

    updateVisibleEventCount();

    window.addEventListener("resize", updateVisibleEventCount);
    return () => window.removeEventListener("resize", updateVisibleEventCount);
  }, []);

  return (
    <div className="flex aspect-[6/5] flex-col gap-y-[0.5vw] rounded-lg md:rounded-xl">
      <p className="mr-1 mt-[0.5px] flex justify-end text-[1.5vw] md:text-[1vw]">
        {date.getDate()}
      </p>
      {filteredEvents
        ?.slice(0, displayEventCount)
        .map(({ summary, start, end, location, description }, index) => {
          return (
            <CalendarEventPopover
              startDate={start}
              endDate={end}
              title={summary}
              date={date}
              location={location}
              description={description}
              key={index}
            />
          );
        })}
      {filteredEvents.length > visibleEventCount && (
        <Popover>
          <PopoverTrigger className="w-full cursor-pointer hover:opacity-75">
            <p className="bg-cvdsa-red-100 text-[0.8vw] font-semibold">
              {filteredEvents.length - displayEventCount} Other Events
            </p>
          </PopoverTrigger>
          <PopoverContent>
            {filteredEvents
              ?.slice(displayEventCount)
              .map(({ summary, start, end, location, description }, idx) => {
                return (
                  <div className="px-[10%] pt-[1vh]">
                    <CalendarEventPopover
                      startDate={start}
                      endDate={end}
                      title={summary}
                      date={date}
                      location={location}
                      description={description}
                      key={idx}
                    />
                  </div>
                );
              })}
          </PopoverContent>
        </Popover>
      )}
    </div>
  );
};

export default CalendarDay;
