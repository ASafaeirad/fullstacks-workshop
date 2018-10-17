import styled from 'styled-components';

const Avatar = styled('button')`
  height: 46px;
  min-width: 130px;
  border: none;
  background-color: ${props => props.bg};
`;

export default Avatar;
