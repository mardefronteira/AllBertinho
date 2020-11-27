import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import CadastroCliente from './screens/CadastroCliente';
import Inicial from './screens/Inicial';
import Produto from './screens/Produto';
import Admin from './screens/Admin';
import Cliente from './screens/Cliente';
import Login from './screens/Login';
import QuatroZeroQuatro from './screens/QuatroZeroQuatro';

import RouterPrivate from '../src/config/routePrivate';
import RouterAdmin from '../src/config/routeAdmin';

export default function Routes() {
  
  return (
    <BrowserRouter>
    <Switch>
      <RouterPrivate path="/cadastro" component={CadastroCliente} />
      <Route path="/voce-quer/:id" component={Produto} />
      <RouterPrivate path="/login" component={Login} />
      <RouterPrivate path="/" component={Inicial} exact />

      <RouterAdmin isAdmin path="/admin" component={Admin} />
      <RouterPrivate isPrivate path="/voce" component={() => <Cliente name="Elisberto" />} />
      
      <Route component={QuatroZeroQuatro} />
    </Switch>
  </BrowserRouter>
  );
}

