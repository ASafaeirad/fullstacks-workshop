import { FastField, Formik } from 'formik';
import { func } from 'prop-types';
import React from 'react';
import { Button, Form, Header } from 'semantic-ui-react';
import { object, string } from 'yup';
import { Persist } from 'formik-persist';
import { InputField } from '../InputField';


const StackForm = ({ submit }) => {
  const onSubmit = async (values, { setErrors }) => {
    try {
      await submit(values);
    } catch (error) {
      setErrors({ form: error });
    }
  };

  return (
    <Formik
      initialValues={{ name: '', icon: '' }}
      validationSchema={
        object().shape({
          name: string().required('Required'),
          icon: string().required('Required'),
        })
      }
      onSubmit={onSubmit}
    >
      {({ handleSubmit, handleReset }) => (
        <Form onSubmit={handleSubmit} error>
          <Header as="h1">Submit Stacks</Header>
          <FastField label="Name" name="name" placeholder="unity" fluid component={InputField} />
          <FastField label="Icon" name="icon" placeholder="https://example.com/icon.svg" fluid component={InputField} />
          <Button primary type="submit">Submit</Button>
          <Button type="reset" onClick={handleReset}>Reset</Button>
          <Persist name="sf" debounce={400} />
        </Form>
      )}
    </Formik>
  );
};

StackForm.propTypes = {
  submit: func.isRequired,
};

export default StackForm;
