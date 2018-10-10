/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react';
import classNames from 'classnames/bind';
import styles from './Heading.scss';

const cx = classNames.bind(styles);

const Heading = ({ className, tag, ...rest }) => {
  const Tag = tag || 'h3';
  return <Tag className={cx('root', className)} {...rest} />;
};

export default Heading;
