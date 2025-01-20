import Image from "next/image";

const BlurbHome = () => {
  return (
    <div className="flex w-[30vw] flex-col items-center">
      <div>
        <Image
          src="/home/blurbforhome.jpeg"
          width={310}
          height={500}
          alt="Picture for blurb"
          className="aspect-[363/376] rounded-[15%] border-2 border-slate-400/60"
        />
      </div>

      <p className="my-[1vh] text-[1.7vw] font-medium">Collaborations</p>

      <p className="w-[18vw] text-center text-[0.9vw] font-light leading-tight">
        We collaborate with various organizations, including SAGE and St. John
        Ambulance (SJA) Canada. We plan to host campus-wide events and are
        actively networking with other groups focused on cardiovascular disease
        initiatives!
      </p>
    </div>
  );
};

export default BlurbHome;
