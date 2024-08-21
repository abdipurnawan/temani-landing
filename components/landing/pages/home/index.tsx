import LandingAboutSection from "./about-section";
import LandingHeroSection from "./hero-section";
import LandingServiceSection from "./service-section";

const HomePage = () => {
  return (
    <>
      <LandingHeroSection />
      <LandingServiceSection />
      <LandingAboutSection />
    </>
  );
};

export default HomePage;
