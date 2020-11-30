import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/Header'
import Zap from '../../components/Zap';

function Inicial() {

  return (
    <>
      <Helmet>
        <title>ALLBERTINHO</title>
      </Helmet>
      <Header />
      <Zap />
      <main>
        <h2>Página inicial!</h2>
      </main>
    </>
  )
}

export default Inicial;
