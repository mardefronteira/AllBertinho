import React, { useState, useEffect } from "react";
import { Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import api from "../../services/api";

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

  return (
    <>
      <Row>
        {products.map(p => (
          <Col key={p._id} sm={12} md={6} lg={4} xl={3}>
            <Card className="rounded my-3 p-3">
              <Link to={`/product/${p._id}`}>
                <Card.Img src={p.image} variant="top"></Card.Img>
              </Link>
              <Card.Body>
                <Link>
                  <Card.Title>
                    <strong>{p.name}</strong>
                  </Card.Title>
                </Link>
              </Card.Body>
              <button onClick={() => deleteProduct(p._id)}>Deletar produto</button>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default AnunciosAtivos;
