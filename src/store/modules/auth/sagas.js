import { takeLatest, call, put, all } from 'redux-saga/effects';
import { createBrowserHistory } from 'history';
import store from '../../../store';

import { signInSuccess, signInFailure } from './actions';
import api from '../../../services/api';
import { toast } from 'react-toastify';

const history = createBrowserHistory();

export function* signInRequest({ payload }) {
  try {
    const { email, password } = payload;
    const response = yield call(api.post, 'signin', {
      email,
      password
    });

    const { user, token } = response.data;
    const { admin } = user;
    yield put(signInSuccess(token, user));
    api.defaults.headers["x-access-token"] = token;

    if (admin === true) {
      history.push('/admin');
      window.location.reload();
      return;
    }

    history.push('/voce');
    window.location.reload();

  }catch(err) {
    toast.error('Usuário ou senha inválidos!');

    yield put(signInFailure());
  }
}

export function* persistRehyadrate({ payload }) {
  const { token } = store.getState().auth;
  
  if(!token) return;

  api.defaults.headers["x-access-token"] = token;
}

export default all([
  takeLatest('SIGNIN_REQUEST', signInRequest),
  takeLatest('persist/REHYDRATE', persistRehyadrate)
]);
