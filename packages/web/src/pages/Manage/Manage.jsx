import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { Button, Form, Message, Header, Icon, Container, Label, Image, FormGroup, Segment, Grid, Dropdown } from 'semantic-ui-react';
import { Formik, Field } from 'formik';
import { object, string, array, number } from 'yup';
import { func } from 'prop-types';
import { InputField, DropdownField, Stack, TextAreaField, Curriculum } from '../../components';
import styles from './Manage.scss';

const cx = classNames.bind(styles);

const Manage = () => (
  <Container className={cx('container')}>
    <AddWorkshop submit={(values) => {
      console.log(values);
    }}
    />
  </Container>
);

const curriculum = [
  {
    title: 'Introduction',
    lessons: [
      'Lesson 1',
      'Lesson 2',
      'Lesson 3',
      'Lesson 4',
    ],
  },
  {
    title: 'Game Design',
    lessons: [
      'Lesson 1',
      'Lesson 4',
    ],
  },
  {
    title: 'Programming',
    lessons: [
      'Lesson 1',
      'Lesson 2',
      'Lesson 3',
      'Lesson 4',
      'Lesson 5',
    ],
  },
];


const stacksOption = [
  {
    key: 'Unity',
    value: 'Unity',
    text: 'Unity',
    content: <Stack icon="unreal" />,
  },
  {
    key: 'React',
    value: 'React',
    text: 'React',
    content: <Stack icon="react" />,
  },
];

const lecturersOption = [
  {
    text: 'Alireza',
    value: 'Alireza',
    image: { avatar: true, src: '/images/lecturer/alireza.png' },
  },
];

const skillOptions = [
  {
    text: 'Beginner',
    value: 'Beginner',
  },
  {
    text: 'Advanced',
    value: 'Advanced',
  },
  {
    text: 'Expert',
    value: 'Expert',
  },
];

const prerequisitesOptions = [
  {
    text: 'React',
    value: 'react',
  },
];

class AddWorkshop extends React.PureComponent {
  state = {
    thumb: null,
  }

  render() {
    const { submit } = this.props;
    const { thumb } = this.state;

    return (
      <Formik
        initialValues={{
          title: '',
          description: '',
          lecturer: [],
          stacks: [],
          prerequisites: [],
          skill: null,
          time: 12,
        }}
        validationSchema={
      object().shape({
        title: string().required('Required'),
        description: string().required('Required'),
        lecturer: array(string()).required('Required'),
        stacks: array(string()),
        skill: string().required('Required'),
        time: number('Must be a number').required('Required'),
      })
    }
        onSubmit={async (values, { setErrors }) => {
          try {
            await submit(values);
          } catch (error) {
            setErrors({ form: error });
          }
        }}
      >
        {({ errors, handleChange, setFieldValue, handleSubmit, handleReset, initialValues, values }) => (
          <Form error>
            <Header as="h1">Submit Workshop</Header>
            <Segment.Group>
              {thumb
                ? (
                  <Segment>
                    <Image centered size="medium" src={thumb} />
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
                        hidden
                        id="thumbnail"
                        name="thumbnail"
                        type="file"
                        accept="image/*"
                        onChange={(event) => {
                          const [file] = event.currentTarget.files;
                          setFieldValue('thumbnail', file);
                          if (!file) { return; }

                          let reader = new FileReader();

                          reader.onloadend = () => {
                            this.setState({ thumb: reader.result });
                          };

                          reader.readAsDataURL(file);
                        }}
                      />
                    </label>
                  </Grid.Column>
                </Grid>
              </Segment>
            </Segment.Group>

            <Field label="Title" name="title" placeholder="First Name" fluid component={InputField} />
            <Field label="Description" name="description" placeholder="Description" component={TextAreaField} />
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
              defaultValue={values.stacks ? undefined : []}
              options={stacksOption}
            />
            <Field
              label="Lecturer"
              id="lecturer"
              name="lecturer"
              component={DropdownField}
              fluid
              multiple
              search
              selection
              clearable
              defaultValue={values.lecturer ? undefined : []}
              options={lecturersOption}
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
              <Curriculum
                curriculum={curriculum}
                editable
                addLesson={this.addLesson}
                removeLesson={this.removeLesson}
                addSection={this.addSection}
                onRemoveLesson={(e) => {
                  curriculum[e.sectionIndex].lessons.splice(e.index, 1);
                  setFieldValue('curriculum', curriculum);
                }}
                onSubmit={(e) => {
                  curriculum[e.sectionIndex].lessons[e.index] = e.value;
                  setFieldValue('curriculum', curriculum);
                }}
                onAddLesson={(e) => {
                  curriculum[e.sectionIndex].lessons.push(e.value);
                  setFieldValue('curriculum', curriculum);
                }}
                onTitleChange={(e) => {
                  curriculum[e.sectionIndex].title = e.value;
                  setFieldValue('curriculum', curriculum);
                }}
                onSectionRemove={(e) => {
                  curriculum.splice(e.sectionIndex, 1);
                  setFieldValue('curriculum', curriculum);
                }}
                onAddSection={(e) => {
                  curriculum.push({ title: e.value, lessons: [] });
                  setFieldValue('curriculum', curriculum);
                }}
                onReorderLesson={(e) => {
                  const tmp = curriculum[e.sectionIndex].lessons[e.from];
                  curriculum[e.sectionIndex].lessons[e.from] = curriculum[e.sectionIndex].lessons[e.to];
                  curriculum[e.sectionIndex].lessons[e.to] = tmp;
                  setFieldValue('curriculum', curriculum);
                }}
                onReorderSection={(e) => {
                  const tmp = curriculum[e.from];
                  curriculum[e.from] = curriculum[e.to];
                  curriculum[e.to] = tmp;
                  setFieldValue('curriculum', curriculum);
                }}
              />
            </Segment>
            <Button primary type="submit" onClick={handleSubmit}>Submit</Button>
            <Button type="reset" onClick={handleReset}>Reset</Button>
          </Form>
        )}
      </Formik>
    );
  }
}

AddWorkshop.propTypes = {
  submit: func.isRequired,
};


export default Manage;
