import React, {Component} from 'react';
import NavbarComponent from "./NavbarComponent";

export default function Cart(){

    return(
        <>
            
            <NavbarComponent/>
        <h1>Cart Page</h1>
        <table>
            <tr>
                <th style = {{ color: "blue" }}>Product</th>
                <th>Quantity</th>
                <td>Price</td>
            </tr>

            <tr>
                <td>Bag</td>
                <td>50</td>
                <td><button type="submit" value="Submit">Quantity</button></td>
            </tr>
        </table>
        <button type="submit" value="Submit">Checkout</button>

        
    <button type="button" onClick="click()">Click me</button>
    <p>Clicks: <a id="clicks">0</a></p>
        
        </>


    )



}