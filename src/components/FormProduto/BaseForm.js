import React, { useState } from 'react';
import { Form, Field } from 'formik';
import * as Yup from 'yup';
import FormField from '../FormField';
import { Input } from '../FormField/style.js';
import Download from './Download';

const BaseForm = ({
  values,
  errors,
  isSubmitting,
  urlQrcode,
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
         {/**<Download url={urlQrcode} />*/}
      </Form>
    </>
  );

export default BaseForm;
