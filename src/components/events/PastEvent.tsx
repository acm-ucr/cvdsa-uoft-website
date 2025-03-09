import Image, { StaticImageData } from "next/image";

const PastEvent = ({
  image,
  name,
}: {
  image: StaticImageData;
  name: string;
}) => {
  return (
    <div className="flex flex-col rounded-3xl border-2 border-cvdsa-cornflower-100 bg-white">
      <Image
        src={image}
        alt="event pic"
        className="w-full rounded-t-3xl border-2 border-b-cvdsa-cornflower-100"
      />
      <p className="my-4 ml-4 text-4xl font-medium">{name}</p>
    </div>
  );
};
export default PastEvent;
