import { MdOutlineEmail } from "react-icons/md";
import eventscommittee from "@/data/board/eventscommittee";
import Link from "next/link";
const EventsCommittee = () => {
  return (
    <div className="pl-[6vw]">
      <div className="mb-4 flex items-center font-seasons text-3xl">
        <p>Events and Education</p>
      </div>
      {eventscommittee.map(({ name, email }, index) => (
        <div key={index} className="mb-3 flex items-center gap-2 text-xl">
          <Link href={email} className="text-red-500">
            <MdOutlineEmail />
          </Link>
          <p className="text-black">{name}</p>
        </div>
      ))}
    </div>
  );
};

export default EventsCommittee;
