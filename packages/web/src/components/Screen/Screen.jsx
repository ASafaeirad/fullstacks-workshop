import styled, { css } from 'styled-components';

const Screen = styled('div')`
  position: relative;
  border-radius: 0 8px 8px 0;
  width: 100%;
  height: 80vh;
  overflow: hidden;
  box-shadow: 3.5px 3.5px 3px 0px rgba(0, 0, 0, 0.2);
  background: white;

  ${props => props.left && css`
    left: -20%;
  `};

  ${props => props.right && css`
    right: -20%;
  `};
`;

export default Screen;
