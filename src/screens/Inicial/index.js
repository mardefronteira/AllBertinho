import React, { useState, useEffect } from "react";
import { Helmet } from 'react-helmet';
import Header from '../../components/Header'
import Zap from '../../components/Zap';
import './styles.css';
import api from '../../services/api';
import { Row, Col, Card } from "react-bootstrap";

function Inicial() {
    const [products, setProduct] = useState([]);

    useEffect(() => {
      const fetchProducts = async () => {
        const res = await api.get("/product");
        console.log(res.data);
        setProduct(res.data);
      };

      fetchProducts();
    }, []);

  return (
    <>
      <Helmet>
        <title>ALLBERTINHO</title>
      </Helmet>
      <Header />
      <section className="banner">
        <h2 className="texto-banner">ALLBERTINHO</h2>
      </section>
      <Zap />
      <main>
      <Row>
      <Col sm={12} md={6} lg={4} xl={4}>
            <Card className="rounded my-3 p-3">
                <Card.Body>
                <Card.Title>
                  <strong>Cone Estiloso</strong>
                </Card.Title>
                </Card.Body>
                <Card.Img src="https://www.2ssuprimentos.com.br/media/catalog/product/cache/1/image/800x/9df78eab33525d08d6e5fb8d27136e95/1/4/1435.jpg" variant="top"></Card.Img>
                <Card.Img src="https://i.ibb.co/ynp94QL/cone.png" variant="top"></Card.Img>
              </Card>
        </Col>
        <Col sm={12} md={6} lg={4} xl={4}>
            <Card className="rounded my-3 p-3">
                <Card.Body>
                <Card.Title>
                  <strong>Mesa de jantar</strong>
                </Card.Title>
                </Card.Body>
                <Card.Img src="https://cdn.leroymerlin.com.br/products/mesa_de_jantar_redonda_stillo_1,20m_madeira_macica_1566982158_7e66_600x600.jpeg" variant="top"></Card.Img>
                <Card.Img src="https://i.ibb.co/PhmqDP2/mesa.png" variant="top"></Card.Img>
              </Card>
        </Col>
        <Col sm={12} md={6} lg={4} xl={4}>
          <Card className="rounded my-3 p-3">
            <Card.Body>
              <Card.Title>
                <strong>Fusca azul</strong>
              </Card.Title>
            </Card.Body>
            <Card.Img src="https://i.pinimg.com/originals/1c/0a/f3/1c0af31f2c35968cfb8770b1521b7d1d.jpg" variant="top"></Card.Img>
            <Card.Img src="https://i.ibb.co/pxgVdb6/fusca-Azul.png" variant="top"></Card.Img>
          </Card>
        </Col>
        <Col sm={12} md={6} lg={4} xl={4}>
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
        <Col sm={12} md={6} lg={4} xl={4}>
          <Card className="rounded my-3 p-3">
            <Card.Body>
              <Card.Title>
                <strong>Box Naruto</strong>
              </Card.Title>
            </Card.Body>
            <Card.Img src="https://images-shoptime.b2w.io/produtos/01/00/img/1514787/6/1514787621_2SZ.jpg" variant="top"></Card.Img>
            <Card.Img src="https://i.ibb.co/4PJJGFy/naruto.png" variant="top"></Card.Img>
          </Card>
        </Col>
        <Col sm={12} md={6} lg={4} xl={4}>
            <Card className="rounded my-3 mx-3 p-3">
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
      {
        /***
         * <Row>
      {products ?
        products.map(p => (
          <Col sm={12} md={6} lg={4} xl={3}>
              <Card className="rounded my-3 p-3">
                <Card.Body>
                  <Card.Title>
                      <strong>{p.name}</strong>
                  </Card.Title>
                  </Card.Body>
                  <Card.Img src={p.image} variant="top"></Card.Img>
                  <Card.Img src={`https://allbertinho.herokuapp.com//qrcode/${p._id}`} variant="top"></Card.Img>
                </Card>
          </Col>

        ))
      : <p></p>
      } </Row>
         */
      }

      </main>
    </>
  )
}

export default Inicial;
