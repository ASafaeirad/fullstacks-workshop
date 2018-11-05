import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { Container } from 'semantic-ui-react';
import { WorkshopForm, Stack } from '../../components';

const WorkshopFormContainer = () => {
  const [prerequisites, setPrerequisites] = useState([]);
  const [lecturers, setLecturers] = useState([]);
  const [stacks, setStacks] = useState([]);
  const [fetchingLecturers, setFetchingLecturers] = useState(true);
  const [fetchingWorkshops, setFetchingWorkshops] = useState(true);
  const [fetchingStacks, setFetchingStacks] = useState(true);

  useEffect(async () => {
    try {
      const workshopsRes = await axios.get('http://localhost:4000/api/rest/workshops');

      setPrerequisites(workshopsRes.data.map(workshop => ({
        text: workshop.title,
        key: workshop._id,
        value: workshop._id,
      })));

      setFetchingWorkshops(false);
    } catch (err) {
      console.error(err);
    }
  }, []);

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

  useEffect(async () => {
    try {
      const stacksRes = await axios.get('http://localhost:4000/api/rest/stacks');

      setStacks(stacksRes.data.map(stack => ({
        key: stack._id,
        value: stack._id,
        text: stack.name,
        content: <Stack icon={stack.icon} />,
      })));

      setFetchingStacks(false);
    } catch (err) {
      console.error(err);
    }
  }, []);

  const onSubmit = async (values) => {
    const { thumbnail, ...data } = values;
    const body = JSON.stringify(data);

    await axios.post('http://localhost:4000/api/rest/workshops', body, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };

  return (
    <Container>
      <WorkshopForm
        prerequisites={prerequisites}
        lecturers={lecturers}
        stacks={stacks}
        fetchingLecturers={fetchingLecturers}
        fetchingWorkshops={fetchingWorkshops}
        fetchingStacks={fetchingStacks}
        submit={onSubmit}
      />
    </Container>
  );
};

export default WorkshopFormContainer;
