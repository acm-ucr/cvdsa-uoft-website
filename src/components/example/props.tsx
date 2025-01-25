interface CardProps {
  title: string;
  description: string;
  bgColor?: string; // Optional prop
}

const Props: React.FC<CardProps> = ({
  title,
  description,
  bgColor = "bg-white",
}) => {
  return (
    <div className={`rounded-lg border p-6 shadow-lg ${bgColor}`}>
      <h2 className="text-xl font-bold text-gray-800">{title}</h2>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  );
};

/*
 const Props = ({
  title,
  description,
  bgColor = "bg-white",
}: {
  title: string;
  description: string;
  bgColor?: string; // Optional prop
}) => {
  return (
    <div className={`border rounded-lg shadow-lg p-6 ${bgColor}`}>
      <h2 className="text-xl font-bold text-gray-800">{title}</h2>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
};
 */
export default Props;
