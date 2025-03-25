interface CalendarTopProps {
  currentDate: Date;
}

const CalendarTop = ({ currentDate }: CalendarTopProps) => {
  const monthNames = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUNE",
    "JULY",
    "AUG",
    "SEPT",
    "OCT",
    "NOV",
    "DEC",
  ];

  return (
    <div className="absolute right-[9vw] w-[20vw] translate-y-[-1.5vw] text-[3vw] font-semibold">
      {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
    </div>
  );
};

export default CalendarTop;
