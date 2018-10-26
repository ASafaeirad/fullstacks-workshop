import styled from 'styled-components';

const Avatar = styled('button')`
  height: 46px;
  font-weight: 500;
  min-width: 130px;
  border: none;
  background-color: ${props => props.theme.colors.primary};

  &:hover {
    background-color: #78f;
  }
`;

export default Avatar;
