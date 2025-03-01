import Image, { StaticImageData } from "next/image";

const PastEvent = ({
  image,
  name,
}: {
  image: StaticImageData;
  name: string;
}) => {
  return (
    <div className="flex h-[45vh] w-[23vw] flex-col rounded-[8%] border-[0.10vw] border-cvdsa-cornflower-100 bg-white">
      <Image
        src={image}
        alt="event pic"
        className="w-full rounded-t-[8%] border-[0.10vw] border-b-cvdsa-cornflower-100"
      />
      <p className="ml-[5%] mt-[3%] text-[2.3vw] font-medium">{name}</p>
    </div>
  );
};
export default PastEvent;
