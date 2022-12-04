import {
  Hero,
  HeroContent,
  HeroCta,
  HeroHeading,
  HeroSubHeading,
  Video,
} from "../styled/Hero";
import videoWebm from "../assets/video.webm";
import videoMp4 from "../assets/video.mp4";
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FiArrowRight } from "react-icons/fi";

interface HeroSectionProps {
  id: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ id }) => {
  const [ctaHover, setCtaHover] = useState(false);
  const toggleCtaHover = () => setCtaHover(!ctaHover);

  return (
    <Hero id={id}>
      <Video autoPlay muted loop>
        <source src={videoWebm} type="video/webm" />
        <source src={videoMp4} type="video/mp4" />
        Your browser does not support video!
      </Video>
      <HeroContent>
        <HeroHeading>Virtual Banking Made Easy</HeroHeading>
        <HeroSubHeading>
          Sign up for a new account today and receive $250 in credit towards
          your next payment
        </HeroSubHeading>
        <HeroCta onMouseEnter={toggleCtaHover} onMouseLeave={toggleCtaHover}>
          Get Started {ctaHover ? <FiArrowRight /> : <IoIosArrowForward />}
        </HeroCta>
      </HeroContent>
    </Hero>
  );
};

export default HeroSection;
