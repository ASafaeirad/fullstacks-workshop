import React, { Fragment } from 'react';
import styled from 'styled-components';
import { arrayOf, shape, string } from 'prop-types';
import { Heading } from '../Heading';
import { P } from '../P';
import { Stacks } from '../Stacks';
import { Muted } from '../Muted';

const Prerequisite = props => (
  <div {...props} />
);

const PrerequisitesContainer = styled('div')`
  font-family: ${props => (props.latin ? 'Rajdhani' : 'Vazir')};
  text-align: ${props => (props.latin ? 'unset' : 'start')};
  margin-bottom: 1em;
`;

const Prerequisites = ({ prerequisites }) => (
  <PrerequisitesContainer>
    {prerequisites.length > 0
      ? prerequisites.map(_ => <Prerequisite>_</Prerequisite>)
      : <Muted>ندارد</Muted>
     }
  </PrerequisitesContainer>
);

Prerequisites.propTypes = {
  prerequisites: arrayOf(shape({})),
};

Prerequisites.defaultProps = {
  prerequisites: [],
};

const About = ({ stacks, prerequisites, description }) => (
  <Fragment>
    <Heading tag="h4">توضیحات:</Heading>
    <P>{description}</P>
    <Heading tag="h4">پیشنیازها:</Heading>
    <Prerequisites prerequisites={prerequisites} />
    <Heading tag="h4">مهارت هایی آموزشی دوره:</Heading>
    <Stacks stacks={stacks} />
  </Fragment>
);

About.propTypes = {
  stacks: arrayOf(shape({})),
  prerequisites: arrayOf(shape({})),
  description: string.isRequired,
};

About.defaultProps = {
  stacks: [],
  prerequisites: [],
};

export default About;
