import React, { useState, useEffect } from 'react';
import { Field, FastField, Formik } from 'formik';
import { func } from 'prop-types';
import { Button, Form, FormGroup, Grid, Header, Icon, Image, Segment, Message } from 'semantic-ui-react';
import { array, mixed, number, object, string } from 'yup';
import { Curriculum, EditableCurriculum } from '../Curriculum';
import { DropdownField } from '../DropdownField';
import { InputField } from '../InputField';
import { TextAreaField } from '../TextAreaField';
import { Stack } from '../Stack';

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

const WorkshopForm = ({ submit, workshop, onChange, prerequisites, lecturers, stacks, fetchingLecturers, fetchingWorkshops, fetchingStacks }) => {
  const [curriculum, setCurriculum] = useState([]);
  const [thumbnail, setThumbnail] = useState();
  const [thumbsrc, setThumbsrc] = useState();

  const initialValues = workshop ? {
    slug: workshop.slug,
    title: workshop.title,
    description: workshop.description,
    lecturers: workshop.lecturers.map(l => l._id),
    stacks: workshop.stacks.map(s => s._id),
    prerequisites: workshop.prerequisites.map(p => p._id),
    skill: workshop.skill,
    time: workshop.time,
  } : {
    slug: '',
    title: '',
    description: '',
    lecturers: [],
    stacks: [],
    prerequisites: [],
    skill: null,
    time: 12,
  };

  useEffect(() => {
    if (workshop) {
      setCurriculum(workshop.curriculum);

      if (workshop.thumbnail) {
        setThumbsrc(`data:image/jpg;base64,${workshop.thumbnail.data}`);
      }
    }
  }, [workshop]);

  const initalCurriculum = (workshop && workshop.curriculum) ? workshop.curriculum : [];

  const prerequisitesOptions = prerequisites.map(pre => ({
    text: pre.title,
    key: pre._id,
    value: pre._id,
  }));

  const stackOptions = stacks.map(stack => ({
    key: stack._id,
    value: stack._id,
    text: stack.name,
    content: <Stack icon={stack.icon} />,
  }));

  const lecturerOptions = lecturers.map(lecturer => ({
    key: lecturer._id,
    text: lecturer.name,
    value: lecturer._id,
    image: { avatar: true, src: lecturer.avatar },
  }));

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
        ...workshop,
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
      initialValues={initialValues}
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

          <Field label="Slug" name="slug" placeholder="game_development" fluid component={InputField} />
          <Field label="Title" name="title" placeholder="Game development" fluid component={InputField} />
          <Field label="Description" name="description" placeholder="Description..." component={TextAreaField} />
          <Field
            label="Stacks"
            id="stacks"
            name="stacks"
            component={DropdownField}
            fluid
            multiple
            search
            selection
            clearable
            loading={fetchingStacks}
            disabled={fetchingStacks}
            defaultValue={values.stacks ? undefined : []}
            options={stackOptions}
          />
          <Field
            label="Lecturers"
            id="lecturers"
            name="lecturers"
            component={DropdownField}
            fluid
            multiple
            search
            selection
            clearable
            loading={fetchingLecturers}
            disabled={fetchingLecturers}
            defaultValue={values.lecturers ? undefined : []}
            options={lecturerOptions}
          />
          <Field
            label="Prerequisites"
            id="prerequisites"
            name="prerequisites"
            component={DropdownField}
            fluid
            multiple
            search
            selection
            clearable
            loading={fetchingWorkshops}
            disabled={fetchingWorkshops}
            defaultValue={values.prerequisites ? undefined : []}
            options={prerequisitesOptions}
          />
          <FormGroup widths="equal">
            <Field
              label="Time"
              name="time"
              component={InputField}
              fluid
            />
            <Field
              label="Skill"
              name="skill"
              component={DropdownField}
              options={skillOptions}
              selection
            />
          </FormGroup>
          <Segment>
            <Header>Curriculum</Header>
            <EditableCurriculum initalCurriculum={initalCurriculum} onChange={setCurriculum} />
          </Segment>
          {errors.form && <Message error>{errors.form}</Message>}
          <Button primary type="submit">Submit</Button>
          <Button type="reset" onClick={handleReset}>Reset</Button>
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
