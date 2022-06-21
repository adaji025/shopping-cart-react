import React from "react";

const Basket = (props) => {
  const { cartItem, onAddProduct, onRemoveProduct } = props;
  const itemPrice = cartItem.reduce((a, c) => a + c.price * c.qty, 0 )
  const tax = itemPrice * .14
  const shippingPrice = itemPrice > 2000 ? 0 : 50
  const totalPrice = itemPrice + tax + shippingPrice
  return (
    <aside className="block col-1">
      <h1>Cart Item</h1>
      <div>{!cartItem.length && <h1>Cart is Empty!</h1>}</div>
      {cartItem.map(item => (
        <div key={item.id} className="row">
            <div className="col-2">{item.name}</div>
            <div className="col-2">
                <button className="add" onClick={() => onAddProduct(item)}>+</button>
                <button className="remove" onClick={() => onRemoveProduct(item)}>-</button>
            </div>
            <div className="col-2 text-right">
                {item.qty} * ${item.price}
                {console.log(item.price *2)}
            </div>
        </div>
      ))}
      {cartItem.length !==0 && (
        <>
        <hr /><br />
        <div className="row">
          <p className="col-2">Item Price</p>
          <div className="col-1 text-right">{itemPrice.toFixed(2)}</div>
        </div>
        <div className="row my-10">
          <p className="col-2">Tax Price</p>
          <div className="col-1 text-right">{tax.toFixed(2)}</div>
        </div>
        <div className="row">
          <p className="col-2">Shipping Price</p>
          <div className="col-1 text-right">{shippingPrice.toFixed(2)}</div>
        </div>
        <div className="row my-10">
          <p className="col-2"> <strong>Total Price</strong> </p>
          <div className="col-1 text-right"><strong>{totalPrice.toFixed(2)}</strong></div>
        </div>
        </>
      )}
    </aside>
  );
};

export default Basket;
