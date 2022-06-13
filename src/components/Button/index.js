import React from 'react';
import { RoundedLink, RoundedAnchor } from './styled';

const Button = ({ external, to, children }) =>
  external ? (
    <RoundedAnchor href={to} target="_blank">
      {children} →
    </RoundedAnchor>
  ) : (
    <RoundedLink to={to}>{children} →</RoundedLink>
  );

export default Button;
