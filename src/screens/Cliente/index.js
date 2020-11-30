import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { BrowserRouter, Switch, Route, withRouter } from 'react-router-dom';

import Header from '../../components/Header';
import NavCliente from '../../components/NavCliente';
import HistoricoCompras from '../../components/HistoricoCompras';
import Zap from '../../components/Zap';

function Cliente() {
  const client = {
    name: 'Elisberto',
  }
  return (
    <>
      <Helmet>
        <title>ALLBERTINHO | { client.name }</title>
      </Helmet>
      <Header />
      <Zap />
      <main>
        <NavCliente name={client.name} />
        <section>
          <HistoricoCompras />
        </section>
      </main>
    </>
  )
}

export default Cliente;
