import React from 'react';
import classNames from 'classnames/bind';
import Particles from 'react-particles-js';
import styles from './Fire.scss';
import { Section } from '../../../components';

const cx = classNames.bind(styles);

const Fire = () => (
  <Section className={cx('root')}>
    <Particles
      className={cx('particles')}
      params={{
        particles: {
          number: {
            value: 140,
            density: {
              enable: false,
            },
          },
          color: {
            value: '#caa584',
          },
          opacity: {
            value: 0.3,
            random: true,
            anim: { enable: true, opacity_min: 0.1 },
          },
          size: {
            value: 3,
            random: true,
            anim: {
              speed: 8,
              size_min: 0.3,
            },
          },
          shape: {
            type: 'triangle',
          },
          line_linked: {
            enable: false,
          },
          move: {
            random: true,
            speed: 0.8,
            direction: 'top',
            out_mode: 'out',
          },
        },
      }}
    />
    <p className={cx('quote')}>&lt; Made with <span className={cx('heart')} role="img" aria-label="heart">💛</span> by NorthcampStudio &gt;</p>
  </Section>
);

export default Fire;
