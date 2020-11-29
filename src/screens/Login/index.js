import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/Header'
import api from '../../services/api';
import { useDispatch } from 'react-redux';

import * as actions from '../../store/modules/auth/actions';

function Inicial() {
  const dispatch = useDispatch();

  function submitAdmin(e) {
    //para teste
    const email = 'admin@admin.com';
    const password = '123456';
    dispatch(actions.signInRequest(email, password));
  }
  function submitUser(e) {
    //para teste
    const email = 'user@user.com';
    const password = '123456';
    dispatch(actions.signInRequest(email, password));
  }

  return (
    <>
      <Helmet>
        <title>ALLBERTINHO | Login</title>
      </Helmet>
      <Header />
      <main>
        <h2>Login!</h2>
      </main>

      <button onClick={submitAdmin}>Testar Admin</button>
      <button onClick={submitUser}>Testar User</button>

      <footer>

      </footer>
    </>
  )
}

export default Inicial;
