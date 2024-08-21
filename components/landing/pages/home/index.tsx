import LandingAboutSection from "./about-section";
import LandingActivitySection from "./activity-section";
import LandingDogListSection from "./dog-list-section";
import LandingHeroSection from "./hero-section";
import LandingHowToAdoptSection from "./how-to-adopt-section";
import LandingServiceSection from "./service-section";

const HomePage = () => {
  return (
    <>
      <LandingHeroSection />
      <LandingServiceSection />
      <LandingAboutSection />
      <LandingActivitySection />
      <LandingHowToAdoptSection />
      <LandingDogListSection />
    </>
  );
};

export default HomePage;
