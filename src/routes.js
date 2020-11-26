import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import CadastroCliente from './screens/CadastroCliente';
import Inicial from './screens/Inicial';
import Produto from './screens/Produto';
import Admin from './screens/Admin';
import Cliente from './screens/Cliente';
import Login from './screens/Login';
import QuatroZeroQuatro from './screens/QuatroZeroQuatro';

import RouterPrivate from '../src/config/routePrivate';

export default function Routes() {
  
  return (
    <BrowserRouter>
    <Switch>
      <RouterPrivate path="/cadastro" component={CadastroCliente} />
      <RouterPrivate path="/product/:id" component={() => <Produto name='Nome Do Produto' />} />
      <RouterPrivate path="/login" component={Login} />
      <RouterPrivate path="/" component={Inicial} exact />

      <RouterPrivate isPrivate path="/admin" component={Admin} />
      <RouterPrivate isPrivate path="/voce" component={() => <Cliente name="Elisberto" />} />
      
      <RouterPrivate component={QuatroZeroQuatro} />
    </Switch>
  </BrowserRouter>
  );
}

