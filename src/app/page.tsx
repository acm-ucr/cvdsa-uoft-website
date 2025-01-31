import BlurbHome from "@/components/home/BlurbHome";
import MainText from "@/components/home/mainText";
import HomePage from "@/components/home/homepage";
import Research from "@/components/research/Research";
import JoinButton from "@/components/home/joinbutton";
import AboutUsBlurb from "@/components/home/aboutUsBlurb";

const Home = () => {
  return (
    <div>
      <MainText />
      <HomePage />
      <BlurbHome />
      <Research />
      <JoinButton />
      <AboutUsBlurb />
    </div>
  );
};

export default Home;
