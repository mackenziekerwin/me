import { Helmet, HelmetProvider } from "react-helmet-async";

import { Container } from "../../theme/layout";
import { H1 } from "../../theme/typography";

import ProjectThumbnail from "../../components/ProjectThumbnail";

import { projects } from "./content";
import { ProjectRow } from "./styled";

const Projects = () => (
  <Container>
    <HelmetProvider>
      <Helmet>
        <title>Work | MacKenzie Kerwin</title>
      </Helmet>
    </HelmetProvider>
    <H1>I made (or helped make) these!</H1>
    <ProjectRow>
      {projects.map((p, i) => (
        <ProjectThumbnail
          key={i}
          id={p.id}
          alt={p.alt}
          title={p.title}
          description={p.description}
        />
      ))}
    </ProjectRow>
  </Container>
);

export default Projects;
