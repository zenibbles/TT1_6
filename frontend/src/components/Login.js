import React, {Component, useEffect, useState } from 'react';
import {useHistory} from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default function Login(){
    const [username, setUser] = useState("Enter Your Username Here");
    const [password, setPassword] = useState("");
    const [status,setStatus] = useState(localStorage.getItem('accessToken'));
    let history = useHistory();


    const handleSubmit = async(event) =>{
        event.preventDefault()
        localStorage.setItem('accessToken',true);
        history.push('productdetails');
        /*
        try{
            const response = await axios.post()
            if(response.status == 200){
                localStorage.setItem('accessToken',true);
                
                localStorage.setItem('first_name',response.first_name);
                localStorage.setItem('cust_id',response.id);

                history.push('productdetails');


            }
        }
        catch(error){
            alert(error.message);
        }*/
    }

    const updatePassword = (event) => {
        setPassword(event.target.value);
    }
    const updateUser = (event) => {
        setUser(event.target.value);
    }


    return(
    <div className={"Login"}>
        <h1>Login Page</h1>
        <Form onSubmit={handleSubmit}>
            <Form.Group size={"lg"}>
                <Form.Label>Username</Form.Label>
                <Form.Control
                    autoFocus type="text"
                    size="lg"
                    value={username}
                    onChange={updateUser}
                    required
                />
            </Form.Group>

            <Form.Group size="lg">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    autoFocus type="password"
                    value={password}
                    size="lg"
                    onChange={updatePassword}
                    required
                />
            </Form.Group>
            <Button block size="lg" type="submit">Login</Button>
        </Form>

    </div>
    )
}