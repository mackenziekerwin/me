import { Helmet } from "react-helmet";

import { Row, Col5, Col6 } from "../../theme/layout";
import { H1 } from "../../theme/typography";
import { TallContainer, Bio } from "./styled";

const About = () => (
  <TallContainer>
    <Helmet>
      <title>About | MacKenzie Kerwin</title>
    </Helmet>
    <Row>
      <Col5 />
      <Col6>
        <H1>Oh, hello!</H1>
        <Bio>
          I'm MacKenzie, and I like to work on projects that help people. I’m
          currently a web developer at ASICS Digital, Inc. and a rising senior
          at Northeastern University pursuing a degree in computer science and
          design. I'm passionate about user experience, sustainability, Boston,
          typography, and overusing exclamation points.
        </Bio>
      </Col6>
    </Row>
  </TallContainer>
);

export default About;
