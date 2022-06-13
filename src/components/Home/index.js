import React from 'react';
import { Container } from '../../theme/layout';
import { H1 } from '../../theme/typography';

import { Hero, Arrow, ButtonContainer } from './styled';

import ProjectPreview from '../../components/ProjectPreview';
import Button from '../../components/Button';

const Home = ({ intro, title, projects, label }) => (
  <Container>
    <Hero>
      <H1>{intro}</H1>
      <Arrow href="#featured">↓</Arrow>
    </Hero>
    <H1 id="featured">{title}</H1>
    {projects.map((p, i) => (
      <ProjectPreview
        key={i}
        project={p.project.document}
        label={p.cta_label.text}
      />
    ))}
    <ButtonContainer>
      <Button to="/work">{label}</Button>
    </ButtonContainer>
  </Container>
);

export default Home;
