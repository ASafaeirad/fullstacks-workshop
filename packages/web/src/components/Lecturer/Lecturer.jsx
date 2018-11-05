import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';
import { Avatar } from '../Avatar';

const Container = styled('div')`
  display: flex;
  flex-flow: row nowrap;
`;

const LecturerInfo = styled('div')`
  margin-left: 10px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
`;

const Name = styled('span')`
  display: block;
  font-size: 1.2em;
  line-height: .9em;
`;
const Organization = styled('span')`
  font-size: .8em;
  opacity: .4;
`;

const Lecturer = ({ name, avatar, organization }) => (
  <Container>
    <Avatar src={avatar} />
    <LecturerInfo>
      <Name>{name}</Name>
      <Organization>{organization}</Organization>
    </LecturerInfo>
  </Container>
);

Lecturer.propTypes = {
  name: string.isRequired,
  avatar: string.isRequired,
  organization: string.isRequired,
};

export default Lecturer;
