import { useContext } from "react";
import { HomeContext } from "../contexts/Home";
import {
  Brand,
  ButtonClose,
  ButtonMenu,
  IconClose,
  IconMenu,
  Logo,
  Nav,
  NavContent,
  NavItem,
  NavLink,
  NavList,
  NavMenu,
  SignIn,
} from "../styled/Navbar";

const Navbar = () => {
  const nav = useContext(HomeContext);
  return (
    <Nav className={nav.navExpanded ? "expanded" : ""}>
      <NavContent>
        <Brand href="#">
          <Logo />
        </Brand>
        <ButtonMenu onClick={nav.expandNav}>
          <IconMenu />
        </ButtonMenu>
        <NavMenu>
          <ButtonClose onClick={nav.closeNav}>
            <IconClose />
          </ButtonClose>
          <NavList>
            <NavItem>
              <NavLink
                to="about"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
                offset={-65}
                onClick={nav.closeNav}
              >
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="discover"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
                offset={-65}
                onClick={nav.closeNav}
              >
                Discover
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="services"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
                offset={-65}
                onClick={nav.closeNav}
              >
                Services
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="hero"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                onClick={nav.closeNav}
              >
                Sign Up
              </NavLink>
            </NavItem>
          </NavList>
          <SignIn to="/signin">Sign In</SignIn>
        </NavMenu>
      </NavContent>
    </Nav>
  );
};

export default Navbar;
