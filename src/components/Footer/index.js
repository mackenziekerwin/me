import { H1 } from "../../theme/typography";
import { Container } from "../../theme/layout";
import { StyledFooter, FooterContent, Links, Link, FooterText } from "./styled";
import Resume from "../../documents/MacKenzieKerwin.pdf";

const Footer = () => (
  <StyledFooter>
    <Container>
      <H1>Let's keep in touch!</H1>
      <FooterContent>
        <Links>
          <Link href={Resume} target="_blank">
            Resume
          </Link>
          <Link
            href="https://www.linkedin.com/in/mackenzie-kerwin/"
            target="_blank">
            LinkedIn
          </Link>
          <Link href="https://github.com/mackenziekerwin" target="_blank">
            GitHub
          </Link>
        </Links>
        <FooterText>Made from scratch with ♥︎</FooterText>
      </FooterContent>
    </Container>
  </StyledFooter>
);

export default Footer;
