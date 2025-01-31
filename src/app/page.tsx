import BlurbHome from "@/components/home/BlurbHome";
import MainText from "@/components/home/mainText";
import Research from "@/components/research/Research";
import JoinButton from "@/components/home/joinbutton";
import AboutUsBlurb from "@/components/home/aboutUsBlurb";
import HomePage from "@/components/home/homepage";

const Home = () => {
  return (
    <div>
      <MainText />
      <HomePage />
      <Research />
      <JoinButton />
      <AboutUsBlurb />
      <BlurbHome />
    </div>
  );
};

export default Home;
