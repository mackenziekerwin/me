import { Col6 } from "../../theme/layout";
import Button from "../../components/Button";
import images from "../../images";
import { StyledRow, Thumbnail, Title, Description } from "./styled";

const ProjectPreview = ({ id, alt, title, description, cta }) => (
  <StyledRow>
    <Col6>
      <Thumbnail alt={alt} src={images[id].thumbnail} />
    </Col6>
    <Col6>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Button to={`/projects/${id}`}>{cta}</Button>
    </Col6>
  </StyledRow>
);

export default ProjectPreview;
