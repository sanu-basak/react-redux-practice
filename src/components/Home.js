import React from "react";

function Home(props) {
  console.log("Home", props);
  return (
    <div>
      <h1>Home Component</h1>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img src="https://dealntechcdn.b-cdn.net/wp-content/uploads/2021/06/Apple-iPhone-14-Pro-Max-represents.jpg" />
        </div>
        <div className="text-wrapper item">
          <span>iPhone 14</span>
          <br />
          <span>Price: $1000.00</span>
        </div>
        <div className="btn-wrapper item">
          <button
            onClick={() =>
              props.addToCartHandler({
                price: 1000,
                name: "iPhone 14 Pro",
              })
            }
          >
            Add To Cart
          </button>

          <button className="remove_to_cart"
            onClick={() =>
              props.removeToCartHandler()
            }
          >
            Remove To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
