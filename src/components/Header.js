import React from "react";

const Header = (props) => {
    console.log('header',props.data);
  return (
    <div>
      <div className="add-to-cart">
        <span className="cart-count">{props.data.length}</span>
        <img src="https://static.vecteezy.com/system/resources/previews/000/496/007/original/vector-add-to-cart-icon-design.jpg" />
      </div>
    </div>
  );
};
export default Header;
