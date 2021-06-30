import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import GlobalStyle from "../../theme/globalStyle";

import ScrollToTop from "../ScrollToTop";
import Header from "../Header";
import Footer from "../Footer";

import Home from "../../pages/Home";
import Projects from "../../pages/Projects";
import About from "../../pages/About";
import Project from "../../pages/Project";

import { StyledApp } from "./styled";

const App = () => (
  <Router>
    <GlobalStyle />
    <ScrollToTop />
    <StyledApp>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects/:id" component={Project} />
      </Switch>
    </StyledApp>
    <Footer />
  </Router>
);

export default App;
