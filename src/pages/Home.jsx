import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import WeeklyFeature from "../components/WeeklyFeature";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection />
      <Navbar/>
      <WeeklyFeature/>
      <HeroSection/>
      
    </div>
  );
}