import BoardCard from "./BoardCard";
import face from "@/public/home/presidentface.webp";

const BoardCards = () => {
  return (
    <div className="flex w-screen justify-center">
      <div className="grid grid-cols-3 gap-[10vw]">
        <BoardCard
          image={face}
          name={"Santhija Jegatheeswaran"}
          position={"PRESIDENT"}
          year={"Year 4"}
          email={"name@harvard.edu"}
          major={"Health & Disease + Ecology & Evolutionary Biology Major "}
        />
        <BoardCard
          image={face}
          name={"Santhija Jegatheeswaran"}
          position={"PRESIDENT"}
          year={"Year 4"}
          email={"name@harvard.edu"}
          major={"Health & Disease + Ecology & Evolutionary Biology Major "}
        />
        <BoardCard
          image={face}
          name={"Santhija Jegatheeswaran"}
          position={"PRESIDENT"}
          year={"Year 4"}
          email={"name@harvard.edu"}
          major={"Health & Disease + Ecology & Evolutionary Biology Major "}
        />
      </div>
    </div>
  );
};

export default BoardCards;
