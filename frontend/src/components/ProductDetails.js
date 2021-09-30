import React, {Component,useEffect, useState} from 'react';
import NavbarComponent from "./NavbarComponent";
import axios from 'axios';

export default function ProductDetails(){
    const [details, setDetails] = useState([]);
    let cate = [
        {
            "id": 1,
            "name": "Electronics",
            "description": "We have products ranging from computers & computer accessories to audio systems that will revolutionalize your leisure.",
            "image": "https://images.unsplash.com/photo-1498049794561-7780e7231661?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
        },
        {
            "id": 2,
            "name": "Jewelery",
            "description": "We are changing how you shop for fine gold and gems jewellery",
            "image": "https://images.unsplash.com/photo-1512163143273-bde0e3cc7407?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
        },
        {
            "id": 3,
            "name": "Men's clothing",
            "description": "Men's Apparel From Top Brands",
            "image": "https://images.unsplash.com/photo-1516257984-b1b4d707412e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
        },
        {
            "id": 4,
            "name": "Women's clothing",
            "description": "Women's Apparel From Top Brands",
            "image": "https://images.unsplash.com/photo-1551048632-24e444b48a3e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
        }
    ]

    useEffect(() =>{
        setDetails(cate)
        console.log(details)

        },[4]
    )


    const getDetails = async(event) =>{

        try{
            const response = await axios.post("categories")
            if(response.status == 200){
                setDetails(response.data)
                setDetails(cate)
            }
        }catch (error){

        }
    }

    const CateData= async(event) => {
        return details.map((detail,index) => {
            const{id,name,description,image} =detail;
            return(
                <tr key={index}>
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
            <tbody>
            {details.map((detail, idx) => (
                <tr key={idx}>
                    <th align="left">{detail.id}</th>
                    <th scope="left">{detail.name}</th>
                    <th scope="left">{detail.description}</th>
                    <th scope="left"><img src={detail.image} width='100' height="150"/></th>
                </tr>
            ))}
            </tbody>
        </>
    )
}