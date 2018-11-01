import React from 'react';
import { Form, Label } from 'semantic-ui-react';

const InputField = ({
  field,
  form: { touched, errors },
  ...props
}) => {
  const showError = Boolean(touched[field.name] && errors[field.name]);
  return (
    <Form.Field
      error={showError}
    >
      <Form.Input
        {...field}
        {...props}
      />
      {showError && <Label basic color="red" pointing>{errors[field.name]}</Label>}
    </Form.Field>
  );
};

export default InputField;
