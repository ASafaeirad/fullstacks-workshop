import React from 'react';
import { string, bool } from 'prop-types';
import styled, { css } from 'styled-components';

const resolveSprite = icon => `/svg/stacks-sprite.svg#${icon}`;

const Svg = styled('svg')`
  fill: currentColor;
  direction: ltr;
  height: 25px;
  transition: opacity 500ms;
  width: 100%;
  font-size: .8em;

  margin-bottom: 0;
  user-select: none;
  cursor: pointer;

  ${props => props.hover && css`
    opacity: .2;

    &:hover {
      opacity: 1;
    }
  `};
`;

const Stack = ({ icon, hover, className, onClick }) => (
  <Svg hover={hover} className={className} onClick={onClick}>
    <use href={resolveSprite(icon)} />
  </Svg>
);

Stack.propTypes = {
  icon: string.isRequired,
  hover: bool,
};

Stack.defaultProps = {
  hover: false,
};

export default Stack;
