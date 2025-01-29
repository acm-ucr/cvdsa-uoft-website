import Image from "next/image";

interface CardProps {
  title: string;
  description: string;
  image: string;
}
const Props: React.FC<CardProps> = ({ title, description, image }) => {
  return (
    <>
      <div>
        <Image src={image} alt="" />
      </div>
      <h2>{title}</h2>
      <p>{description}</p>
    </>
  );
};

export default Props;
