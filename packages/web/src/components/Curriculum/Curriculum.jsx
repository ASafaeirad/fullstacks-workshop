import React from 'react';
import styled from 'styled-components';
import { string, arrayOf } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Heading } from '../Heading';

const LessonContainer = styled('div')`
  display: flex;
  align-items: center;
  margin-bottom: 0;
  padding-left: 15px;
`;

const LessonHeading = styled('span')`
  margin-left: 4px;
`;

const Lesson = ({ title }) => (
  <LessonContainer>
    <FontAwesomeIcon icon="angle-right" size="xs" />
    <LessonHeading>
      {title}
    </LessonHeading>
  </LessonContainer>
);

Lesson.propTypes = {
  title: string.isRequired,
};

const LessonsContainer = styled('div')`
  margin-bottom: 10px;
`;

const Section = ({ lessons, title }) => (
  <>
    <Heading tag="h4">{title}</Heading>}
    <LessonsContainer>
      {lessons.map((lesson, i) => <Lesson key={lesson} title={lesson} />)}
    </LessonsContainer>
  </>
);

Section.propTypes = {
  title: string.isRequired,
  lessons: arrayOf(string).isRequired,
};

const Curriculum = ({ curriculum }) => curriculum.map((section, i) => (<Section sectionIndex={i} key={section.title} />));

export default Curriculum;
