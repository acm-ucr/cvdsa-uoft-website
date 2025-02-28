interface EventCardProps {
  date: string;
  month: string;
  title: string;
  description: string;
}
const EventCard: React.FC<EventCardProps> = ({
  date,
  month,
  title,
  description,
}) => {
  return (
    <div className="grid grid-cols-4 items-center rounded-lg shadow-lg">
      <div className="flex flex-col items-center rounded-l-lg bg-white text-center">
        <p className="font-seasons text-[2vw]">{month}</p>
        <p className="text-[4vw]">{date}</p>
      </div>
      <div className="col-span-3 rounded-r-lg bg-indigo-200 py-4 pl-6">
        <p className="text-[2vw]">{title}</p>
        <p className="text-[1vw] text-gray-700">{description}</p>
      </div>
    </div>
  );
};
export default EventCard;
