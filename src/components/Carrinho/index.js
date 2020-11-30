import React, {useEffect, useState} from 'react';
import { Card, Nav, Col, Row, ListGroup, Button} from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';
import store from '../../store';
import api from '../../services/api';
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify';
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
        toast.success("Compra finalizada!")
        await dispatch(actions.removeToCart(id))
        setTimeout(() => {
            window.location.reload();
        }, 3000);
       const sold = await api.post(`/sale/${id}`)
       
    }
    async function remove(id){
      toast.success("Produto removido do carrinho.")
      await dispatch(actions.removeToCart(id))
      setTimeout(() => {
          window.location.reload();
      }, 3000);
  
  }
    return (
      <>
        
        <Col variant="flush" >
        <LinkContainer to='/voce/tem'>
                <Nav.Link>
                  <h3 className='fas fa-shopping-cart mx-1'>Meu Carrinho</h3>
                </Nav.Link>
        </LinkContainer>
        {product.map((p) => (
        
          <Card key={p._id} className="card-margin"  bg="light" variant="light"  sm={12} md={6} lg={4} xl={3}>
            <Row >       
                  <Col>  
                  <Card.Title> <p className="title-box card-margin"><strong>Nome do produto</strong></p></Card.Title>  
                     <Card.Subtitle><p>{p.name}</p></Card.Subtitle>
                  </Col>
                  <Col>
                  <Card.Title> <p className="title-box card-margin"><strong>ID</strong></p></Card.Title>
                      <Card.Subtitle> <p>{p._id}</p></Card.Subtitle> 
                  </Col>
                  <Col>
                  <Button variant="info" className="button-margin" onClick={()=>{checkout(p._id)}}> Finalizar </Button>
                  <Button variant="danger" className="button-margin" onClick={()=>{remove(p._id)}}> Remover </Button>
                  </Col>
            </Row>
          </Card>
            ))}
         </Col>
      </>
    )
  }
  
  export default CarrinhoCompras;
