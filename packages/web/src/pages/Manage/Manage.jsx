import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Tab } from 'semantic-ui-react';
import styled from 'styled-components';
import WorkshopFormContainer from './WorkshopFormContainer';
import StackFormContainer from './StackFormContainer';
import ManageLecturers from './ManageLecturers';

const panes = [
  { tab: 'workshops', menuItem: 'Workshops', render: () => <Tab.Pane><WorkshopFormContainer /></Tab.Pane> },
  { tab: 'lecturers', menuItem: 'Lecturers', render: () => <Tab.Pane><ManageLecturers /></Tab.Pane> },
  { tab: 'stacks', menuItem: 'Stacks', render: () => <Tab.Pane><StackFormContainer /></Tab.Pane> },
];

const ContainerDiv = styled('div')`
  width: 100%;
`;

const Manage = (props) => {
  const getActiveIndex = (tab) => {
    const index = panes.findIndex(_ => _.tab === tab);
    return index === -1 ? 0 : index;
  };

  const changeTab = (e, tab) => { props.history.push(`/manage/${panes[tab.activeIndex].tab}`); };

  const activeIndex = getActiveIndex(props.match.params.tab);

  return (
    <ContainerDiv>
      <Tab menu={{ fluid: true }} onTabChange={changeTab} activeIndex={activeIndex} panes={panes} />
    </ContainerDiv>
  );
};

export default Manage;
