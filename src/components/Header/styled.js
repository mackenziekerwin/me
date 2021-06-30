import { Link } from "react-router-dom";
import styled from "styled-components";

import { PRIMARY_ORANGE, DESKTOP_SMALL } from "../../theme/constants";
import { Row } from "../../theme/layout";

import LogoImage from "../../images/logo.svg";
import LogoHover from "../../images/logo-hover.svg";

export const StyledHeader = styled.header`
  padding: 1.5em 0;
  position: sticky;
  top: 0;
  z-index: 100;
`;

export const NavBar = styled(Row)`
  display: flex;
  justify-content: space-between;
  &:before,
  &:after {
    content: none;
  }
`;

export const LogoWrapper = styled.div.attrs({
  className: "col-md-1",
})``;

export const Logo = styled.div`
  background-image: url(${LogoImage});
  background-repeat: no-repeat;
  height: 21px;
  width: 20px;

  &:hover {
    background-image: url(${LogoHover});
    background-repeat: no-repeat;
  }

  @media (min-width: ${DESKTOP_SMALL}) {
    height: 43px;
    width: 41px;
  }
`;

export const TabGroup = styled.div.attrs({
  className: "col-xs-5 col-sm-3",
})`
  display: flex;
  justify-content: space-between;
`;

export const Tab = styled(Link)`
  font-size: 16px;
  text-decoration: none;
  color: inherit;

  &:focus {
    color: inherit;
    text-decoration: none;
  }

  &:hover {
    color: ${PRIMARY_ORANGE};
    text-decoration: none;
  }

  @media (min-width: ${DESKTOP_SMALL}) {
    font-size: 24px;
  }
`;
