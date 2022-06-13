import React from 'react';
import { PrismicRichText } from '@prismicio/react';
import { H1, H2, P } from '../../theme/typography';
import { TallContainer } from '../../theme/layout';
import { Body } from './styled';

const About = ({ title, bio }) => (
  <TallContainer>
    <Body>
      <H1>{title}</H1>
      <PrismicRichText
        field={bio}
        components={{
          paragraph: ({ children }) => <P>{children}</P>,
          heading1: ({ children }) => <H1>{children}</H1>,
          heading2: ({ children }) => <H2>{children}</H2>,
        }}
      />
    </Body>
  </TallContainer>
);

export default About;
