import {
  Service,
  ServiceHeading,
  serviceImage,
  Services,
  ServicesDetails,
  ServicesHeading,
  ServiceText,
} from "../styled/Services";
import { ServiceProps } from "../types/ServiceProps";
import { servicesData } from "../styled/servicesData";

interface ServicesSectionProps {
  id: string;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ id }) => {
  return (
    <Services id={id}>
      <ServicesHeading>Our Services</ServicesHeading>
      <ServicesDetails>
        <AService {...servicesData[0]} />
        <AService {...servicesData[1]} />
        <AService {...servicesData[2]} />
      </ServicesDetails>
    </Services>
  );
};

const AService: React.FC<ServiceProps> = ({ image, heading, text }) => {
  const ServiceImage = serviceImage(image);

  return (
    <Service>
      <ServiceImage />
      <ServiceHeading>{heading}</ServiceHeading>
      <ServiceText>{text}</ServiceText>
    </Service>
  );
};

export default ServicesSection;
