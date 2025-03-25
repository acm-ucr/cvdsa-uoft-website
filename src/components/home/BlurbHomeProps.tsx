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
    <div className="flex flex-col items-center pb-6">
      <Image
        src={image}
        alt={alt}
        className="rounded-3xl md:h-[45vh] md:w-[23vw]"
      />
      <p className="my-[2vh] text-3xl font-medium">{title}</p>
      <p className="text-center text-sm font-light leading-tight md:w-[23vw]">
        {description}
      </p>
    </div>
  );
};
export default BlurbHomeProps;
