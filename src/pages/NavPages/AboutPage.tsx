import React from "react";
import HeroSection from "../../components/AboutUs/HeroSection";
import ContentSection from "../../components/AboutUs/ContentSection";

const AboutUs: React.FC = () => {
  return (
    <div className="flex overflow-hidden relative flex-col bg-[#1E293B]">
      <div className="flex z-0 flex-col pt-2.5 w-full max-md:max-w-full">
        <main>
          <HeroSection />
          <ContentSection />
        </main>
      </div>
    </div>
  );
};

export default AboutUs;