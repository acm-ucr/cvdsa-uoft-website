const MemberCard = ({ name }: { name: string }) => {
  return (
    <div>
      <p className="text-sm">{name}</p>
    </div>
  );
};

export default MemberCard;
