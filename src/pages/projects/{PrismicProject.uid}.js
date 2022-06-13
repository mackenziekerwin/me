import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../../components/Layout';
import Project from '../../components/Project';

const ProjectPage = ({
  data: {
    prismicProject: { data: project },
  },
}) => (
  <Layout title={`${project.title.text} | MacKenzie Kerwin`}>
    <Project project={project} />
  </Layout>
);

export const query = graphql`
  query ProjectQuery($uid: String) {
    prismicProject(uid: { eq: $uid }) {
      data {
        cover {
          url
          alt
        }
        title {
          text
        }
        date {
          text
        }
        sections {
          heading {
            text
          }
          contents_id
          body {
            richText
          }
        }
        link {
          url
        }
        cta_label {
          text
        }
      }
    }
  }
`;

export default ProjectPage;
