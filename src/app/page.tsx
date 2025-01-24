import MainText from "@/components/home/mainText";
import JoinText from "@/components/home/JoinText";
import BannerImage from "../components/events/BannerImage";
import ResearchImage from "@/components/research/researchImage";

const Home = () => {
  return (
    <div>
      <JoinText />
      <MainText />
      <BannerImage />
      <ResearchImage />
    </div>
  );
};

export default Home;
