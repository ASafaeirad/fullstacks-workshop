import React from 'react';
import { string, number, oneOfType } from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Heading } from '../Heading';
import { Lecturer } from '../Lecturer';

const Container = styled('div')`
  background-color: #121114;
  color: #fff;
  width: 350px;
  display: flex;
  font-family: Rajdhani;
  flex-flow: column nowrap;
`;

const Thumb = styled('img')`
  width: 100%;
  height: 200px;
  background: #ccc;
  object-fit: cover;
`;

const ThumbContainer = styled('div')`
  width: 100%;
  object-fit: cover;
`;

const GeneralContent = styled('div')`
  display: flex;
  flex: 1;
  direction: rtl;
  flex-flow: column nowrap;
  padding: 1.5em 1.5em 1em;
  min-height: 240px;
  justify-content: space-between;
`;

const WorkshopMetadata = styled('div')`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

const MetadataContainer = styled('div')`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  color: #7282ff;
`;

const MetadataValue = styled('div')`
  margin-top: 2px;
  position: relative;
`;

const Metadata = ({ value, icon }) => (
  <MetadataContainer>
    <FontAwesomeIcon icon={icon} size="sm" />
    <MetadataValue>{value}</MetadataValue>
  </MetadataContainer>
);

Metadata.propTypes = {
  icon: string.isRequired,
  value: oneOfType([string, number]).isRequired,
};

const GeneralPanel = ({ thumbnail, title, lecturers, time, students, skill }) => console.log(thumbnail) || (
  <Container>
    <ThumbContainer>
      <Thumb src={`data:image/jpg;base64,${thumbnail.data}`} />
    </ThumbContainer>
    <GeneralContent>
      <Heading tag="h3" size="2em">{title}</Heading>
      <Lecturer {...lecturers[0]} />
      <WorkshopMetadata>
        <Metadata icon="clock" value={`${time}H`} />
        <Metadata icon="users" value={students} />
        <Metadata icon="graduation-cap" value={skill} />
      </WorkshopMetadata>
    </GeneralContent>
  </Container>
);

export default GeneralPanel;
