import React, {Component} from 'react';
import NavbarComponent from "./NavbarComponent";

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
                <th style="font-colour:blue">Product</th>
                <th>Quantity</th>
                <td>Price</th>
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
        </html>



    )



}