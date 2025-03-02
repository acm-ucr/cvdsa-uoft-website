import BlurbHomeProps from "./BlurbHomeProps";
import blurbData from "@/data/blurbData";

const BlurbHome = () => {
  return (
    <div className="mt-[23vh]">
      <p className="ml-[10vw] font-seasons text-[4vw]">WHY JOIN?</p>
      <div className="mx-[6vw] mt-[11vh] columns-3 grid-rows-1">
        {blurbData.map(({ title, description, image, alt }, index) => (
          <BlurbHomeProps
            key={index}
            title={title}
            description={description}
            image={image}
            alt={alt}
          />
        ))}
      </div>
    </div>
  );
};

export default BlurbHome;
