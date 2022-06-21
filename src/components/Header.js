import React from "react";

const Header = (props) => {
  const { countCartItem } = props;
  return (
    <header className="row block center">
      <div>
        <a href="#/">
          <h1 className="white">Shopping Cart</h1>
        </a>
      </div>
      <div>
        <a href="#/cart" className="m-10 white">
          Cart{" "}
          {countCartItem ? (
            <button className="badge">{countCartItem}</button>
          ) : (
            ""
          )}
        </a>{" "}
        <a href="#/signin" className="m-10 white">
          Sign In
        </a>
      </div>
    </header>
  );
};

export default Header;
