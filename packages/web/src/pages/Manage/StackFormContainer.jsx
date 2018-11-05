import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container } from 'semantic-ui-react';
import { StackForm, Stack } from '../../components';

const StackFormContainer = () => {
  const [stacks, setStacks] = useState([]);
  const [fetchingStacks, setFetchingStacks] = useState(true);

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
    const body = JSON.stringify(values);

    await axios.post('http://localhost:4000/api/rest/stacks', body, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };

  return (
    <Container>
      <StackForm
        stacks={stacks}
        fetchingStacks={fetchingStacks}
        submit={onSubmit}
      />
    </Container>
  );
};

export default StackFormContainer;
