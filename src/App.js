import "./styles.css";
import { useState } from "react";
import profit from "./profit.png";
import loss from "./loss.png";
import neutral from "./neutral.png";
import linkedIn from "./linkedIn.png";
import twitter from "./twitter.png";
import github from "./github.png";
import briefcase from "./briefcase.png";

export default function App() {
  var [initialPrice, setInitialPrice] = useState("");
  var [quantity, setQuantity] = useState("");
  var [currentPrice, setCurrentPrice] = useState("");
  var [message, setMessage] = useState("Your result will appear here");
  var [imgDisplay, setImgDisplay] = useState("none");
  var [emojiToShow, setEmojiToShow] = useState("");
  var [bgColor, setBgColor] = useState("rgba(0, 0, 0, 0.35)");

  function handleChange(event) {
    var item = event.target.name;
    if (item === "initialPrice") setInitialPrice(event.target.value);
    else if (item === "quantity") setQuantity(event.target.value);
    else if (item === "currentPrice") setCurrentPrice(event.target.value);
  }
  var result;
  function handleClick(event) {
    event.preventDefault();
    result = (Number(currentPrice) - Number(initialPrice)) * Number(quantity);
    result = Math.round(result * 1000) / 1000; //Rounding off
    var resultPercentage = (result / Number(initialPrice)) * 100;
    resultPercentage = Math.round(resultPercentage * 1000) / 1000; //Rounding off
    if (result < 0) {
      setMessage(
        "Ooops! You have made a loss of ₹" +
          Math.abs(result) +
          " at " +
          resultPercentage +
          "%"
      );
      setEmojiToShow(loss); // display the loss emoji

      if (Number(resultPercentage) <= -50) {
        // if loss is more than 50%, set bg color red
        setBgColor("rgb(255,0,0,0.4");
      } else {
        // set normal bg color
        setBgColor("rgb(0,0,0,0.4)");
      }
    } else if (result > 0) {
      setMessage(
        "Wow! You have made a profit of ₹" + " at " + resultPercentage + "%"
      );
      setEmojiToShow(profit);
      if (Number(resultPercentage) >= 50) {
        // if profit is more than 50% set bg color blue
        setBgColor("rgb(0,0,255,0.4)");
      } else {
        // set normal bg color
        setBgColor("rgb(0,0,0,0.4)");
      }
    } else {
      setMessage("No profit, no loss. Cheers!");
      setEmojiToShow(neutral);
      setBgColor("rgb(0,0,0,0.4)"); // set normal bg color
    }
    initialPrice === "" ? setImgDisplay("none") : setImgDisplay("block"); // if nothing is entered by the user, don't show the emoji
  }

  return (
    <div className="App">
      <div className="bg"></div>
      <div className="container" style={{ backgroundColor: `${bgColor}` }}>
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

          <div className="emojiWrapper" style={{ display: `${imgDisplay}` }}>
            <img src={emojiToShow} alt="image" />
          </div>
        </div>

        <div className="output">{message}</div>
        <footer>
          <div className="creator">
            Made with <strong>&lt;/&gt;</strong> by Omkar Ghate
          </div>
          <ul>
            <li className="footerLink">
              <a href="https://github.com/Omkar-Ghate" target="blank">
                <img className="socialIcon" src={github}></img>
              </a>
            </li>
            <li className="footerLink">
              <a href="https://twitter.com/OmkarGhate9" target="blank">
                <img className="socialIcon" src={twitter}></img>
              </a>
            </li>
            <li className="footerLink">
              <a href="https://www.linkedin.com/in/omkarghate/" target="blank">
                <img className="socialIcon" src={linkedIn}></img>
              </a>
            </li>
            <li className="footerLink">
              <a href="https://omkarghate.netlify.app/" target="blank">
                <img className="socialIcon" src={briefcase}></img>
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
}
