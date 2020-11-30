import { withFormik } from 'formik';
import * as Yup from 'yup';
import BaseForm from './BaseForm';
import { Redirect } from 'react-router-dom';
import api from '../../services/api';

const FormProduto =
  withFormik ({
  mapPropsToValues({
    name,
    description,
    price,
    image,
  }) {
    return {
      name: '',
      description: '',
      price: '',
      image: '',
    }
  },
  validationSchema: Yup.object().shape({
    description: Yup.string().required('Este campo é obrigatório.'),
    name: Yup.string().required('Este campo é obrigatório.'),
    price: Yup.number('Este não é um número válido.').required('Este campo é obrigatório.'),
    image: Yup.string().url('Essa não é uma url válida.').required('Este campo é obrigatório.'),
  }),
  async handleSubmit(values, { resetForm, setErrors, setSubmitting, urlQrcode }) {
    const thisProduct = {
      name: values.name,
      description: values.description,
      price: values.price,
      image: values.image,
    }

    /*ENVIAR DADOS PRA DB AQUI*/
    // const product = await
    api.post(`/product`, thisProduct);
    //urlQrcode = product.data.url;
    //console.log(urlQrcode);
    alert("Produto cadastrado! Você pode gerenciar seu anúncio ou ver seu QR Code na aba 'Anúncios Ativos'.");
    resetForm();
    setSubmitting(false);

  }//close handleSubmit
})(BaseForm);

export default FormProduto;
