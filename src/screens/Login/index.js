import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/Header'
import api from '../../services/api';
import { useDispatch } from 'react-redux';

import * as actions from '../../store/modules/auth/actions';

function Inicial() {
  const dispatch = useDispatch();

  //testando se api ta funcionando
  useEffect(() => {
    async function response() {
      const data = await api.get('/product');
      console.log(data);
    }

    response();
  }, [])
  function submit(e) {
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
      <button onClick={submit}>Testar</button>
    </>
  )
}

export default Inicial;
