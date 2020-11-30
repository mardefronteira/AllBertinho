import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '../../components/Header';
import FormCliente from '../../components/FormCliente';
import Zap from '../../components/Zap';

function CadastroCliente() {
  return (
    <>
      <Helmet>
        <title>ALLBERTINHO | Cadastro</title>
      </Helmet>
      <Header />
      <Zap />
      <main>
        <h2>Crie uma conta</h2>
        <FormCliente />
      </main>
    </>
  )
}

export default CadastroCliente;
