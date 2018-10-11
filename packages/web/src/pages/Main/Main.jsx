import React from 'react';
import classNames from 'classnames/bind';
import Particles from 'react-particles-js';
import styles from './Main.scss';
import { Section, Button, Heading, P } from '../../components';

const cx = classNames.bind(styles);

const Main = () => (

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
              enable: true,
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
    <img className={cx('logo')} src="images/logo.png" alt="logo" />
    <Heading tag="h1" className={cx('heading')}>Fullstacks <br />Learning Path</Heading>
    <P className={cx('subhead')}>Workshops for web and game developers</P>
    <Button className={cx('button')}>Take a look</Button>
  </Section>
);

export default Main;
