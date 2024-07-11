import Courses from "./sections/Courses";
import HeroSection from "./sections/HeroSection";
import Stats from "./sections/Stats";

const Home = () => {
  return (
    <div className="">
      <HeroSection />
      <div className="py-2 bg-violet font-xs text-center text-white flex items-center justify-center">
        <p>Get to know more about Codetrain. Join our info session.✌️ </p>
      </div>
      <Stats />
      <Courses />
    </div>
  );
};
export default Home;
