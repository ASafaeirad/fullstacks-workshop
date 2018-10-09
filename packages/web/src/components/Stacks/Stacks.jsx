import React from 'react';
import { arrayOf } from 'prop-types';
import classNames from 'classnames/bind';
import { Stack } from '../Stack';
import styles from './Stacks.scss';

const cx = classNames.bind(styles);

const Stacks = ({ stacks, className }) => (
  <div className={cx('root', className)}>
    {stacks.map(stack => <Stack key={stack.icon} icon={stack.icon} />)}
  </div>
);

Stacks.propTypes = {
  stacks: arrayOf().isRequired,
};

export default Stacks;
