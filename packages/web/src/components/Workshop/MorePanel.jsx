import React from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import { arrayOf, shape } from 'prop-types';
import styled from 'styled-components';
import { SolidButton } from '../SolidButton';
import About from './About';
import Curriculum from './Curriculum';

const Container = styled('div')`
  background-color: #fff;
  color: #222;
  flex: 1;
  position: relative;
`;

const Signup = styled(SolidButton)`
  font-weight: 500;
  background-color: #67f;
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
  height: 5 6px;
  width: 100%;
  text-align: end;
  background-color: white;

  &::after {
    position: absolute;
    top: -15px;
    left: 0;
    width: calc(100% - 4px);
    height: 15px;
    content: ' ';
    background-image: linear-gradient(to top, rgba(255,255,255,0.5), rgba(255,255,255,0));
  }
`;

const TabPanelContainer = styled('div')`
  height: 100%;
  padding-bottom: 46px;
`;

const MorePanel = ({ stacks, curriculum }) => (
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
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
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
      <Signup>Signup</Signup>
    </ActionBar>
  </Container>
);

MorePanel.propTypes = {
  stacks: arrayOf(shape({})).isRequired,
  curriculum: arrayOf(shape({})).isRequired,
};

export default MorePanel;
