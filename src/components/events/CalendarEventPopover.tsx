import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface CalendarEventPopoverProps {
  startDate: {
    dateTime: Date;
    date: string;
  };
  endDate: {
    dateTime: Date;
    date: string;
  };
  title: string;
  date: Date;
  location: string;
  description: string;
}

const CalendarEventPopover = ({
  startDate,
  title,
  date,
  location,
}: CalendarEventPopoverProps) => {
  let eventStartDate = new Date();
  let hasStartTime = false;

  if (startDate.dateTime) {
    eventStartDate = new Date(startDate.dateTime);
    hasStartTime = true;
  } else {
    eventStartDate = new Date(startDate.date);
  }

  const startHour = eventStartDate.getHours();
  const startMinutes = eventStartDate.getMinutes();
  const formattedStartHour = startHour % 12 || 12;
  const formattedStartMinutes =
    startMinutes < 10 ? `0${startMinutes}` : startMinutes;
  const startHourSuffix = startHour < 12 ? "AM" : "PM";
  return (
    <Popover>
      <PopoverTrigger className="flex w-full cursor-pointer justify-between bg-cvdsa-cornflower-100 text-left hover:opacity-75">
        <span className="overflow-hidden text-ellipsis whitespace-nowrap px-1 text-[0.8vw]">
          {title}
        </span>
        <span className="text-right text-[0.8vw]">
          {formattedStartHour}:{formattedStartMinutes}
        </span>
      </PopoverTrigger>
      <PopoverContent className="w-[30vw] overflow-hidden rounded-xl p-0 shadow-md 2xl:w-[20vw]">
        <div className="flex items-center justify-between border-b-2 border-cvdsa-red-200 bg-cvdsa-cornflower-100 px-4 py-2 text-[0.8vw] font-semibold">
          <span>{title}</span>
          <span>
            {date.toLocaleString("default", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </span>
        </div>

        <div className="bg-white px-4 py-3 text-[0.8vw]">
          <p>{location}</p>
          {hasStartTime && (
            <p className="mt-1">
              {formattedStartHour}:{formattedStartMinutes} {startHourSuffix}
            </p>
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default CalendarEventPopover;
