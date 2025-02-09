import BoardCard from "./BoardCard";
import Andrew from "@/public/board/Andrew.jpeg";
import Angela from "@/public/board/Angela.jpeg";
import Elizabeth from "@/public/board/Elizabeth.jpg";
import Isabel from "@/public/board/Isabel.jpg";
import Maggie from "@/public/board/Maggie.jpg";
import Mohamad from "@/public/board/Mohamad.jpeg";
import Santhija from "@/public/board/Santhija.jpg";
import Sena from "@/public/board/Sena.jpeg";
import Tiffany from "@/public/board/Tiffany.jpg";
import Utsha from "@/public/board/Utsha.jpg";
import Yvonne from "@/public/board/Yvonne.jpeg";

const BoardCards = () => {
  return (
    <div className="flex w-screen justify-center">
      <div className="grid grid-cols-3 gap-[10vw]">
        <BoardCard
          image={Santhija}
          name={"Santhija Jegatheeswaran"}
          position={"President"}
          year={"Year 4"}
          email={""}
          major={"Health & Disease + Ecology & Evolutionary Biology Major"}
        />
        <BoardCard
          image={Andrew}
          name={"Andrew Trang"}
          position={"Development"}
          year={"Year 2"}
          email={""}
          major={"Biochemistry + Health & Disease Major"}
        />
        <BoardCard
          image={Angela}
          name={"Angela Lee"}
          position={"Events and Education"}
          year={"Year 2"}
          email={""}
          major={"Psychology Major"}
        />
        <BoardCard
          image={Elizabeth}
          name={"Elizabeth Chen"}
          position={"Vice President"}
          year={"Year 2"}
          email={""}
          major={"Biochemistry Major and Pathobiology Specialist"}
        />
        <BoardCard
          image={Isabel}
          name={"Isabel von Borstel"}
          position={"Finance & Sponsorships"}
          year={"Year 3"}
          email={""}
          major={"Molecular Genetics and Physiology Major"}
        />
        <BoardCard
          image={Maggie}
          name={"Maggie Li"}
          position={"Vice President"}
          year={"Year 4"}
          email={""}
          major={"Health + Disease + Biology Major"}
        />
        <BoardCard
          image={Mohamad}
          name={"Mohamad Jaafo"}
          position={"Awareness and Marketing"}
          year={"Year 4"}
          email={""}
          major={"Neuroscience + Human Biology Major"}
        />

        <BoardCard
          image={Sena}
          name={"Sena Yenilmez"}
          position={"Events and Education"}
          year={"Year 2"}
          email={""}
          major={"Physiology & Neuroscience Major"}
        />
        <BoardCard
          image={Tiffany}
          name={"Tiffany Pham"}
          position={"Finance and Sponsorships"}
          year={"Year 4"}
          email={""}
          major={"Health & Disease Major"}
        />
        <BoardCard
          image={Utsha}
          name={"Utsha Roy"}
          position={"Awareness and Marketing"}
          year={"Year 3"}
          email={""}
          major={"Human Biology Major"}
        />
        <BoardCard
          image={Yvonne}
          name={"Yvonne Pang"}
          position={"Outreach"}
          year={"Year 3"}
          email={""}
          major={"Health and Disease Major"}
        />
      </div>
    </div>
  );
};

export default BoardCards;
