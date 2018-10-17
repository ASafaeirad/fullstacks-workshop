import styled from 'styled-components';

const P = styled('p')`
  ${props => props.lg && 'font-size: 1.4em'}
`;

export default P;
