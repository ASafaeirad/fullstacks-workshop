import React, { Component } from 'react';
import styled from 'styled-components';
import GeneralPanel from './GeneralPanel';
import MorePanel from './MorePanel';

const curriculum = [
  {
    title: 'Introduction',
    lessons: [
      'Lesson 1',
      'Lesson 2',
      'Lesson 3',
      'Lesson 4',
    ],
  },
  {
    title: 'Game Design',
    lessons: [
      'Lesson 1',
      'Lesson 4',
    ],
  },
  {
    title: 'Programming',
    lessons: [
      'Lesson 1',
      'Lesson 2',
      'Lesson 3',
      'Lesson 4',
      'Lesson 5',
    ],
  },
];

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
        <MorePanel stacks={stacks} curriculum={curriculum} />
      </Container>
    );
  }
}

export default Workshop;
