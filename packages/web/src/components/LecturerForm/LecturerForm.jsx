import { FastField, Formik } from 'formik';
import { func } from 'prop-types';
import React from 'react';
import { Button, Form, Header } from 'semantic-ui-react';
import { object, string } from 'yup';
import { InputField } from '../InputField';

const LecturerForm = ({ submit }) => {
  const onSubmit = async (values, { setErrors }) => {
    console.log('Submit');

    try {
      await submit(values);
    } catch (error) {
      setErrors({ form: error });
    }
  };

  return (
    <Formik
      initialValues={{
        slug: '',
        avatar: '',
        name: '',
        organization: '',
      }}
      validationSchema={
        object().shape({
          name: string().required('Required'),
          organization: string().required('Required'),
        })
      }
      onSubmit={onSubmit}
    >
      {({ handleSubmit, handleReset }) => (
        <Form onSubmit={handleSubmit} error>
          <Header as="h1">Submit Lecturer</Header>
          <FastField
            label="Slug"
            name="slug"
            placeholder="alireza"
            fluid
            component={InputField}
          />
          <FastField
            label="Name"
            name="name"
            placeholder="Alireza"
            fluid
            component={InputField}
          />
          <FastField
            label="Organization"
            name="organization"
            placeholder="Fullstacks"
            fluid
            component={InputField}
          />
          <FastField
            label="Avatar"
            name="avatar"
            placeholder="Fullstacks"
            fluid
            component={InputField}
          />
          <Button primary type="submit">Submit</Button>
          <Button type="reset" onClick={handleReset}>Reset</Button>
        </Form>
      )}
    </Formik>
  );
};

LecturerForm.propTypes = {
  submit: func.isRequired,
};

export default LecturerForm;
