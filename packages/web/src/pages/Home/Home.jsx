import React from 'react';
import classname from 'classnames/bind';
import styles from './Home.scss';
import { Main } from '../Main';
import { Game } from '../Game';
import { Application } from '../Application';

const cx = classname.bind(styles);

const Home = () => (
  <div className={cx('wrapper')}>
    <Main />
    <Game />
    <Application />
  </div>
);

export default Home;
