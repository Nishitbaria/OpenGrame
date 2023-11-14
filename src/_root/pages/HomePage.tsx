import HeroSection from "@/components/shared/HeroSection";
import Navbar from "@/components/shared/Navbar";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center w-full md:ml-20 md:mx-auto md:sticky md:top-0">
      <Navbar />
      <HeroSection />
    </div>
  );
};

export default HomePage;
