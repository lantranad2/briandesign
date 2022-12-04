import { useState } from "react";
import Navbar from "../sections/Navbar";
import { HomeProvider } from "../contexts/Home";
import Hero from "../sections/Hero";
import Info from "../sections/Info";
import { infoData } from "../styled/infoData";
import ServicesSection from "../sections/Services";
import FooterSection from "../sections/Footer";

const Home = () => {
  const [navExpanded, setNavExpanded] = useState(false);
  const toggleNav = () => setNavExpanded(!navExpanded);
  const expandNav = () => setNavExpanded(true);
  const closeNav = () => setNavExpanded(false);

  return (
    <HomeProvider value={{ navExpanded, toggleNav, expandNav, closeNav }}>
      <Navbar />
      <Hero id="hero" />
      <Info {...infoData[0]} id="about" />
      <Info {...infoData[1]} id="discover" />
      <ServicesSection id="services" />
      <Info {...infoData[2]} />
      <FooterSection />
    </HomeProvider>
  );
};

export default Home;
