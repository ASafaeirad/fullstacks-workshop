import React, { useState, useEffect } from 'react';
import { FastField, Field, Formik } from 'formik';
import { func } from 'prop-types';
import { Button, Form, FormGroup, Grid, Header, Icon, Image, Segment, Message } from 'semantic-ui-react';
import { array, mixed, number, object, string } from 'yup';
import { Persist } from 'formik-persist';
import { Curriculum, EditableCurriculum } from '../Curriculum';
import { DropdownField } from '../DropdownField';
import { InputField } from '../InputField';
import { TextAreaField } from '../TextAreaField';

const skillOptions = [
  {
    text: 'Beginner',
    value: 'beginner',
  },
  {
    text: 'Advanced',
    value: 'advanced',
  },
  {
    text: 'Expert',
    value: 'expert',
  },
];

const WorkshopForm = ({ submit, onChange, prerequisites, lecturers, stacks, fetchingLecturers, fetchingWorkshops, fetchingStacks }) => {
  const [curriculum, setCurriculum] = useState([]);
  const [thumbnail, setThumbnail] = useState();
  const [thumbsrc, setThumbsrc] = useState();

  const onSelectThumbnail = async (event) => {
    const [file] = event.currentTarget.files;

    setThumbnail(file);

    if (!file) { return; }

    let reader = new FileReader();

    reader.onloadend = () => {
      setThumbsrc(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const onSubmit = async (values, { setErrors }) => {
    try {
      await submit({
        ...values,
        ...{
          curriculum,
          thumbnail,
        },
      });
    } catch (error) {
      setErrors({ form: error.message });
    }
  };

  return (
    <Formik
      initialValues={{
        slug: '',
        title: '',
        description: '',
        lecturers: [],
        stacks: [],
        prerequisites: [],
        skill: null,
        time: 12,
      }}
      validationSchema={
        object().shape({
          slug: string().required('Required'),
          title: string().required('Required'),
          description: string().required('Required'),
          lecturers: array(string().required('lectuers shoud have id value')).required('Required'),
          stacks: array(string()),
          prerequisites: array(string().required('Prerequisites shoud have id value')),
          skill: mixed().oneOf(['beginner', 'advanced', 'expert']).required('Required'),
          time: number('Must be a number').required('Required'),
        })
      }
      onSubmit={onSubmit}
      onChange={console.log}
      validateOnBlur
      validateOnChange={false}
    >
      {({ handleSubmit, handleReset, values, errors }) => (

        <Form onSubmit={handleSubmit} error={Boolean(errors.form)}>
          <Header as="h1">Submit Workshop</Header>
          <Segment.Group>
            {thumbnail
              ? (
                <Segment>
                  <Image centered size="medium" src={thumbsrc} />
                </Segment>
              )
              : (
                <Segment placeholder>
                  <Header icon>
                    <Icon name="images outline" />No documents are listed for this customer.
                  </Header>
                </Segment>
              )}
            <Segment secondary>
              <Grid>
                <Grid.Column textAlign="center" verticalAlign="middle">
                  <label
                    as="label"
                    htmlFor="thumbnail"
                  >
                    <Button
                      icon="upload"
                      label={{
                        basic: true,
                        content: 'Select Thumbnail',
                      }}
                      labelPosition="right"
                    />
                    <input
                      id="thumbnail"
                      hidden
                      type="file"
                      accept="image/*"
                      onChange={onSelectThumbnail}
                    />
                  </label>
                </Grid.Column>
              </Grid>
            </Segment>
          </Segment.Group>

          <FastField onBlur={onChange} label="Slug" name="slug" placeholder="game_development" fluid component={InputField} />
          <FastField onBlur={onChange} label="Title" name="title" placeholder="Game development" fluid component={InputField} />
          <FastField onBlur={onChange} label="Description" name="description" placeholder="Description..." component={TextAreaField} />
          <Field
            label="Stacks"
            id="stacks"
            name="stacks"
            onBlur={onChange}
            component={DropdownField}
            fluid
            multiple
            search
            selection
            clearable
            loading={fetchingStacks}
            disabled={fetchingStacks}
            defaultValue={values.stacks ? undefined : []}
            options={stacks}
          />
          <Field
            label="Lecturers"
            id="lecturers"
            name="lecturers"
            onBlur={onChange}
            component={DropdownField}
            fluid
            multiple
            search
            selection
            clearable
            loading={fetchingLecturers}
            disabled={fetchingLecturers}
            defaultValue={values.lecturers ? undefined : []}
            options={lecturers}
          />
          <Field
            label="Prerequisites"
            id="prerequisites"
            name="prerequisites"
            onBlur={onChange}
            component={DropdownField}
            fluid
            multiple
            search
            selection
            clearable
            loading={fetchingWorkshops}
            disabled={fetchingWorkshops}
            defaultValue={values.prerequisites ? undefined : []}
            options={prerequisites}
          />
          <FormGroup widths="equal">
            <FastField
              label="Time"
              name="time"
              onBlur={onChange}
              component={InputField}
              fluid
            />
            <FastField
              label="Skill"
              name="skill"
              onBlur={onChange}
              component={DropdownField}
              options={skillOptions}
              selection
            />
          </FormGroup>
          <Segment>
            <Header>Curriculum</Header>
            <EditableCurriculum initalCurriculum={curriculum} onChange={setCurriculum} />
          </Segment>
          {errors.form && <Message error>{errors.form}</Message>}
          <Button primary type="submit">Submit</Button>
          <Button type="reset" onClick={handleReset}>Reset</Button>
          <Persist name="wsf" debounce={400} />
        </Form>
      )
      }
    </Formik>
  );
};

WorkshopForm.propTypes = {
  submit: func.isRequired,
};

export default WorkshopForm;
