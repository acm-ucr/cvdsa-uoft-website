import MemberCard from "./MemberCard";

const MemberCards = () => {
  return (
    <div className="flex w-screen justify-center">
      <div className="grap-[10vw] grid grid-cols-3">
        <MemberCard name={"James Buckwas (fake name)"} />
      </div>
    </div>
  );
};

export default MemberCards;
