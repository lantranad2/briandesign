import styled from "styled-components";
import { Container, CtaButton } from "./utilities";

const Hero = styled.section`
  position: relative;
  height: 90vh;
  color: var(--color-light);

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Video = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  z-index: -1;
`;

const HeroContent = styled.div`
  ${Container}
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  text-align: center;
`;

const HeroHeading = styled.h1``;

const HeroSubHeading = styled.p`
  font-size: 2rem;

  @media screen and (max-width: 320px) {
    font-size: 1.8rem;
  }
`;

const HeroCta = styled.button`
  ${CtaButton};

  padding: 1rem 1.6rem;
  color: var(--color-text-dark);
  background: var(--color-primary);
  display: flex;
  align-items: center;
  gap: 3px;
  line-height: 1;

  &:hover {
    background: var(--color-primary-dark);
    color: var(--color-light);
  }
`;

export { Hero, Video, HeroContent, HeroHeading, HeroSubHeading, HeroCta };
