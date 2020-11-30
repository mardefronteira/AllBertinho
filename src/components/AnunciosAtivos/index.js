import React, { useState, useEffect } from "react";
import { Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import api from "../../services/api";

function AnunciosAtivos() {
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
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default AnunciosAtivos;
