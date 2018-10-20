import React, { Component } from 'react';
import styled from 'styled-components';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import About from './About';
import { Heading } from '../Heading';
import { SolidButton } from '../SolidButton';
import GeneralPanel from './GeneralPanel';

const Signup = styled(SolidButton)`
  background-color: #67f;
`;

const stacks = [
  { icon: 'maya' },
  { icon: 'unreal' },
  { icon: 'substance' },
];

const Container = styled('div')`
  display: flex;
  flex-flow: row wrap;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  width: 800px;
  height: 430px;
  border-radius: 5px;
  overflow: hidden;
`;

const MorePanel = styled('div')`
  background-color: #fff;
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

class Workshop extends Component {
  state = {
  }

  render() {
    return (
      <Container>
        <GeneralPanel
          lecturer={{ image: 'alireza.png', name: 'Alireza', organization: 'Frontendmonster' }}
          title="Game Development Introduction"
          thumbnail="game.png"
          time={10}
          students={20}
          skill="Beginner"
        />
        <MorePanel>
          <Tabs>
            <TabList>
              <Tab>About</Tab>
              <Tab>Curriculum</Tab>
            </TabList>
            <TabPanel>
              <TabPanelContainer>
                <Scroller>
                  <About stacks={stacks} />
                </Scroller>
              </TabPanelContainer>
            </TabPanel>
            <TabPanel>
              <TabPanelContainer>
                <Scroller>
                  Curriculum
                </Scroller>
              </TabPanelContainer>
            </TabPanel>
          </Tabs>
          <ActionBar>
            <Signup>Signup</Signup>
          </ActionBar>
        </MorePanel>
      </Container>
    );
  }
}

export default Workshop;
