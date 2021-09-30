import React, {Component,useEffect, useState} from 'react';
import NavbarComponent from "./NavbarComponent";
import axios from 'axios';

export default function ProductDetails(){
    const [details, setDetails] = useState([]);

    const getDetails = async(event) =>{
        event.preventDefault()
        try{
            const response = await axios.post("categories")
            if(response.status == 200){
                setDetails(response.data)
            }
        }catch (error){
            alert(error.message);
        }
    }

    const CateData= () => {
        return details.map((detail,index) => {
            const{id,name,description,image} =detail;
            return(
                <tr key={{id}}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{description}</td>
                    <td>{image}</td>
                </tr>
            )
        })
    }
    return(
        <>
        <NavbarComponent/>
        <h1>Product Details Page</h1>
        </>
    )
}