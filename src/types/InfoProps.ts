import { SvgImage } from "./SvgImage";

interface InfoProps {
  id: string;
  dark?: boolean;
  heading: string;
  subHeading: string;
  text: string;
  ctaText: string;
  image: SvgImage;
  imageFirst?: boolean;
}

export type { InfoProps };
