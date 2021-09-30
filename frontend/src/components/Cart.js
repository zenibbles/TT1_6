import React, {Component} from 'react';
import NavbarComponent from "./NavbarComponent";
import { useState } from 'react';

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
}


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

export default function Cart(){

    return(
        <html>
            <head>
                <style>
                    
                </style>
            </head>
            
            <NavbarComponent/>
        <h1>Cart Page</h1>
        <table>
            <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
            </tr>

            <tr>
                <td>Bag</td>
                <td>50</td>
                <td><button type="submit" value="Submit">+</button>    <button type="submit" value="Submit">-</button></td>
            </tr>
        </table>
        <button type="submit" value="Submit">Checkout</button>

        </html>



    )
}

