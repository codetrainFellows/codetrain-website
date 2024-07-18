import CTExperience from "./sections/CTExperience";
import CaseStudies from "./sections/CaseStudies";
import Courses from "./sections/Courses";
import EarnBackYourTuition from "./sections/EarnBackYourTuition";
import HeroSection from "./sections/HeroSection";
import PartnersAndSupporters from "./sections/PartnersAndSupporters";
import Stats from "./sections/Stats";
import SuccessStories from "./sections/SuccessStories";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <div className="py-2 bg-violet font-xs text-center text-white flex items-center justify-center">
        <p>Get to know more about Codetrain. Join our info session.✌️ </p>
      </div>
      <Stats />
      <Courses />
      <EarnBackYourTuition />
      <PartnersAndSupporters />
      <SuccessStories />
      <CTExperience />
      <CaseStudies />
    </div>
  );
};
export default Home;
