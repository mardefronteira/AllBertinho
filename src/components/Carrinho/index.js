import React, {useEffect, useState} from 'react';
import { Card, Nav, Col, Row, ListGroup, Button} from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';
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
      console.log(products)
    
      
    }, [])
    
    const  dispatch = useDispatch()

    async function checkout(id){
        await dispatch(actions.removeToCart(id))
        setTimeout(() => {
            window.location.reload();
        }, 3000);
       const sold = await api.post(`/sale/${id}`)
       console.log(sold)
    }
    async function remove(id){
      await dispatch(actions.removeToCart(id))
      setTimeout(() => {
          window.location.reload();
      }, 2000);
  
  }
    return (
      <>
        
        <Col variant="flush">
        <LinkContainer to='/voce/tem'>
                <Nav.Link>
                  <h3 className='fas fa-shopping-cart mx-1'>Meu Carrinho</h3>
                </Nav.Link>
        </LinkContainer>
        {product.map((p) => (
            <ListGroup key={p._id} bg="light" variant="light"  sm={12} md={6} lg={4} xl={3}>
            <Card>
            <Row >
                    
                    <Col>
                    
                    <Card.Title> <p className="title-box card-margin"><strong>Nome do produto</strong></p></Card.Title>  
                     <p>{p.name}</p>
                   </Col>
                   <Col>
                       <p className="title-box"><strong>ID</strong></p>
                       <p>{p._id}</p>
                   </Col>
                   <Col>
                   {p.sold == false ? (<Button variant="info" className="button-margin" onClick={()=>{checkout(p._id)}}>Finalizar</Button>) : 'Compra finalizada'}
                   <Button variant="danger" className="button-margin" onClick={()=>{remove(p._id)}}> Remover </Button>
                   </Col>
                 
                    
            
            </Row>
           
           
            </Card>
            </ListGroup>

            
            ))}
         </Col>
      </>
    )
  }
  
  export default CarrinhoCompras;
