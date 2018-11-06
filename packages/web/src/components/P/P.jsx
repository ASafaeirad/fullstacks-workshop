import styled from 'styled-components';

const P = styled('p')`
  ${props => props.lg && 'font-size: 1.4em'}

  font-family: ${props => (props.latin ? 'Rajdhani' : 'Vazir')};
  text-align: ${props => (props.latin ? 'unset' : 'start')};

`;

export default P;
