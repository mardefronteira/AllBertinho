import React, { useState, useEffect } from "react";
import { Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import api from "../../services/api";
import { Button } from "react-bootstrap";

function AnunciosAtivos() {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await api.get("/product");
      setProduct(res.data);
    };

    fetchProducts();
  }, []);

    function deleteProduct(id) {
      let confirm = window.confirm("Você está prestes a deletar um produto. Tem certeza?");
      if(confirm) {
        console.log(`deletando: /product/${id}`);
        api.delete(`/product/${id}`);
      }
      setTimeout(() => window.location.reload(), 1000);
    }

    async function getQRCode(id) {
      await api.get(`/qr/${id}`).then(res => {
        console.log(res.data.url)
        let urlQR = res.data.url;
        window.open(urlQR, "_blank");
      });
    }

  return (
    <>
      <Row>
        {products.map(p => (
          <Col key={p._id} sm={12} md={6} lg={4} xl={3}>
            <Card className="rounded my-3 p-3">
              <Card.Body>
                <Link to={`/product/${p._id}`}>
                  <Card.Title>
                    <strong>{p.name}</strong>
                  </Card.Title>
                  <Card.Img src={p.image} variant="top"></Card.Img>
                </Link>
              </Card.Body>
              <Button variant="outline-dark" style={{marginBottom: .5+'em'}} onClick={() => getQRCode(p._id)}>Abrir QR Code</Button>
              <Button variant="outline-secondary" onClick={() => deleteProduct(p._id)}>Deletar produto</Button>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default AnunciosAtivos;
