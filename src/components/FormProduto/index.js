import { withFormik } from 'formik';
import * as Yup from 'yup';
import BaseForm from './BaseForm';

import api from '../../services/api';

const FormProduto =
  withFormik ({
  mapPropsToValues({
    email,
    name,
    password,
  }) {
    return {
      name: '',
      description: '',
      price: '',
      quantity: '',
      image: '',
    }
  },
  validationSchema: Yup.object().shape({
    description: Yup.string().required('Este campo é obrigatório.'),
    name: Yup.string().required('Este campo é obrigatório.'),
    quantity: Yup.number('Este não é um número válido.').required('Este campo é obrigatório.'),
    price: Yup.number('Este não é um número válido.').required('Este campo é obrigatório.'),
    image: Yup.string().url('Essa não é uma url válida.').required('Este campo é obrigatório.'),
  }),
  handleSubmit(values, { resetForm, setErrors, setSubmitting }) {

    const thisProduct = {
      name: values.name,
      description: values.description,
      price: values.price,
      quantity: values.quantity,
      image: values.image,
      sold: false,
    }

    /*ENVIAR DADOS PRA DB AQUI*/
    console.log(thisProduct)
    api.post(`/product`, thisProduct);

    resetForm();
    alert("Eba, tudo certo!!");

    setSubmitting(false);
  }//close handleSubmit
})(BaseForm);

export default FormProduto;
