import React from 'react';
import classNames from 'classnames/bind';
import styles from './Section.scss';

const cx = classNames.bind(styles);

const Section = ({ className, ...rest }) => (
  <section className={cx('root', className)} {...rest} />
);

export default Section;
