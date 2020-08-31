import React from "react";
import "../Css/Home.css";
import Product from "./Product";
import Copyright from './Copyright';

function Home() {
  return (
    <div className="home">
      <div home__container>
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="banner"
        />

        <div className="home__row">
          <Product
            id="123"
            title="The lean startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={29.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
          />

          <Product
            id="89893333"
            title="Fitbit Charge 4 With Built-in GPS"
            price={80.50}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          />
        </div>

        {/* Second row with three products */}
        <div className="home__row">
          <Product
            id="67893426"
            title="Apple iPhone 11 Pro Max (64GB) - Midnight Green"
            price={1200}
            rating={5}
            image="https://m.media-amazon.com/images/I/61ers6OzvUL._AC_UY218_.jpg"
          />
          <Product
            id="73282018"
            title="Amazon Echo (3rd Gen) – Improved sound, powered by Dolby (Black)"
            price={49.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/7128HRanJgL._AC_UY218_.jpg"
          />
          <Product
            id="23281018"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={850}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="32949249"
            title="Samsung S19F350HNW 18.5-inch AH IPS LED Monitor (Black) (Not A TV)"
            price={250}
            rating={4}
            image="https://m.media-amazon.com/images/I/81JNAFOB3lL._AC_UY218_.jpg"
          />
        </div>
      </div>

      <Copyright />
    </div>
  );
}

export default Home;
