import React from 'react';
import styled from 'styled-components';
import { string, node, bool } from 'prop-types';

const Div = styled('div')`
  position:relative;
  margin-bottom: 24px;
  width: ${props => props.width};
`;

const Span = styled('span')`
  position: absolute;
  top: 100%;
  right: 0;
  padding: 2px;
  font-size: 12px;
  color: ${props => props.theme.colors.feedbacks.error};
`;

const FormItem = ({ showError, errorMessage, width, children }) => (
  <Div width={width}>
    {children}

    {showError && (
    <Span>
      {errorMessage}
    </Span>
    )}
  </Div>
);

FormItem.propTypes = {
  showError: bool,
  errorMessage: string,
  width: string,
  children: node.isRequired,
};

FormItem.defaultProps = {
  showError: false,
  errorMessage: null,
  width: '100%',
};

export default FormItem;
