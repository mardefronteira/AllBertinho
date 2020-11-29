import React from 'react';
import PropTypes from 'prop-types';
import { FormFieldWrapper, LabelText, Warning } from './style.js';
import { ErrorMessage } from 'formik';


function FormField({ label, name, children }){

  return (
    <FormFieldWrapper>
      <label>
        <LabelText
          htmlFor={ name }>
          {label}
        </LabelText>
        <ErrorMessage name={ name }>{(msg) => <Warning>{msg}</Warning>}</ErrorMessage>
     </label>
     {children}
  </FormFieldWrapper>
  )
}

  FormField.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};

export default FormField;
