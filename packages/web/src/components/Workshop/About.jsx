import React, { Fragment } from 'react';
import styled from 'styled-components';
import { arrayOf, shape } from 'prop-types';
import { Heading } from '../Heading';
import { P } from '../P';
import { Stacks } from '../Stacks';

const Prerequisite = ({ children }) => (
  <div>
    {children}
  </div>
);

const PrerequisitesContainer = styled('div')`
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

const About = ({ stacks, prerequisites }) => (
  <Fragment>
    <Heading tag="h4">Description:</Heading>
    <P>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</P>
    <Heading tag="h4">Prerequisites:</Heading>
    <Prerequisites prerequisites={prerequisites} />
    <Heading tag="h4">Skill Covered in this Course:</Heading>
    <Stacks stacks={stacks} />
  </Fragment>
);

About.propTypes = {
  stacks: arrayOf(shape({})),
  prerequisites: arrayOf(shape({})),
};

About.defaultProps = {
  stacks: [],
  prerequisites: [],
};

export default About;
