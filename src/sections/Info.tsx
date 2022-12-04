import styled from "styled-components";
import {
  InfoContent,
  InfoCta,
  InfoDescription,
  InfoHeading,
  Info,
  InfoSubHeading,
  InfoText,
  infoImage,
} from "../styled/Info";
import { InfoProps } from "../types/InfoProps";

const InfoSection: React.FC<InfoProps> = ({
  id,
  dark,
  heading,
  subHeading,
  text,
  ctaText,
  image,
  imageFirst,
}) => {
  const InfoImage = infoImage(image);
  return (
    <Info
      id={id}
      dark={dark || false}
      className={imageFirst ? "image-first" : ""}
    >
      <InfoContent>
        <InfoDescription>
          <InfoSubHeading>{subHeading}</InfoSubHeading>
          <InfoHeading light={dark || false}>{heading}</InfoHeading>
          <InfoText light={dark || false}>{text}</InfoText>
          <InfoCta primary={dark || false}>{ctaText}</InfoCta>
        </InfoDescription>
        <InfoImage />
      </InfoContent>
    </Info>
  );
};

export default InfoSection;
