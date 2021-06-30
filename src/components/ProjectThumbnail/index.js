import _ from "lodash";
import { Link } from "react-router-dom";

import { P1 } from "../../theme/typography";
import { Container, Thumbnail, Title } from "./styled";
import images from "../../images";

const ProjectThumbnail = ({ id, alt, title, description }) => (
  <Container>
    <Link to={`/projects/${id}`}>
      <Thumbnail alt={alt} src={images[_.camelCase(id)].thumbnail} />
    </Link>
    <Title>{title}</Title>
    <P1>{description}</P1>
  </Container>
);

export default ProjectThumbnail;
