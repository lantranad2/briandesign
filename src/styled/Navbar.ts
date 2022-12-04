import styled from "styled-components";
import { Link } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import { ReactComponent as SvgLogo } from "../assets/navbar-logo.svg";
import { ReactComponent as SvgMenu } from "../assets/navbar-menu.svg";
import { ReactComponent as SvgClose } from "../assets/navbar-close.svg";
import { Container, ButtonIcon, CtaButton } from "./utilities";
import { NavProps } from "../types/Navbar";

const Nav = styled.nav<NavProps>`
  background: var(--color-dark);
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: 7rem;
  z-index: 1;
`;

const NavContent = styled.div`
  ${Container}
  display: grid;
  grid-template-columns: repeat(2, min-content);
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 640px) {
    grid-template-columns: min-content 1fr;
  }
`;

const Brand = styled.a``;

const Logo = styled(SvgLogo)`
  display: block;
  width: 7rem;
  height: 7rem;
  transition: all 0.15s;
  fill: var(--color-text);

  &:hover {
    fill: var(--color-primary);
  }
`;

const ButtonMenu = styled.button`
  ${ButtonIcon}

  @media screen and (min-width: 640px) {
    display: none;
  }
`;

const IconMenu = styled(SvgMenu)`
  display: block;
  width: 3rem;
  height: 3rem;
  stroke: var(--color-text);
  stroke-width: 1.7;
  transition: all 0.15s;

  &:hover {
    stroke: var(--color-light);
  }
`;

const ButtonClose = styled.button`
  ${ButtonIcon}
  position: absolute;
  top: var(--padding-base);
  right: var(--padding-base);
  display: none;

  // navbar expanded
  .expanded & {
    display: block;
  }

  @media screen and (min-width: 640px) {
    .expanded & {
      display: none;
    }
  }
`;

const IconClose = styled(SvgClose)`
  display: block;
  width: 2.5rem;
  height: 2.5rem;
  fill: var(--color-text);

  transition: all 0.15s;

  &:hover {
    fill: var(--color-light);
  }
`;

const NavMenu = styled.div`
  /* navbar expanded */
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(5px);
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  align-items: center;
  transform: translateY(-100%);
  transition: all 0.15s;
  z-index: 1;

  .expanded & {
    transform: translateY(0);
  }

  @media screen and (min-width: 640px) {
    position: static;
    transform: translateY(0);
    background: none;
    grid-template-columns: 1fr max-content;
  }
`;

const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;

  /* navbar expanded */
  .expanded & {
    flex-direction: column;
    gap: 3rem;
  }

  @media screen and (min-width: 640px) {
    .expanded & {
      flex-direction: row;
      gap: 0;
    }
  }
`;

const NavItem = styled.li`
  padding: 0.4rem 1.2rem;
`;

const NavLink = styled(LinkS)`
  transition: color 0.15s;
  cursor: pointer;
  padding-bottom: 1rem;

  &:hover,
  &.active {
    color: var(--color-primary);
    border-bottom: 3px solid var(--color-primary);
  }
`;

const SignIn = styled(Link)`
  ${CtaButton};
  color: var(--color-text-dark);
  background: var(--color-primary);

  &:hover {
    background: var(--color-primary-dark);
    color: var(--color-light);
  }

  /* navbar expanded */
  .expanded & {
    align-self: start;
  }
`;

export {
  Nav,
  NavContent,
  Brand,
  Logo,
  ButtonMenu,
  IconMenu,
  ButtonClose,
  IconClose,
  SignIn,
  NavMenu,
  NavList,
  NavItem,
  NavLink,
};
