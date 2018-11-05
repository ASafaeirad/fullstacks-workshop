import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container } from 'semantic-ui-react';
import { LecturerForm } from '../../components';

const LecturerFormContainer = () => {
  const [lecturers, setLecturers] = useState([]);
  const [fetchingLecturers, setFetchingLecturers] = useState(true);

  useEffect(async () => {
    try {
      const lecturersRes = await axios.get('http://localhost:4000/api/rest/lecturers');

      setLecturers(lecturersRes.data.map(lecturer => ({
        key: lecturer._id,
        text: lecturer.name,
        value: lecturer._id,
        image: { avatar: true, src: lecturer.image },
      })));

      setFetchingLecturers(false);
    } catch (err) {
      console.error(err);
    }
  }, []);

  const onSubmit = async (values) => {
    console.log('Submit');

    const body = JSON.stringify(values);

    await axios.post('http://localhost:4000/api/rest/lecturers', body, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };

  return (
    <Container>
      <LecturerForm
        lecturers={lecturers}
        fetchingLecturers={fetchingLecturers}
        submit={onSubmit}
      />
    </Container>
  );
};

export default LecturerFormContainer;
