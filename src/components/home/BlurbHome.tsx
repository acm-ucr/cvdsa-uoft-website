import BlurbHomeProps from "./BlurbHomeProps";
import blurbData from "@/data/blurbData";

const BlurbHome = () => {
  return (
    <div className="mt-[7vh] md:mt-[15vh]">
      <p className="ml-[10vw] font-seasons text-5xl md:text-7xl">WHY JOIN?</p>
      <div className="mx-[6vw] mt-[11vh] grid grid-cols-1 md:grid-cols-3">
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
