import React from 'react';
import classNames from 'classnames/bind';
import Particles from 'react-particles-js';
import styles from './Main.scss';
import { Section, Button, Heading, P } from '../../../components';

const cx = classNames.bind(styles);

const Main = ({ next }) => (

  <Section className={cx('section')}>
    <Particles
      className={cx('stars')}
      params={{
        particles: {
          number: {
            value: 120,
            density: {
              enable: true,
              value_area: 1000,
            },
          },
          line_linked: {
            enable: true,
            opacity: 0.02,
          },
          shape: {
            type: 'triangle',
          },
          move: {
            direction: 'top',
            speed: 0.2,
            out_mode: 'out',
          },
          size: {
            value: 2,
            random: true,
          },
          opacity: {
            value: 0.3,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.1,
            },
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: false,
              mode: 'grab',
            },
          },
          modes: {
            grab: {
              distance: 100,
              line_linked: {
                opacity: 0.2,
              },
            },
          },
        },
        retina_detect: true,
      }}
    />
    <div className={cx('logo-container')}>
      <img className={cx('logo')} src="images/logo.png" alt="logo" />
    </div>
    <div>
      <Heading tag="h1" className={cx('heading')} style={{ textAlign: 'center' }}>به دنیای برنامه نویسی پرتاب شو</Heading>
      <P className={cx('subhead')}>باور ما اینست که کاربران ایرانی لایق بهترین ها هستند و باید بهترین و بروزترین فیلم های آموزشی و مقالات در اختیار آنها قرار بگیرد تا بتوانند به سرعت پیشرفت کنند و جزء بهترین ها در صنعت طراحی و برنامه نویسی وب شوند . با ما همراه باشید تا بهترین ها رو لایق بهترین کاربران کنیم</P>
    </div>
    <Button onClick={next} className={cx('button')}>Explore</Button>
  </Section>
);

export default Main;
