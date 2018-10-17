import React from 'react';
import classNames from 'classnames/bind';
import style from './Application.scss';
import { Section, SectionContent, Screen } from '../../../components';

const stacks = [
  { icon: 'electron' },
  { icon: 'react' },
  { icon: 'graphql' },
  { icon: 'node' },
];

const cx = classNames.bind(style);

const Application = () => (
  <Section className={cx('section')}>
    <SectionContent className={cx('content')} stacks={stacks} title="Application Development" info="Road to become a fullstacks web developer" />
    <div className={cx('view')}>
      <Screen right className={cx('screen')} />
    </div>
  </Section>
);

export default Application;
