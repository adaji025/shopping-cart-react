import { useState } from "react";
import Basket from "./components/Basket";
import Header from "./components/Header";
import Main from "./components/Main";
import data from "./data";

function App() {
  const { products } = data;
  const [cartItem, setCartItem] = useState([]);

  const onAddProduct = (product) => {
    const exist = cartItem.find((x) => x.id === product.id);
    if (exist) {
      setCartItem(
        cartItem.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItem([...cartItem, { ...product, qty: 1 }]);
    }
    console.log('it works');
  };

  const onRemoveProduct = (product) => {
    const exist = cartItem.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItem(cartItem.filter((x) => x.id !== product.id));
    } else {
      setCartItem(
        cartItem.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    <div className="white">
      <Header />
      <div className="row">
        <Main onAddProduct={onAddProduct} products={products} />
        <Basket
          onAddProduct={onAddProduct}
          onRemoveProduct={onRemoveProduct}
          cartItem={cartItem}
        />
      </div>
    </div>
  );
}

export default App;
