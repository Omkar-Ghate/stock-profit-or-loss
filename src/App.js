import "./styles.css";
import { useState } from "react";

export default function App() {
  var [initialPrice, setInitialPrice] = useState("");
  var [quantity, setQuantity] = useState("");
  var [currentPrice, setCurrentPrice] = useState("");
  var [message, setMessage] = useState("Your result will appear here");

  function handleChange(event) {
    var item = event.target.name;
    if (item === "initialPrice") setInitialPrice(event.target.value);
    else if (item === "quantity") setQuantity(event.target.value);
    else if (item === "currentPrice") setCurrentPrice(event.target.value);
  }

  function handleClick(event) {
    event.preventDefault();
    var ans = (Number(currentPrice) - Number(initialPrice)) * Number(quantity);

    if (ans < 0)
      setMessage("Ooops! You have made a loss of " + Math.abs(ans) + " rupees");
    else if (ans > 0)
      setMessage("Wow! You have made a profit of " + ans + " rupees");
    else setMessage("No profit, no loss. Cheers!");
  }

  return (
    <div className="App">
      <div className="bg"></div>
      <div className="container">
        <div className="heading">
          <h1>Profit Or Loss On Your Stock? </h1>
        </div>
        <div className="main">
          <form action="" onSubmit={handleClick}>
            <label htmlFor="initialPrice">Initial Price</label>
            <input
              type="number"
              name="initialPrice"
              value={initialPrice}
              placeholder="0"
              onChange={handleChange}
              required
            />

            <label htmlFor="quantity">Quantity of Stocks</label>
            <input
              type="number"
              name="quantity"
              value={quantity}
              placeholder="0"
              onChange={handleChange}
              required
            />

            <label htmlFor="currentPrice">Current Price</label>
            <input
              type="number"
              name="currentPrice"
              value={currentPrice}
              placeholder="0"
              onChange={handleChange}
              required
            />

            <button type="submit" className="submitBtn">
              Check
            </button>
          </form>
        </div>

        <div className="output">{message}</div>
      </div>
    </div>
  );
}
