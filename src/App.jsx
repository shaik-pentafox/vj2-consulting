import ServicesSection from "./components/ServicesSection";
import ReviewsSection from "./components/ReviewsSection";
import StatsSection from "./components/StatsSection";
import InsightsSection from "./components/InsightsSection";
import HeroHeader from "./components/HeroHeader";
import AboutSection from "./components/AboutSection";
import HeroFooter from "./components/HeroFooter";

const App = () => {
  return (
    <div>
      <HeroHeader />
      <AboutSection />
      <ServicesSection />
      <ReviewsSection />
      <StatsSection />
      <InsightsSection />
      <HeroFooter />
    </div>
  );
};

export default App;


