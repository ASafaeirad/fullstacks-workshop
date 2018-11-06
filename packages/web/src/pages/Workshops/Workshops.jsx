import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import Axios from 'axios';
import { Heading, Workshop } from '../../components';
import styles from './Workshops.scss';

const cx = classNames.bind(styles);

const Workshops = () => {
  const [workshops, setWorkshops] = useState([]);

  useEffect(async () => {
    const workshopRes = await Axios.get('http://localhost:4000/api/rest/workshops');

    console.log(workshopRes.data);


    setWorkshops(workshopRes.data);
  }, []);

  return (
    <div className={cx('container')}>
      <Heading className={cx('heading')}>Game Development Workshops</Heading>
      {workshops && workshops.map(workshop => <Workshop key={workshop._id} {...workshop} />)}
    </div>
  );
};

export default Workshops;
