import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { BrowserRouter, Switch, Route, withRouter } from 'react-router-dom';

import Header from '../../components/Header';
import NavAdmin from '../../components/NavAdmin';

import FormProduto from '../../components/FormProduto';
import HistoricoVendas from '../../components/HistoricoVendas';
import AnunciosAtivos from '../../components/AnunciosAtivos';

function Admin() {

  return (
    <>
      <Helmet>
        <title>ALLBERTINHO | Admin</title>
      </Helmet>
      <Header />
      <main>
        <NavAdmin />
        <section>
          <Switch>
            <Route path="/admin/novo-produto" component={FormProduto} />
            <Route path="/admin/vendas" component={HistoricoVendas} />
            <Route path="/admin/ativos" component={AnunciosAtivos} />
          </Switch>
        </section>
      </main>
    </>
  )
}

export default Admin;
