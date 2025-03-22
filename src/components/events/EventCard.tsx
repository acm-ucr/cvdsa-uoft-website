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
      <div className="flex flex-col items-center">
        <p className="font-seasons text-[1vw]">{month}</p>
        <p className="text-[3.5vw] leading-none">{date}</p>
      </div>
      <div className="col-span-3 rounded-r-lg bg-indigo-200 py-4 pl-6">
        <p className="mr-[1vw] text-[1.5vw] font-semibold">{title}</p>
        <p className="text-[0.8vw] text-gray-700">{description}</p>
      </div>
    </div>
  );
};
export default EventCard;
