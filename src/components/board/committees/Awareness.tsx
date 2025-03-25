import { MdOutlineEmail } from "react-icons/md";
import awarenesscommittee from "@/data/board/awarenesscommittee";
import Link from "next/link";
const Awareness = () => {
  return (
    <div className="mb-6 pl-[6vw]">
      <p className="mb-4 flex items-center font-seasons text-3xl">
        Awareness and Marketing
      </p>
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

export default Awareness;
