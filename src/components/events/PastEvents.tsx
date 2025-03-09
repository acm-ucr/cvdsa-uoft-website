import PastEvent from "./PastEvent";
import placeholder from "@/public/events/eventpicplaceholder.webp";

const PastEvents = () => {
  return (
    <div className="flex w-screen flex-col items-center">
      <p className="mb-6 font-seasons text-6xl">PAST EVENTS</p>
      <div className="mb-4 grid w-7/12 grid-cols-3 gap-8">
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
