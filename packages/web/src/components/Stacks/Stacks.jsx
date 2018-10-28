import React from 'react';
import { arrayOf, shape, bool } from 'prop-types';
import classNames from 'classnames/bind';
import styled from 'styled-components';
import { Stack as BaseStack } from '../Stack';
import styles from './Stacks.scss';

const cx = classNames.bind(styles);

const Stack = styled(BaseStack)`
  width: 50%;
  margin-bottom: 1em;
`;

const Stacks = ({ stacks, hover, className }) => (
  <div className={cx('root', className)}>
    {stacks.length > 0
      ? stacks.map(stack => <Stack key={stack.icon} hover={hover} icon={stack.icon} />)
      : 'Nothing'
     }
  </div>
);

Stacks.propTypes = {
  stacks: arrayOf(shape({})).isRequired,
  hover: bool,
};

Stacks.defaultProps = {
  hover: false,
};
export default Stacks;
