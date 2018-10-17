import React from 'react';
import classNames from 'classnames/bind';
import { Heading, Workshop } from '../../components';
import styles from './Workshops.scss';

const cx = classNames.bind(styles);

const Workshops = () => (
  <div className={cx('container')}>
    <Heading className={cx('heading')}>Game Development Workshops</Heading>
    <Workshop />
  </div>
);

export default Workshops;
