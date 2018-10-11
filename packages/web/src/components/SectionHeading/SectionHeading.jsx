import React from 'react';
import { string } from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SectionHeading.scss';
import { Heading } from '../Heading';
import { P } from '../P';

const cx = classNames.bind(styles);

const SectionHeading = ({ title, info }) => (
  <div className={cx('root')}>
    <Heading className={cx('heading')}>{title}<br />Workshops</Heading>
    <P className={cx('subhead')}>{info}</P>
  </div>
);

SectionHeading.propTypes = {
  title: string.isRequired,
  info: string.isRequired,
};

export default SectionHeading;
