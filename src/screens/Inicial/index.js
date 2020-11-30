import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/Header'
import Zap from '../../components/Zap';
import './styles.css';
import { Row, Col, Card } from "react-bootstrap";

function Inicial() {

  return (
    <>
      <Helmet>
        <title>ALLBERTINHO</title>
      </Helmet>
      <Header />
      <section className="banner">
        <h2 className="texto-banner">AllBERTINHO</h2>
      </section>
      <Zap />
      <main>
      <Row>
        <Col sm={12} md={6} lg={4} xl={3}>
            <Card className="rounded my-3 p-3">
              <Card.Body>
                <Card.Title>
                  <strong>Fusca azul</strong>
                </Card.Title>
                </Card.Body>
                <Card.Img src="https://leianoticias.com.br/wp-content/uploads/2017/08/carro-fusca-azul-0817-1400x800.jpg" variant="top"></Card.Img>
                <Card.Img src="https://i.ibb.co/pxgVdb6/fusca-Azul.png" variant="top"></Card.Img>
              </Card>
        </Col>
        <Col sm={12} md={6} lg={4} xl={3}>
            <Card className="rounded my-3 p-3">
              <Card.Body>
                <Card.Title>
                  <strong>Bola quadrada</strong>
                </Card.Title>
                </Card.Body>
                <Card.Img src="https://img.elo7.com.br/product/zoom/205034A/caixa-bola-quadrada-turma-do-chaves-seu-barriga.jpg" variant="top"></Card.Img>
                <Card.Img src="https://i.ibb.co/nf0HsNv/bola-Quadrada.png" variant="top"></Card.Img>
            </Card>
        </Col>
        <Col sm={12} md={6} lg={4} xl={3}>
            <Card className="rounded my-3 p-3">
                <Card.Body> 
                <Card.Title>
                  <strong>Blusinha QRCODE</strong>
                </Card.Title>
                </Card.Body>
                <Card.Img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.2CyePO2q0yyxKyR5hbmtQwHaI4%26pid%3DApi&f=1" variant="top"></Card.Img>
                <Card.Img src="https://i.ibb.co/nf0HsNv/bola-Quadrada.png" variant="top"></Card.Img>
              </Card>
        </Col>
      </Row>
      </main>
    </>
  )
}

export default Inicial;
