import React, {Component,useEffect, useState} from 'react';
import NavbarComponent from "./NavbarComponent";

export default function ProductDetails(){
    const [details, setDetails] = useState([]);

    return(
        <>
        <NavbarComponent/>
        <h1>Product Details Page</h1>
        </>
    )
}