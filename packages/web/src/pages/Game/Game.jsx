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
    <div className={cx('image')}>
      <div className={cx('screen')}>
        <img src="" alt="book" />
      </div>
    </div>
    <SectionContent stacks={stacks} title="Game Development" info="Road to become game developer" />
  </Section>
);

export default Game;
