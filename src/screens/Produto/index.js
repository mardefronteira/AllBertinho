import React, {useState, useEffect} from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Alert, Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import { toast } from 'react-toastify';
import '../../index.css';
import '../../bootstrap.min.css';
import Header from '../../components/Header';
import DetalheProduto from "../../components/DetalheProduto";
import HistoricoCompras from "../../components/HistoricoCompras"
import api from '../../services/api';
import { useDispatch } from 'react-redux'
import * as actions from '../../store/modules/cart/actions';

 function Produto(props) {
   //Sets product, name, id, description, image
    const [product, setProduct] = useState();
    const [description, setDescription] = useState();
    const [price, setPrice] = useState();
    const [image, setImage] = useState();
    const [sold, setStatus] = useState();
  
    //validation of cart
    const [cart, setCart] = useState("");
    const  dispatch = useDispatch()

    useEffect(() => {

      const { match } = props;
      const { params } = match;
      const { id } = params;
      
      async function fetchProduct(){
        const {data} = await api.get(`/product/${id}`)
        const {name, description, price, image, sold} = data[0];
        setProduct(name)
        setDescription(description)
        setPrice(price)
        setImage(image)
        setStatus(sold)
      }
      fetchProduct();
    }, [])

    async function postSale() {
      const { match } = props;
      const { params } = match;
      const { id } = params;
      const {data} =  await api.get(`/product/${id}`)
    
      
      
      if(sold === true){
        toast.error("Esse item está indisponível")
      }
      else{
        dispatch(actions.addToCartRequest(data))
      }
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
                                {sold == true ? 'Em Estoque' : 'Esgotado'}
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
                <Link onClick={postSale} className='btn btn-success float-sm-right my-3'  >
                Comprar
                </Link>
              </Col>

             

            </Row>
          </footer>
      </>
      )
    }

export default Produto;
