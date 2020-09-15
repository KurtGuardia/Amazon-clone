import React from "react";
import "../Css/Copyright.css";

export default function Copyright() {
  return (
    <div className="copyright">
      <p>
        This is a personal project made entirely by myself to practice and use
        my ReactJs and Firebase knowledge, to build a functional AMAZON CLONE.{" "}
        <br /><br />
        <ul>
          <li>
            Here you can actually create a real account that will be stored in
            the Firebase app for you to sign in again.{" "}
          </li>
          <li>
            You may add products to your basket, and by clicking on the basket
            icon you can see all you have selected with the sum of prices.{" "}
            
          </li>
          <li>
            {" "}
            Finnally this AMAZON CLONE also has the online paying integrated, as
            if it was a real e-commerce.{" "}
          </li>
        </ul>
        <br />
        This way I'm to prove my abilities to make similar apps like the
        almighty Amazon. The creation was done thanks to the lessons of{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.youtube.com/channel/UCqrILQNl5Ed9Dz6CGMyvMTQ"
        >
          Clever Programmer
        </a>{" "}
      </p>
      <span>
        Made by{" "}
        <strong>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/KurtGuardia"
          >
            Kurt Guardia
          </a>
        </strong>{" "}
        CEO of{" "}
        <a
          className="phi"
          target="_blank"
          rel="noreferrer"
          href="www.phi-desarrollo.com"
        >
          Phi
        </a>
      </span>
    </div>
  );
}
