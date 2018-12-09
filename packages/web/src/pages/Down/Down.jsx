import React from 'react';
import classNames from 'classnames/bind';
import styles from './Down.scss';
import { SectionHeading, Button, P } from '../../components';

const cx = classNames.bind(styles);

const Down = () => (
  <div className={cx('root')}>
    <div className={cx('container')}>
      <div className={cx('left')}>
        <SectionHeading className={cx('heading')}>PAGE UNDER CONSTRUCTION</SectionHeading>
        <P className={cx('p')} latin>We are currently working on this page.</P>
        <P className={cx('p')} latin>follow us on <a className={cx('link')}>@full_stacks</a></P>
        <Button className={cx('button')}>Be Right Back</Button>
      </div>
      <div className={cx('right')}>
        <object className={cx('illustration')} data="/svg/down.svg" type="image/svg+xml" />
      </div>
    </div>
  </div>
);

export default Down;
