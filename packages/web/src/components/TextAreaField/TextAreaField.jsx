import React from 'react';
import { TextArea, Form, Label } from 'semantic-ui-react';

const TextAreaField = ({
  field,
  form: { touched, errors },
  ...props
}) => {
  const showError = Boolean(touched[field.name] && errors[field.name]);
  return (
    <Form.Field
      inline
      error={showError}
    >
      <Form.TextArea
        {...field}
        {...props}
      />
      {showError && <Label basic color="red" pointing>{errors[field.name]}</Label>}
    </Form.Field>
  );
};

export default TextAreaField;
