import React from 'react';
import { string } from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SectionHeading.scss';
import { Heading } from '../Heading';
import { P } from '../P';

const cx = classNames.bind(styles);

const SectionHeading = ({ info, children, className, center }) => (
  <div className={cx('root')}>
    <Heading className={cx('heading', className, { center })} latin>{children}</Heading>
    {info && <P latin className={cx('subhead')} lg>{info}</P>}
  </div>
);

SectionHeading.propTypes = {
  info: string,
};

SectionHeading.defaultProps = {
  info: '',
};

export default SectionHeading;
