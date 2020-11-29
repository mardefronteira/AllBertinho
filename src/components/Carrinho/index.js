
import React, {useEffect, useState} from 'react';
import { Alert, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import store from '../../store';


function CarrinhoCompras() {
    const [product, setProduct] = useState([]);

    useEffect(() => {
      const products = store.getState().cart;
      setProduct(products[0])
      
    }, [])
    console.log(product)
    return (
      <>
    
      Eu sou o carrinho
      
      </>
    )
  }
  
  export default HistoricoCompras;
