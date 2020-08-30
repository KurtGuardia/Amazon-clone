import React, { useEffect } from "react";
import "./Css/App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Checkout from "./Components/Checkout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Components/Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    //This will only run once when the app component loads...
    auth.onAuthStateChanged((authUser) => {
      console.log("The user is >>", authUser);

      if (authUser) {
        // the user just logged in || the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the usr is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
