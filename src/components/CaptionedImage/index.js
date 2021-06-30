import { StyledImage, Caption } from "./styled";

const CaptionedImage = ({ src, caption, alt }) => (
  <>
    <StyledImage alt={alt} src={src} />
    <Caption>{caption}</Caption>
  </>
);

export default CaptionedImage;
