import React from "react";
import CurrencyFormat from "react-currency-format";
import "../Css/Subtotal.css";
import { useStateValue } from "../StateProvider";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  const pricesArray = basket.map((item) => {
    return item.price;
  });
  const totalPrice = pricesArray.reduce((a, b) => {
    return a + b;
    }, 0);

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{totalPrice}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkoutbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"€"}
      />

      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
