import { ReactComponent as SvgCar } from "../assets/car.svg";
import { ReactComponent as SvgOffice } from "../assets/office.svg";
import { ReactComponent as SvgBenefit } from "../assets/benefit.svg";
import { ServiceProps } from "../types/ServiceProps";

const servicesData: ServiceProps[] = [
  {
    image: SvgCar,
    heading: "Reduce Expenses",
    text: "We help reduce your fees and increase your overall revenue.",
  },
  {
    image: SvgOffice,
    heading: "Virtual Offices",
    text: "You can access our platform online anywhere in the world.",
  },
  {
    image: SvgBenefit,
    heading: "Premium Benefits",
    text: "Unlock our special membership card that returns 5% cash black.",
  },
];

export { servicesData };
