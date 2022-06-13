import React from 'react';

import Layout from '../components/Layout';
import Button from '../components/Button';
import { H1 } from '../theme/typography';
import { TallContainer } from '../theme/layout';

const NotFoundPage = () => (
  <Layout>
    <TallContainer>
      <H1>:0</H1>
      <H1>That page doesn't exist here.</H1>
      <Button to="/">Go back home</Button>
    </TallContainer>
  </Layout>
);

export default NotFoundPage;
