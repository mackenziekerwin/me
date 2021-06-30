import {
  StyledHeader,
  NavBar,
  LogoWrapper,
  TabGroup,
  Logo,
  Tab,
} from "./styled";
import { Container } from "../../theme/layout";

const Header = () => (
  <StyledHeader>
    <Container>
      <NavBar>
        <LogoWrapper>
          <Tab to="/">
            <Logo />
          </Tab>
        </LogoWrapper>
        <TabGroup>
          <Tab to="/projects">Work</Tab>
          <Tab to="/about">About</Tab>
        </TabGroup>
      </NavBar>
    </Container>
  </StyledHeader>
);

export default Header;
