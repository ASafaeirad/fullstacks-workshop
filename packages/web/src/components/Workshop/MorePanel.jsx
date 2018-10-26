import React from 'react';
import { arrayOf, shape, string } from 'prop-types';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import styled from 'styled-components';
import { SolidButton } from '../SolidButton';
import About from './About';
import Curriculum from './Curriculum';

const Container = styled('div')`
  background-color: #f5f2eb;
  color: #222;
  flex: 1;
  position: relative;
`;

const Scroller = styled('div')`
  overflow: auto;
  padding: 1em 2em 10px;
  height: 100%;
`;

const ActionBar = styled('div')`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  text-align: end;

  &::after {
    position: absolute;
    top: -15px;
    left: 0;
    width: calc(100% - 4px);
    height: 15px;
    content: ' ';
    background-image: linear-gradient(to top, rgba(245, 242, 235, 0.5), rgba(245, 242, 235, 0));
  }
`;

const TabPanelContainer = styled('div')`
  height: 100%;
  padding-bottom: 46px;
`;

const MorePanel = ({ stacks, curriculum, description }) => (
  <Container>
    <Tabs>
      <TabList>
        <Tab>About</Tab>
        <Tab>Curriculum</Tab>
      </TabList>
      <TabPanel>
        <TabPanelContainer>
          <Scroller>
            <About
              description={description}
              stacks={stacks}
            />
          </Scroller>
        </TabPanelContainer>
      </TabPanel>
      <TabPanel>
        <TabPanelContainer>
          <Scroller>
            <Curriculum curriculum={curriculum} />
          </Scroller>
        </TabPanelContainer>
      </TabPanel>
    </Tabs>
    <ActionBar>
      <SolidButton>Signup</SolidButton>
    </ActionBar>
  </Container>
);

MorePanel.propTypes = {
  stacks: arrayOf(shape({})).isRequired,
  curriculum: arrayOf(shape({})).isRequired,
  description: string.isRequired,
};

export default MorePanel;
