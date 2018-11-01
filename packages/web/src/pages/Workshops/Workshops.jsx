import React from 'react';
import classNames from 'classnames/bind';
import { Heading, Workshop } from '../../components';
import styles from './Workshops.scss';

const cx = classNames.bind(styles);

const workshop = {
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
  curriculum: [
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
  ],
  stacks: [
    { icon: 'maya' },
    { icon: 'unreal' },
    { icon: 'substance' },
  ],

  lecturer: { image: '/images/lecturers/alireza.png', name: 'Alireza', organization: 'Frontendmonster' },

  title: 'Game Development Introduction',
  thumbnail: 'game.png',
  time: 10,
  students: 20,
  skill: 'Beginner',
};


const Workshops = () => (
  <div className={cx('container')}>
    <Heading className={cx('heading')}>Game Development Workshops</Heading>
    <Workshop {...workshop} />
  </div>
);

export default Workshops;
