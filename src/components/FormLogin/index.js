import { withFormik } from 'formik';
import * as Yup from 'yup';
import BaseForm from './BaseForm';

// import api from '../../services/api';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../store/modules/auth/actions';

const FormikLogin =
  withFormik ({
  mapPropsToValues({
    email,
    password,
  }) {
    return {
      email: '',
      password: '',
    }
  },
  validationSchema: Yup.object().shape({
    email: Yup.string().email('Este não é um email válido.').required('Este campo é obrigatório'),
    password: Yup.string().required('Este campo é obrigatório'),
  }),
  handleSubmit(clientInfo, { props, resetForm, setErrors, setSubmitting }) {

      console.log(clientInfo);
      // props.dispatch(actions.signInRequest(clientInfo));
      props.signInRequest(clientInfo);

      setSubmitting(false);
      resetForm();

  }//close handleSubmit
})(BaseForm);

const FormLogin = connect(
    state => state.auth,
    dispatch => bindActionCreators(actions, dispatch)
)(FormikLogin)

export default FormLogin;
