import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import { Block, Container, Dark } from "./utilities";

const Footer = styled.section`
  ${Block};
  ${Dark};
  color: var(--color-light);
  display: flex;
  flex-direction: column;
  gap: 5rem;
`;

const FooterNav = styled.ul`
  ${Container};
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;

  @media screen and (max-width: 375px) {
    grid-template-columns: 1fr;
  }

  @media screen and (min-width: 640px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const FooterItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const FooterLink = styled.a`
  font-size: 1.6rem;
  font-weight: 700;
  transition: all 0.15s;

  &:hover {
    color: var(--color-primary);
  }
`;

const FooterSubNav = styled.ul``;

const FooterSubItem = styled.li``;

const FooterSubLink = styled.a`
  font-size: 1.4rem;
  font-weight: 400;
  transition: all 0.15s;

  &:hover {
    color: var(--color-primary);
  }
`;

const FooterCopyright = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
`;

const CopyrightName = styled(LinkS)`
  font-size: 1.8rem;
  font-weight: 700;
  text-align: center;
  line-height: 1;
  transition: all 0.15s;
  cursor: pointer;

  &:hover {
    color: var(--color-primary);
  }
`;

const CopyrightText = styled.p`
  font-size: 1.4rem;
  font-weight: 300;
`;

const CopyrightIcons = styled.ul`
  display: flex;
  gap: 2rem;
`;

const CopyrightItem = styled.li``;

const CopyrightLink = styled.a`
  &:hover svg {
    transition: all 0.15s;
    fill: var(--color-primary);
  }
`;

export {
  Footer,
  FooterNav,
  FooterItem,
  FooterLink,
  FooterSubNav,
  FooterSubItem,
  FooterSubLink,
  FooterCopyright,
  CopyrightName,
  CopyrightText,
  CopyrightIcons,
  CopyrightItem,
  CopyrightLink,
};
