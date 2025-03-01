import MemberCard from "./MemberCard";

const MemberCards = () => {
  return (
    <div className="flex w-screen justify-center">
      <div className="grid grid-cols-3 gap-[10vw]">
        <MemberCard name={"James Buckwas (fake name)"} />
      </div>
    </div>
  );
};

export default MemberCards;
