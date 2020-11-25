import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '../../components/Header';
import DetalheProduto from "../../components/DetalheProduto";
import AnunciosAtivos from "../../components/AnunciosAtivos";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";



function Produto( props ) {
  return (
  <>
      <Helmet>
        <title>ALLBERTINHO | { props.name }</title>
      </Helmet>
      <Header />
      <main>
        <h2>Detalhes do produto que vc quer simmmm! <span>😏😏😏</span></h2>
        <p>Foto produto </p>
        <p>Preço do produto </p>
        <p>Quantidade produto</p>
      </main>
      <Link className='btn btn-light my-3' to='/'>
        Voltar
      </Link>
      <Row>
        <Col md={6}>
          <Image src="Oops" alt="Oops" fluid></Image>
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>OOPs</h3>
            </ListGroup.Item>
            {/* <ListGroup.Item>
              <Ratings
                value={0}
                text={`${0} avaliações`}
              ></Ratings>
            </ListGroup.Item> */}
            <ListGroup.Item>Preço: R${0}</ListGroup.Item>
            <ListGroup.Item>
              Descrição do Produto: {0}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>Preço: </Col>
                  <Col>
                    <strong>R${2}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Status: </Col>
                  <Col>
                    {/* {product.countInStock > 0 ? 'Em Estoque' : 'Esgotado'} */}
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Button
                  className='btn-block'
                  type='button'
                  // disabled={product.countInStock === 0}
                >
                  Adicionar ao Carrinho
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
  </>

  
  )
}

export default Produto;
