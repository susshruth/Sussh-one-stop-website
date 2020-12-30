import React, { useEffect } from 'react';
import './css/car.css';
import Form from 'react-bootstrap/Form'

export default function Cars(){
    // useEffect(() => {
        
    // })
    return(
        <Form>
            <Form.Group controlId="formBasicRange">
                <Form.Label>Range</Form.Label>
                <Form.Control type="range" />
            </Form.Group>
            <br/>
            <select id="car" placeholder="car">
                <option style={{backgroundColor:"red"}}>select car</option>
                <option>Susshruth/Eagle</option>
            </select>
        </Form>
    )
}