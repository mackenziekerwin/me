import { Helmet, HelmetProvider } from "react-helmet-async";

import { Container } from "../../theme/layout";
import { H1 } from "../../theme/typography";

import { Hero, Arrow, ButtonContainer } from "./styled";
import { projects } from "./content";

import ProjectPreview from "../../components/ProjectPreview";
import Button from "../../components/Button";

const Home = () => (
  <Container>
    <HelmetProvider>
      <Helmet>
        <title>MacKenzie Kerwin</title>
      </Helmet>
    </HelmetProvider>
    <Hero>
      <H1>
        My name is MacKenzie Kerwin, and I am a web developer based in Boston,
        MA.
      </H1>
      <Arrow href="#featured">↓</Arrow>
    </Hero>
    <H1 id="featured">I made (or helped make) these!</H1>
    {projects.map((p, i) => (
      <ProjectPreview
        key={i}
        id={p.id}
        alt={p.alt}
        title={p.title}
        description={p.description}
        cta={p.cta}
      />
    ))}
    <ButtonContainer>
      <Button to="/projects">All projects</Button>
    </ButtonContainer>
  </Container>
);

export default Home;
