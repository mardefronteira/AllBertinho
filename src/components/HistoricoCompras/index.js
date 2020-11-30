import React, { useState, useEffect } from "react";
import { Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import api from "../../services/api";
import CarrinhoCompras from "../Carrinho"

function HistoricoVendas() {
  const [sales, setSale] = useState([]);

  useEffect(() => {
      const fetchSales = async () => {
        const res = await api.get("/sale");
        console.log(res.data);
        setSale(res.data);
      };
    
    

    fetchSales();
  }, []);

  function returnProduct(id) {
    let confirm = window.confirm("Ah, que pena! Mas tudo bem. Esperamos ter você de volta em compras futuras. Para devolver o seu produto, é só deixá-lo de volta onde o encontrou, e confirmar aqui embaixo quando o fizer. Caso você não tenha como retornar ao local, envie o produto para o endereço: Rua Linda, 293. Ao receber seu produto, extornaremos o valor. Confirme abaixo se devolveu o produto ao local:");
    if(confirm) {
      api.delete(`/sale/${id}`);
    }
    setTimeout(() => window.location.reload(), 1000);
  }

  return (
    <>
      <Row>
      <CarrinhoCompras/>
        {sales[0] !== undefined ? sales.map(s => (
          <Col key={s.product._id} sm={12} md={6} lg={4} xl={3}>
            <Card className="rounded my-3 p-3">
              <Link to={`/product/${s.product._id}`}>
                <Card.Img src={s.product.image} variant="top"></Card.Img>
              </Link>
              <Card.Body>
                <Link>
                  <Card.Title>
                    <strong>{s.product.name}</strong>
                  </Card.Title>
                </Link>
              </Card.Body>
              <button onClick={() => returnProduct(s._id)}>Devolver produto</button>
            </Card>
          </Col>
        )) : 
        (
          <h2 className='title-box box-cart'>Você ainda não adiquiriu nenhum produto. Lembre-se de finalizar sua compra =)</h2>
        )}
      </Row>
    </>
)
}

export default HistoricoVendas;
