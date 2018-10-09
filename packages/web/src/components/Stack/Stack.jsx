import React from 'react';
import { string } from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Stack.scss';

const cx = classNames.bind(styles);

const resolveSprite = icon => `svg/stacks-sprite.svg#${icon}`;

const Stack = ({ icon, className }) => (
  <svg className={cx('root', className)}>
    <use href={resolveSprite(icon)} />
  </svg>
);

Stack.propTypes = {
  icon: string.isRequired,
};

export default Stack;
