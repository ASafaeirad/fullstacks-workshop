import React, { PureComponent } from 'react';
import classname from 'classnames/bind';
import ReactPageScroller from 'react-page-scroller';
import styles from './Home.scss';
import { Main } from './Main';
import { Game } from './Game';
import { Application } from './Application';
import { Core } from './Core';
import { Fire } from './Fire';
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
  };

  componentDidMount() {
    // this.goToPage(4);
  }


  render() {
    const { page } = this.state;

    return (
      <React.Fragment>
        <Indicator
          className={cx('indicator')}
          sections={['Sky', 'Game', 'Application', 'Core', 'Fire']}
          current={page}
        />
        <ReactPageScroller
          pageOnChange={this.pageOnChange}
          ref={(ps) => { this.pageScroller = ps; }}
        >
          <Main next={this.nextPage} />
          <Game />
          <Application />
          <Core />
          <Fire />
        </ReactPageScroller>
      </React.Fragment>
    );
  }
}
export default Home;
