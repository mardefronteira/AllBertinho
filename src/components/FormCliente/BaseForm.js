import React from 'react';
import { Form, Field } from 'formik';
import * as Yup from 'yup';
import FormField from '../FormField';
import { Input } from '../FormField/style.js';
import { Button } from 'react-bootstrap';


const BaseForm = ({
  values,
  errors,
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
          />
        </FormField>

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
            name="password"
            type="password"
          />
        </FormField>

        <FormField
          label="Confirme sua senha"
          name="passwordConfirmation"
        >
          <Input
            as={Field}
            name="passwordConfirmation"
            type="password"
          />
        </FormField>

        <Button variant="outline-dark" type="submit" disabled={isSubmitting}>Cadastrar</Button>
      </Form>
    </>
  );

export default BaseForm;
