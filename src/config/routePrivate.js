import React from 'react';
import { Route, Redirect } from 'react-router-dom';

//import store from './store';

export default function RouterPrivate({
  component: Component,
  isPrivate = false,
  ...rest
}) {
  //const { signed } = store.getState().authReducer;
  const signed = false;

  if (!signed && isPrivate) {
    return <Redirect to="/login" />
  }

  if(signed && !isPrivate) {
    /*
    if(admin) {
      return <Redirect to="/admin" />
    } */
    return <Redirect to="/voce" />
  }

  return (
    <Route
      { ...rest }
      component={Component}
    />
  )
}
