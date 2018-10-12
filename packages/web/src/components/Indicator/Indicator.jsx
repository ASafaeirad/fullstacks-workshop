import React from 'react';
import { number, bool, arrayOf, string } from 'prop-types';
import styled from 'styled-components';
import classname from 'classnames/bind';
import styles from './Indicator.scss';

const cx = classname.bind(styles);

const Circle = styled('div')`
  width: 0;
  height: 0;
  border-style: solid;
  border-width: ${props => `${props.size * 0.87}px ${props.size / 2}px 0 ${props.size / 2}px`};
  border-color: ${props => props.color} transparent transparent transparent;
  margin-bottom: ${props => props.gap}px;
  ${props => props.active && 'transform: scale(1.5) rotate(90deg)'};
  transition: transform 500ms;
`;

const Container = styled('div')`
  position: relative;
  opacity: ${props => (props.active ? 1 : 0.2)};
  transition: opacity 500ms;
  cursor: pointer;
  font-size: ${props => (props.active ? '16px' : '14px')};

  &:hover {
    opacity: ${props => !props.active && 0.5};
  }
`;

const Text = styled('span')`
  overflow: hidden;
  text-align: right;
  position: absolute;
  ${props => (props.right ? 'left: calc(100% + 10px);' : 'right: calc(100% + 10px)')};
  top: 50%;
  transform: translateY(-50%);
  ${props => props.color && `color: ${props.color}`};

  &:hover {
    span{
      ${props => (!props.right ? 'left: 0' : 'right: 0')};
    }
  }

  span {
    position: relative;
    ${props => props.right && (props.active ? 'right: 0' : 'right: 100%')};
    ${props => !props.right && (props.active ? 'left: 0' : 'left: 100%')};
    transition: right 300ms ease-out, left 300ms ease-out;
    letter-spacing: 2px;

  }
`;

const SectionIndecator = ({ name, color, gap, active, size, right }) => (
  <Container active={active}>
    <Text color={color} right={right} active={active}>
      <span>{name}</span>
    </Text>
    <Circle size={size} color={color} gap={gap} active={active} />
  </Container>
);

SectionIndecator.propTypes = {
  name: string.isRequired,
  color: string,
  gap: number,
  active: bool,
  size: number,
  right: bool,
};

SectionIndecator.defaultProps = {
  color: 'white',
  active: false,
  size: 6,
  gap: 15,
  right: false,
};

const Indicator = ({ current, sections, className, size, gap, right }) => (
  <div className={cx('root', className)} style={{ width: size }}>
    {sections && sections.map((section, index) => <SectionIndecator key={section} right={right} active={current === index} name={section} gap={gap} size={size} />)}
  </div>
);

Indicator.propTypes = {
  current: number.isRequired,
  sections: arrayOf(string).isRequired,
  size: number,
  gap: number,
  right: bool,
};

Indicator.defaultProps = {
  size: 6,
  gap: 15,
  right: false,
};

export default Indicator;
