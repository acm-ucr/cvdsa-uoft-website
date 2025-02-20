import "lucide-react";

const MemberCard = ({ name }: { name: string }) => {
  return (
    <div className="flex flex-col items-center">
      <p className="mb-[5%] text-sm">{name}</p>
    </div>
  );
};

export default MemberCard;
