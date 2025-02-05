import BlurbHomeProps from "./BlurbHomeProps";
import blurbData from "@/data/blurbData.js";
import JoinText from "./JoinText";

const BlurbHome = () => {
  return (
    <div className="mt-[23vh]">
      <JoinText />
      <div className="mt-[12vh] columns-3 grid-rows-1">
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
