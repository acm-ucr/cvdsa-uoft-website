import board from "@/data/board/board";
import BoardCard from "./BoardCard";
const BoardCards = () => {
  return (
    <div className="flex flex-col justify-center px-[10%] text-center">
      <p className="my-[4vh] font-seasons text-6xl">Meet The Team</p>
      <div className="grid grid-cols-1 gap-[4vw] md:grid-cols-3">
        {board.map(({ name, position, image, year, email, major }, index) => (
          <BoardCard
            name={name}
            position={position}
            image={image}
            year={year}
            email={email}
            major={major}
            key={index}
          />
        ))}
        ;
      </div>
    </div>
  );
};

export default BoardCards;
