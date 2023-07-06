
import './App.css';
import { Container } from "reactstrap";
import ProductList from "./productlist";
import products from "./products.json";
import Data from "./Data";
import { useState } from "react";

function App() {
  const [cartItems, setcartItems] = useState([]);

  const addTocart = (product) => {
    setcartItems([...cartItems, product]);
  };
  return (
    <div>
       <Container mt="5">
      <Data cartItems={cartItems} />
      <ProductList products={products} addTocart={addTocart} />
    </Container>
    </div>
  );
}

export default App;
