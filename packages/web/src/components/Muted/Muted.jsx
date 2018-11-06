import styled from 'styled-components';

const Muted = styled('div')`
  color: ${props => props.theme.colors.muted};
  user-select: none;
`;

export default Muted;
