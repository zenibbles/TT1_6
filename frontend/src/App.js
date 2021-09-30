import {BrowserRouter as Router, Route, Switch, Redirect, useHistory} from 'react-router-dom';
import React, {Component} from 'react';
import './App.css';
import Login from'./components/Login'
import ProductDetails from'./components/ProductDetails'
import PrivateRoute from "./components/PrivateRoute";
import Cart from "./components/Cart";


function App() {
  return (
      <Router>
      <div className={"wrapper"}>
        <Switch>
          <Route path={"/login"} component={Login}/>
          <Route path={"/"} component={Login}/>
        </Switch>

        <div className={"contentWrapper"}>
          <Switch>
            <PrivateRoute exact path={"/productdetails"} component={ProductDetails}/>
            <PrivateRoute exact path={"/cart"} component={Cart}/>
          </Switch>
        </div>


      </div>
      </Router>
  );
}

export default App;
