import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/Layout';
import About from '../components/About';

const AboutPage = () => {
  const query = useStaticQuery(graphql`
    query AboutPageQuery {
      prismicAbout {
        data {
          title {
            text
          }
          bio {
            richText
          }
        }
      }
    }
  `);

  const {
    prismicAbout: {
      data: {
        title: { text: title },
        bio: { richText: bio },
      },
    },
  } = query;

  return (
    <Layout title="About | MacKenzie Kerwin">
      <About title={title} bio={bio} />
    </Layout>
  );
};

export default AboutPage;
