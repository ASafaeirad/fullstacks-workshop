import React from 'react';
import classNames from 'classnames/bind';
import styles from './Game.scss';
import { Section, SectionContent } from '../../components';

const cx = classNames.bind(styles);

const stacks = [
  { icon: 'maya' },
  { icon: 'unreal' },
  { icon: 'substance' },
];

const Game = () => (
  <Section className={cx('section')}>
    <div className={cx('view')}>
      <div className={cx('screen')}>
        <img className={cx('bg')} src="/images/game.png" alt="game" />
        <img className={cx('book')} src="/images/book.png" alt="book" />
        <img className={cx('loading')} src="/svg/loading.svg" alt="book" />
      </div>
    </div>
    <SectionContent stacks={stacks} title="Game Development" info="Road to become game developer" />
  </Section>
);

export default Game;
