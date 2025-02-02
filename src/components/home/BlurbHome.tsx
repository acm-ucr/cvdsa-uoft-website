import Cupcakes from "@/public/home/cupcakes.webp";
import BlurbHomeProps from "./BlurbHomeProps";

const BlurbHome = () => {
  return (
    <div>
      <BlurbHomeProps
        title="Collaborations"
        description="We collaborate with various organizations, including SAGE and St. John
        Ambulance (SJA) Canada. We plan to host campus-wide events and are
        actively networking with other groups focused on cardiovascular disease
        initiatives!"
        image={Cupcakes}
        alt="12 Cupcakes on the table with two people sitting behind it"
      />
    </div>
  );
};

export default BlurbHome;
