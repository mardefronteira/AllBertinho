import React, {useState, useEffect} from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Alert, Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import Header from '../../components/Header';
import DetalheProduto from "../../components/DetalheProduto";
import api from '../../services/api';


 function Produto(props) {
   //gets product name, id and description
   const [name, setName] = useState();
    const [productID, setProduct] = useState();
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState();
    const [image, setImage] = useState();
    //cart product state to cart
    const [cart, setCart] = useState(0);


    useEffect(() => {
      // console.log()
      async function fetchProduct(){
        const properties = await api.get('/product/:id')
        console.log(properties);
      }
      const { match } = props;
      const { params, path } = match;
      const { id } = params;
      console.log(props);

      setImage(path);
      setProduct(id);
      fetchProduct();

    }, [])

    const addToCart = ()=>{

        setCart(cart + 1);
    }

    const [valid, isSaleValid] = useState("");
    const postSale = ()=>{


      return isSaleValid( cart < 1 ?
      (<Alert variant='danger' >Voce ainda não adicionou nenhum item no carrinho.</Alert>)
      :
      ( <Redirect to='/voce'/>))
    }


      return (
      <>
          <Helmet>
            <title>ALLBERTINHO | </title>
          </Helmet>
          <Header />
          <main>
      <Image src="Hello" alt="Oops" fluid></Image>
              <Row>
                <Col sm={8}>
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                      <h3>{productID}</h3>
                    </ListGroup.Item>

                    <ListGroup.Item>
                      <DetalheProduto/>
                      {image}
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
                            onClick={addToCart}
                            // disabled={}.countInStock === 0}
                          >
                          Adicionar ao Carrinho
                        </Button>

                      </ListGroup.Item>
                      <ListGroup.Item>
                        <Row>
                          <Col>
                          <p>Carrinho:</p>
                          </Col>

                          <Col>
                            {cart}
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

              <Col>
                <Link onClick={postSale} className='btn btn-success  my-3' >
                Comprar
                </Link>
              </Col>

              <Col>
                {valid}
              </Col>

            </Row>
            </Col>

          </Row>
          </footer>
      </>
      )
    }

export default Produto;