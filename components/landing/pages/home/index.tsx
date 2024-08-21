import LandingAboutSection from "./about-section";
import LandingActivitySection from "./activity-section";
import LandingHeroSection from "./hero-section";
import LandingServiceSection from "./service-section";

const HomePage = () => {
  return (
    <>
      <LandingHeroSection />
      <LandingServiceSection />
      <LandingAboutSection />
      <LandingActivitySection />
    </>
  );
};

export default HomePage;
