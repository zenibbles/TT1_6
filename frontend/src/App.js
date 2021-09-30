import {BrowserRouter as Router, Route, Switch, Redirect, useHistory} from 'react-router-dom';
import React, {Component} from 'react';
import './App.css';
import Login from'./components/Login'
import ProductDetails from'./components/ProductDetails'
import PrivateRoute from "./components/PrivateRoute";
import Cart from "./components/Cart";
import NavbarComponent from "./components/NavbarComponent";

function App() {
  return (
      <Router>
          <NavbarComponent/>
      <div className={"wrapper"}>
          <Route path={"/login"} component={Login}/>

      <Switch>
        <PrivateRoute exact path={"/productdetails"} component={ProductDetails}/>
        <PrivateRoute exact path={"/cart"} component={Cart}/>
      </Switch>


      </div>
      </Router>
  );
}

export default App;
