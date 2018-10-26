import styled, { css, keyframes } from 'styled-components';
import { bool, string } from 'prop-types';
import { placeholder } from '@frontendmonster/styled-utils';

const autofillFix = keyframes`
  100% {
      background: transparent;
      color: inherit;
  }
`;

const Input = styled('input')`
  width: 100%;
  margin: 0;
  padding: 8px 16px;
  border: 0;
  background-color: transparent;
  font-family: inherit;
  line-height: inherit;
  overflow: visible;
  transition: background-color 500ms;

  ${placeholder('color: inherit;')};
  ${placeholder('opacity: .4;')};
  ${placeholder('transition: opacity 500ms')};

  input:active {
    pointer-events:none;
  }

  &:focus {
    outline: 2px solid ${props => props.theme.colors.primary};
    outline-offset: -1;
  }

  ${props => props.noOutline && css`
    outline: unset !important;
  `};

  ${props => props.border && css`
    :-webkit-autofill,
    :-webkit-autofill:hover,
    :-webkit-autofill:focus,
    :-webkit-autofill:active {
      -webkit-animation: ${autofillFix} 0s forwards;
      animation: ${autofillFix} 0s forwards;
    }
  `};

  ${props => props.rtl && css`
    direction: rtl;
  `};

  ${props => !props.fill && css`
    &:focus {
      ${placeholder('opacity: .7;')};
    }
  `};

  ${props => props.border && css`
    border: 1px solid #ccc;

    :focus {
      border-color: ${props.theme.colors.primary};
    }
  `};

  ${props => props.fill && css`
    background-color: #eee;

    :focus {
      background-color: #ddd;
    }
  `};

  ${props => props.disabled && css`
    color: #666 !important;
    background-color: #aaa !important;
  `};

  ${props => props.disabled && props.border && css`
    border-color: #aaa !important;
    border-style: dashed !important;
    background-color: transparent !important;
  `};

  ${props => props.feedback && css`
    color: ${!props.fill && !props.border && props.theme.colors.feedbacks[props.feedback]};
    border-color: ${props.border && props.theme.colors.feedbacks[props.feedback]};

    :focus {
      outline-color: ${props.theme.colors.feedbacks[props.feedback]};
      border-color: ${props.theme.colors.feedbacks[props.feedback]};
    }
  `};
`;

Input.displayName = 'Input';

Input.propTypes = {
  ...Input.propTypes,
  feedback: string,
  sm: bool,
  lg: bool,
  fill: bool,
  border: bool,
  dark: bool,
};

Input.defaultProps = {
  ...Input.defaultProps,
  feedback: undefined,
  sm: false,
  lg: false,
  fill: false,
  border: false,
  dark: false,
};

export default Input;
