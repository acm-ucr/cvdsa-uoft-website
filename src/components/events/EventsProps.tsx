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
      <div className="min-h-221px w-214px ml-8 mr-8 flex flex-col items-center rounded-l-lg bg-white p-3 text-center">
        <span className="font-seasons text-3xl">{month}</span>
        <span className="font-Montserrat text-6xl">{date}</span>
      </div>

      <div className="w-609px min-h-221px rounded-r-lg bg-indigo-200 py-4 pl-6">
        <h3 className="font-Montserrat text-3xl">{title}</h3>
        <p className="text-1xl font-Montserrat mt-1 text-gray-700">
          {description}
        </p>
      </div>
    </div>
  );
};
export default EventsProps;
