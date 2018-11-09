import { FastField, Formik } from 'formik';
import { func } from 'prop-types';
import React from 'react';
import { Button, Form, Header } from 'semantic-ui-react';
import { object, string } from 'yup';
import { InputField } from '../InputField';


const StackForm = ({ submit, stack, onCancel }) => {
  const initialValues = stack
    ? { name: stack.name, icon: stack.icon }
    : { name: '', icon: '' };

  const onSubmit = async (values, { setErrors }) => {
    try {
      await submit({ ...stack, ...values });
    } catch (error) {
      setErrors({ form: error });
    }
  };

  return (
    <Formik
      initialValues={initialValues}
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
          <Button type="button" onClick={onCancel}>Cancel</Button>
          <Button type="reset" onClick={handleReset}>Reset</Button>
          <Button primary type="submit">Submit</Button>
        </Form>
      )}
    </Formik>
  );
};

StackForm.propTypes = {
  submit: func.isRequired,
};

export default StackForm;
