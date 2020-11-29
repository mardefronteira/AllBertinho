import React from 'react';
import { Helmet } from 'react-helmet';
import {  Link } from 'react-router-dom';
import { Row, Col} from "react-bootstrap";
import Header from '../../components/Header'
import { useDispatch } from 'react-redux';

import * as actions from '../../store/modules/auth/actions';

function Inicial() {
  const dispatch = useDispatch();

  function submitAdmin(e) {
    //para teste
    const email = 'admin@gmail.com';
    const password = '12345';
    dispatch(actions.signInRequest(email, password));
  }
  function submitUser(e) {
    //para teste
    const email = 'cliente@gmail.com';
    const password = '12345';
    dispatch(actions.signInRequest(email, password));
  }
  return (
    <>
      <Helmet>
        <title>ALLBERTINHO | Login</title>
      </Helmet>
      <Header />

      <main>
        <Row>
          <Col>
          <h2>Faça seu login admin</h2>
            <Link onClick={submitAdmin} className='btn btn-light float-sm-left my-3'>
                Login
            </Link>
          </Col>     
        </Row>
      
        <Row>
          <Col>
          <h2>Faça seu login User</h2>
            <Link onClick={submitUser} className='btn btn-light float-sm-left my-3'>
                Login
            </Link>
          </Col> 
        </Row>
        <Row>
          <Col>
          <h2>Não tem conta?</h2>
            <Link className='btn btn-light float-sm-left my-3'to='/cadastro'>
                Cadastre-se
            </Link>
          </Col> 
        </Row>
     
      
        
      </main>

    
     
    </>
  )
}

export default Inicial;
