import axios from 'axios';
import classNames from 'classnames/bind';
import React, { useEffect, useState } from 'react';
import { Container } from 'semantic-ui-react';
import { WorkshopForm } from '../../components';
import styles from './Manage.scss';

const cx = classNames.bind(styles);

const Manage = () => {
  const [prerequisites, setPrerequisites] = useState([]);
  const [lecturers, setLecturers] = useState([]);

  useEffect(async () => {
    const workshopsRes = await axios.get('http://localhost:4000/api/rest/workshops');

    setPrerequisites(workshopsRes.data.map(workshop => ({
      text: workshop.title,
      key: workshop._id,
      value: workshop._id,
    })));
    const lecturersRes = await axios.get('http://localhost:4000/api/rest/lecturers');
    setLecturers(lecturersRes.data.map(lecturer => ({
      key: lecturer._id,
      text: lecturer.name,
      value: lecturer._id,
      image: { avatar: true, src: lecturer.image },
    })));
  }, []);

  return (
    <Container className={cx('container')}>
      <WorkshopForm
        prerequisites={prerequisites}
        lecturers={lecturers}
        submit={async (values) => {
          const { thumbnail, ...data } = values;
          const body = JSON.stringify(data);

          await axios.post('http://localhost:4000/api/rest/workshops', body, {
            headers: {
              'Content-Type': 'application/json',
            },
          });
        }}
      />
    </Container>
  );
};

export default Manage;
