/* eslint-disable react/button-has-type */
import React from 'react';
import classNames from 'classnames/bind';
import { string } from 'prop-types';
import styles from './Button.scss';

const cx = classNames.bind(styles);

const Button = ({ className, type, ...rest }) => (
  <button type={type} className={cx('root', className)} {...rest} />
);

Button.propTypes = {
  type: string,
};

Button.defaultProps = {
  type: 'Button',
};

export default Button;
