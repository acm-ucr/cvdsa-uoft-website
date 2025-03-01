import PastEvent from "./PastEvent";
import placeholder from "@/public/events/eventpicplaceholder.webp";

const PastEvents = () => {
  return (
    <div className="flex w-screen flex-col items-center">
      <p className="mb-[4%] font-seasons text-[3.2vw]">PAST EVENTS</p>
      <div className="grid grid-cols-3 gap-[2.8vw]">
        <PastEvent image={placeholder} name={"Event Name"} />
        <PastEvent image={placeholder} name={"Event Name"} />
        <PastEvent image={placeholder} name={"Event Name"} />
        <PastEvent image={placeholder} name={"Event Name"} />
        <PastEvent image={placeholder} name={"Event Name"} />
        <PastEvent image={placeholder} name={"Event Name"} />
      </div>
    </div>
  );
};

export default PastEvents;
