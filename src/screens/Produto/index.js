import React, {useState, useEffect} from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Alert, Row, Col, Image, ListGroup, Card } from "react-bootstrap";
import { toast } from 'react-toastify';
import '../../index.css';
import '../../bootstrap.min.css';
import Header from '../../components/Header';
import api from '../../services/api';
import { useDispatch } from 'react-redux'
import { createBrowserHistory } from 'history';
import * as actions from '../../store/modules/cart/actions';
import store from '../../store';
import Zap from '../../components/Zap';


 function Produto(props) {

   //Sets product, name, id, description, image
    const [product, setProduct] = useState();
    const [description, setDescription] = useState();
    const [price, setPrice] = useState();
    const [image, setImage] = useState();
    const [sold, setStatus] = useState();

    //validation of cart

    const  dispatch = useDispatch()
    const { signed } = store.getState().auth;
    console.log(signed)

    useEffect(() => {

      const { match } = props;
      const { params } = match;
      const { id } = params;

      async function fetchProduct(){
        try{
          const {data} = await api.get(`/product/${id}`)
          const {name, description, price, image, sold} = data[0];

          setProduct(name)
          setDescription(description)
          setPrice(price)
          setImage(image)
          setStatus(sold)
        } catch(err){
          console.log("O erro foi "+ err)
        }

      }
      fetchProduct();
    }, [])

    async function postSale() {
      const { match } = props;
      const { params } = match;
      const { id } = params;
      const {data} =  await api.get(`/product/${id}`)

        const history = createBrowserHistory();
        toast.success("Adicionado ao carrinho!")
        dispatch(actions.addToCartRequest(data[0]))
        setTimeout(() =>  window.location.reload(history.push('/voce')), 2000)
    }

    return (
      <>
          <Helmet>
            <title>ALLBERTINHO | Produto </title>
          </Helmet>
          <Header />
          <Zap/>
        { product ?(
        <>
          <main>
            <Image src={image} style={{ width: 200, height: 200 }} alt="Oops" fluid></Image>
              <Row>
                <Col sm={8}>
                <ListGroup variant='flush'>
                    <ListGroup.Item className="text-capitalize title-box">
                      <strong> {product}</strong>
                    </ListGroup.Item>

                    <ListGroup.Item className="text-capitalize">
                      {description}
                    </ListGroup.Item>
                  </ListGroup>
                </Col>


                <Col sm={4}>

                  <ListGroup variant='flush'  >
                    <ListGroup.Item ></ListGroup.Item >
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
                            {sold ? 'Esgotado':'Em Estoque'  }
                          </Col>
                      </Row>
                    </ListGroup.Item>
                </ListGroup>

                </Col>
            </Row>
          </main>

          <footer >
            <Row>
              { signed ?
                (<Col>
                <Link className='btn btn-light my-3' to='/admin'>
                Voltar
                </Link>
                </Col> ):
                (<Col>
                  <Link className='btn btn-light my-3' to='/'>
                  Voltar
                  </Link>
                </Col> )}

              <Col >
                <Link onClick={postSale} className='btn btn-success float-sm-right my-3'   >
                Comprar
                </Link>
              </Col>
            </Row>
          </footer> </>)
          :
          (setTimeout(() => {
            <Link to='/QuatroZeroQuatro'>
            <h2>Nao achamos seu produto, volte ao inicio</h2>
            </Link>
          }, 3000))}


      </>
      )
    }

export default Produto;
