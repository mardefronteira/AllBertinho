import React from 'react';
import { Navbar, Nav, FormControl, Button, Form, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import { useDispatch } from 'react-redux';
import * as actions from '../../store/modules/auth/actions';
import { createBrowserHistory } from 'history';
import store from '../../store';

function Header () {
  const dispatch = useDispatch();
  const history = createBrowserHistory();
  const { signed } = store.getState().auth;

  const handleLogout = e => {
    e.preventDefault();
    dispatch(actions.signInFailure());

    history.push("/");
    window.location.reload();
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <LinkContainer to="/">
          <h1>ALLBERTINHO</h1>
        </LinkContainer>
        <Nav>
          <LinkContainer to="/admin">
            <Nav.Link>Painel Admin</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/cadastro">
            <Nav.Link>Cadastro cliente</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/login">
            <Nav.Link>Login</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/voce">
            <Nav.Link>Painel Cliente</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/product/5fbb02d2c64aab1a628d652d">
            <Nav.Link>Detalhes Produto</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/aisdhaoidsh">
            <Nav.Link>404</Nav.Link>
          </LinkContainer>
          {signed &&
            <LinkContainer to="/" onClick={handleLogout}>
              <Nav.Link>SAIR</Nav.Link>
            </LinkContainer>
          }
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Header;
