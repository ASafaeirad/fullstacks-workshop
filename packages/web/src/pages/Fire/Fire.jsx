import React from 'react';
import classNames from 'classnames/bind';
import styles from './Fire.scss';
import { Section } from '../../components';


const cx = classNames.bind(styles);


const Fire = () => (
  <Section className={cx('root')} />
);

export default Fire;
