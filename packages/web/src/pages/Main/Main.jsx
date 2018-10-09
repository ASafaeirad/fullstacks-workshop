import React from 'react';
import classNames from 'classnames/bind';
import styles from './Main.scss';

const cx = classNames.bind(styles);

const Main = () => (
  <div className={cx('main')}>
    <h1>Main</h1>
  </div>
);

export default Main;
