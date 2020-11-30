import React from 'react';
import { Form, Field } from 'formik';
import * as Yup from 'yup';
import FormField from '../FormField';
import { Input } from '../FormField/style.js';

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
          label="Descrição"
          name="description"
        >
          <Input
            as={Field}
            name="description"
          />
        </FormField>

        <FormField
          label="Preço"
          name="price"
        >
          <Input
            as={Field}
            name="price"
          />
        </FormField>

        <FormField
          label="Imagem"
          name="image"
        >
          <Input
            as={Field}
            name="image"
          />
        </FormField>

        <button type="submit" disabled={isSubmitting}>Cadastrar</button>
      </Form>
    </>
  );

export default BaseForm;
