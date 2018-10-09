import React from 'react';
import classNames from 'classnames/bind';
import styles from './Game.scss';
import { Section } from '../../components';

const cx = classNames.bind(styles);

const Game = () => (
  <Section>
    <div className={cx('screen')} />
    <div className={cx('content')}>
      <h1 className={cx('heading')}>Game Development <br />Workshops</h1>
      <p className={cx('subhead')}>Road to become game developer</p>
    </div>
  </Section>
);

export default Game;
