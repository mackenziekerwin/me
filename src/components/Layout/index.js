import React from 'react';
import Helmet from 'react-helmet';
import Footer from '../Footer';
import Nav from '../Nav';
import { GlobalStyle } from './styled';

const Layout = ({ title, children }) => (
  <>
    <GlobalStyle />
    <Helmet>
      <title>{title}</title>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap&text=→♥︎"
        rel="stylesheet"
      />
    </Helmet>
    <Nav />
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;
