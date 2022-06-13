import React from 'react';
import { P } from '../../theme/typography';
import { Container, Thumbnail, Title, StyledLink } from './styled';

const ProjectThumbnail = ({
  project: {
    uid,
    data: {
      thumbnail: { alt, url },
      title: { text: title },
      summary: { text: summary },
    },
  },
}) => (
  <Container>
    <StyledLink to={`/projects/${uid}`}>
      <Thumbnail alt={alt} src={url} />
      <Title>{title}</Title>
      <P>{summary}</P>
    </StyledLink>
  </Container>
);

export default ProjectThumbnail;
