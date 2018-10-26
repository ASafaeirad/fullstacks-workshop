import React from 'react';
import { Form } from '../Form';
import { TextArea } from '../TextArea';

const InputTextArea = ({
  field,
  form: { touched, errors },
  ...props
}) => {
  const showError = Boolean(touched[field.name] && errors[field.name]);
  return (
    <Form.Item
      showError={showError}
      errorMessage={errors[field.name]}
    >
      <TextArea
        feedback={touched[field.name] && errors[field.name] && 'error'}
        border
        rtl
        {...field}
        {...props}
      />
    </Form.Item>
  );
};

export default InputTextArea;
