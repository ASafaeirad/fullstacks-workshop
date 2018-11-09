import React, { useEffect, useState } from 'react';
import { Container, Button, List, Icon, Loader } from 'semantic-ui-react';
import styled from 'styled-components';
import { Route, Switch, withRouter } from 'react-router-dom';
import axios from 'axios';
import { StackForm, Stack } from '../../components';

const IconContainer = styled('div')`
  position: absolute;
  height: 100%;
  display: flex;
  top: 0;
  align-items: center;
  right: 1em;
`;

const Stacks = ({ stacks, onAdd, onEdit, onDelete }) => (
  <List selection verticalAlign="middle" size="large">
    {stacks.map(lecturer => (
      <List.Item key={lecturer._id} className="relative">
        <List.Content>
          <Stack {...lecturer} onClick={() => onEdit(lecturer._id)} />
        </List.Content>
        <List.Content floated="right" verticalAlign="middle">
          <IconContainer>
            <Icon name="delete" size="small" onClick={() => onDelete(lecturer)} />
          </IconContainer>
        </List.Content>
      </List.Item>
    ))}
    <Button fluid onClick={onAdd}><Icon name="add" /></Button>
  </List>
);

const StackFormContainer = ({ history }) => {
  const [stacks, setStacks] = useState([]);
  const [fetchingStacks, setFetchingStacks] = useState(true);

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
    const body = JSON.stringify(values);

    const newStack = await axios.post('http://localhost:4000/api/rest/stacks', body, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    setStacks([...stacks, newStack.data]);
    history.push('/manage/stacks');
  };

  const onUpdate = async (values) => {
    const body = JSON.stringify(values);

    const updated = await axios.put(`http://localhost:4000/api/rest/stacks/${values._id}`, body, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    setStacks(stacks.map(l => (l._id === updated.data._id ? updated.data : l)));
    history.push('/manage/stacks');
  };

  const goToAdd = () => {
    history.push('stacks/add');
  };

  const goToEdit = (id) => {
    history.push(`stacks/${id}`);
  };

  const onDelete = async ({ _id, name }) => {
    const conf = window.confirm(`Are you sure to delete ${name}`);

    if (conf) {
      const deleted = await axios.delete(`http://localhost:4000/api/rest/stacks/${_id}`);

      setStacks(stacks.filter(l => l._id !== deleted.data._id));
    }
  };

  const onCancel = () => {
    history.push('/manage/stacks/');
  };

  return (
    <Container>
      <Switch>
        <Route
          path="/manage/stacks"
          exact
          render={() => (fetchingStacks
            ? <Loader active inline="centered" />
            : <Stacks stacks={stacks} onAdd={goToAdd} onEdit={goToEdit} onDelete={onDelete} />
          )}
        />

        <Route
          path="/manage/stacks/add"
          render={props => (
            <StackForm
              submit={onSubmit}
              onCancel={onCancel}
            />
          )}
        />

        <Route
          path="/manage/stacks/:id"
          render={(props) => {
            const stack = stacks.find(l => l._id === props.match.params.id);

            return (
              <StackForm
                stack={stack}
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

export default withRouter(StackFormContainer);
