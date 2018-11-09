import { FastField, Formik } from 'formik';
import { func } from 'prop-types';
import React from 'react';
import { Button, Form, Header } from 'semantic-ui-react';
import { object, string } from 'yup';
import { InputField } from '../InputField';

const LecturerForm = ({ submit, lecturer, onCancel }) => {
  const initialValues = lecturer ? {
    slug: lecturer.slug,
    avatar: lecturer.avatar,
    name: lecturer.name,
    organization: lecturer.organization,
  } : {
    slug: '',
    avatar: '',
    name: '',
    organization: '',
  };

  const onSubmit = async (values, { setErrors }) => {
    try {
      await submit({ ...lecturer, ...values });
    } catch (error) {
      setErrors({ form: error });
    }
  };

  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={initialValues}
      validationSchema={
        object().shape({
          name: string().required('Required'),
          organization: string().required('Required'),
        })
      }
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
          <Button type="button" onClick={onCancel}>Cancel</Button>
          <Button type="reset" onClick={handleReset}>Reset</Button>
          <Button primary type="submit">Submit</Button>
        </Form>
      )}
    </Formik>
  );
};

LecturerForm.propTypes = {
  submit: func.isRequired,
};

export default LecturerForm;
