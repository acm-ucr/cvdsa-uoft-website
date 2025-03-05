import BoardCards from "@/components/board/BoardCards";
import MemberCards from "@/components/board/MemberCards";
import ResearchCommittee from "@/components/board/ResearchCommittee";

const Board = () => {
  return (
    <div>
      <BoardCards />
      <MemberCards />
      <ResearchCommittee />
    </div>
  );
};

export default Board;
