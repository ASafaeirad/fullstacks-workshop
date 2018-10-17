/* eslint-disable jsx-a11y/heading-has-content */
import classNames from 'classnames/bind';
import React from 'react';
import styles from './Heading.scss';

const cx = classNames.bind(styles);

const Heading = ({ className, tag, size, ...rest }) => {
  const Tag = tag;
  return <Tag className={cx('root', tag, className)} style={{ fontSize: size }} {...rest} />;
};

Heading.defaultProps = {
  tag: 'h3',
};

export default Heading;
