import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/Layout';
import Home from '../components/Home';

const IndexPage = () => {
  const query = useStaticQuery(graphql`
    query HomepageQuery {
      prismicHomepage {
        data {
          intro {
            text
          }
          title {
            text
          }
          work_label {
            text
          }
          projects {
            project {
              document {
                ... on PrismicProject {
                  uid
                  data {
                    title {
                      text
                    }
                    thumbnail {
                      url
                      alt
                    }
                    summary {
                      text
                    }
                  }
                }
              }
            }
            cta_label {
              text
            }
          }
        }
      }
    }
  `);

  const {
    prismicHomepage: {
      data: {
        intro: { text: intro },
        title: { text: title },
        projects,
        work_label: { text: label },
      },
    },
  } = query;

  return (
    <Layout title="MacKenzie Kerwin">
      <Home intro={intro} title={title} projects={projects} label={label} />
    </Layout>
  );
};

export default IndexPage;
