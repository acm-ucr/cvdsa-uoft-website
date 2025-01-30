import Image from "next/image";
import Cupcakes from "@/public/home/cupcakes.webp";
import Props from "@/components/home/BlurbHomeProps";
import Grid from "@/components/home/grid";

const BlurbHome = () => {
  return (
    <>
      <Grid />
      <Props title="hi" description="hey" image="" />
      <Props title="hey" description="me" image="" />
      <Props title="hello" description="hey" image="" />

      <div className="flex w-[30vw] flex-col items-center">
        <div>
          {image}
          <Image
            src={Cupcakes}
            alt="12 Cupcakes on the table with two people sitting behind it"
            className="h-[37vh] w-[20vw] rounded-[15%] border-2 border-cvdsa-cornflower-100"
          />
        </div>

        <p className="my-[1vh] text-[1.7vw] font-medium">Collaborations</p>

        <p className="w-[18vw] text-center text-[0.9vw] font-light leading-tight">
          We collaborate with various organizations, including SAGE and St. John
          Ambulance (SJA) Canada. We plan to host campus-wide events and are
          actively networking with other groups focused on cardiovascular
          disease initiatives!
        </p>
      </div>
    </>
  );
};

export default BlurbHome;
