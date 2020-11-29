import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '../../components/Header';
import FormCliente from '../../components/FormCliente';

function CadastroCliente() {
  return (
    <>
      <Helmet>
        <title>ALLBERTINHO | Cadastro</title>
      </Helmet>
      <Header />
      <main>
        <h2>Cadastro cliente!</h2>
        <FormCliente />
      </main>
    </>
  )
}

export default CadastroCliente;
