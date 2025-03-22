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
    <>
      <div className="mr-[15vw] flex justify-end gap-4 text-5xl font-semibold">
        <p>{monthNames[currentDate.getMonth()]}</p>
        <p>{currentDate.getFullYear()}</p>
      </div>
    </>
  );
};

export default CalendarTop;
