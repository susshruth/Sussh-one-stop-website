import React,{useState} from 'react';
import {useForm} from "react-hook-form";
import './index.css'
import { Select, MenuItem } from "@material-ui/core";
import { Link } from 'react-router-dom';

import { CountryDropdown, RegionDropdown, CountryRegionData, selectCity  } from 'react-country-region-selector';

import * as ReactBootStrap from "react-bootstrap";

export default function Logintwo() {
  const { register, errors, handleSubmit } = useForm();
    const [myfirstname, setMyfirstname] = useState('');
    const [mylastname, setMylastname] = useState('');
    const [myage, setMyage] = useState('');
    const [myemail, setMyemail] = useState('');
    const [myphone, setMyphone] = useState('');
    const [myapt, setApt] = useState('');
    const [mystreet, setStreet] = useState('');
    const [myzipcode, setZipcode] = useState('');
    const [mycity, setCity] = useState('');
    const [mystate, setState] = useState('');
    const [country, setCountry] = useState('');

    const buttontext="<< login";

    const handleChange1 = e => {
      setMyfirstname(e.target.value);
    } ;
    const handleChange2 = e => {
      setMylastname(e.target.value);
    } ;
    const handleChange3 = e => {
      setMyage(e.target.value);
    } ;
    const handleChange4 = e => {
      setMyemail(e.target.value);
    } ;
    const handleChange5 = e => {
      setMyphone(e.target.value);
    } ;
    const handleChange6 = e => {
      setApt(e.target.value);
    } ;
    const handleChange7 = e => {
      setStreet(e.target.value);
    } ;
    const handleChange8 = e => {
      setZipcode(e.target.value);
    } ;
    const handleChange9 = e => {
      setCity(e.target.value);
    } ;
    const handleChange10 = e => {
      setState(e.target.value);
    } ;
    const selectCountry = val => {
      setCountry(val);
    } ;
      const handleSubmit1 = e => {       
        alert( " your name : "+ myfirstname + " " + mylastname +"   | your age : "+ myage + "   | your email : " + myemail + "   | your phone : " + myphone + "   | your address : " + myapt + ", " + mystreet + ", " + myzipcode + ", " + mycity + ", " + mystate + ", " + country);
  } ;
    return (
        <div>
        <div>
                    <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="primary"variant="dark">
    <ReactBootStrap.Navbar.Brand href=""><strong>Personal info</strong></ReactBootStrap.Navbar.Brand>
    <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  </ReactBootStrap.Navbar>
        </div>
        <form id="form3" onSubmit={handleSubmit(handleSubmit1)}><br/><br/><br/>
        <div id="main3"><br/><br/>
        {/* <h3> hi {myuserid} </h3> */}

        <label id="common"><strong>First name :</strong></label>
        <input id="Fir"name="first" placeholder="First name" value={myfirstname} onChange={handleChange1} ref={register({ required : "this is a required field" })}/><br/>
        {errors.first && errors.first.message}

        <label id="common"><strong>Last name :</strong></label>
        <input id="Las"name="last" placeholder="Last name" value={mylastname} onChange={handleChange2}></input><br/>


        <label id="common"><strong>Age :</strong></label>
        <input id="Age"name="age" type="number" placeholder="Age" value={myage} onChange={handleChange3} ref={register({ required : "this is a required field"})}></input><br/>


        <label id="common"><strong>Email :</strong></label>
        <input id="ema"name="email" placeholder="Email" value={myemail} onChange={handleChange4} ref={register({ required : "this is a required field",pattern: /^\S+@\S+$/i})}></input><br/>


        <label id="common"><strong>Phone :</strong></label>
        <input type="number"id="pho"name="phone" placeholder="Phone" value={myphone} onChange={handleChange5} ref={register({ maxLength: 6 ,required : "this is a required field" })}></input><br/><br/>

        <label id="common"><strong>Address :</strong></label>
        <input id="Apt"name="apartmentname" placeholder="Apartment" value={myapt} onChange={handleChange6} ref={register({required : "this is a required field" })}></input><br/>

        <input id="street"name="streetname" placeholder="Street" value={mystreet} onChange={handleChange7} ref={register({required : "this is a required field" })}></input><br/>

        <input id="zipcode"name="zipcode" placeholder="Zipcode" value={myzipcode} onChange={handleChange8} ref={register({required : "this is a required field" })}></input><br/><br/>

        <input id="city"name="cityname" placeholder="City" value={mycity} onChange={handleChange9} ref={register({required : "this is a required field" })}></input>

        <input id="state"name="statename" placeholder="State" value={mystate} onChange={handleChange10} ref={register({required : "this is a required field" })}></input><br/>
        {/* <Select 
            value={mycountry} 
            id="select"
            onChange={handleChange6}
            ref={register({required: true})}
            >
            <MenuItem value={"Country: "}>Country: </MenuItem>
            <MenuItem id="ind"value={"India"}>India</MenuItem>
            <MenuItem id="ca"value={"Canada"}>Canada</MenuItem>
            <MenuItem id="usa"value={"USA"}>USA</MenuItem>
        </Select> */}
        <CountryDropdown
          value={country}
          id="select"
        //   onChange={event => setQuery(event.target.value)}
          onChange={(e) => selectCountry(e)} /><br/>

        
        {/* <Link id="link1"to="/login"> previous page is login </Link><br/> */}
        {/* <Link to="/covid"></Link> */}

        <button id="submitform1"type="submit">submit</button>
        <button type="reset" id="reset">reset</button><br/><br/>
      <ReactBootStrap.Button id="link3" href="/login">{buttontext}</ReactBootStrap.Button><br/><br/>
        </div><br/><br/>
        </form>
        </div>
    )
}