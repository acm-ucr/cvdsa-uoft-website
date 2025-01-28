import BlurbHome from "@/components/home/BlurbHome";
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
      <BlurbHome />
    </div>
  );
};

export default Home;
