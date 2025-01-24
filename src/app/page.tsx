import MainText from "@/components/home/mainText";
import Research from "@/components/research/Research";
import JoinButton from "@/components/home/joinbutton";
import AboutUsBlurb from "@/components/home/aboutUsBlurb";

const Home = () => {
  return (
    <div>
      <MainText />
      <Research />
      <JoinButton />
      <AboutUsBlurb />
    </div>
  );
};

export default Home;
