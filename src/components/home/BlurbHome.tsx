import BlurbHomeProps from "./BlurbHomeProps";
import blurbData from "@/data/blurbData.js";

const BlurbHome = () => {
  return (
    <div className="mt-[23vh]">
      <p className="ml-[10vw] font-seasons text-[4vw]">WHY JOIN?</p>
      <div className="mx-[6vw] mt-[11vh] columns-3 grid-rows-1">
        {blurbData.map((blurb, index) => (
          <BlurbHomeProps
            key={index}
            title={blurb.title}
            description={blurb.description}
            image={blurb.image}
            alt={blurb.alt}
          />
        ))}
      </div>
    </div>
  );
};

export default BlurbHome;
