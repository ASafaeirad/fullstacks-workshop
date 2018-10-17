import React from 'react';
import styled from 'styled-components';
import { Heading } from '../Heading';
import { Lecturer } from '../Lecturer';

const Container = styled('div')`
  background-color: #222;
  color: #fff;
  width: 350px;
  display: flex;
  flex-flow: column nowrap;
`;

const Thumb = styled('img')`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ThumbContainer = styled('div')`
  width: 100%;
  object-fit: cover;
`;

const GeneralContent = styled('div')`
  display: flex;
  flex: 1;
  flex-flow: column nowrap;
  padding: 1.5em;
  min-height: 240px;
  justify-content: space-between;
`;

const WorkshopMetadata = styled('div')`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

const Metadata = styled('span')``;


const GeneralPanel = ({ thumbnail, title, lecturer, time, students, skill }) => (
  <Container>
    <ThumbContainer>
      <Thumb src={`/images/workshops/${thumbnail}`} />
    </ThumbContainer>
    <GeneralContent>
      <Heading tag="h3" size="2em">{title}</Heading>
      <Lecturer {...lecturer} />
      <WorkshopMetadata>
        <Metadata>{time}H</Metadata>
        <Metadata>{students}</Metadata>
        <Metadata>{skill}</Metadata>
      </WorkshopMetadata>
    </GeneralContent>
  </Container>
);

export default GeneralPanel;
