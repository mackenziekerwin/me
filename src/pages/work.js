import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/Layout';
import Work from '../components/Work';

const WorkPage = () => {
  const query = useStaticQuery(graphql`
    query WorkPageQuery {
      prismicWork {
        data {
          title {
            text
          }
          projects {
            project {
              document {
                ... on PrismicProject {
                  uid
                  data {
                    thumbnail {
                      url
                      alt
                    }
                    title {
                      text
                    }
                    summary {
                      text
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  const {
    prismicWork: {
      data: {
        title: { text: title },
        projects,
      },
    },
  } = query;

  return (
    <Layout title="Work | MacKenzie Kerwin">
      <Work title={title} projects={projects} />
    </Layout>
  );
};

export default WorkPage;
