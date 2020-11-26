import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import Header from '../../components/Header';
import DetalheProduto from "../../components/DetalheProduto";
import api from '../../services/api';


 function Produto(props) {
    const [productId, setProductId] = useState();
    const [add, addToCart] = useState(0);
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState();

    useEffect(() => {
      getProduct();
      
    }, [])

    //Criar a validacao do token pra saber se o usuario ja esta logado
    const isUserLoggedIn = false;
   

    const getProduct = ()=>{
       try { api.get(`${api.baseURL}/product/:id`).then( (res)=>{

          if(!isUserLoggedIn){
              setProductId(<p>{res.params.id}</p>)
              setPrice(res.body.price)
              setQuantity(res.body.quantity)
              console.log("User logged in")
              console.log(price)} 
          else{ 
              console.log("User invalid")}
          return res.data.id;}) 
        } 
        catch(err){
          console.log(err);
        }
       
    }
    const cart = ()=>{
        addToCart(add + 1)
    }
    const postSale = ()=>{
      // api.get(api.baseURL).then( (res)=>{
      if (cart < 1) {
        return console.log("Voce precisa adicionar ao carrinho primeiro");
      }
      else{
        return console.log("compra realizada com sucesso");
      }
  
    }


      return (
      <>
          <Helmet>
            <title>ALLBERTINHO | { props.name }</title>
          </Helmet>
          <Header />
          <main>
          <Image src="Hello" alt="Oops" fluid></Image>
              <Row>
                <Col sm={8}>
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                      <h3>{productId}</h3>
                    </ListGroup.Item>

                    <ListGroup.Item>
                      <DetalheProduto/>
                      {productId}
                    </ListGroup.Item>

                    <ListGroup.Item>
                      Quantidade {quantity}
                    </ListGroup.Item>
                  </ListGroup>
                </Col>
              

                <Col sm={4}>
                    <Card>
                      <ListGroup variant='flush'  >
                        <ListGroup.Item className="justify-content-lg-center">
                          <Row>
                            <Col>Preço: </Col>
                            <Col>
                              <strong>R${price}</strong>
                            </Col>
                          </Row>
                        </ListGroup.Item>

                        <ListGroup.Item>
                          <Row>
                              <Col>Status: </Col>
                              <Col>
                                {quantity > 0 ? 'Em Estoque' : 'Esgotado'}
                              </Col>
                          </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                        <Button
                            id="cart"
                            className='btn-group'
                            type='button'
                            onClick={cart}
                            // disabled={}.countInStock === 0}
                          >
                          Adicionar ao Carrinho 
                        </Button>
                       
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <Row>
                          <Col>
                          <p>Carrinho</p>
                          </Col>

                          <Col>
                            {add}
                          </Col>
                        </Row>
                      </ListGroup.Item>
                    </ListGroup>
                  </Card>
                </Col>
            </Row>
          </main>
        
          <footer>
          <Row>
            <Col>
            <Row>
              <Col>
                <Link className='btn btn-light my-3' to='/'>
                Voltar
              </Link>
                </Col>
              
              <Link onClick={postSale} className='btn btn-success  my-3' > 
                Comprar
              </Link>
            
            </Row>
            </Col>
        
          </Row>
          </footer>
      </>
      )
    }

export default Produto;