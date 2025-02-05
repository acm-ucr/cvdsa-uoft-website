import BlurbHome from "@/components/home/BlurbHome";
import MainText from "@/components/home/mainText";
import HomePage from "@/components/home/homepage";
import JoinButton from "@/components/home/joinbutton";
import AboutUsBlurb from "@/components/home/AboutUsBlurb";

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
