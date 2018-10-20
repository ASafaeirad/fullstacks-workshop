import React, { PureComponent } from 'react';
import classname from 'classnames/bind';
import ReactPageScroller from 'react-page-scroller';
import styles from './Home.scss';
import { Main } from './Main';
import { Game } from './Game';
import { Application } from './Application';
import { Core } from './Core';
import { Fire } from './Fire';
import fireSound from './Fire/fire.m4a';
import { Indicator } from '../../components';

const cx = classname.bind(styles);

class Home extends PureComponent {
  state ={
    page: 0,
  }

  constructor(props) {
    super(props);
    this.pageScroller = React.createRef();
  }

  goToPage = (eventKey) => {
    this.pageScroller.goToPage(eventKey);
  };

  nextPage = () => {
    this.pageScroller.goToPage(this.state.page + 1);
  }

  pageOnChange = (number) => {
    this.setState({ page: number - 1 });
    this.audio.volume = (number / 5) ** 1.5;
  };

  componentDidMount() {
    this.audio = new Audio(fireSound);
    this.audio.loop = true;
    this.audio.play();
    this.audio.addEventListener('timeupdate', function () {
      const buffer = 2.8;
      if (this.currentTime > this.duration - buffer) {
        this.currentTime = 0.5;
        this.play();
      }
    }, false);
    this.audio.volume = 0;
  }

  onSelect = (index) => {
    this.goToPage(index);
  }

  render() {
    const { page } = this.state;

    return (
      <React.Fragment>
        <Indicator
          className={cx('indicator')}
          sections={['Sky', 'Game', 'Application', 'Core', 'Fire']}
          current={page}
          onSelect={this.onSelect}
        />
        <ReactPageScroller
          pageOnChange={this.pageOnChange}
          ref={(ps) => { this.pageScroller = ps; }}
        >
          <Main next={this.nextPage} />
          <Game />
          <Application />
          <Core />
          <Fire volume={page / 4} play={page === 4} />
        </ReactPageScroller>
      </React.Fragment>
    );
  }
}
export default Home;
