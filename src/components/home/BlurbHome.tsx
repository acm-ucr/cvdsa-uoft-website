import Image from "next/image";

interface CardProps {
  title: string;
  description: string;
  image: string;
}
const BlurbHome: React.FC<CardProps> = ({ title, description, image }) => {
  return (
    <div>
      <div className="flex w-[30vw] flex-col items-center">
        <Image src={image} alt="" />
      </div>
      <h2 className="my-[1vh] text-[1.7vw] font-medium">{title}</h2>
      <p className="w-[18vw] text-center text-[0.9vw] font-light leading-tight">
        {description}
      </p>
    </div>
  );
};
export default BlurbHome;
