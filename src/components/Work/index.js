import React from 'react';

import { Container } from '../../theme/layout';
import { H1 } from '../../theme/typography';
import ProjectThumbnail from '../ProjectThumbnail';
import { ProjectRow } from './styled';

const Work = ({ title, projects }) => (
  <Container>
    <H1>{title}</H1>
    <ProjectRow>
      {projects.map((p, i) => (
        <ProjectThumbnail key={i} project={p.project.document} />
      ))}
    </ProjectRow>
  </Container>
);

export default Work;
