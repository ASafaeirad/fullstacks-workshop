import React from 'react';
import classNames from 'classnames/bind';
import styles from './Core.scss';
import { Section, SectionContent, Screen } from '../../../components';

const cx = classNames.bind(styles);

const stacks = [
  { icon: 'maya' },
  { icon: 'unreal' },
  { icon: 'substance' },
  { icon: 'substance' },
];

const Game = () => (
  <Section className={cx('section')}>
    <div className={cx('view')}>
      <Screen left className={cx('screen')} />
    </div>
    <SectionContent stacks={stacks} title="Core Fundamentals" info="Road to become better developer" />
  </Section>
);

export default Game;
