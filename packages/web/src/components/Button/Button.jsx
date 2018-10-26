import styled from 'styled-components';

const Button = styled('button')`
  color: #fff;
  background-color: transparent;
  border: 1px solid #fff;
  width: 180px;
  min-height: 45px;
  transition: background-color 500ms, color 500ms;
  cursor: pointer;

  &:hover {
    background-color: #fff;
    color: #222;
  }

  &:focus {
    outline: none;
  }
`;

Button.defaultProps = {
  type: 'Button',
};

export default Button;
