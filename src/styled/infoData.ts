import { InfoProps } from "../types/InfoProps";
import { ReactComponent as SvgCar } from "../assets/car.svg";
import { ReactComponent as SvgSaving } from "../assets/saving.svg";
import { ReactComponent as SvgOffice } from "../assets/office.svg";

const infoData: InfoProps[] = [
  {
    id: "",
    dark: true,
    heading: "Unlimited transactions with zero fees",
    subHeading: "Premium Bank",
    text: "Get access to our exercise app that allows you to send unlimited transactions without getting charged any fees.",
    ctaText: "Get Started",
    image: SvgCar,
  },
  {
    id: "",
    heading: "Login to your account at any time",
    subHeading: "Unlimited Access",
    text: "We have you covered no matter where you are located. All you need is an internet connection and a phone or computer.",
    ctaText: "Learn More",
    image: SvgSaving,
    imageFirst: true,
  },
  {
    id: "",
    heading: "Creating an account is extremely easy",
    subHeading: "Join our team",
    text: "Get everything set up and ready in under 10 minutes. All you need to do is add your information and you're ready to go.",
    ctaText: "Start Now",
    image: SvgOffice,
  },
];

export { infoData };
