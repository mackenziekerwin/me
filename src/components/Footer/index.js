import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Container } from '../../theme/layout';
import { Caption } from '../../theme/typography';
import { FooterRow, NoteContainer, Links, Link } from './styled';

const Footer = () => {
  const query = useStaticQuery(graphql`
    query FooterQuery {
      prismicFooter {
        data {
          note {
            text
          }
          links {
            label {
              text
            }
            url {
              url
            }
          }
        }
      }
    }
  `);

  const {
    prismicFooter: {
      data: {
        note: { text: note },
        links,
      },
    },
  } = query;

  return (
    <footer>
      <Container>
        <FooterRow>
          <NoteContainer>
            <Caption>{note}</Caption>
          </NoteContainer>
          <Links>
            {links.map((link) => (
              <Link key={link.label.text} href={link.url.url} target="_blank">
                {link.label.text}
              </Link>
            ))}
          </Links>
        </FooterRow>
      </Container>
    </footer>
  );
};

export default Footer;
