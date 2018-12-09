import React from 'react';
import classNames from 'classnames/bind';
import styles from './Down.scss';
import { useWindowSize } from '../../hooks';
import { SectionHeading, P } from '../../components';

const cx = classNames.bind(styles);

function Down() {
  const { innerWidth } = useWindowSize();

  const isMobile = innerWidth < 768;

  return (
    <div className={cx('root')}>
      <div className={cx('container')}>
        <div className={cx('left')}>
          <SectionHeading center={isMobile} className={cx('heading')}>PAGE UNDER<br />CONSTRUCTION</SectionHeading>
          <P className={cx('p')} latin>We are currently working on this page.</P>
          <P className={cx('p')} latin>follow us on <a href="http://t.me/full_stacks" className={cx('link')}>@full_stacks</a></P>
        </div>

        <div className={cx('right')}>
          <object
            className={cx('illustration')}
            data="/svg/down.svg"
            aria-label="fullstacks illustration"
            type="image/svg+xml"
          />
        </div>
      </div>
    </div>
  );
}

export default Down;
