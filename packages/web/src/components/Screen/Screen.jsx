import styled, { css } from 'styled-components';

const Screen = styled('div')`
  position: relative;
  min-width: 120%;
  height: 70vh;
  overflow: hidden;
  background: white;

  ${props => props.left && css`
    left: -20%;
    border-radius: 0 8px 8px 0;
    box-shadow: -3.5px 3.5px 3px 0px rgba(0, 0, 0, 0.2);
  `};

  ${props => props.right && css`
    right: 0;
    border-radius: 8px 0 0 8px;
    box-shadow: -3.5px 3.5px 3px 0px rgba(0, 0, 0, 0.2);
  `};
`;

export default Screen;
