import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Tab } from 'semantic-ui-react';
import styled from 'styled-components';
import WorkshopFormContainer from './WorkshopFormContainer';
import StackFormContainer from './StackFormContainer';
import LecturerFormContainer from './LecturerFormContainer';

const panes = [
  { menuItem: 'Workshops', render: () => <Tab.Pane><WorkshopFormContainer /></Tab.Pane> },
  { menuItem: 'Lecturers', render: () => <Tab.Pane><LecturerFormContainer /></Tab.Pane> },
  { menuItem: 'Stacks', render: () => <Tab.Pane><StackFormContainer /></Tab.Pane> },
];

const ContainerDiv = styled('div')`
  width: 100%;
`;

const Manage = () => (
  <ContainerDiv>
    <Tab menu={{ fluid: true }} panes={panes} />
  </ContainerDiv>
);

export default Manage;
