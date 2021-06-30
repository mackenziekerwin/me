import _ from "lodash";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";

import { Container, Row, Col8, Col9 } from "../../theme/layout";
import { P1 } from "../../theme/typography";

import Contents from "../../components/Contents";
import CaptionedImage from "../../components/CaptionedImage";
import Button from "../../components/Button";

import images from "../../images";

import { Hero, Title, Heading, Paragraph, ButtonContainer } from "./styled";
import projects from "./content.json";

const Project = () => {
  const { id } = useParams();
  const project = projects[id];
  const {
    isCaseStudy,
    heroAlt,
    title,
    dates,
    description,
    role,
    tools,
    challenge,
    solution,
    takeaways,
    cta,
  } = project;

  return (
    <Container>
      <Helmet>
        <title>{title} | MacKenzie Kerwin</title>
      </Helmet>
      <Hero>
        <Col8>
          <img width="100%" alt={heroAlt} src={images[_.camelCase(id)].hero} />
          <Title>{title}</Title>
          <Paragraph>{dates}</Paragraph>
        </Col8>
      </Hero>
      <Row>
        <Contents isCaseStudy={isCaseStudy} />
        <Col9>
          <Heading id="description">Description</Heading>
          <Paragraph>{description}</Paragraph>
          <Heading id="role">Role</Heading>
          <Paragraph>{role}</Paragraph>
          <Heading id="tools">Tools</Heading>
          {tools.map((tool, i) => (
            <P1 key={i}>{tool}</P1>
          ))}
          {isCaseStudy && (
            <>
              <Heading id="challenge">Challenge</Heading>
              <Paragraph>{challenge}</Paragraph>
              <Heading id="solution">Solution</Heading>
              {solution.map((item, i) => {
                return item.type === "paragraph" ? (
                  <Paragraph key={i}>{item.text}</Paragraph>
                ) : (
                  <CaptionedImage
                    key={i}
                    alt={item.alt}
                    src={images[id][item.src]}
                    caption={item.caption}
                  />
                );
              })}
              <Heading id="takeaways">Takeaways</Heading>
              <Paragraph>{takeaways.intro}</Paragraph>
              {takeaways.themes.map((t, i) => (
                <Paragraph key={i}>
                  <b>{t.theme}.</b> {t.description}
                </Paragraph>
              ))}
            </>
          )}
          {cta && (
            <ButtonContainer>
              <Button external to={cta.src}>
                {cta.text}
              </Button>
            </ButtonContainer>
          )}
        </Col9>
      </Row>
    </Container>
  );
};

export default Project;
