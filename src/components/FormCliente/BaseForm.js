import React from 'react';
import { Form, Field } from 'formik';
import * as Yup from 'yup';
import FormField from '../FormField';
import { Input } from '../FormField/style.js';

const FormCliente = ({
  values,
  errors,
  touched,
  isSubmitting,
}) => (
    <>
      <Form>
        <FormField
          label="Nome"
          name="name"
        >
          <Input
            as={Field}
            name="name"
            hasValue = {values.name !== '' ? true : false}
          />
        </FormField>

        <FormField
          label="Email"
          name="email"
        >
          <Input
            as={Field}
            name="email"
            hasValue = {values.email !== '' ? true : false}
          />
        </FormField>

        <FormField
          label="Senha"
          name="password"
        >
          <Input
            as={Field}
            name="password"
            hasValue = {values.password !== '' ? true : false}
          />
        </FormField>

        <FormField
          label="Confirme sua senha"
          name="passwordConfirmation"
        >
          <Input
            as={Field}
            name="passwordConfirmation"
            hasValue = {values.passwordConfirmation !== '' ? true : false}
          />
        </FormField>

        <button type="submit" disabled={isSubmitting}>Cadastrar</button>
      </Form>
    </>
  );

export default FormCliente;
