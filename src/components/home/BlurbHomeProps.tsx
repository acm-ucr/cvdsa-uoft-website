import Image, { StaticImageData } from "next/image";

interface CardProps {
  title: string;
  description: string;
  image: StaticImageData;
  alt: string;
}
const BlurbHomeProps: React.FC<CardProps> = ({
  title,
  description,
  image,
  alt,
}) => {
  return (
    <div className="flex w-[30vw] flex-col items-center">
      <div>
        <Image
          src={image}
          alt={alt}
          className="h-[37vh] w-[20vw] rounded-[15%] border-2 border-cvdsa-cornflower-100"
        />
      </div>
      <h2 className="my-[1vh] text-[2vw] font-medium">{title}</h2>
      <p className="w-[19vw] text-center text-[0.9vw] font-light leading-tight">
        {description}
      </p>
    </div>
  );
};
export default BlurbHomeProps;
