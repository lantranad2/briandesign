import {
  Footer,
  FooterCopyright,
  CopyrightText,
  FooterItem,
  FooterLink,
  FooterNav,
  FooterSubItem,
  FooterSubLink,
  FooterSubNav,
  CopyrightName,
  CopyrightIcons,
  CopyrightItem,
  CopyrightLink,
} from "../styled/Footer";
import { AiOutlineCopyright } from "react-icons/ai";
import { FaRegCopyright } from "react-icons/fa";
import {
  BsFacebook,
  BsInstagram,
  BsYoutube,
  BsTwitter,
  BsLinkedin,
} from "react-icons/bs";

const FooterSection = () => {
  return (
    <Footer>
      <FooterNav>
        <FooterItem>
          <FooterLink href="#">About Us</FooterLink>
          <FooterSubNav>
            <FooterSubItem>
              <FooterSubLink href="#">How it works</FooterSubLink>
            </FooterSubItem>
            <FooterSubItem>
              <FooterSubLink href="#">Testimonial</FooterSubLink>
            </FooterSubItem>
            <FooterSubItem>
              <FooterSubLink href="#">Careers</FooterSubLink>
            </FooterSubItem>
            <FooterSubItem>
              <FooterSubLink href="#">Investors</FooterSubLink>
            </FooterSubItem>
            <FooterSubItem>
              <FooterSubLink href="#">Terms of Service</FooterSubLink>
            </FooterSubItem>
          </FooterSubNav>
        </FooterItem>
        <FooterItem>
          <FooterLink href="#">Videos</FooterLink>
          <FooterSubNav>
            <FooterSubItem>
              <FooterSubLink href="#">Submit Video</FooterSubLink>
            </FooterSubItem>
            <FooterSubItem>
              <FooterSubLink href="#">Ambassadors</FooterSubLink>
            </FooterSubItem>
            <FooterSubItem>
              <FooterSubLink href="#">Agency</FooterSubLink>
            </FooterSubItem>
            <FooterSubItem>
              <FooterSubLink href="#">Influencer</FooterSubLink>
            </FooterSubItem>
          </FooterSubNav>
        </FooterItem>
        <FooterItem>
          <FooterLink href="#">Contact Us</FooterLink>
          <FooterSubNav>
            <FooterSubItem>
              <FooterSubLink href="#">Contact</FooterSubLink>
            </FooterSubItem>
            <FooterSubItem>
              <FooterSubLink href="#">Support</FooterSubLink>
            </FooterSubItem>
            <FooterSubItem>
              <FooterSubLink href="#">Destinations</FooterSubLink>
            </FooterSubItem>
            <FooterSubItem>
              <FooterSubLink href="#">Sponsorships</FooterSubLink>
            </FooterSubItem>
          </FooterSubNav>
        </FooterItem>
        <FooterItem>
          <FooterLink href="#">Social Media</FooterLink>
          <FooterSubNav>
            <FooterSubItem>
              <FooterSubLink href="#">Instagram</FooterSubLink>
            </FooterSubItem>
            <FooterSubItem>
              <FooterSubLink href="#">Facebook</FooterSubLink>
            </FooterSubItem>
            <FooterSubItem>
              <FooterSubLink href="#">Youtube</FooterSubLink>
            </FooterSubItem>
            <FooterSubItem>
              <FooterSubLink href="#">Twitter</FooterSubLink>
            </FooterSubItem>
          </FooterSubNav>
        </FooterItem>
      </FooterNav>
      <FooterCopyright>
        <CopyrightName to="hero" smooth={true} duration={500}>
          Brian Design
        </CopyrightName>
        <CopyrightText>
          <AiOutlineCopyright /> Copyright 2022. All rights reserved.
        </CopyrightText>
        <CopyrightIcons>
          <CopyrightItem>
            <CopyrightLink href="#">
              <BsFacebook size="3rem" />
            </CopyrightLink>
          </CopyrightItem>
          <CopyrightItem>
            <CopyrightLink href="#">
              <BsInstagram size="3rem" />
            </CopyrightLink>
          </CopyrightItem>
          <CopyrightItem>
            <CopyrightLink href="#">
              <BsYoutube size="3rem" />
            </CopyrightLink>
          </CopyrightItem>
          <CopyrightItem>
            <CopyrightLink href="#">
              <BsTwitter size="3rem" />
            </CopyrightLink>
          </CopyrightItem>
          <CopyrightItem>
            <CopyrightLink href="#">
              <BsLinkedin size="3rem" />
            </CopyrightLink>
          </CopyrightItem>
        </CopyrightIcons>
      </FooterCopyright>
    </Footer>
  );
};

export default FooterSection;
