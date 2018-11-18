import React from 'react';
import classNames from 'classnames/bind';
import styles from './Down.scss';

const cx = classNames.bind(styles);

const Down = () => (
  <div className={cx('root')}>
    <div className={cx('container')}>
      <img className={cx('logo')} src="images/logo.png" alt="logo" />

      <span className={cx('watermark')}>Fullstacks</span>
      <img src="/svg/mac.svg" alt="mac" />
      <h1 className={cx('heading')}>در حال ساخت</h1>
    </div>
  </div>
);

export default Down;
