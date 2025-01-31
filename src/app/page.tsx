import BlurbHome from "@/components/home/BlurbHome";
import MainText from "@/components/home/mainText";
import JoinButton from "@/components/home/joinbutton";
import AboutUsBlurb from "@/components/home/aboutUsBlurb";
import HomePage from "@/components/home/homepage";

const Home = () => {
  return (
    <div>
      <MainText />
      <HomePage />
      <JoinButton />
      <AboutUsBlurb />
      <BlurbHome />
    </div>
  );
};

export default Home;
