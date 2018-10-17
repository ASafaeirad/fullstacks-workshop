import React, { Component } from 'react';
import styled from 'styled-components';
import { Heading } from '../Heading';
import { Stacks } from '../Stacks';
import { P } from '../P';
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
  padding: 2em 2em 10px;
  height: 100%;
`;

const About = styled('div')`
  height: 100%;
  padding-bottom: 46px;
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
    background-image: linear-gradient(to top, rgba(255,255,255,1), rgba(255,255,255,0));
  }
`;

const Prerequisite = ({ children }) => (
  <div>
    {children}
  </div>
);

const PrerequisitesContainer = styled('div')`
  margin-bottom: 1em;
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
          <About>
            <Scroller>
              <Heading tag="h4">Description:</Heading>
              <P>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</P>
              <Heading tag="h4">Prerequisites:</Heading>
              <PrerequisitesContainer>
                <Prerequisite>Basic Git</Prerequisite>
                <Prerequisite>Advanced HTML</Prerequisite>
                <Prerequisite>Advanced CSS</Prerequisite>
              </PrerequisitesContainer>
              <Heading tag="h4">Skill Covered in this Course:</Heading>
              <Stacks stacks={stacks} />
            </Scroller>
          </About>
          <ActionBar>
            <Signup>Signup</Signup>
          </ActionBar>
        </MorePanel>
      </Container>
    );
  }
}

export default Workshop;
