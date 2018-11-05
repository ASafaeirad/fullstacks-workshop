import React from 'react';
import { Form, Label } from 'semantic-ui-react';


const DropdownField = ({
  field,
  form,
  ...props
}) => {
  const { touched, errors } = form;

  const handleChange = (e, { name, value }) => form.setFieldValue(name, value);
  const handleBlur = (e, { name, value }) => form.setFieldTouched(name, value);

  const showError = Boolean(touched[field.name] && errors[field.name]);
  return (
    <Form.Field
      inline
      error={showError}
    >
      <Form.Dropdown
        {...props}
        {...field}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {showError && <Label basic color="red" pointing>{errors[field.name]}</Label>}
    </Form.Field>
  );
};

export default DropdownField;
