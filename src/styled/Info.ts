import styled from "styled-components";
import { Block, Container, CtaButton, Grid, Image } from "./utilities";
import { SvgImage } from "../types/SvgImage";

interface InfoProps {
  dark: boolean;
}

const Info = styled.section<InfoProps>`
  ${Block};
  background: ${({ dark }) => (dark ? "var(--color-dark)" : "inherit")};
`;

const InfoContent = styled.div`
  ${Container};
  ${Grid};
  gap: 7rem;

  @media screen and (min-width: 768px) {
    grid-template-columns: 3fr 2fr;
    .image-first & {
      grid-template-columns: 2fr 3fr;
    }
    align-items: center;
    gap: 1rem;
  }
`;

const InfoDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

interface InfoHeadingProps {
  light: boolean;
}

const InfoHeading = styled.h2<InfoHeadingProps>`
  line-height: 1.2;

  color: ${({ light }) => (light ? "var(--color-light)" : "var(--color-dark)")};
`;

const InfoSubHeading = styled.h3`
  text-transform: uppercase;
  color: var(--color-primary);
`;

interface InfoTextProps {
  light: boolean;
}

const InfoText = styled.p<InfoTextProps>`
  color: ${({ light }) => (light ? "var(--color-text)" : "var(--color-dark)")};
`;

interface InfoCtaProps {
  primary: boolean;
}

const InfoCta = styled.button<InfoCtaProps>`
  ${CtaButton};
  font-size: 1.4rem;
  line-height: 1;
  padding: 1rem 1.6rem;
  align-self: flex-start;

  background: ${({ primary }) =>
    primary ? "var(--color-primary)" : "var(--color-dark)"};
  color: ${({ primary }) =>
    primary ? "var(--color-dark)" : "var(--color-light)"};

  &:hover {
    background: ${({ primary }) =>
      primary ? "var(--color-primary-dark)" : "var(--color-dark-effect)"};
    color: var(--color-light);
  }
`;

const infoImage = (img: SvgImage) => styled(img)`
  ${Image}
  height: 300px;

  @media screen and (min-width: 768px) {
    .image-first & {
      grid-column: 1;
      grid-row: 1;
    }
  }
`;

export {
  Info,
  InfoContent,
  InfoDescription,
  InfoHeading,
  InfoSubHeading,
  InfoText,
  InfoCta,
  infoImage,
};
