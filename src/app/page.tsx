import BlurbHome from "@/components/home/BlurbHome";
import MainText from "@/components/home/mainText";
import HomePage from "@/components/home/homepage";
import JoinButton from "@/components/home/joinbutton";
import AboutUsBlurb from "@/components/home/aboutUsBlurb";

const Home = () => {
  return (
    <div>
      <MainText />
      <HomePage />
      <HomePage />
      <JoinButton />
      <AboutUsBlurb />
      <BlurbHome />
    </div>
  );
};

export default Home;
