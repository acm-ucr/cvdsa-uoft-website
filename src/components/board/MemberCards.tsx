import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { resComInfo } from "./MemberCard"; // Import stored team data

const MemberCards = () => {
  return (
    <div className="p-12">
      <div className="m-3 mb-6 flex items-center font-seasons text-[2vw]">
        <p>Research Committee</p>
      </div>

      {resComInfo.map((member, email) => (
        <div
          key={email}
          className="m-3 mb-2 flex items-center gap-2 text-[3vw]"
        >
          <a href={"malito:{member.email}"} className="hover text-red-500">
            <MdOutlineEmail size={20} />
          </a>
          <p className="text-[1.5vw] text-black">{member.name}</p>
        </div>
      ))}
    </div>
  );
};

export default MemberCards;
