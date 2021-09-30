import {BrowserRouter as Router, Route, Switch, Redirect, useHistory} from 'react-router-dom';
import React, {Component} from 'react';
import Login from'./Login'
import ProductDetails from'./ProductDetails'
import PrivateRoute from "./PrivateRoute";
import Cart from "./Cart";

import {Navbar, Nav, Container} from 'react-bootstrap';

function NavbarComponent() {
    return (
   
     <Navbar bg="light" variant="light">
     <Container>
     {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
     <Nav className="mr-auto">
       <Nav.Link href="/ProductDetails">Products Detail</Nav.Link>
       <Nav.Link href="/Cart">Cart</Nav.Link>
       {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
     </Nav>
     </Container>
   </Navbar>
    )
  }
  
  export default NavbarComponent