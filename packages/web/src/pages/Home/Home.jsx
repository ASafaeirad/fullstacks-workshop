import React from 'react';
import classname from 'classnames/bind';
import styles from './Home.scss';
import { Main } from '../Main';
import { Game } from '../Game';
import { Application } from '../Application';
import { Core } from '../Core';
import { Fire } from '../Fire';

const cx = classname.bind(styles);

const Home = () => (
  <div className={cx('wrapper')}>
    <Main />
    <Game />
    <Application />
    <Core />
    <Fire />
  </div>
);

export default Home;
