import React from 'react';
import classNames from 'classnames/bind';
import styles from './Main.scss';
import { Section } from '../../components';

const cx = classNames.bind(styles);

const Main = () => (
  <Section className={cx('section')}>
    <img src="" alt="" />
    <h1 className={cx('heading')}>Fullstacks <br />Learning Path</h1>
    <p className={cx('subhead')}>Workshops for web and game developers</p>
    <button type="button" className={cx('button')}>Take a look</button>
  </Section>
);

export default Main;
