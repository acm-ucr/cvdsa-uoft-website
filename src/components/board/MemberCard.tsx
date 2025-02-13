import "lucide-react";

const MemberCard = ({
  name
}: {
  name: string;
}) => {
  return (
    <div className="flex w-[21vw] flex-col items-center">
      <p className="mb-[5%] text-[2vw] font-medium">{name}</p>  
    </div>
  )
};

export default MemberCard;