import React, { Fragment } from 'react';
import styled from 'styled-components';
import { arrayOf, shape, string } from 'prop-types';
import { Heading } from '../Heading';
import { P } from '../P';
import { Stacks } from '../Stacks';

const Prerequisite = ({ children }) => (
  <div>
    {children}
  </div>
);

const PrerequisitesContainer = styled('div')`
  font-family: Rajdhani;
  margin-bottom: 1em;
`;

const Prerequisites = ({ prerequisites }) => (
  <PrerequisitesContainer>
    {prerequisites.length > 0
      ? prerequisites.map(_ => <Prerequisite>_</Prerequisite>)
      : 'Nothing'
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
    <Heading tag="h4">Description:</Heading>
    <P>{description}</P>
    <Heading tag="h4">Prerequisites:</Heading>
    <Prerequisites prerequisites={prerequisites} />
    <Heading tag="h4">Skill Covered in this Course:</Heading>
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
