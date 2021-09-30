import React, {Component} from 'react';
import NavbarComponent from "./NavbarComponent";
/*
import { useState } from 'react';


function App() {
    const [counter, setCounter] = useState(1);
    const incrementCounter = () => setCounter(counter + 1);
    let decrementCounter = () => setCounter(counter - 1);
    if(counter<=0) {
      decrementCounter = () => setCounter(1);
    }
    return (
      <div> 
        <ButtonIncrement onClickFunc={incrementCounter}/>
        <Display message={counter}/> 
        <ButtonDecrement onClickFunc={decrementCounter}/>
      </div>
    );
  }

  export default App;

function ButtonIncrement(props) {
  
    return (
      <button style={{ marginLeft: '.5rem'}} onClick={props.onClickFunc}>
      +1
      </button>
    )
 }
function ButtonDecrement(props) {
  
    return (
      <button style={{ marginLeft: '.5rem'}} onClick={props.onClickFunc}>
      -1
      </button>
    )
  }

function Display(props) {
  return (
    <label style={{ marginLeft: '.5rem'}} >{props.message}</label>
  )
}*/

    const mystyle = {
        margin:"",
        padding:"100px",
        fontFamily: "Arial"
    }

export default function Cart(){

    return(
        <html>
            <head>
            </head>
            
            <NavbarComponent/>
        <h1 style={{textAlign: "center"}}>Cart Page</h1>
        <table style={{tableAlign: "center"}}>
            <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
            </tr>

            <tr>
                <td>Fjallraven</td>
                <td><button type="submit" value="Submit">+</button>    <button type="submit" value="Submit">-</button>    50</td>
                <td>109.95</td>
            </tr>
        </table>
        <button type="submit" value="Submit">Checkout</button>

        </html>



    )
}

