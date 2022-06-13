import React from 'react';
import { Col6 } from '../../theme/layout';
import Button from '../../components/Button';
import { StyledRow, Thumbnail, Title, Description } from './styled';

const ProjectPreview = ({
  project: {
    uid,
    data: {
      thumbnail: { alt, url },
      title: { text: title },
      summary: { text: summary },
    },
  },
  label,
}) => (
  <StyledRow>
    <Col6>
      <Thumbnail alt={alt} src={url} />
    </Col6>
    <Col6>
      <Title>{title}</Title>
      <Description>{summary}</Description>
      <Button to={`/projects/${uid}`}>{label}</Button>
    </Col6>
  </StyledRow>
);

export default ProjectPreview;
