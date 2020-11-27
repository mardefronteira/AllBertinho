import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import store from '../store';

export default function RouterPrivate({
  component: Component,
  isAdmin = false,
  ...rest
}) {

  const { signed, user } = store.getState().auth;
  
  if(!signed && isAdmin && !user) {
      return <Redirect to='/login'/>
  }

  if(signed && !isAdmin && user) {
    return <Redirect to="/admin" />
  }

  return (
    user ? 
    <Route
      { ...rest }
      component={Component}
    />
    :
    <Redirect to="/login" />
  )
}
