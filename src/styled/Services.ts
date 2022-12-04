import styled from "styled-components";
import { SvgImage } from "../types/SvgImage";
import { Block, Image, Dark, Container, Card, Text, Grid } from "./utilities";

const Services = styled.section`
  ${Block};
  ${Dark};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
`;

const ServicesHeading = styled.h2`
  color: var(--color-light);
`;

const ServicesDetails = styled.div`
  ${Container};
  ${Grid};
  gap: 3rem;

  @media screen and (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Service = styled.div`
  ${Card};
  max-width: 420px;
  background: var(--color-light);
  text-align: center;
  color: var(--color-dark);
  margin: 0 auto;
`;

const ServiceHeading = styled.h3``;

const ServiceText = styled.p`
  ${Text};
`;

const serviceImage = (image: SvgImage) => styled(image)`
  ${Image};
  height: 200px;
  margin-bottom: 2rem;
`;

export {
  Services,
  ServicesHeading,
  ServicesDetails,
  Service,
  ServiceHeading,
  ServiceText,
  serviceImage,
};
