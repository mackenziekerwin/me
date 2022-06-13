import React from 'react';

import { A, Caption, H1, H2, P } from '../../theme/typography';
import { Container, Col2, Col8, Col9, Row } from '../../theme/layout';

import Button from '../Button';
import { Body, Contents, Hero, ListItem, ToolsList } from './styled';
import { PrismicRichText } from '@prismicio/react';

const Project = ({
  project: {
    cover: { url: cover, alt },
    title: { text: title },
    date: { text: date },
    sections,
    link: { url },
    cta_label: { text: ctaLabel },
  },
}) => (
  <Container>
    <Hero>
      <Col8>
        <img width="100%" src={cover} alt={alt} />
        <H1>{title}</H1>
        <P>{date}</P>
      </Col8>
    </Hero>
    <Row>
      <Col2>
        <Contents>
          {sections
            .filter((section) => section.contents_id !== null)
            .map((section, i) => (
              <li key={i}>
                <A href={`#${section.contents_id}`}>{section.heading.text}</A>
              </li>
            ))}
        </Contents>
      </Col2>
      <Col9>
        {sections.map((section, i) => {
          const {
            heading: { text: heading },
            contents_id: id,
            body: { richText: body },
          } = section;
          return (
            <Body key={i}>
              <H2 id={id}>{heading}</H2>
              <PrismicRichText
                field={body}
                components={{
                  paragraph: ({ children }) => <P>{children}</P>,
                  list: ({ children }) => <ToolsList>{children}</ToolsList>,
                  listItem: ({ children }) => <ListItem>{children}</ListItem>,
                  label: ({ children }) => <Caption>{children}</Caption>,
                }}
              />
            </Body>
          );
        })}
        {url && (
          <Button external to={url}>
            {ctaLabel}
          </Button>
        )}
      </Col9>
    </Row>
  </Container>
);

export default Project;
