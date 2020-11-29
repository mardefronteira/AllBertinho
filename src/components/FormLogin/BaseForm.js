import React from 'react';
import { Form, Field } from 'formik';
import FormField from '../FormField';
import { Input } from '../FormField/style.js';

const FormLogin = ({
  values,
  errors,
  isSubmitting,
}) => (
    <>
      <Form>
        <FormField
          label="Email"
          name="email"
        >
          <Input
            as={Field}
            name="email"
          />
        </FormField>

        <FormField
          label="Senha"
          name="password"
        >
          <Input
            as={Field}
            type="password"
            name="password"
          />
        </FormField>

        <button type="submit" disabled={isSubmitting}>Entrar</button>
      </Form>
    </>
  );

export default FormLogin;
