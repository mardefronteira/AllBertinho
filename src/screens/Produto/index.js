import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '../../components/Header';
import api from '../../services/api';

function Produto( props ) {

  useEffect(() => {
    const { match } = props;
    const { params } = match;
    const { id } = params;

    console.log(id);
    async function response() {
      const data = await api.get('/product');
      console.log(data);
    }

    response();
  }, []);

  return (
    <>
      <Helmet>
        <title>ALLBERTINHO </title>
      </Helmet>
      <Header />
      <main>
        <h2>Detalhes do produto que vc quer simmmm! <span>😏😏😏</span></h2>
      </main>
    </>
  )
}

export default Produto;
