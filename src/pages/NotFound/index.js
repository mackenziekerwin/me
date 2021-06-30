import { Helmet, HelmetProvider } from "react-helmet-async";

import { H1 } from "../../theme/typography";

import Button from "../../components/Button";

import { CenteredContainer, Body } from "./styled";

const NotFound = () => (
  <CenteredContainer>
    <HelmetProvider>
      <Helmet>
        <title>Page Not Found | MacKenzie Kerwin</title>
      </Helmet>
    </HelmetProvider>
    <H1>:O</H1>
    <Body>That page doesn't exist here.</Body>
    <Button to="/">Go home</Button>
  </CenteredContainer>
);

export default NotFound;
