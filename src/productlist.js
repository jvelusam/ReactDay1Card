import { Container, Row, Col } from "reactstrap";
import ShowCard from "./ShowCard";

export default function ProductList({ products, addTocart }) {
  return (
    <Container>
      <Row xs="3">
        {products.map((value) => {
          return (
            <Col>
              <ShowCard value={value} addTocart={addTocart} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
