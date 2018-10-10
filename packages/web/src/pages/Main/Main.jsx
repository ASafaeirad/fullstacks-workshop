import React from 'react';
import classNames from 'classnames/bind';
import styles from './Main.scss';
import { Section, Button, Heading } from '../../components';

const cx = classNames.bind(styles);

const Main = () => (
  <Section className={cx('section')}>
    <img src="" alt="" />
    <Heading tag="h1" className={cx('heading')}>Fullstacks <br />Learning Path</Heading>
    <p className={cx('subhead')}>Workshops for web and game developers</p>
    <Button>Take a look</Button>
  </Section>
);

export default Main;
