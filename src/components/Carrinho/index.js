import React, {useEffect, useState} from 'react';
import { Nav, Col, Row, ListGroup, Button} from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import store from '../../store';
import api from '../../services/api';
import { useDispatch } from 'react-redux'
import * as actions from '../../store/modules/cart/actions';
import '../../index.css';
import '../../bootstrap.min.css';

function CarrinhoCompras() {
    const [product, setProduct] = useState([]);

    useEffect(() => {
      const products = store.getState().cart;
      setProduct(products)
      
    }, [])
    console.log(product)
    const  dispatch = useDispatch()

    async function checkout(id){
        await dispatch(actions.removeToCart(id))
        setTimeout(() => {
            window.location.reload();
        }, 3000);
       const sold = await api.post(`/sale/${id}`)
       console.log(sold)
        

    }
    return (
      <>
    

        <LinkContainer to='/voce/tem'>
                <Nav.Link>
                  <i className='fas fa-shopping-cart mx-1'></i>Meu Carrinho
                </Nav.Link>
        </LinkContainer>
        <Col>
        {product.map((p) => (
            
            <ListGroup key={p._id} bg="light" variant="light"  sm={12} md={6} lg={4} xl={3}>
            <Row >
                    
                    <Col>
                        <p className="title-box">Nome do produto</p>
                        <p>{p.name}</p>
                    </Col>
                    <Col>
                        <p className="title-box">ID</p>
                        <p>{p._id}</p>
                    </Col>
                    <Col>
                    {p.sold == false ? (<Button onClick={()=>{checkout(p._id)}}>Finalizar</Button>) : 'Compra finalizada'}
                    </Col>
            </Row>
            </ListGroup>
            ))}
         </Col>
      </>
    )
  }
  
  export default CarrinhoCompras;
