import Navbar from "../component/landingPage/navigation/Navbar";

import HeroSection from "../component/landingPage/heroSection/HeroSection";

import "../asset/sass/global.scss";

import background from "../asset/lotties/bg1.json";

import Lottie from "lottie-react";

export default function Home() {
  return (
    <header className="header">
      <div className="hero-overlay">
        <Lottie animationData={background} className="backgroundImage" />
      </div>
      <Navbar />
      <HeroSection />
    </header>
  );
}
