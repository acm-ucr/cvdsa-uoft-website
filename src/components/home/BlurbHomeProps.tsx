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
          className="h-[45vh] w-[23vw] rounded-[15%] border-2 border-cvdsa-cornflower-100"
        />
      </div>
      <p className="my-[2vh] text-[2vw] font-medium">{title}</p>
      <p className="w-[19vw] text-center text-[1vw] font-light leading-tight">
        {description}
      </p>
    </div>
  );
};
export default BlurbHomeProps;
