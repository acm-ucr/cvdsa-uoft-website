import React from "react";

interface CardProps {
  date: string;
  month: string;
  title: string;
  description: string;
}
const EventsProps: React.FC<CardProps> = ({
  date,
  month,
  title,
  description,
}) => {
  return (
    <div className="flex max-w-xl items-center overflow-hidden rounded-lg shadow-lg">
      <div className="ml-8 mr-8 flex flex-col items-center rounded-l-lg bg-white p-3 text-center">
        <p className="font-seasons text-[2vw]">{month}</p>
        <p className="text-[4vw]">{date}</p>
      </div>

      <div className="rounded-r-lg bg-indigo-200 py-4 pl-6">
        <p className="text-[2vw]">{title}</p>
        <p className="text-[1vw] text-gray-700">{description}</p>
      </div>
    </div>
  );
};
export default EventsProps;
