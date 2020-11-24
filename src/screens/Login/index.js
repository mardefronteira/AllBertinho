import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/Header'
import api from '../../services/api';

function Inicial() {
  //testando se api ta funcionando
  useEffect(() => {
    async function response() {
      const data = await api.get('/product');
      console.log(data);
    }

    response();
  }, [])
  return (
    <>
      <Helmet>
        <title>ALLBERTINHO | Login</title>
      </Helmet>
      <Header />
      <main>
        <h2>Login!</h2>
      </main>
    </>
  )
}

export default Inicial;
