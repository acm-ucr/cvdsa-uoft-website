import { MdOutlineEmail } from "react-icons/md";
import researchcommittee from "@/data/board/researchcommittee";
import Link from "next/link";
const ResearchCommittee = () => {
  return (
    <div className="pl-[8vw]">
      <div className="mb-4 flex items-center font-seasons text-3xl">
        <p>Research</p>
      </div>
      {researchcommittee.map(({ name, email }, index) => (
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

export default ResearchCommittee;
