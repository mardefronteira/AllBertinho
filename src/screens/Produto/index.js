import React, {useState, useEffect} from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Alert, Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import '../../index.css';
import '../../bootstrap.min.css';
import Header from '../../components/Header';
import DetalheProduto from "../../components/DetalheProduto";
import api from '../../services/api';


 function Produto(props) {
   //Sets product, name, id, description, quantity, image
    const [product, setProduct] = useState();
    const [description, setDescription] = useState();
    const [price, setPrice] = useState();
    const [quantity, setQuantity] = useState();
    const [image, setImage] = useState();
    const [sold, setStatus] = useState();
    //cart product state to cart
    const [cart, setCart] = useState(0);
    //validation of cart
    const [valid, isSaleValid] = useState("");

    useEffect(() => {
      
      const { match } = props;
      const { params } = match;
      const { id } = params;
      
      
      async function fetchProduct(){
        const {data} = await api.get(`/product/${id}`)
        const {name, description, quantity, price, image, sold} = data[0];
      //  console.log(data)
        setProduct(name)
        setDescription(description)
        setPrice(price)
        setQuantity(quantity)
        setImage(image)
        setStatus(sold)
      
  
      }
      fetchProduct();
    }, [])

    const addToCart = ()=>{
      if (cart < quantity){
        setCart(cart + 1);
      }        
    }
    const postSale =  async ()=>{
      const { match } = props;
      const { params } = match;
      const { id } = params;
      
      const qtyinStock = quantity - cart; 
      if(qtyinStock < 0){
        sold = true;
        const {data} = await api.patch(`/product/${id}`, { sold: sold})
        
      }
      console.log(qtyinStock)

      return isSaleValid( cart < 1 ?
      (<Alert variant='danger' >Voce ainda não adicionou nenhum item no carrinho.</Alert>)
      :
      ( <Redirect to='/voce'/>))
    }
      
    return (
      <>
          <Helmet>
            <title>ALLBERTINHO | Produto </title>
          </Helmet>
          <Header />
          <main>
      <Image src={image} alt="Não foi possível carregar img" fluid></Image>
              <Row>
                <Col sm={8}>
                <ListGroup variant='flush'>
                    <ListGroup.Item className="text-capitalize title-box">
                      <strong> {product}</strong>
                    </ListGroup.Item>

                    <ListGroup.Item  >
                      <DetalheProduto />
                      <p className='txt-capitalize' > {description}</p>
                    </ListGroup.Item>

                    <ListGroup.Item>
                      <p>Quantidade</p> {quantity}
                    </ListGroup.Item>
                  </ListGroup>
                </Col>


                <Col sm={4}>
                    <Card>
                      <ListGroup variant='flush'  >
                        <ListGroup.Item >
                          <Row>
                            <Col>Preço: </Col>
                            <Col>
                              <strong>R$ {price}</strong>
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

         
          <footer >
            <Row>
              <Col>
                <Link className='btn btn-light my-3' to='/'>
                Voltar
                </Link>
              </Col>

              <Col >
                <Link onClick={postSale} className='btn btn-success float-sm-right my-3' >
                Comprar
                </Link>
              </Col>

              <Col>
                {valid}
              </Col>

            </Row>
          </footer>
      </>
      )
    }

export default Produto;
