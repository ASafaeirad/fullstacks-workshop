import React, { useEffect, useState } from 'react';
import { Container, Button, List, Icon, Loader } from 'semantic-ui-react';
import styled from 'styled-components';
import { Route, Switch, withRouter } from 'react-router-dom';
import axios from 'axios';
import { WorkshopForm, Workshop, Stack } from '../../components';

const IconContainer = styled('div')`
  position: absolute;
  height: 100%;
  display: flex;
  top: 0;
  align-items: center;
  left: 1em;
`;

const Workshops = ({ workshops, onAdd, onEdit, onDelete }) => console.log(workshops) || (
  <List selection verticalAlign="middle" size="large">
    {workshops.map(workshop => (
      <List.Item key={workshop._id} className="relative">
        <List.Content floated="right">
          <Workshop {...workshop} />
        </List.Content>
        <List.Content floated="left" verticalAlign="middle">
          <IconContainer>
            <Icon name="delete" size="small" onClick={() => onDelete(workshop)} />
            <Icon name="edit" size="small" onClick={() => onEdit(workshop._id)} />
          </IconContainer>
        </List.Content>
      </List.Item>
    ))}
    <Button fluid onClick={onAdd}><Icon name="add" /></Button>
  </List>
);

const WorkshopFormContainer = ({ history }) => {
  const [workshops, setWorkshops] = useState([]);
  const [lecturers, setLecturers] = useState([]);
  const [stacks, setStacks] = useState([]);
  const [fetchingLecturers, setFetchingLecturers] = useState(true);
  const [fetchingWorkshops, setFetchingWorkshops] = useState(true);
  const [fetchingStacks, setFetchingStacks] = useState(true);

  useEffect(async () => {
    try {
      const workshopsRes = await axios.get('http://localhost:4000/api/rest/workshops');

      setWorkshops(workshopsRes.data);
      setFetchingWorkshops(false);
    } catch (err) {
      console.error(err);
    }
  }, []);

  useEffect(async () => {
    try {
      const lecturersRes = await axios.get('http://localhost:4000/api/rest/lecturers');

      setLecturers(lecturersRes.data);
      setFetchingLecturers(false);
    } catch (err) {
      console.error(err);
    }
  }, []);

  useEffect(async () => {
    try {
      const stacksRes = await axios.get('http://localhost:4000/api/rest/stacks');

      setStacks(stacksRes.data);
      setFetchingStacks(false);
    } catch (err) {
      console.error(err);
    }
  }, []);

  const onSubmit = async (values) => {
    const { thumbnail, ...data } = values;
    const body = JSON.stringify(data);

    try {
      const createdWorkshop = await axios.post('http://localhost:4000/api/rest/workshops', body, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (thumbnail) {
        const thumbnailBody = new FormData();
        thumbnailBody.append('thumbnail', thumbnail);

        await axios.put(`http://localhost:4000/api/rest/workshops/${createdWorkshop.data._id}/thumbnail`, thumbnailBody, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
      }

      const newWorkshop = await axios.get(`http://localhost:4000/api/rest/workshops/${createdWorkshop.data._id}`);
      setWorkshops([...workshops, newWorkshop.data]);
      history.push('/manage/workshops');
    } catch (err) {
      console.error(err);
    }
  };

  const onUpdate = async (values) => {
    const { thumbnail, ...data } = values;
    const body = JSON.stringify(data);

    await axios.put(`http://localhost:4000/api/rest/workshops/${values._id}`, body, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (thumbnail) {
      const thumbnailBody = new FormData();
      thumbnailBody.append('thumbnail', thumbnail);

      await axios.put(`http://localhost:4000/api/rest/workshops/${values._id}/thumbnail`, thumbnailBody, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    }

    const updatedLecturer = await axios.get(`http://localhost:4000/api/rest/workshops/${values._id}`);
    setWorkshops(workshops.map(l => (l._id === updatedLecturer.data._id ? updatedLecturer.data : l)));
    history.push('/manage/workshops');
  };

  const goToAdd = () => {
    history.push('workshops/add');
  };

  const goToEdit = (id) => {
    history.push(`workshops/${id}`);
  };

  const onDelete = async ({ _id, name }) => {
    const conf = window.confirm(`Are you sure to delete ${name}`);

    if (conf) {
      const deleted = await axios.delete(`http://localhost:4000/api/rest/workshops/${_id}`);

      setWorkshops(workshops.filter(l => l._id !== deleted.data._id));
    }
  };

  const onCancel = () => {
    history.push('/manage/workshops/');
  };

  return (
    <Container>
      <Switch>
        <Route
          path="/manage/workshops"
          exact
          render={() => (fetchingWorkshops
            ? <Loader active inline="centered" />
            : <Workshops workshops={workshops} onAdd={goToAdd} onEdit={goToEdit} onDelete={onDelete} />
          )}
        />

        <Route
          path="/manage/workshops/add"
          render={props => (
            <WorkshopForm
              prerequisites={workshops}
              lecturers={lecturers}
              stacks={stacks}
              fetchingLecturers={fetchingLecturers}
              fetchingWorkshops={fetchingWorkshops}
              fetchingStacks={fetchingStacks}
              submit={onSubmit}
              onCancel={onCancel}
            />
          )}
        />

        <Route
          path="/manage/workshops/:id"
          render={(props) => {
            const workshop = workshops.find(l => l._id === props.match.params.id);

            return (
              <WorkshopForm
                workshop={workshop}
                prerequisites={workshops}
                lecturers={lecturers}
                stacks={stacks}
                fetchingLecturers={fetchingLecturers}
                fetchingWorkshops={fetchingWorkshops}
                fetchingStacks={fetchingStacks}
                submit={onUpdate}
                onCancel={onCancel}
              />
            );
          }}
        />
      </Switch>
    </Container>
  );
};

export default withRouter(WorkshopFormContainer);
