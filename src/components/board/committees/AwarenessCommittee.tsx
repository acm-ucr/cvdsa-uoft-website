import { MdOutlineEmail } from "react-icons/md";
import awarenesscommittee from "@/data/board/awarenesscommittee";
import Link from "next/link";
const AwarenessCommittee = () => {
  return (
    <div className="mb-6 pl-[6vw]">
      <div className="mb-4 flex items-center font-seasons text-3xl">
        <p>Awareness and Marketing</p>
      </div>
      {awarenesscommittee.map(({ name, email }, index) => (
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

export default AwarenessCommittee;
